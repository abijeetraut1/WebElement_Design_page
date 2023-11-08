import React, {useEffect, useState} from 'react';
// import { resizeFunction } from './Functions/Resize';
import { DeleteNodes } from './Functions/DeleteNode';
import { nanoid } from '@reduxjs/toolkit';
import { signal } from "@preact/signals";
import { cloneNode } from './Functions/CloneNode';
import { ShowAnchor } from './Functions/ShowAnchor';

const clickItem = signal(null);
export default function DrawAWebSite() {
    const [isDrawing, setIsDrawing] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    // const [clickItem, setClickItem] = useState(null);
 
    const [store, setStore] = useState([]);

    const [ctx, setCtx] = useState(); 
    const [canvas, setCanvas] = useState();

    useEffect(() => {
        setCanvas(document.getElementById("canvas"));
        setCtx(document.getElementById("canvas").getContext("2d"));
    }, [canvas, ctx]);

    function setPosition(e) {
        if(canvas){
            canvas.style.zIndex = 1;
        }
        setIsDrawing(true);
        setX(e.clientX - canvas.getBoundingClientRect().left);
        setY(e.clientY - canvas.getBoundingClientRect().top);
    }

    function stopDrawing() {
        // constantly change the button position
        canvas.style.zIndex = -1;
        try {
            const divs = document.querySelectorAll("div");
            divs.forEach((div) => {
                div.style.zIndex = 1;
            })
        } catch (error) {
            console.log(error);
        }
        setIsDrawing(false);

        let storeTemp = { x, y, height, width };
        setStore([...store, storeTemp]);

        setX(0);
        setY(0);
        setHeight(0);
        setWidth(0);

        if(!(storeTemp.height > 0) || !(storeTemp.height > 0)) return;

        const parentElement = document.querySelector("#drawSection"); 
        // create div based on the drawn design
        let div = document.createElement("div");
        div.classList.add("drawnElement");
        div.id = nanoid();
        div.style.position = "absolute";
        
        div.style.top = storeTemp.y + "px";
        div.style.left = storeTemp.x + "px";
        div.style.height = storeTemp.height - storeTemp.y + "px";
        div.style.width = storeTemp.width  - storeTemp.x + "px";
        
        div.style.backgroundColor = "orange";
        
        parentElement.appendChild(div);
    }

    function startDrawing(e) {
        if (!isDrawing) return;
        // setClickItem(null);

        setWidth(e.clientX - canvas.getBoundingClientRect().left);
        setHeight(e.clientY - canvas.getBoundingClientRect().top);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(x, y, width - x , height - y);
        ctx.stroke();
    }

    
    function clickedItemFunc() {
        const divs = document.querySelectorAll("div");

        divs.forEach(element => {
            console.log(element);
            element.addEventListener("click", () => {
                if(!element.classList.contains("drawnElement")) return;
                clickItem.value = element;
                move(element);
                cloneNode(element)
                ShowAnchor(element, canvas)
                DeleteNodes(clickItem.value.id);
            })
            element.addEventListener("mousemove", () => {
                if(!element.classList.contains("drawnElement")) return;
                ShowAnchor(element, canvas)
            })
            
        });
    }


    function move(element) {
        let isDragging = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        element.addEventListener("mousedown", (e) => {
            isDragging = true;
            const initialLeft = parseFloat(getComputedStyle(element).left);
            const initialTop = parseFloat(getComputedStyle(element).top);
            const offsetX = e.clientX - initialLeft;
            const offsetY = e.clientY - initialTop;

            document.addEventListener("mousemove", (e) => {
                if (isDragging) {
                    const newX = e.clientX - offsetX;
                    const newY = e.clientY - offsetY;
                    element.style.left = newX + "px";
                    element.style.top = newY + "px";
                }
            });

            document.addEventListener("mouseup", () => {
                isDragging = false;
            });
        });
    }



  return (
    <section>
        <canvas id='canvas' height="1080" width="1920" className=" border-4 border-black"
            onMouseDown={el => setPosition(el)}
            onMouseUp={() => stopDrawing()}
            onMouseMove={(el) => startDrawing(el)}
            onClick={() => {
                clickedItemFunc();
            }}
        ></canvas>

        <section id='drawSection'>
            
        </section>
        
    </section>
  )
}

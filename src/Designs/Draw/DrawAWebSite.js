import React, {useEffect, useState} from 'react';
import { DeleteNodes } from './Functions/DeleteNode';
import { nanoid } from '@reduxjs/toolkit';
import { cloneNode } from './Functions/CloneNode';
import {  createAnchor, shiftAnchors } from './Functions/ShowAnchor';
import { move } from './Functions/MoveNode';


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
        const id = nanoid(); 
        const parentElement = document.querySelector("#drawSection");
        const wrapper = document.createElement("wrapper");
        wrapper.id = "wrapper-" + id;
        parentElement.appendChild(wrapper); 
        // create div based on the drawn design
        let div = document.createElement("div");
        div.classList.add("drawnElement");
        div.id = id;
        div.style.position = "absolute";
        
        div.style.top = storeTemp.y + "px";
        div.style.left = storeTemp.x + "px";
        div.style.height = storeTemp.height - storeTemp.y + "px";
        div.style.width = storeTemp.width  - storeTemp.x + "px";
        
        div.style.backgroundColor = "orange";
        div.onclick = (element) => {
            move(element.target);
            cloneNode(element);
            shiftAnchors(div)

            // DeleteNodes(element);
            document.addEventListener("keydown", event => {
                if (event.key === "Delete" || event.keyCode === 46) {
                    try {
                        console.log(element.target)
                        element.target.parentElement.remove(); // Delete the specified element
                    } catch (err) {
                        if (err.name === "TypeError") return;
                    }
                }
            });
        }
        wrapper.appendChild(div);
        createAnchor(div, wrapper);
        shiftAnchors(div)
    }

    function startDrawing(e) {
        if (!isDrawing) return;

        setWidth(e.clientX - canvas.getBoundingClientRect().left);
        setHeight(e.clientY - canvas.getBoundingClientRect().top);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(x, y, width - x , height - y);
        ctx.stroke();
    }

  return (
    <section>
        <section id="drawing-section">
            <canvas id='canvas' height="1080" width="1920" className=" border-4 border-black"
                onMouseDown={el => setPosition(el)}
                onMouseUp={() => stopDrawing()}
                onMouseMove={(el) => startDrawing(el)}
            ></canvas>
        </section>

        <section id='drawSection'>
            
        </section>
        
    </section>
  )
}

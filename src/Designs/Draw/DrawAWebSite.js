import React, {useEffect, useState} from 'react'
import { FiSidebar } from "react-icons/fi";
import { Link } from 'react-router-dom';
import testProfile from "../test-image/test-profile.jpeg"

export default function DrawAWebSite() {
    const [open, setOpen] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);
    const [create, setCreate] = useState(false);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
 
    const [store, setStore] = useState([]);

    const [ctx, setCtx] = useState(); 
    const [canvas, setCanvas] = useState();

    useEffect(() => {
        setCanvas(document.getElementById("canvas"));
        setCtx(document.getElementById("canvas").getContext("2d"));
    }, [canvas, ctx]);

    function setPosition(e) {
        canvas.style.zIndex = 1;
        setIsDrawing(true);
        setX(e.clientX - canvas.getBoundingClientRect().left);
        setY(e.clientY - canvas.getBoundingClientRect().top);
    }

    function stopDrawing() {
        // constantly change the button position
        canvas.style.zIndex = -1;
        setIsDrawing(false);

        let storeTemp = { x, y, height, width };
        setStore([...store, storeTemp]);

        setX(0);
        setY(0);
        setHeight(0);
        setWidth(0);

        // create div based on the drawn design
        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = storeTemp.y + "px";
        div.style.left = storeTemp.x + "px";
        div.style.height = storeTemp.height - storeTemp.y + "px";
        div.style.width = storeTemp.width  - storeTemp.x + "px";
        div.style.backgroundColor = "orange";
        
        document.body.appendChild(div);
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

    
    function clickedItem() {
        const divs = document.querySelectorAll("div");

        divs.forEach(element => {
            element.addEventListener("click", () => {
                move(element)
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

    function resize(element) {
        
    }

  return (
    <section>
        <aside className={`fixed top-0 left-0 ${open ? "w-1/5 bg-zinc-900" : "w-0 bg-transparent" } duration-300 l-0 h-screen px-3 pt-4 shadow-zinc-950 z-1 backdrop-opacity-100 `} >
            <div className="sm:col-span-3 inset-0 backdrop-blur-md">
                <div className='flex items-center justify-between space-x-2'>
                    <div className="flex items-center justify-between space-x-2">
                        <button
                            className='border:solid border border-white bg-zinc-900 p-2 rounded-md'
                            onClick={() => setOpen(open ? false : true)}
                        >
                            {<FiSidebar className= 'text-white text-xl ' />}
                        </button>
                        {open && 
                            <div className="block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                                Test  Website
                            </div>
                        } 
                    </div>
                    {open && 
                        <div className="flex space-x-1">
                            <div>
                                <button
                                    className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                                >
                                    Save
                                </button>
                            </div>
                            <Link to="/export">
                                <button
                                    className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                                >
                                    Export
                                </button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
            
            {open && <section className="py-3 fiexed bottom-0">
                <div className="flex items-center space-x-2 justify-between">
                    <div className="flex items-center space-x-3">
                        <div>
                            <button>
                                <img src={testProfile} className='outline-white h-10 w-10 rounded-full outline' alt="cannot display profile" />
                            </button>
                        </div>
                        <div>
                            <span className="text-white cursor-pointer">Abijeet Raut</span>
                        </div>
                    </div>
                </div>
            </section>} 
        </aside>

        <canvas id='canvas' height="1080" width="1920" className=" border-4 border-black"
            onMouseDown={el => setPosition(el)}
            onMouseUp={() => stopDrawing()}
            onMouseMove={(el) => startDrawing(el)}
            onClick={() => clickedItem()}
        ></canvas>
        
    </section>
  )
}

import { nanoid } from "@reduxjs/toolkit";
export function cloneNode(element) {
    const drawSection = document.getElementById("drawSection");
    document.addEventListener("keypress", event => {
        console.log(event.key);
        if (event.key === "d" || event.key === "D" ) {
            let duplicate = element.cloneNode(true);
            duplicate.id = nanoid();
            duplicate.style.backgroundColor = "pink";
            duplicate.style.top = duplicate.style.top.replace("px", "") * 1 + duplicate.style.height.replace("px", "") * 1 + "px";
            drawSection.appendChild(duplicate)
        }
    })
}
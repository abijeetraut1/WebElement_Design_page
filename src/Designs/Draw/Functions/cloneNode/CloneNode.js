import { nanoid } from "@reduxjs/toolkit";
export function cloneNode(element) {
    const drawSection = document.getElementById("drawSection");
    document.addEventListener("keypress", event => {
        console.log(event.key);
        if (event.key === "d" || event.key === "D" ) {
            let duplicate = element.cloneNode(true);
            duplicate.id = nanoid();
            duplicate.style.backgroundColor = "pink";
            duplicate.style.top = parseInt(duplicate.style.top) + parseInt(duplicate.style.height) + "px";
            drawSection.appendChild(duplicate)
        }
    })
}
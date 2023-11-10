import {resize} from "./ResizeNode";

export function createAnchor(element, wrapper) {
    const resizer = document.createElement("resizer");
    wrapper.appendChild(resizer);
    // Extracting the height and width from the click item
    let top = element.style.top.replace("px", " ") * 1;
    let left = element.style.left.replace("px", " ") * 1;
    let height = element.style.height.replace("px", " ") * 1;
    let width = element.style.width.replace("px", " ") * 1;

    for (let i = 0; i < 4; i++) {
        const button = document.createElement("buttons");
        button.id = `button-${element.id}`
        button.setAttribute("drawn-attribute", element.id);
        button.classList.add("absolute", "bg-slate-800", "cursor-n-resize", "z-10");

        if (i === 0) {
            button.setAttribute("data-attribute", "top-left");
            button.style.top = top + "px";
            button.style.left = left + "px";
        } else
        if (i === 1) {
            button.setAttribute("data-attribute", "top-right");
            button.style.top = top + "px";
            button.style.left = left + width - 8 + "px";
        } else
        if (i === 2) {
            button.setAttribute("data-attribute", "bottom-right");
            button.style.top = top + height - 8 + "px";
            button.style.left = left + width - 8 + "px";
        } else
        if (i === 3) {
            button.setAttribute("data-attribute", "bottom-left");
            button.style.top = top + height - 8 + "px";
            button.style.left = left + "px";
        }
        button.onmouseenter = event => resize(event, element);
        resizer.appendChild(button);
    }
}

export function moveAnchor(element) {
    if (!element) return;
    const height = element.style.height.replace("px", "") * 1;
    const width = element.style.width.replace("px", "") * 1;
    let top = element.style.top.replace("px", " ") * 1;
    let left = element.style.left.replace("px", " ") * 1;

    const buttons = document.querySelectorAll(`#button-${element.id}`);
    if (!buttons) return;

    buttons.forEach(button => {
        if (button.getAttribute("data-attribute") === "top-left") {
            button.style.top = top + "px";
            button.style.left = left + "px";
        } else
        if (button.getAttribute("data-attribute") === "top-right") {
            button.style.top = top + "px";
            button.style.left = left + width - 8 + "px";
        } else
        if (button.getAttribute("data-attribute") === "bottom-right") {
            button.style.top = top + height - 8 + "px";
            button.style.left = left + width - 8 + "px";
        } else
        if (button.getAttribute("data-attribute") === "bottom-left") {
            button.style.top = top + height - 8 + "px";
            button.style.left = left + "px";
        }
    });
}

export function ShowAnchors(element){
    if(!element) return;
    console.log(element)
    const buttons = document.querySelectorAll('#button-' + element.id);
    buttons.forEach(button => {
        button.classList.add("w-2");
        button.classList.add("h-2");
    })
}
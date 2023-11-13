import {
    resize
} from "../ResizeNode/ResizeNode";

export function createAnchor(element, wrapper) {
    const resizer = document.createElement("resizer");
    resizer.classList.add("resize-container");
    resizer.id = "resize-" + element.id;
    wrapper.appendChild(resizer);

    // Extracting the height and width from the click item
    let top = parseInt(element.style.top);
    let left = parseInt(element.style.left);
    let height = parseInt(element.style.height);
    let width = parseInt(element.style.width);

    for (let i = 0; i < 8; i++) {
        const button = document.createElement("buttons");
        button.id = `button-${element.id}`
        button.setAttribute("drawn-attribute", element.id);
        button.classList.add("absolute", "bg-slate-800", "cursor-n-resize", "z-10", "h-2", "w-2");

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
        } else
        if (i === 4) {
            // n-resize
            button.setAttribute("data-attribute", "top");
            button.classList.remove("h-2", "w-2");
            button.classList.add("h-0.5", "w-0.5");
            button.style.top = top + "px";
            button.style.left = left + "px";
            button.style.width = width + "px";
        } else
        if (i === 5) {
            // e-resize
            button.setAttribute("data-attribute", "left");
            button.classList.remove("h-2", "w-2");
            button.classList.add("h-0.5", "w-0.5");
            button.style.top = top + "px";
            button.style.left = left + "px";
            button.style.height = height + "px"
        } else
        if (i === 6) {
            // e-resize
            button.setAttribute("data-attribute", "right");
            button.classList.remove("h-2", "w-2");
            button.classList.add("h-0.5", "w-0.5");
            button.style.top = top + "px";
            button.style.left = width + left + "px";
            button.style.height = height + "px";
        } else
        if (i === 7) {
            // n-resize
            button.setAttribute("data-attribute", "bottom");
            button.classList.remove("h-2", "w-2");
            button.classList.add("h-0.5", "w-0.5");
            button.style.top = top + height + "px";
            button.style.left = left + "px";
            button.style.width = width + "px";
        }

        // resize the clicked element
        button.onmouseenter = event => resize(event, element);
        resizer.appendChild(button);
    }
}

export function moveAnchor(element) {
    if (!element) return;
    const height = parseInt(element.style.height)
    const width = parseInt(element.style.width)
    let top = parseInt(element.style.top)
    let left = parseInt(element.style.left)

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
        } else
        if (button.getAttribute("data-attribute") === "top") {
            button.style.top = top + "px";
            button.style.left = left + "px";
        } else
        if (button.getAttribute("data-attribute") === "right") {
            button.style.top = top + "px";
            button.style.left = left + width + "px";
        } else
        if (button.getAttribute("data-attribute") === "bottom") {
            button.style.top = top + height + "px";
            button.style.left = left + "px";
        } else
        if (button.getAttribute("data-attribute") === "left") {
            button.style.top = top + "px";
            button.style.left = left + "px";
        }
    });
}

export function shiftAnchors(element) {
    if (!element) return;
    const resizers = document.querySelectorAll(".resize-container");

    resizers.forEach(resizer => {
        resizer.classList.remove("block");
        resizer.classList.add("hidden");
    })
    const clickElement = document.getElementById("resize-" + element.id);
    clickElement.classList.remove("hidden");
    clickElement.classList.add("block");
}

export function setActive(element) {
    if (!element) return;
    const wrapper = document.querySelector("#wrapper-"+ element.id);

    if(wrapper.classList.contains("active"))
        wrapper.classList.remove("active")
    else
        wrapper.classList.contains("active")

}   
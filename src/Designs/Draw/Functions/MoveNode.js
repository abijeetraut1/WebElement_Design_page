import { moveAnchor } from "./ShowAnchor";

export function move(element) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ShowAnchors(element);
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
                moveAnchor(element, e);
            }
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
        });
    });
}

function ShowAnchors(element){
    if(!element) return;
    const buttons = document.querySelectorAll('#button-' + element.id);
    buttons.forEach(button => {
        button.classList.toggle("w-2");
        button.classList.toggle("h-2");
    })
}

function HideAnchors(element) {
    
}
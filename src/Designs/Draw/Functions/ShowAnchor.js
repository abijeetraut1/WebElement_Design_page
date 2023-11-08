export function ShowAnchor(element) {
    if (!element) return;
    let top = element.style.top.replace("px", " ") * 1;
    let left = element.style.left.replace("px", " ") * 1;
    let height = element.style.height.replace("px", " ") * 1;
    let width = element.style.width.replace("px", " ") * 1;

    // absolute bg-slate-800 h-2 w-2 cursor-n-resize
    for (let i = 0; i < 4; i++) {
        let button = document.createElement("button");
        button.classList.add("absolute", "bg-slate-800", "w-2", "h-2", "cursor-n-resize", "z-10");

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
        document.body.appendChild(button);
    }
}
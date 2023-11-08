export function ShowAnchor(element) {
    if (!element) return;
    let isButtonRendered = false;
    let id = "ResizeButtons"

    // Extracting the height and width from the click item
    let top = element.style.top.replace("px", " ") * 1;
    let left = element.style.left.replace("px", " ") * 1;
    let height = element.style.height.replace("px", " ") * 1;
    let width = element.style.width.replace("px", " ") * 1;

    let buttons = document.querySelectorAll(`#${id}`);
    if(buttons[0] !== (null || undefined) ){
        isButtonRendered = true;
        buttons.forEach((button, i) => {
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

    // return is there is buttons
    if(isButtonRendered) return;

    // setting-up the height and width on the click position
    for (let i = 0; i < 4; i++) {
        let button = document.createElement("button");
        button.classList.add("absolute", "bg-slate-800", "w-2", "h-2", "cursor-n-resize", "z-10");
        button.id = id;

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
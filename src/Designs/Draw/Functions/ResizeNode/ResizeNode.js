export function resize(element, node) {
    let isResizeBool = false;
    const buttons = document.querySelectorAll("#" + element.target.id);
    const newnode = document.getElementById(node.id);
    if (element.target.getAttribute("data-attribute") === "top-left") {
        element.target.addEventListener("mousedown", () => {
            isResizeBool = true;
        })
        document.addEventListener("mousemove", (el) => {
            if (!isResizeBool) return;

            buttons[0].style.left = el.clientX + "px";
            buttons[0].style.top = el.clientY + "px";
            buttons[1].style.top = el.clientY + "px";
            buttons[3].style.left = el.clientX + "px";

            newnode.style.top = el.clientY + "px";
            newnode.style.left = el.clientX + "px";

            newnode.style.width = parseInt(buttons[1].style.left) - parseInt(buttons[0].style.left) + "px";
            newnode.style.height = parseInt(buttons[3].style.top) - parseInt(buttons[0].style.top) + "px";
        })
        document.addEventListener("mouseup", () => {
            isResizeBool = false;
        })
    } else if (element.target.getAttribute("data-attribute") === "top-right") {
        element.target.addEventListener("mousedown", () => {
            isResizeBool = true;
        })

        document.addEventListener("mousemove", (el) => {
            if (isResizeBool === false) return;
                        
            buttons[1].style.top = el.clientY + "px";
            buttons[1].style.left = el.clientX + "px";
            buttons[0].style.top = el.clientY + "px";
            buttons[2].style.left = el.clientX + "px";

            newnode.style.top = el.clientY + "px";

            newnode.style.width = parseInt(buttons[1].style.left) - parseInt(buttons[0].style.left) + "px";
            newnode.style.height = parseInt(buttons[3].style.top) - parseInt(buttons[0].style.top) + "px";
        })
        document.addEventListener("mouseup", () => {
            isResizeBool = false;
        })
    } else if (element.target.getAttribute("data-attribute") === "bottom-right") {
        element.target.addEventListener("mousedown", () => {
            isResizeBool = true;
        })
        document.addEventListener("mousemove", (el) => {
            if (isResizeBool === false) return;
            buttons[2].style.top = el.clientY + "px";
            buttons[2].style.left = el.clientX + "px";
            buttons[3].style.top = el.clientY + "px";
            buttons[1].style.left = el.clientX + "px";

            newnode.style.width = parseInt(buttons[1].style.left) - parseInt(buttons[0].style.left) + "px";
            newnode.style.height = parseInt(buttons[3].style.top) - parseInt(buttons[0].style.top) + "px";
        })
        document.addEventListener("mouseup", () => {
            isResizeBool = false;
        })
    } else if (element.target.getAttribute("data-attribute") === "bottom-left") {
        element.target.addEventListener("mousedown", () => {
            isResizeBool = true;
        })
        document.addEventListener("mousemove", (el) => {
            if (isResizeBool === false) return;

            buttons[3].style.top = el.clientY + "px";
            buttons[3].style.left = el.clientX + "px";
            buttons[2].style.top = el.clientY + "px";
            buttons[0].style.left = el.clientX + "px";

            newnode.style.left = el.clientX + "px";

            newnode.style.width = parseInt(buttons[1].style.left) - parseInt(buttons[0].style.left) + "px";
            newnode.style.height = parseInt(buttons[3].style.top) - parseInt(buttons[0].style.top) + "px";
        })
        document.addEventListener("mouseup", () => {
            isResizeBool = false;
        })
    }
}
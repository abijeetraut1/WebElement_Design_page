export function resize(element, node) {
    let isResizeBool = false;
    const buttons = document.querySelectorAll("#" + element.target.id);

    if (element.target.getAttribute("data-attribute") === "top-left") {
        element.target.addEventListener("mousedown", () => {
            isResizeBool = true;
        })
        document.addEventListener("mousemove", (el) => {
            if (isResizeBool === false) return;

            buttons[0].style.left = el.clientX + "px";
            buttons[0].style.top = el.clientY + "px";
            buttons[1].style.top = el.clientY + "px";
            buttons[3].style.left = el.clientX + "px";

            node.style.top = el.clientY + "px";
            node.style.left = el.clientX + "px";

            node.style.width = ((buttons[1].style.left.replace("px", "") * 1) - (buttons[0].style.left.replace("px", "") * 1)) + "px";
            node.style.height = ((buttons[3].style.top.replace("px", "") * 1) - (buttons[0].style.top.replace("px", "") * 1)) + "px";
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

            node.style.top = el.clientY + "px";

            node.style.width = ((buttons[1].style.left.replace("px", "") * 1) - (buttons[0].style.left.replace("px", "") * 1)) + "px";
            node.style.height = ((buttons[3].style.top.replace("px", "") * 1) - (buttons[0].style.top.replace("px", "") * 1)) + "px";
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

            node.style.width = ((buttons[1].style.left.replace("px", "") * 1) - (buttons[0].style.left.replace("px", "") * 1)) + "px";
            node.style.height = ((buttons[3].style.top.replace("px", "") * 1) - (buttons[0].style.top.replace("px", "") * 1)) + "px";
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

            node.style.left = el.clientX + "px";

            node.style.width = ((buttons[1].style.left.replace("px", "") * 1) - (buttons[0].style.left.replace("px", "") * 1)) + "px";
            node.style.height = ((buttons[3].style.top.replace("px", "") * 1) - (buttons[0].style.top.replace("px", "") * 1)) + "px";
        })
        document.addEventListener("mouseup", () => {
            isResizeBool = false;
        })
    }
}
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

            const newWidth = parseFloat(buttons[1].style.left) - parseFloat(buttons[0].style.left) + "px";
            const newHeight = parseFloat(buttons[3].style.top) - parseFloat(buttons[0].style.top) + "px";

            newnode.style.width = newWidth;
            newnode.style.height = newHeight;

            buttons[4].style.width = newWidth;
            buttons[4].style.top = el.clientY + "px";
            buttons[4].style.left = el.clientX + "px";

            buttons[5].style.height = newHeight;
            buttons[5].style.top = el.clientY + "px";
            buttons[5].style.left = el.clientX + "px";

            buttons[6].style.height = newHeight;
            buttons[6].style.top = el.clientY + "px";
            buttons[6].style.left = (el.clientX + newWidth) + "px";

            buttons[7].style.width = newWidth;
            buttons[7].style.left = el.clientX + "px";
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

            const newHeight = parseFloat(buttons[1].style.left) - parseFloat(buttons[0].style.left) + "px";
            const newWidth = parseFloat(buttons[3].style.top) - parseFloat(buttons[0].style.top) + "px";

            newnode.style.width = newHeight;
            newnode.style.height = newWidth;

            buttons[4].style.top = el.clientY + "px";
            buttons[4].style.left = el.clientX - parseFloat(buttons[4].style.width) + "px";

            buttons[5].style.top = el.clientY + "px";
            buttons[6].style.top = el.clientY + "px";
            buttons[6].style.left = el.clientX + "px";

            buttons[4].style.width = parseFloat(buttons[1].style.left) - parseFloat(buttons[0].style.left) + "px";

            buttons[5].style.height = parseFloat(buttons[3].style.top) - parseFloat(buttons[0].style.top) + "px";
            buttons[6].style.height = parseFloat(buttons[3].style.top) - parseFloat(buttons[0].style.top) + "px";
            buttons[7].style.width = parseFloat(buttons[1].style.left) - parseFloat(buttons[0].style.left) + "px";
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

            const newWidth = parseFloat(buttons[1].style.left) - parseFloat(buttons[0].style.left) + "px";
            const newHeight = parseFloat(buttons[3].style.top) - parseFloat(buttons[0].style.top) + "px";

            newnode.style.width = newWidth; 
            newnode.style.height = newHeight; 

            buttons[4].style.top = el.clientY - parseFloat(newnode.style.height) + "px";
            buttons[6].style.left = el.clientX + "px";
            buttons[7].style.top = el.clientY + "px";

            buttons[4].style.width = newWidth;
            buttons[7].style.width = newWidth;
            buttons[5].style.height = newHeight;
            buttons[6].style.height = newHeight;
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

            const newWidth = parseFloat(buttons[1].style.left) - parseFloat(buttons[0].style.left) + "px";
            const newHeight = parseFloat(buttons[3].style.top) - parseFloat(buttons[0].style.top) + "px";

            newnode.style.width = newWidth; 
            newnode.style.height = newHeight;

            buttons[4].style.left = el.clientX + "px";
            buttons[5].style.left = el.clientX + "px";
            buttons[7].style.left = el.clientX + "px";
            buttons[7].style.top = el.clientY + "px";
            
            buttons[4].style.width = newWidth;
            buttons[5].style.height = newHeight;
            buttons[6].style.height = newHeight;
            buttons[7].style.width = newWidth; 
        })
        document.addEventListener("mouseup", () => {
            isResizeBool = false;
        })
    } else if (element.target.getAttribute("data-attribute") === "top") {
        element.target.addEventListener("mousedown", () => {
            isResizeBool = true;
        })
        document.addEventListener("mousemove", (el) => {
            if (isResizeBool === false) return;

            buttons[4].style.top = el.clientY + "px";
            buttons[0].style.top = el.clientY + "px";
            buttons[1].style.top = el.clientY + "px";

            const newHeight = parseFloat(buttons[7].style.top) - parseFloat(buttons[4].style.top) + "px";
            newnode.style.top = buttons[4].style.top;

            newnode.style.height = newHeight;

            buttons[5].style.height = newHeight;
            buttons[6].style.height = newHeight;
            buttons[5].style.top = el.clientY + "px";
            buttons[6].style.top = el.clientY + "px";
        })
        document.addEventListener("mouseup", () => {
            isResizeBool = false;
        })
    } else if (element.target.getAttribute("data-attribute") === "right") {
        element.target.addEventListener("mousedown", () => {
            isResizeBool = true;
        })
        document.addEventListener("mousemove", (el) => {
            if (isResizeBool === false) return;

            buttons[1].style.left = el.clientX - 8 + "px";
            buttons[2].style.left = el.clientX - 8 + "px";
            buttons[6].style.left = el.clientX + "px";

            const newWidth = parseFloat(buttons[6].style.left) - parseFloat(buttons[5].style.left);
            newnode.style.width = newWidth + "px";
            buttons[4].style.width = newWidth + "px";
            buttons[7].style.width = newWidth + "px";
        })
        document.addEventListener("mouseup", () => {
            isResizeBool = false;
        })
    } else if (element.target.getAttribute("data-attribute") === "bottom") {
        element.target.addEventListener("mousedown", () => {
            isResizeBool = true;
        })
        document.addEventListener("mousemove", (el) => {
            if (isResizeBool === false) return;

            buttons[3].style.top = el.clientY - 8 + "px";
            buttons[2].style.top = el.clientY - 8 + "px";
            buttons[7].style.top = el.clientY + "px"

            const newHeight = parseFloat(buttons[7].style.top) - parseFloat(buttons[4].style.top) + "px";
            newnode.style.height = newHeight;

            buttons[6].style.height = newHeight;
            buttons[5].style.height = newHeight;
        })
        document.addEventListener("mouseup", () => {
            isResizeBool = false;
        })
    } else if (element.target.getAttribute("data-attribute") === "left") {
        element.target.addEventListener("mousedown", () => {
            isResizeBool = true;
        })
        document.addEventListener("mousemove", (el) => {
            if (isResizeBool === false) return;

            buttons[0].style.left = el.clientX + "px";
            buttons[3].style.left = el.clientX + "px";
            buttons[5].style.left = el.clientX + "px"

            newnode.style.left = el.clientX + "px";
            buttons[4].style.left = el.clientX + "px";
            buttons[7].style.left = el.clientX + "px";

            const newWidth = parseFloat(buttons[6].style.left) - parseFloat(buttons[5].style.left) + "px";
            newnode.style.width = newWidth;

            buttons[4].style.width = newWidth;
            buttons[7].style.width = newWidth;
        })
        document.addEventListener("mouseup", () => {
            isResizeBool = false;
        })
    }
}
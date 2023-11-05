export function resizeFunc(clickItem, element, resize, canvas) {
    if (!resize) return;
    if (!clickItem) return;
    let resizeBtns = document.querySelectorAll("button");
    console.log(resize);
    if (element.target.getAttribute("data-attribute") === "bottom-left") {
        const newLeft = element.clientX - canvas.getBoundingClientRect().left;
        const newTop = element.clientY - canvas.getBoundingClientRect().top;
        const newWidth = newLeft - parseInt(clickItem.style.left, 10);
        const newHeight = newTop - parseInt(clickItem.style.top, 10);

        // Update the element's position and dimensions
        element.target.style.top = newTop + "px";
        element.target.style.left = newLeft + "px";

        resizeBtns[1].style.top = newTop - newHeight + "px";
        resizeBtns[1].style.left = newLeft + "px";
        resizeBtns[3].style.top = newTop + "px";
        resizeBtns[3].style.left = newLeft - newWidth + "px";

        clickItem.style.width = newWidth + "px";
        clickItem.style.height = newHeight + "px";
    }
}

export function resizeFunction(element, clickItem, canvas) {
    let newResizeBool = false;
    if (element.target.getAttribute("data-attribute") === "bottom-left") {
        element.target.addEventListener("mousedown", (el) => {
            newResizeBool = true;
        })

        document.addEventListener("mousemove", (el) => {
            if (!newResizeBool) return;
            if(!clickItem) return;
            const newLeft = el.clientX - canvas.getBoundingClientRect().left;
            const newTop = el.clientY - canvas.getBoundingClientRect().top;
            const newWidth = newLeft - parseInt(clickItem.style.left, 10);
            const newHeight = newTop - parseInt(clickItem.style.top, 10);

            // set button position
            element.target.style.top = el.clientY + "px";
            element.target.style.left = el.clientX + "px";

            clickItem.style.width = newWidth + "px";
            clickItem.style.height = newHeight + "px";
        })
        element.target.addEventListener("mouseup", (el) => {
            newResizeBool = false;
        })
    }
}
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
    let resizeBtns = document.querySelectorAll("button");
    let newResizeBool = false;
    if (element.target.getAttribute("data-attribute") === "bottom-left") {
        element.target.addEventListener("mousedown", (el) => {
            newResizeBool = true;
        })

        document.addEventListener("mousemove", (el) => {
            if (!newResizeBool) return;
            if (!clickItem) return;
            const newLeft = el.clientX - canvas.getBoundingClientRect().left;
            const newTop = el.clientY - canvas.getBoundingClientRect().top;
            const newWidth = newLeft - parseInt(clickItem.style.left, 10);
            const newHeight = newTop - parseInt(clickItem.style.top, 10);

            // set button position
            element.target.style.top = el.clientY - 8 + "px";
            element.target.style.left = el.clientX - 8 + "px";
            element.target.style.top = newTop - 8 + "px";
            element.target.style.left = newLeft - 8 + "px";

            resizeBtns[1].style.top = ((newTop - 8) - (newHeight - 8)) + "px";
            resizeBtns[1].style.left = newLeft - 8 + "px";

            resizeBtns[3].style.top = newTop - 8 + "px";
            resizeBtns[3].style.left = ((newLeft - 8) - (newWidth - 8)) + "px";

            clickItem.style.width = newWidth + "px";
            clickItem.style.height = newHeight + "px";
        })
        document.addEventListener("mouseup", (el) => {
            newResizeBool = false;
        })
    } else if (element.target.getAttribute("data-attribute") === "top-right") {
        element.target.addEventListener("mousedown", (el) => {
            newResizeBool = true;
        })

        document.addEventListener("mousemove", (el) => {
            if (!newResizeBool) return;
            if (!clickItem) return;

            const newLeft = el.clientX - canvas.getBoundingClientRect().left;
            const newWidth = newLeft - parseInt(clickItem.style.left, 10);

            // button position
            resizeBtns[1].style.top = el.clientY + "px";
            resizeBtns[1].style.left = el.clientX + "px";
            resizeBtns[0].style.top = el.clientY + "px";
            resizeBtns[2].style.left = el.clientX - 8 + "px";

            clickItem.style.top = el.clientY  + "px";
            clickItem.style.width = newWidth + "px";

            const newHeight = (resizeBtns[2].style.top.replace("px", "") * 1) - (resizeBtns[1].style.top.replace("px", "") * 1); 
            clickItem.style.height = newHeight + "px";
        })
        document.addEventListener("mouseup", (el) => {
            newResizeBool = false;
        })
    }else if (element.target.getAttribute("data-attribute") === "top-left"){
        element.target.addEventListener("mousedown", (el) => {
            newResizeBool = true;
        })

        document.addEventListener("mousemove", (el) => {
            if (!newResizeBool) return;
            if (!clickItem) return;

                        
        })
        document.addEventListener("mouseup", (el) => {
            newResizeBool = false;
        })
    }
}
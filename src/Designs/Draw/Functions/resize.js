export function resizeFunction(event, canvas) {
    let drawSection = document.getElementById("drawSection");

    if (!drawSection) return;
    const buttons = document.querySelectorAll(`#button-${event.target.id}`);
    const clickItem = event.target;


    // buttons.forEach((button) => {
    //     button.addEventListener("mousedown", (event) => {
    //         if (event.target.getAttribute("data-attribute") === "top-left") {
    //             newResizeBool = true;
    //             document.addEventListener("mousemove", (el) => {
    //                 if (!newResizeBool) return;

    //                 buttons[0].style.top = el.clientY + "px";
    //                 buttons[0].style.left = el.clientX + "px";
    //                 buttons[1].style.top = el.clientY + "px";
    //                 buttons[3].style.left = el.clientX + "px";

    //                 clickItem.style.top = el.clientY + "px";
    //                 clickItem.style.left = el.clientX + "px";
    //                 const newHeight = (buttons[3].style.top.replace("px", "") * 1) - (buttons[0].style.top.replace("px", "") * 1);
    //                 const newWidth = (buttons[2].style.left.replace("px", "") * 1) - (buttons[3].style.left.replace("px", "") * 1)

    //                 clickItem.style.height = newHeight + "px";
    //                 clickItem.style.width = newWidth + "px";
    //             })
    //             document.addEventListener("mouseup", () => {
    //                 newResizeBool = false;
    //             })
    //         } else if (event.target.getAttribute("data-attribute") === "top-right") {
    //             newResizeBool = true;
    //             document.addEventListener("mousemove", (el) => {
    //                 if (!newResizeBool) return;

    //                 buttons[0].style.top = el.clientY + "px";
    //                 buttons[1].style.top = el.clientY + "px";
    //                 buttons[1].style.left = el.clientX + "px";
    //                 buttons[2].style.left = el.clientX + "px";

    //                 clickItem.style.top = el.clientY + "px";
    //                 const newHeight = (buttons[3].style.top.replace("px", "") * 1) - (buttons[0].style.top.replace("px", "") * 1);
    //                 const newWidth = (buttons[2].style.left.replace("px", "") * 1) - (buttons[3].style.left.replace("px", "") * 1)

    //                 clickItem.style.height = newHeight + "px";
    //                 clickItem.style.width = newWidth + "px";
    //             })
    //             document.addEventListener("mouseup", () => {
    //                 newResizeBool = false;
    //                 return;
    //             })
    //             return;
    //         }
    //         return;


    //     })

    // })


}

export function resize(element, button, clickItem) {
    let newResizeBool = false;
    const buttons = document.querySelectorAll("#" + button.id);
    const canvas = document.getElementById("canvas");
    if (element.target.getAttribute("data-attribute") === "top-left") {
        element.target.addEventListener("mousedown", (el) => {
            newResizeBool = true;
        })
        document.addEventListener("mousemove", (el) => {
            if (!newResizeBool) return;
            console.log(el.clientX)
            buttons[0].style.top = el.clientY + "px";
            buttons[0].style.left = el.clientX + "px";
            buttons[1].style.top = el.clientY + "px";
            buttons[3].style.left = el.clientX + "px";

            clickItem.style.top = el.clientY + "px";
            clickItem.style.left = el.clientX + "px";
            const newHeight = (buttons[3].style.top.replace("px", "") * 1) - (buttons[0].style.top.replace("px", "") * 1);
            const newWidth = (buttons[2].style.left.replace("px", "") * 1) - (buttons[3].style.left.replace("px", "") * 1)

            clickItem.style.height = newHeight + "px";
            clickItem.style.width = newWidth + "px";
        })
        document.addEventListener("mouseup", (el) => {
            newResizeBool = false;
        })
    } else 
    if (element.target.getAttribute("data-attribute") === "top-right") {
        element.target.addEventListener("mousedown", (el) => {
            newResizeBool = true;
        })
        document.addEventListener("mousemove", (el) => {
            if (!newResizeBool) return;
            if (!clickItem) return;

            const newLeft = el.clientX - canvas.getBoundingClientRect().left;
            const newWidth = newLeft - parseInt(clickItem.style.left, 10);

            // button position
            buttons[1].style.top = el.clientY + "px";
            buttons[1].style.left = el.clientX + "px";
            buttons[0].style.top = el.clientY + "px";
            buttons[2].style.left = el.clientX - 8 + "px";

            clickItem.style.top = el.clientY + "px";
            clickItem.style.width = newWidth + "px";

            const newHeight = (buttons[2].style.top.replace("px", "") * 1) - (buttons[1].style.top.replace("px", "") * 1);
            clickItem.style.height = newHeight + "px";
        })
        document.addEventListener("mouseup", (el) => {
            newResizeBool = false;
        })
    }
}
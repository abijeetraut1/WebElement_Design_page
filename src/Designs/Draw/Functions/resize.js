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

export function resizeTopLeft(element, button, clickItem) {
    let newResizeBool = false;
    console.log(button.id)
    const canvas = document.getElementById("canvas");
    const buttons = document.querySelectorAll("#"+button.id);
    console.log(buttons)
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
    }
}
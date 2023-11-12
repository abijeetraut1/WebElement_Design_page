export function arrowFunction(element) {
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            let currentLeft = parseInt(element.target.style.left.replace("px", ""));
            let newLeft = currentLeft + 2;
            element.target.style.left = newLeft + "px";
        }
        if (event.key === "ArrowLeft") {
            let currentRight = parseInt(element.target.style.left.replace("px", ""));
            let newRight = currentRight - 2;
            element.target.style.left = newRight + "px";
        }
        if (event.key === "ArrowUp") {
            let currentUp = parseInt(element.target.style.top.replace("px", ""));
            let newUp = currentUp - 2;
            element.target.style.top = newUp + "px";

        }
        if (event.key === "ArrowDown") {
            let currentDown = parseInt(element.target.style.top.replace("px", ""));
            let newDown = currentDown + 2;
            element.target.style.top = newDown + "px";
        }
        moveAnchors(element)
    })
}

function moveAnchors(element) {
    if(!element.target) return;
    
    const buttons = document.querySelectorAll("#button-" + element.target.id);
    
    buttons[0].style.top = element.target.style.top;
    buttons[0].style.left = element.target.style.left;
    
    buttons[1].style.left = (parseInt(element.target.style.left) - 8) + (parseInt(element.target.style.width)) + "px";
    buttons[1].style.top = element.target.style.top;

    buttons[2].style.left = (parseInt(element.target.style.left) - 8) + (parseInt(element.target.style.width)) + "px";
    buttons[2].style.top = (parseInt(element.target.style.top) - 8) + (parseInt(element.target.style.height)) + "px";

    buttons[3].style.left = element.target.style.left;
    buttons[3].style.top = (parseInt(element.target.style.top) - 8) + (parseInt(element.target.style.height)) + "px";
}
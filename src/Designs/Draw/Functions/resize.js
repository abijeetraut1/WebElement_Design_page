export function resizeFunction(event, canvas) {
    let drawSection = document.getElementById("drawSection");
    let newResizeBool = false;

    if (!drawSection) return;

    let clickItem = document.getElementById(`${event.target.id}`);
    let resizeBtns = clickItem.querySelectorAll(".resize-buttons");

    resizeBtns.forEach(element => {
        element.addEventListener("mousedown", () => {
            if (element.getAttribute("data-attribute") === "top-left") {
                newResizeBool = true;

                document.addEventListener("mousemove", (el) => {
                    if (!newResizeBool) return;

                    resizeBtns[0].style.top = el.clientY + "px";
                    resizeBtns[0].style.left = el.clientX + "px";
                    resizeBtns[1].style.top = el.clientY + "px";
                    resizeBtns[3].style.left = el.clientX + "px";

                    clickItem.style.top = el.clientY + "px";
                    clickItem.style.left = el.clientX + "px";

                    const newHeight = (resizeBtns[3].style.top.replace("px", "") * 1) - (resizeBtns[0].style.top.replace("px", "") * 1);
                    const newWidth = (resizeBtns[2].style.left.replace("px", "") * 1) - (resizeBtns[3].style.left.replace("px", "") * 1)
                    clickItem.style.height = newHeight + "px";
                    clickItem.style.width = newWidth + "px";
                });

                document.addEventListener("mouseup", () => {
                    newResizeBool = false;
                });
            }
        });
    });
}

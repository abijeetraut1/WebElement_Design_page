export function DeleteNodes(clickItem) {
    if (!clickItem) return;
    let resizeBtns = document.querySelectorAll("button");
    document.addEventListener("keydown", event => {
        if (event.key === "Delete" || event.keyCode === 46) {
            clickItem.remove();
            if(!resizeBtns) return;
            resizeBtns.forEach(resizeBtn => {
                resizeBtn.style.top = 0 + "px";
                resizeBtn.style.left = 0 + "px";
            });
        }
    });
}
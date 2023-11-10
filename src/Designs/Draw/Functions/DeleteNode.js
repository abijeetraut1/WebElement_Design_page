export function DeleteNodes(clickItem) {
    if (!clickItem) return;
    let wrapper = document.querySelector("#wrapper-" + clickItem.target.id);
    
    document.addEventListener("keydown", event => {
        if (event.key === "Delete" || event.keyCode === 46) {
            try {
                wrapper.remove();
            } catch (err) {
                if (err.name === "TypeError") return;
            }
        }
    });
}
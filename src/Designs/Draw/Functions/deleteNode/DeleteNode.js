export function DeleteNodes(elementToDelete) {
    const elem = document.getElementsByClassName("active");
    elementToDelete.addEventListener("keydown", event => {
        if (event.key === "Delete" || event.keyCode === 46) {
            try {
                elem.remove(); // Delete the specified element
            } catch (err) {
                if (err.name === "TypeError") return;
            }
        }
    });
}

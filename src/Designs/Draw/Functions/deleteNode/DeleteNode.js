export function DeleteNodes(elementToDelete) {
    const elem = document.getElementsByClassName("active")[0];
    console.log(elem)
    document.addEventListener("keydown", event => {
        console.log(event.key)
        if (event.key === "Delete") {
            try {
                elem.remove(); // Delete the specified element
            } catch (err) {
                if (err.name === "TypeError") return;
            }
        }
    });
}
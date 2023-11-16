export function popupPositining(event, show) {

    // this should in an function
    const editorContainer = document.querySelector("#editor-container");
    const editSpace = document.querySelector("#edit-space");
    if (!editSpace) return;

    editSpace.addEventListener("click", (event) => {
        const RegExp = /\n/;
        if (RegExp.test(event.target.textContent) === true) {
            editorContainer.classList.remove("flex");
            editorContainer.classList.add("hidden");
        }
    });

    const RegExp = /\n/;
    try {
        const popupWidth = 100;
        const popupHeight = 50;

        const leftPosition = event.clientX - popupWidth / 2;
        const topPosition = event.clientY - popupHeight;

        editorContainer.style.left = leftPosition + "px";
        editorContainer.style.top = topPosition + "px";

        if (RegExp.test(event.target.textContent) === false) {
            editorContainer.classList.remove("hidden");
            editorContainer.classList.add("flex");
        }
    } catch (err) {
        if (err.name === "TypeError") return;
    }
}
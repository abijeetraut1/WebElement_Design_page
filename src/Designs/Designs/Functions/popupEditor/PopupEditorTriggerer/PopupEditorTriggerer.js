import {
    popupPositining
} from "../Popup/PopupPositining";

export function PopupEditorTriggerer(event) {
    const editSpace = document.getElementById("edit-space");

    editSpace.addEventListener('click', function (event) {
        const RegExp = /\n/;

        // instanceof is a operator which checks the targeted value like object, HTMLElement etc.
        if (event.target instanceof HTMLElement) {
            if (event.target.classList.contains("control-buttons")) return;
        }

        // shows the clicked element doesnot contain \n tag
        if (RegExp.test(event.target.textContent) === false) {
            if (event.target.tagName !== "IMG") {
                event.target.setAttribute("contenteditable", "true");
            }

            if (event.target.tagName !== "IMG" || event.target.tagName !== "INPUT") {
                popupPositining(event, true);
            }
        }
    });
}

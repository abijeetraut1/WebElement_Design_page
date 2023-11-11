import { move } from "./MoveNode";
import { shiftAnchors } from "./ShowAnchor";

export function NodeChange(element) {
    if (!element.target) return;
    if(element.target.tagName === "p") return;

    const parentElement = document.getElementById("wrapper-" + element.target.id);
    const changeText = document.createElement("p");
    changeText.type = "text";
    changeText.onclick = (element) => {
        move(element.target);
        // cloneNode(element);
        shiftAnchors(changeText)
    };

    changeText.addEventListener("focusout", (event) => {
        if(event.target.textContent === "" || event.target.textContent === " "){
            const deleteNode = document.getElementById("wrapper-" + event.target.id);
            deleteNode.remove();
        }
    })

    changeText.setAttribute("contenteditable", true);

    // some style transfer from div to style
    changeText.style.overflow = "hidden";
    changeText.style.position = element.target.style.position;
    changeText.style.top = element.target.style.top;
    changeText.style.left = element.target.style.left;
    changeText.style.height = element.target.style.height;
    changeText.style.width = element.target.style.width;
    if (element.target.style.zIndex) {
        changeText.style.zIndex = element.target.style.zIndex;
    }

    // transfer the classlist
    changeText.classList.add(element.target.classList);

    changeText.id = element.target.id;

    // remove the previous element with new one
    element.target.remove();

    // render the newly created element 
    parentElement.append(changeText);
}
import {
    move
} from "../moveNode/MoveNode";
import {
    shiftAnchors
} from "../Anchor/ShowAnchor";
import {
    increaseFontSize
} from "../shortCuts/increaseFontSize/increaseFontSize";
import {
    arrowFunction
} from "../shortCuts/arrowPosition/ArrowFunctions";

export function NodeChange(element) {
    if (!element.target) return;
    if(element.target.tagName === "p") return;

    const parentElement = document.getElementById("wrapper-" + element.target.id);
    const changeNode = document.createElement("p");
    changeNode.type = "text";
    changeNode.onclick = (element) => {
        move(element.target);
        // cloneNode(element);
        shiftAnchors(changeNode)
    };
    changeNode.onkeydown = (event) => {
        arrowFunction(event)
        increaseFontSize(event)
    };
    changeNode.ondblclick = (element) => NodeChange(element);

    changeNode.addEventListener("focusout", (event) => {
        if (event.target.textContent === "" || event.target.textContent === " ") {
            const deleteNode = document.getElementById("wrapper-" + event.target.id);
            deleteNode.remove();
        }
    })

    changeNode.setAttribute("contenteditable", true);

    // some style transfer from div to style
    changeNode.style.overflow = "hidden";
    changeNode.style.position = element.target.style.position;
    changeNode.style.top = element.target.style.top;
    changeNode.style.left = element.target.style.left;
    changeNode.style.height = element.target.style.height;
    changeNode.style.width = element.target.style.width;
    if (element.target.style.zIndex) {
        changeNode.style.zIndex = element.target.style.zIndex;
    }

    // transfer the classlist
    changeNode.classList.add(element.target.classList);

    changeNode.id = element.target.id;

    // remove the previous element with new one
    element.target.remove();

    // render the newly created element 
    parentElement.append(changeNode);
}
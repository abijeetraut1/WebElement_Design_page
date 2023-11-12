import { nanoid } from "@reduxjs/toolkit";
import {/*createAnchor,*/ shiftAnchors } from "../Anchor/ShowAnchor";
import { move } from "../moveNode/MoveNode";
import { arrowFunction } from "../shortCuts/arrowPosition/ArrowFunctions";
import { increaseFontSize } from "../shortCuts/increaseFontSize/increaseFontSize";

export function createElementOnDblClick(el) {
    if (!el) return;

    const parentElement = document.querySelector("#drawSection");
    const x = el.clientX;
    const y = el.clientY;

    const wrapper = document.createElement("wrapper");
    wrapper.id = "wrapper-" + nanoid();

    parentElement.appendChild(wrapper);

    
    const createTextElement = document.createElement("p");
    createTextElement.innerText = "Text Here";
    createTextElement.setAttribute("contenteditable", "true");
    createTextElement.style.position = "absolute";
    createTextElement.style.background = "orange";
    createTextElement.style.top = y + "px";
    createTextElement.style.height = "fit-content";
    createTextElement.style.width = "auto";
    createTextElement.style.left = x + "px";
    
    createTextElement.onclick = (element) => {
        move(element.target);
        // cloneNode(element);
        shiftAnchors(createTextElement)
    };
    createTextElement.onkeydown = (event) => {
        arrowFunction(event)
        increaseFontSize(event)
    };

    wrapper.appendChild(createTextElement);
    // createAnchor(createTextElement, wrapper);
}
import {
    useSelector
} from 'react-redux';


export function PopupButtons(clickedHTMLElement, style) {
    console.log(clickedHTMLElement.clicked)
    if (!clickedHTMLElement.clicked) return;

    if (style === "bold") {
        if (clickedHTMLElement.clicked.style.fontWeight === "bold") {
            clickedHTMLElement.clicked.style.fontWeight = "normal";
        } else {
            clickedHTMLElement.clicked.style.fontWeight = "bold";
        }
    }

    if (style === "italic") {
        if (clickedHTMLElement.clicked.style.fontStyle === "italic") {
            clickedHTMLElement.clicked.style.fontStyle = "normal";
        } else {
            clickedHTMLElement.clicked.style.fontStyle = "italic";
        }
    }
}

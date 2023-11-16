export function PopupButtons(clickedHTMLElement, event, style) {
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

    if (style === "fontSize") {
        clickedHTMLElement.clicked.style.fontSize = event.target.value;
    }

    if (style === "fontWeight") {
        clickedHTMLElement.clicked.style.fontWeight = event.target.value;
    }
}
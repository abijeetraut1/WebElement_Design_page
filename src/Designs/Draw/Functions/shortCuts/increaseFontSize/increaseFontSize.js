export function increaseFontSize(event) {
    let shiftKeyPress = false;
    if (event.shiftKey) {
        shiftKeyPress = true;
    }
    if (!shiftKeyPress) return;

    // increase font
    if (event.key === ">") {
        if (!event.target.style.fontSize) {
            event.target.style.fontSize = 16 + 2 + "px";
        } else {
            let prevFont = event.target.style.fontSize;
            event.target.style.fontSize = prevFont.replace("px", "") * 1 + 2 + "px";
        }
    }

    // decrease font
    if (event.key === "<") {
        if (!event.target.style.fontSize) {
            event.target.style.fontSize = 16 - 2 + "px";
        } else {
            let prevFont = event.target.style.fontSize;
            event.target.style.fontSize = prevFont.replace("px", "") * 1 - 2 + "px";
        }
    }

}
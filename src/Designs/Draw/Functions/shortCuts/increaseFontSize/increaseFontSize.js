export function increaseFontSize(event) {

    let shiftKeyPress = false;
    let controlKeyPress = true;

    if (event.shiftKey) {
        shiftKeyPress = true;
    }

    if (shiftKeyPress === true) {
        if (event.key === ">") {
            if (!event.target.style.fontSize) {
                event.target.style.fontSize = 16 + 2 + "px";
            } else {
                let prevFont = event.target.style.fontSize;
                event.target.style.fontSize = parseInt(prevFont) + 2 + "px";
            }
        }
        // // increase font
        if (event.key === "<") {
            if (!event.target.style.fontSize) {
                event.target.style.fontSize = 16 - 2 + "px";
            } else {
                let prevFont = event.target.style.fontSize;
                event.target.style.fontSize = parseInt(prevFont) - 2 + "px";
            }
        }
    }

    if (event.ctrlKey) {
        controlKeyPress = true;
    }
    if (!shiftKeyPress) return;


    // increase font
    if (event.key === ">") {
        if (!event.target.style.fontSize) {
            event.target.style.fontSize = 16 + 2 + "px";
        } else {
            let prevFont = event.target.style.fontSize;
            event.target.style.fontSize = parseInt(prevFont) + 2 + "px";
        }
    }

    // decrease font
    if (event.key === "<") {
        event.target.textContent = event.target.textContent.replace("<", "");
        if (!event.target.style.fontSize) {
            event.target.style.fontSize = 16 - 2 + "px";
        } else {
            let prevFont = event.target.style.fontSize;
            event.target.style.fontSize = parseInt(prevFont) - 2 + "px";
        }
    }

    // return if control is not pressed
    if (!controlKeyPress) return;
    if (event.key === "b" || event.key === "B") {
        console.log(event.target.style.fontWeight = "bold")
        if (event.target.style.fontWeight) {
            event.target.style.fontWeight = "normal";
        } else {
            event.target.style.fontWeight = "bold";
        }
    }
}



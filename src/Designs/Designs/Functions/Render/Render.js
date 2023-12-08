const renderParentElement = document.getElementById("edit-space");

function RenderTheCodes(IDS, html, css) {

    IDS.forEach(id => {
        const RenderHtmlElement = document.createElement("div");
        RenderHtmlElement.id = id + "-html-structure";

        const RenderCssElement = document.createElement("style");
        RenderCssElement.id = id + "-style-structure";

        renderParentElement.insertAdjacentElement("beforeend", RenderHtmlElement);
        renderParentElement.insertAdjacentElement("beforeend", RenderCssElement);

        RenderHtmlElement.insertAdjacentHTML("beforeend", html);
        RenderCssElement.insertAdjacentHTML("beforeend", css);
    });
}

export function Render(page, IDS, pageCode) {
    if(!pageCode.codes.html) return;

    const html = JSON.parse(pageCode.codes.html);
    const css = JSON.parse(pageCode.codes.css);
    
    RenderTheCodes(IDS, html, css);
}

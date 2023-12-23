export function Extraction(IDS) {
    let codesCollectionObject = {};
    try {
        IDS.forEach(id => {
            let html = document.getElementById(id + "-html-structure").innerHTML;
            let css = document.getElementById(id + "-style-structure").innerHTML;

            const parsedHtml = JSON.stringify(html);
            const parsedCss = JSON.stringify(css);

            const codesObj = {
                id: id,
                codes: {
                    html: parsedHtml,
                    css: parsedCss,
                }
            }
            codesCollectionObject = codesObj;
            console.log(codesCollectionObject)
        });

    } catch (err) {
        if (err.name === "SyntaxError") return;
        if (err.name === "TypeError") return;
    }

    return codesCollectionObject;
}
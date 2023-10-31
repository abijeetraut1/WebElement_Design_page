export const drawCanvas = () => {
    const canvas = document.getElementById("canvas");
    const div = document.getElementById("div");

    const ctx = canvas.getContext("2d");
    let x, y = 0;
    let newX, newY = 0;
    let isDrawing = false;
    let store = [];

    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        x = e.clientX - canvas.getBoundingClientRect().left;
        y = e.clientY - canvas.getBoundingClientRect().top;
    });

    canvas.addEventListener("mouseup", () => {
        isDrawing = false;
        store = [{
            x,
            y,
            newX,
            newY
        }, ...store];
        storeDrawing(store);
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!isDrawing) return;
        newX = e.clientX - canvas.getBoundingClientRect().left;
        newY = e.clientY - canvas.getBoundingClientRect().top;
        newX -= x;
        newY -= y;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(x, y, newX, newY);
        ctx.stroke();
        storeDrawing(store);
    });



    function storeDrawing(store) {
        store.forEach(ele => {
            ctx.rect(ele.x, ele.y, ele.newX, ele.newY);
            ctx.stroke();
        });
    }

    div.addEventListener("click", (el) => {
        const dataURL = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = dataURL;
        a.download = "canvas-image.png";
        a.click();
    })
}
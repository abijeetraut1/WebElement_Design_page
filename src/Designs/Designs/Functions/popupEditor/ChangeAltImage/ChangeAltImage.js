import plusImage from "../../../../../Images/add-image.svg"
export function changeAltImage(id) {
    const imgTag = document.getElementById("edit-space").querySelectorAll("img");
    console.log(imgTag)
    imgTag.forEach(img => {
        img.src = plusImage  
    });
    
}
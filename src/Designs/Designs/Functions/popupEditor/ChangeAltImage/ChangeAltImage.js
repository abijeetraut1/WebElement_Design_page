// import plusImage from "../../../../../Images/add-image.svg";
import {
    nanoid
} from "@reduxjs/toolkit";
import axios from "axios";

export function changeAltImage(id) {
    try {
        const selectedDOM = document.getElementById(id);
        const imgTag = selectedDOM.querySelectorAll("img");
        imgTag.forEach((img, i) => {
            const insertImage = document.createElement("input");
            insertImage.type = "file";
            insertImage.id = "image-" + nanoid() + "-inserter";
            insertImage.setAttribute("isChanged", true);
            insertImage.onchange = (element) => changeTagWhenUpload(element);
            img.insertAdjacentElement("afterend", insertImage);

            img.remove();

        });
    } catch (err) {
        return;
    }
}


async function changeTagWhenUpload(element) {
    const uploadedImage = element.target.files[0];
    const imageWrapper = new FormData();
    imageWrapper.append("image", uploadedImage);

    const sendImage = await axios.post("http://localhost:8000/api/v1/codes/uploadPageImage", imageWrapper, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    console.log(sendImage.data.message)

    const imageTag = document.createElement("img");
    imageTag.src = "http://localhost:8000/customizedImages/" + sendImage.data.message;
    element.target.insertAdjacentElement("afterend", imageTag);

    element.target.remove();
}
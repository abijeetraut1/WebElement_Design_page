import {
    nanoid
} from "@reduxjs/toolkit";
import axios from "axios";

export function changeAltImage(id) {
    try {
        const selectedDOM = document.getElementById(id);
        const imgTag = selectedDOM.querySelectorAll("img");

        imgTag.forEach((img, i) => {
            if (img.getAttribute("isChanged") === false || !img.getAttribute("isChanged")) {
                const insertImage = document.createElement("input");
                insertImage.type = "file";
                insertImage.id = "image-" + nanoid() + "-inserter";
                insertImage.setAttribute("isChanged", false);
                insertImage.onchange = (element) => changeTagWhenUpload(element);
                img.insertAdjacentElement("afterend", insertImage);

                img.remove();
            }
        });
    } catch (err) {
        return;
    }
}


async function changeTagWhenUpload(element) {
    const uploadedImage = element.target.files[0];
    const imageWrapper = new FormData();
    imageWrapper.append("image", uploadedImage);

    // sends the image to the database
    const sendImage = await axios.post(process.env.REACT_APP_UPLOAD_CUSTOMIZATION_IMAGE, imageWrapper, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    const imageTag = document.createElement("img");

    // set the content is being changed or not
    imageTag.setAttribute("isChanged", true);

    imageTag.src = process.env.REACT_APP_GET_CUSTOMIZATION_IMAGE + sendImage.data.message;
    element.target.insertAdjacentElement("afterend", imageTag);

    // remove the input:files NODE
    element.target.remove();
}
import {
    nanoid
} from "@reduxjs/toolkit";
import axios from "axios";

export function changeAltImage(id) {
    try {
        const selectedDOM = document.getElementById(id);
        const imgTag = selectedDOM.querySelectorAll("img");
        const aTag = selectedDOM.querySelectorAll("a");

        // added preventdefault because if it contains link it blocks the link execution
        aTag.forEach((el, i) => {
            el.onclick = (element) => {
                element.preventDefault();
            }
        })

        imgTag.forEach((img, i) => {
            if (img.getAttribute("isChanged") === false || !img.getAttribute("isChanged")) {
                const insertImage = document.createElement("input");
                insertImage.type = "file";
                insertImage.id = "image-" + nanoid() + "-inserter";
                insertImage.setAttribute("isChanged", false);
                insertImage.setAttribute("accept", "image/png, image/gif, image/jpeg");
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
    const imageFormData = new FormData();
    imageFormData.append("image", uploadedImage);


    // sends the image to the database
    const sendImage = await axios.post(process.env.REACT_APP_UPLOAD_CUSTOMIZATION_IMAGE, imageFormData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })


    const imageTag = document.createElement("img");

    imageTag.setAttribute("isChanged", true);

    // on bubble click it will delete the node and got back to the input file form
    imageTag.ondblclick = (Node) => {
        createInputFileNode(Node);
        Node.target.remove();
    }

    imageTag.src = process.env.REACT_APP_GET_CUSTOMIZATION_IMAGE + sendImage.data.message;
    element.target.insertAdjacentElement("afterend", imageTag);

    // remove the input:files NODE
    element.target.remove();
}


function createInputFileNode(Node) {
    const insertImage = document.createElement("input");
    insertImage.type = "file";
    insertImage.id = "image-" + nanoid() + "-inserter";
    insertImage.setAttribute("isChanged", false);
    insertImage.setAttribute("accept", "image/png, image/gif, image/jpeg");
    insertImage.onchange = (NodeEvent) => changeTagWhenUpload(NodeEvent);
    Node.target.insertAdjacentElement("afterend", insertImage);
}
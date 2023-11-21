import axios from "axios";

export async function saveCode(section, htmlCode, cssCode, jsCode) {


  const formData = new FormData();
  formData.append("name", "helloworld");
  formData.append("htmlCode", htmlCode);
  formData.append("cssCode", cssCode);
  formData.append("jsCode", jsCode);
  formData.append("section", section);

  const webview = document.querySelector("#desktop").files[0]; // Assuming #desktop is a file input
  formData.append("webview", webview);

  const response = await axios.post(process.env.REACT_APP_UPLOAD_CODE_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (response.data.status === "success") {
    return true;
  } else {
    return false;
  }
}
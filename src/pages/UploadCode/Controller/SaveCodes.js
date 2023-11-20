import axios from "axios";

export async function saveCode(htmlCode, cssCode, jsCode) {


  const formData = new FormData();
  formData.append("name", "helloworld");
  formData.append("htmlCode", htmlCode);
  formData.append("cssCode", cssCode);
  formData.append("jsCode", jsCode);

  const desktop = document.querySelector("#desktop").files[0]; // Assuming #desktop is a file input
  const desktop2 = document.querySelector("#desktop").files[1]; // Assuming #desktop is a file input
  console.log(desktop)
  formData.append("desktop", desktop);
  formData.append("mobile", desktop2);

  try {
    const dm = await axios.post(process.env.REACT_APP_UPLOAD_CODE_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(dm.data);
  } catch (error) {
    console.error('Error:', error);
  }

}
import axios from "axios";

export async function saveCode(section, htmlCode, cssCode, jsCode) {


  const formData = new FormData();
  formData.append("name", "helloworld");
  formData.append("htmlCode", htmlCode);
  formData.append("cssCode", cssCode);
  formData.append("jsCode", jsCode);
  formData.append("section", section);

  const desktop = document.querySelector("#desktop").files[0]; // Assuming #desktop is a file input
  const mobile = document.querySelector("#mobile").files[0]; // Assuming #desktop is a file input
  const tablet = document.querySelector("#tablet").files[0]; // Assuming #desktop is a file input
  
  formData.append("desktopView", desktop);
  formData.append("mobileView", mobile);
  formData.append("tabletView", tablet);

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
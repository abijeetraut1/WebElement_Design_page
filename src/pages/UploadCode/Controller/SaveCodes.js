import axios from "axios";

export async function saveCode(formData, name, section, htmlCode, cssCode, jsCode) {
  formData.append("name", name);
  formData.append("htmlCode", htmlCode);
  formData.append("cssCode", cssCode);
  formData.append("jsCode", jsCode);
  formData.append("section", JSON.stringify(section));

  const response = await axios.post(process.env.REACT_APP_UPLOAD_CODE_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  console.log(response)
  return response.data.status + response.data.message;
}
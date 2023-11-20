import axios from "axios";

export async function saveCode(htmlCode, cssCode, js) {
  // Access environment variables using process.env
  try {

    const sendCode = await axios({
      method: 'POST',
      url: process.env.REACT_APP_UPLOAD_CODE_URL,
      data: {
        name: "helloworld",
        htmlCode,
        cssCode,
        section: "body"
      }
    })
    return true;
  } catch (err) {
    return false;
  }
}
export function saveCode(html, css, js) {
  // Access environment variables using process.env
  console.log(html, css, js);
  console.log(process.env.REACT_APP_GOOGLE_FONT_API_KEY);
}

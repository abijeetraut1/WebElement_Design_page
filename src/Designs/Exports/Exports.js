import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Editor from '@monaco-editor/react';
// import Navigation from "../../pages/Components/navigation/Navigation"


export default function Exports() {
  const selectedCode = useSelector(state => state.codes);
  const [htmlCodes, setHtmlCodes] = useState();
  const [cssCodes, setCssCodes] = useState();

  const headersTags = ` <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head><body>`
  const bottomTags = `</body></html>`;
  const cssHeadTag = `*{margin: 0;padding: 0;}`

  useEffect(() => {
    const html = selectedCode.map(code => code.codeParams.html).join('');
    setHtmlCodes(html);
    
    const css = selectedCode.map(code => code.codeParams.css).join('');
    setCssCodes(css);

  }, [selectedCode]);


  return (
    <div className='min-h-screen min-w-screen bg-slate-800 text-white'>
      {/* <Navigation /> */}
      <section className='flex justify-center space-x-2 items-center h-screen'>
        <section id='render-html-codes'>
          <Editor
            height="80vh"
            width="40vw"
            theme="vs-dark"
            defaultLanguage="html"
            defaultValue={headersTags + htmlCodes + bottomTags}
            onMount={(editor) => {
              setTimeout(() => {
                editor.trigger('editor', 'editor.action.formatDocument');
              }, 2500);
            }}     
          />
        </section>

        <section id='render-css-codes'>
          <Editor
            height="80vh"
            width="40vw"
            theme="vs-dark"
            defaultLanguage="css"
            defaultValue={cssHeadTag + cssCodes}
            onMount={(editor) => {
              setTimeout(() => {
                editor.trigger('editor', 'editor.action.formatDocument');
              }, 2500);
            }}     
          />
        </section>
      </section>
    </div>
  );
}
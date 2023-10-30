import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Editor from '@monaco-editor/react';
import Navigation from "../navigation/Navigation"


export default function Exports() {
  const selectedCode = useSelector(state => state.codes);
  const [codes, setCodes] = useState();
  const headersTags = ` <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head><body>`
  const bottomTags = `</body></html>`;

  useLayoutEffect(() => {
    selectedCode.forEach(el => {
      // setCodes(codes + el.codeParams.html);
    })
    console.log(codes)
  }, [selectedCode, codes]);

  return (
    <div className='min-h-screen min-w-screen bg-slate-800 text-white'>
        <Navigation />
      <section className='flex justify-center space-x-2 items-center h-screen absolute top-0'>

        <section>
          <Editor
            height="80vh"
            width="40vw"
            theme="vs-dark"
            defaultLanguage="html"
            defaultValue={codes}
            onMount={(editor) => {
              setTimeout(() => {
                editor.trigger('editor', 'editor.action.formatDocument');
              }, 2500);
            }}     
          />
        </section>

        <section>
          <Editor
            height="80vh"
            width="40vw"
            theme="vs-dark"
            defaultLanguage="css"
            defaultValue={selectedCode[0].codeParams.css}
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
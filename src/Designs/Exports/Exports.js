import React from 'react';
import { useSelector } from 'react-redux';
import Editor from '@monaco-editor/react';
import Navigation from "../navigation/Navigation"


export default function Exports() {
  const selectedCode = useSelector(state => state.update);
  const headersTags = ` <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head><body>`
  const bottomTags = `</body></html>`;

  return (
    <div className='min-h-screen min-w-screen bg-slate-800 text-white'>
        <Navigation />
      
        <section>
          <Editor
            height="80vh"
            width="100%"
            theme="vs-dark"
            defaultLanguage="html"
            defaultValue={headersTags + selectedCode[0] + bottomTags}
            onMount={(editor) => editor.trigger('editor', 'editor.action.formatDocument')}     
          />
        </section>
    </div>
  );
}
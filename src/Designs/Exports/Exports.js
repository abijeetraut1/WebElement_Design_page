import React from 'react';
import { useSelector } from 'react-redux';
import Editor from '@monaco-editor/react';

export default function Exports() {
  const selectedCode = useSelector(state => state.update);
  
  return (
    <div className='min-h-screen min-w-screen bg-slate-800 text-white' onLoad={() => alert("Asdf")}>
      <Editor
        height="80vh"
        width="100%"
        theme="vs-dark"
        defaultLanguage="html"
        defaultValue={selectedCode[0] }
        onMount={(editor) => editor.trigger('editor', "editor.action.formatDocument")}     
      />
    </div>
  );
}


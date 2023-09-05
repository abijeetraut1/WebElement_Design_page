// import { useState } from 'react';
import './App.css';
import axios from 'axios';
// import sendData from "./hooks/sendData";
// import axios from "axios";
// import DesignNavigation from './page_contoller/Design_Navigation/DesignNavigation';

function App() {
  // const [url, setUrl] = useState();
  
  return (
    <div className="App">
       {/* { <DesignNavigation /> }  */}
       <textarea name="" id="htmlCode" cols="30" rows="10" placeholder="insert html code"></textarea>
       <textarea name="" id="cssCode" cols="30" rows="10" placeholder="insert css code"></textarea>
       <button onClick={async (el) => {
          // setUrl("localhost:8000/api/v1/codes/uploadCode")
          const htmlCode = document.getElementById("htmlCode").value;
          const cssCode = document.getElementById("cssCode").value;

          const sendData = await axios({
            method: "POST",
            url: "http://localhost:8000/api/v1/codes/uploadCode",
            data:{
              htmlCode, cssCode
            }
          })

          if(sendData){
            alert('code uploaded successfully');
            document.getElementById("htmlCode").value = " ";
            document.getElementById("cssCode").value = " ";
          }else{
            alert('error in uploading the code');
          }
        }}>send code</button>
    </div>
  );
}

export default App;

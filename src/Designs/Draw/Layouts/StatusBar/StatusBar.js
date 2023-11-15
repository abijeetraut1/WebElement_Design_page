import React, { useState } from 'react'

export default function StatusBar() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  if (document.readyState === 'complete'){
    const canvas = document.querySelector("#canvas");
    canvas.addEventListener("mousemove", (event) => {
      setX(event.clientX);
      setY(event.clientY);
    })

  }
  return (
    <asbide className={`l-0 d-flex space-x-3 overflow-hidden max-h-full h-9 w-full duration-300 bg-zinc-900 shadow-zinc-950 fixed top-0 bottom-1 z-10 text-white`}>
        <span>
          x: {X}px
        </span>
        <span>
         y: {Y}px
        </span>
    </asbide>
  )
}

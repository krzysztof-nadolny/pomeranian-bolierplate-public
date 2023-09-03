import React, { useRef, useState } from 'react';

import './style.css';

export function ReactUseRef() {
  return (
    <div>
      <ChatRef />
    </div>
  );
}

function FormRef() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    console.log(inputRef);
  }

  return (
    <>
      <input type="text" name="" input="" ref={inputRef}></input>
      <button onClick={handleClick}>Focus input</button>
    </>
  );
}

function ChatRef() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  let sendTimeout = useRef(null);

  function handleSend() {
    setIsSending(true);
    sendTimeout = setTimeout(function () {
      alert(text);
    }, 1500);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(sendTimeout);
    console.log('cleared');
  }

  return (
    <>
      <input
        type="text"
        name=""
        onChange={(e) => setText(e.target.value)}
      ></input>
      <label>{text}</label>
      <button onClick={handleSend}>Send</button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
}

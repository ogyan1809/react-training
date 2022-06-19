import React, { useState } from "react";
import ColorfulMes from "./components/ColorfulMes";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountup = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMes color="blue">お元気ですか</ColorfulMes>
      <ColorfulMes color="pink" message="元気です" />
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button
        onClick={() => {
          setFaceShowFlag(!faceShowFlag);
        }}
      >
        on/off
      </button>
      <p>{num}</p>
      {faceShowFlag && <p>☺</p>}
    </>
  );
};

export default App;

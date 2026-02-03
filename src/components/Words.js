import React from "react";

const Words = ({ status, setStatus, word }) => {
  console.log(word);

  return (
    <>
      <h1
        style={{ color: status ? "white" : "blue" }}
        onClick={() => setStatus(!status)}
      >
        {status ? "ON" : word}
      </h1>
    </>
  );
};

export default Words;

import { useState } from "react";
import "./index.css";
import Words from "./components/Words";

function App() {
  const [status, setStatus] = useState(false);

  const word = [
    "ON",
    "OFF",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
  ];

  return (
    <div
      className="App"
      style={{ backgroundColor: status ? "black" : "white" }}
    >
      <Words
        status={status}
        setStatus={setStatus}
        word={word[Math.floor(Math.random() * word.length)]}
      />
      <Words
        status={status}
        setStatus={setStatus}
        word={word[Math.floor(Math.random() * word.length)]}
      />
      <Words
        status={status}
        setStatus={setStatus}
        word={word[Math.floor(Math.random() * word.length)]}
      />
      {/* <h1
        style={{ color: status ? "white" : "blue" }}
        onClick={() => setStatus(!status)}
      >
        {status ? "ON" : "OFF"}
      </h1> */}
    </div>
  );
}

export default App;

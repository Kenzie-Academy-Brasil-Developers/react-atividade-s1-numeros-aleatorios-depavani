import "./App.css";
import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(Math.floor(Math.random() * 100) + 1);

  const randomNumber = () => {
    setNum(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <span>{num}</span>
        <button onClick={randomNumber}> Criar novo número </button>
      </header>
    </div>
  );
}

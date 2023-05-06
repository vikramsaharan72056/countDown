import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState("");
  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }
  }, [count]);

  const keyDown = (e) => {
    if (e.key === "Enter") {
      const newvalue = Math.floor(Number(input));
      if (isNaN(newvalue)) {
        setCount(0);
      } else {
        setCount(newvalue);
      }
      setInput("");
    }
  };
  return (
    <div style={{ margin: "30%" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={keyDown}
      />
      <div style={{ marginLeft: "15%" }}>
        <h2>{count}</h2>
      </div>
    </div>
  );
}

export default App;

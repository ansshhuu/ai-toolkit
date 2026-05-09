import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [task, setTask] = useState("analyze");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    setLoading(true);
    setResult(null);

    const response = await fetch(`http://127.0.0.1:8000/${task}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    setResult(data);
    setLoading(false);
  }

  return (
    <div className="container">
      <h1>AI Text Processing Toolkit</h1>

      <textarea
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select value={task} onChange={(e) => setTask(e.target.value)}>
        <option value="analyze">Analyze All</option>
        <option value="summarize">Summarize</option>
        <option value="keywords">Extract Keywords</option>
        <option value="classify">Classify</option>
      </select>

      <button onClick={handleAnalyze} disabled={loading || !text}>
        {loading ? "Processing..." : "Analyze"}
      </button>

      {result && (
        <pre className="result">{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("loading...");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/health/")
      .then((r) => r.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div>
      <h1>Health</h1>
      <p>Status: {status}</p>
    </div>
  );
}

export default App;
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);
  const [seconds, setSeconds] = useState(0);

  // useEffect #1 — count change hone par history update karo
  useEffect(() => {
    setHistory((prev) => [...prev.slice(-4), count]);
  }, [count]);

  // useEffect #2 — ek baar mount par timer start karo
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  const reset = () => { setCount(0); setHistory([]); };

  return (
    <div className="card">
      <h2 className="card-title">Dynamic Counter</h2>

      <div className="timer-badge">⏱ Session: {seconds}s</div>

      <div className="counter-display">
        <span
          className="count-number"
          style={{ color: count > 0 ? "#16a34a" : count < 0 ? "#dc2626" : "#1e40af" }}
        >
          {count}
        </span>
      </div>

      <div className="button-group">
        <button className="btn btn-red" onClick={decrement}>− {step}</button>
        <button className="btn btn-gray" onClick={reset}>Reset</button>
        <button className="btn btn-green" onClick={increment}>+ {step}</button>
      </div>

      <div className="step-control">
        <label>Step Size: <strong>{step}</strong></label>
        <input
          type="range" min="1" max="10" value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      {history.length > 0 && (
        <div className="history">
          <p className="history-label">History (last 5 values):</p>
          <div className="history-pills">
            {history.map((val, i) => (
              <span key={i} className="pill">{val}</span>
            ))}
          </div>
        </div>
      )}

      <div className="hook-info">
        <div className="hook-chip">useState × 4</div>
        <div className="hook-chip">useEffect × 2</div>
      </div>
    </div>
  );
}

export default Counter;

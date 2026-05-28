import { useState, useEffect } from "react";
import Counter from "./Counter";
import UserCard from "./UserCard";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("counter");

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Hooks Demo</h1>
        <p className="subtitle">useState &amp; useEffect in Action</p>
        <nav className="tabs">
          <button
            className={activeTab === "counter" ? "tab active" : "tab"}
            onClick={() => setActiveTab("counter")}
          >
            Dynamic Counter
          </button>
          <button
            className={activeTab === "user" ? "tab active" : "tab"}
            onClick={() => setActiveTab("user")}
          >
            User State Data
          </button>
        </nav>
      </header>

      <main className="app-main">
        {activeTab === "counter" ? <Counter /> : <UserCard />}
      </main>

      {/* <footer className="app-footer">
        <p>Task 3 — State Management with React Hooks</p>
      </footer> */}
    </div>
  );
}

export default App;
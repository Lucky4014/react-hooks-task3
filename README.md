#State Management with React Hooks

**Edutech Solution — MERN Stack Development Internship**

## What This Project Does

A React app demonstrating dynamic state management using `useState` and `useEffect` hooks. It has two sections:

1. **Dynamic Counter** — Increment, decrement, reset with adjustable step size
2. **User State Data** — Simulated API fetch showing user profiles with loading state

## Hooks Used

| Hook | Where | Purpose |
|------|-------|---------|
| `useState` | Counter.jsx | Stores count, step, history, timer |
| `useState` | UserCard.jsx | Stores user, loading state, selected ID, view count |
| `useEffect` | Counter.jsx | Records history on count change |
| `useEffect` | Counter.jsx | Starts a 1-second interval timer on mount |
| `useEffect` | UserCard.jsx | Simulates API fetch when selected user changes |
| `useEffect` | UserCard.jsx | Increments view count when new user loads |

## Concepts Covered

- **useState** — manages local component state
- **useEffect** — handles side effects (timers, API calls)
- **Cleanup functions** — prevents memory leaks (clearInterval, clearTimeout)
- **Dependency arrays** — controls when effects re-run
- **Conditional rendering** — shows loading vs loaded state

## How to Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/react-hooks-task3.git
cd react-hooks-task3
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Interview Q&A (From Task Brief)

### When to use useEffect?
Use `useEffect` when you need to perform a **side effect** — something outside the render like:
- Fetching data from an API
- Setting up a timer or interval
- Adding/removing event listeners
- Updating the document title

### State vs Props?
| State | Props |
|-------|-------|
| Internal to a component | Passed from parent |
| Can be changed by the component | Read-only (cannot be changed by child) |
| Declared with useState | Received as function arguments |
| Causes re-render when changed | Causes re-render when parent re-renders |

## Tech Stack
- React 18
- Vite
- CSS (no libraries)


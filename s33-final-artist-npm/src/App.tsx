<<<<<<< HEAD
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
=======
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./components/HomePage";
>>>>>>> 78bc631b0d962a63cc9635e45c528dc7033f5841

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes for Art and Poetry here */}
        </Routes>
      </div>
<<<<<<< HEAD
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
=======
    </Router>
  );
};
>>>>>>> 78bc631b0d962a63cc9635e45c528dc7033f5841

export default App;

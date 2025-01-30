import React, { useState } from "react";
import "./App.css";

function App() {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Sign In and Sign Up

  const toggleMode = () => {
    setIsSignUp(!isSignUp); // Toggle the mode
  };

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>

      <div className="form-container sign-up-container">
        <form>
          <h1>Sign Up</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h3>Welcome Back!</h3>
            <p>To keep connected, please login with your details.</p>
            <button className="ghost" onClick={toggleMode}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h3>Hello, Friend!</h3>
            <p>Enter your personal details and start your journey with us.</p>
            <button className="ghost" onClick={toggleMode}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

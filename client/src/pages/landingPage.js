import Login from "../components/login";
import Signup from "../components/signup";
import React, { useState } from "react";

function LandingPage() {
  const [toggle, setToggle] = useState(true);
  function buttonText() {
    if (toggle) {
      return "Don't have an account? Sign up";
    } else {
      return "Already signed up? Login";
    }
  }
  return (
    <div className="landingPage">
      <div className="landingDiv">
        <h1>Welcome to EventBook</h1>
      </div>
      <div className="landingDiv">
        {toggle && <Login />}
        {!toggle && <Signup />}
        <button
          className="Btn"
          type="button"
          onClick={() => setToggle((toggle) => !toggle)}
        >
          {buttonText()}
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="headerLeft"></div>
    <div className="headerright"></div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>
        Design<span>Developer</span>
      </h1>
      <p className="read-the-docs">
        <span>CAREER OBJECTIVE</span>
        <br />
        Hello, I am Muhammad Wasif!!! I'm a creative and professional graphic
        designer with 4+ years of know-how inside the design industry. My
        carrier affords one of the maximum desirable, creative, and appealing
        professional designs. I can help you in getting a great and innovative
        fashion, Expression, and quality, so that you can constitute the
        achievement of your corporation. I am actively seeking a dynamic career
        opportunity within a progressive organization where I can leverage my
        educational background and professional experience to their fullest
        potential. I am committed to contributing my personal and professional
        abilities to drive success and growth, both for myself and the
        organization.
      </p>
      <a className="btn" href="https://www.behance.net/wasif-0" target="blank">
        Portfolio
      </a>
      <div className="footerLeft"></div>
      <div className="footeright"></div>
    </>
  );
}

export default App;

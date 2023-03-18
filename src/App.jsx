import { useState, useEffect } from "react";
import patternMobile from "./assets/pattern-divider-mobile.svg";
import patternDesktop from "./assets/pattern-divider-desktop.svg";
import button_dice from "./assets/icon-dice.svg";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [id, setId] = useState("");
  const [advice, setAdvice] = useState("");

  const callApi = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setId(data.slip.id);
        setAdvice(data.slip.advice);
      });
  };
  useState(() => {
    callApi();
  }, []);
  return (
    <>
      <div className="advice__container">
        <div className="advice">
          <h1 className="advice__title">ADVICE #{id}</h1>
          <p className="advice__text">❝{advice}❞</p>
          <img className="patternDesktop" src={patternDesktop} alt="" />
          <img className="patternMobile" src={patternMobile} alt="" />
          <button className="advice__button" onClick={callApi}>
            <img src={button_dice} alt="change advice" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

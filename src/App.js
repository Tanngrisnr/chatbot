import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import sigmalogo from "./images/sigmalogo.png";
import gift from "./images/gift.svg";
import useSound from "use-sound";
import { useState } from "react";

const Global = createGlobalStyle`

  html,
  body {
    margin: 0;
    padding: 0;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    min-height: 100vh;
    max-width: 100%;
    font-family: "Roboto Condensed", "Helvetica", "Arial", sans-serif;
    display: flex;
    justify-content: center;
    align-items: stretch;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: #00354E;
  }

  .snowflake {
  color: #fff;
  font-size: 1em;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
  z-index: 1;
}

@-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%{-webkit-transform:translateX(0px);transform:translateX(0px)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}100%{-webkit-transform:translateX(0px);transform:translateX(0px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%{transform:translateX(0px)}50%{transform:translateX(80px)}100%{transform:translateX(0px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}





.animate {
    animation: falling 5.5s infinite ease-in;
}



.line{
  text-align: center;
  margin:0;
}

li {
    position: relative;
    margin: 0 15px;
    list-style: none;
    padding: 0;
    display: inline-block;
    width: 12px;
    height: 28px;
    border-radius: 50%;
    top: 35px;
    background: #fff;
    &:before {
        content: "";
        position: absolute;
        background: #222;
        width: 10px;
        height: 9px;
        border-radius: 3px;
        top: -4px;
        left: 1px;
    }
    &:after {
        content: "";
        top: -14px;
        left: 9px;
        position: absolute;
        width: 52px;
        height: 19px;
        border-bottom: solid #222 2px;
        border-radius: 30%;
    }
}

.red {
    background-color: #fb4545;
    animation: lightningRed 1s infinite;
}

.green {
    background-color: #24D024;
    animation: lightningGreen 0.8s infinite;
}

.yellow {
    background-color: #fff952;
    animation: lightningYellow 0.9s infinite;
}

.blue {
    background-color: #0A53DE;
    animation: lightningBlue 1.1s infinite;
}

.pink {
    background-color: #f53896;
    animation: lightningPink 1.2s infinite;
}

@keyframes lightningRed {
    0% {
        box-shadow: 5px 10px 35px 10px #fb4545;
    }
    50% {
        box-shadow: none;
    }
    100% {
        box-shadow: 5px 10px 35px 10px #fb4545;
    }
}

@keyframes lightningGreen {
    0% {
        box-shadow: 5px 0 35px 10px #24D024;
    }
    50% {
        box-shadow: none;
    }
    100% {
        box-shadow: 5px 0 35px 10px #24D024;
    }
}

@keyframes lightningYellow {
    0% {
        box-shadow: 5px 0 35px 10px #fff952;
    }
    50% {
        box-shadow: none;
    }
    100% {
        box-shadow: 5px 0 35px 10px #fff952;
    }
}

@keyframes lightningBlue {
    0% {
        box-shadow: 5px 0 35px 10px #0A53DE;
    }
    50% {
        box-shadow: none;
    }
    100% {
        box-shadow: 5px 0 35px 10px #0A53DE;
    }
}

@keyframes lightningPink {
    0% {
        box-shadow: 5px 0 35px 10px #f53896;
    }
    50% {
        box-shadow: none;
    }
    100% {
        box-shadow: 5px 0 35px 10px #f53896;
    }
}

@media (max-width: 1024px) {
  .line{
    padding: 0; 
  }
    li {
        margin: 0 15px 20px 15px;
    }
}

h1 {
    text-align: center;
    width: 100%;
    color: white;
  }
  h1 {
    font-size: 5.1rem;
    line-height: 1;
    font-weight: 600;
  }
  h2 {
    font-size: 3rem;
    font-weight: 300;
    margin: 2%;
  }
  h3,
  h4,
  h5 {
    font-weight: 600;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 5% auto;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 2%;
  }
`;
const Header = styled.header`
  color: white;
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  background: #e30613;
  z-index: 9;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;

  figure {
    width: 20%;
    img {
      width: 100%;
      height: auto;
    }
  }
  h3 {
    text-align: center;
  }
`;

const Gift = styled.button`
  max-width: 100px;
  color: white;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 0;
  }
  figure {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
  p {
    font-weight: 600;
    text-transform: uppercase;
  }
`;

function App() {
  const [collapse, setCollapse] = useState(true);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <Global />
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
      </div>

      <Header>
        <figure>
          <img src={sigmalogo} alt="sigma's logo" />
        </figure>
      </Header>
      <div className="lights-container">
        <div className="light">
          <ul className="line">
            <li className="red"></li>
            <li className="yellow"></li>
            <li className="blue"></li>
            <li className="pink"></li>
            <li className="red"></li>
            <li className="green"></li>
            <li className="blue"></li>
            <li className="yellow"></li>
            <li className="red"></li>
            <li className="pink"></li>
            <li className="blue"></li>
            <li className="yellow"></li>
            <li className="red"></li>
            <li className="green"></li>
            <li className="blue"></li>
            <li className="yellow"></li>
            <li className="red"></li>
            <li className="pink"></li>
            <li className="green"></li>
            <li className="blue"></li>
            <li className="pink"></li>
            <li className="red"></li>
            <li className="green"></li>
            <li className="blue"></li>
          </ul>
        </div>
      </div>
      <Main>
        <h1>Välkommen!</h1>
        {collapse && (
          <Gift onClick={handleCollapse}>
            <figure>
              <img src={gift} alt="a wrapped gift" />
            </figure>
            <p>Klicka Här</p>
          </Gift>
        )}
        <div
          id="myLandbot"
          style={{
            width: collapse ? "0" : "400px",
            height: collapse ? "0" : "500px",
            transition: "height .25s ease-out",
          }}
        ></div>
        {!collapse && (
          <Gift onClick={handleCollapse}>
            <p>Stäng</p>
          </Gift>
        )}
      </Main>
    </>
  );
}

export default App;

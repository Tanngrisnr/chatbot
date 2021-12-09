import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import sigmalogo from "./images/sigmalogo.png";

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
    background-repeat: no-repeat;
    background-attachment: fixed;

    background-size: cover;
  }

#frame-content {
  background:red ;
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
`;
const Header = styled.header`
  color: white;
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  background: #e30613;
  z-index: 9;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;

  figure {
    width: 20%;
    img {
      width: 100%;
    }
  }
  h3 {
    text-align: center;
  }
`;

function App() {
  return (
    <>
      <Global />
      <Header>
        <figure>
          <img src={sigmalogo} alt="sigma's logo" />
          <h3>Receptionist</h3>
        </figure>
      </Header>
      <Main></Main>
    </>
  );
}

export default App;

import React from "react";
import styled from "styled-components";
import Profile from "./components/Profile";
import Introduction from "./components/Introduction";
import GlobalStyle from "./theme/globalStyles";
import Fade from "react-reveal/Fade";
import Particles from "react-particles-js";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
// import logo from './logo.svg';
// import "./App.css";

const AppWrapper = styled.div`
   {
    background: #181818;
    color: #4d4e4f;
    width: 100%;
    height: 100%;
  }
`;
// const FadeDiv = styled.div`
//    {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 100%;
//   }
// `;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Particles
          style={{ zIndex: 10, position: "relative" }}
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <Fade top>
          <Introduction />
          <Profile />
          <Skills />
          <Contact />
        </Fade>
      </AppWrapper>
    </>
  );
}
export default App;

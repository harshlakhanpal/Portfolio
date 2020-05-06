import React from "react";
import styled from "styled-components";
import Education from "./components/Education";
import Introduction from "./components/Introduction";
import GlobalStyle from "./theme/globalStyles";
import Fade from "react-reveal/Fade";
import Particle from "./components/Particle";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const AppWrapper = styled.div`
   {
    background: #181818;
    color: #4d4e4f;
    width: 100%;
    height: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Particle />
        <Fade top>
          <Introduction />
          <Education />
          <Skills />
          <Contact />
        </Fade>
      </AppWrapper>
    </>
  );
}
export default App;

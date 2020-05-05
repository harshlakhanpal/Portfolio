import React from "react";
import styled from "styled-components";
import Particle from "./components/Particles";
import Profile from "./components/Profile";
import Introduction from "./components/Introduction";
// import GlobalStyle from "./theme/globalStyles";
// import logo from './logo.svg';
// import "./App.css";

const AppWrapper = styled.div`
   {
    width: 100%;
    height: 100%;
  }
`;

const Section = styled.section`
   {
    ${"" /* max-width: 1336pax; */}

    position:absolute;
    top: ${(props) => props.distance};
    width: 100%;
    text-align: center;
    padding: 2em;
    color: "#4F4E4D";

    &:hover {
      color: "white";
    }
  }
`;
// const particlesOptions = {
//   particles: {
//     number: {
//       value: 150,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//   },
// };

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <AppWrapper>
        {/* <Header /> */}
        <Particle />
        <Section distance="17.5%">
          <Introduction />
        </Section>
        <Profile />
      </AppWrapper>
    </>
  );
}
export default App;

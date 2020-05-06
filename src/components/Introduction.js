import React from "react";
import styled, { keyframes } from "styled-components";
const pulse = keyframes`
25%  {transform: scale(0.9);}
  75%  {transform: scale(1.0);}
`;

const IntroLine = styled.h1`
   {
    font-size: 40px;
    ${"" /* padding-top: 10px; */}
    margin:10px 0;
    cursor: none;
    animation: ${pulse} 3s ease-in infinite;
    color: #4d4e4f;
  }
`;
const Para = styled.h2`
   {
    padding-top: 20px;
    font-size: 20px;
    margin: 20px 200px;
    animation: ${pulse} ease-in infinite 3s;
    color: #4d4e4f;
  }
`;
const Container = styled.section`
  ${"" /* max-width: 1336pax; */} {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 35%;
    text-align: center;
    z-index: 9;
  }
`;
function Introduction() {
  return (
    <>
      <Container>
        <IntroLine>
          &lt; Hi,I'm Harsh Lakhanpal &gt;
          <span role="img" aria-label="handwave">
            👋
          </span>
        </IntroLine>
        <Para>
          I'm a budding,self-taught Full-Stack Developer,looking forward to not
          only solve your problems but also learning from them. I am also
          interested in trying my hands on Open-Source Contributions.
          <br />
          When I'm not coding, I'm either playing{"   "}
          <span role="img" aria-label="football">
            ⚽
          </span>
          or{"   "}
          <span role="img" aria-label="gaming">
            🎮
          </span>
        </Para>
      </Container>
    </>
  );
}

export default Introduction;

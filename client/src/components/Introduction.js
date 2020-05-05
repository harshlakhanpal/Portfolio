import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const pulse = keyframes`
25%  {transform: scale(0.9);}
  75%  {transform: scale(1.1);}
`;

const IntroLine = styled.h1`
   {
    font-size: 40px;
    &:hover {
      animation: ${pulse} 2s ease-in infinite;
      color: white;
    }
  }
`;
const Para = styled.h2`
   {
    font-size: 20px;
  }
`;

function Introduction() {
  return (
    <>
      <IntroLine>Hi,I'm Harsh Lakhanpal👋</IntroLine>
      <Para>
        I'm a budding Full-Stack Developer looking to help in solving your
        problems <br /> and also(more importantly) learn from them.
      </Para>
    </>
  );
}

export default Introduction;

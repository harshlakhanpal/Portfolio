import React from "react";
import Particles from "react-particles-js";
// import Introduction from "../components/Introduction";
// import styled from "styled-components";
import "./Particles.css";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 600,
      },
    },
    color: {
      value: "#4F4E4D",
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
  },
};

const Particle = () => {
  return (
    <>
      <Particles params={particlesOptions} id="particles-js"></Particles>
    </>
  );
};

export default Particle;

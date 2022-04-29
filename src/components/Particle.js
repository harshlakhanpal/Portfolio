import React from "react";
import Particles from "react-particles-js";

const Particle = () => {
  return (
    <Particles
      id="particles"
      style={{ zIndex: 10, position: "relative" }}
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 1,
          },
          move: {
            enable: true,
            direction: "bottom",
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
  );
};

export default Particle;

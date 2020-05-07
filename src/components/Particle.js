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
  );
};

export default Particle;

import React from "react";
import styled from "styled-components";
import { Header, Container } from "./Education";
import { social } from "../details";
const Social = styled.a`
   {
    color: #4d4e4f;
    margin-right: 30px;
    margin-left: 30px;
    font-size: 2em;
    &:hover {
      color: #999999;
    }
  }
`;

const Contact = () => {
  const socialLinks = () => {
    return social.map((s) => (
      <Social
        key={s.name}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className={s.icon}
      />
    ));
  };

  return (
    <Container style={{ marginTop: "5%", marginBottom: "5%" }}>
      <Header style={{ marginTop: "2%" }}>Let's connect socially</Header>
      <>{socialLinks()}</>
    </Container>
  );
};

export default Contact;

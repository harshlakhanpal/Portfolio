import React from "react";
import styled from "styled-components";
import { Header, Container } from "./Profile";

const social = [
  {
    name: "Linked-In",
    url: "https://www.linkedin.com/in/harsh-lakhanpal-9b1180135/",
    icon: "fab fa-linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/HarshLakhanpal2",
    icon: "fab fa-twitter",
  },
  {
    name: "Angel List",
    url: "https://angel.co/u/harsh-lakhanpal",
    icon: "fab fa-angellist",
  },
  {
    name: "Github",
    url: "https://github.com/harshlakhanpal",
    icon: "fab fa-github ",
  },
  {
    name: "mail",
    url: "mailto:harshlakhanpaln@gmail.com",
    icon: "fab fa-envelope-square",
  },
];

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
  //   return <div>{socialLinks()}</div>;
  return (
    <Container>
      <Header>Let's connect socially</Header>
      <>{socialLinks()}</>
    </Container>
  );
};

export default Contact;

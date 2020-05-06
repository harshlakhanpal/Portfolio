import React from "react";
import styled, { keyframes } from "styled-components";
import { Header, ContentColumn, ContentRow, Container } from "./Profile";

const skills = [
  "Html",
  "Css",
  "Javascript(es6)",
  "React",
  "MongoDB",
  "Node.js  Express.js",
  "Redux",
  "GraphQL",
  "Git",
];

export const bounce = keyframes`{
   0%{
    padding-top: 8px;
    padding-bottom: 0;
  }
  
  50%{
    padding-top: 0;
    padding-bottom: 8px;
  }
  
  100%{
    padding-top: 8px;
    padding-bottom: 0;
  }
}`;
const Skill = styled.button`
   {
    border-radius: 20px;
    background: transparent;
    display: inline;
    border: 2px solid #4d4e4f;
    width: 150px;
    height: 55px;
    margin: 10px 20px;
    justify-content: center;
    color: #4d4e4f;
    &:hover {
      color: #999999;
      animation: ${bounce} 0.5s infinite ease-in;
      font-size: 20px;
    }
  }
`;

const Contentcolumn = styled(ContentColumn)`
  && {
    flex: 1 0 25%;
    margin-left: 5%;
  }
`;

const Skills = () => {
  const displaySkills = () => {
    let skill = skills.map((skill) => (
      <Contentcolumn key={skill}>
        <Skill disabled={true}>{skill}</Skill>
      </Contentcolumn>
    ));
    return skill;
  };
  return (
    <Container style={{ marginLeft: "8%" }}>
      {" "}
      <Header style={{ marginLeft: "-10%" }}>Skills</Header>
      <ContentRow>{displaySkills()}</ContentRow>
    </Container>
  );
};

export default Skills;

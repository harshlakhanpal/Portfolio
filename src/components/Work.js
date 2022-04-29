import React from "react";
import styled, { keyframes } from "styled-components";
import { Header, ContentColumn, ContentRow, Container } from "./Education";
import { workExperience } from "../details";

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
const ContentContainer = styled.div`
   {
    background: transparent;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
    color: #4d4e4f;
    &:hover {
      color: #999999;
      font-size: 20px;
    }
  }
`;

const ContentHeader = styled.div`
   {
    font-size: 22px;
    text-decoration: underline;
    margin-bottom: 10px;
  }
`;

const ContentSubHeader = styled.div`
   {
    font-size: 18px;
  }
`;

const Work = () => {
  const displayWorkExperience = () => {
    let work = workExperience.map((item) => (
      <ContentContainer>
        <ContentHeader>{` ${item.name} - ${item.about}`}</ContentHeader>
        <ContentSubHeader style={{ marginBottom: "10px" }}>{`${
          item.position
        } (${item.startDate} - ${
          item.isCurrent ? "Present" : item.endDate
        })`}</ContentSubHeader>

        <ContentSubHeader>Achievements/Tasks</ContentSubHeader>
        <ul>
          {item.tasks.length && item.tasks.map((task) => <li>{task}</li>)}
        </ul>
      </ContentContainer>
    ));
    return work;
  };
  return (
    <Container style={{ marginLeft: "8%" }}>
      <Header>Work Experience</Header>
      {displayWorkExperience()}
    </Container>
  );
};

export default Work;

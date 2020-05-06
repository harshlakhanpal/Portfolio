import React from "react";
import styled from "styled-components";
import Card from "./Card";

export const Container = styled.div`
  ${"" /* max-width: 1336pax; */} {
    width: 100 %;
    height: 50%;
    text-align: center;
    margin: 40px auto;
    &:hover {
      color: #999999;
    }
  }
`;
export const Header = styled.h1`
   {
    font-size: 30px;
    ${"" /* padding-top: 10px; */}
    text-align: center;

    margin: 10px 0;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const ContentRow = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  ${"" /* margin-left: 10%; */}
`;

export const ContentColumn = styled.section`
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

const Education = () => {
  return (
    <Container>
      <Header>Education</Header>
      <ContentRow>
        <ContentColumn>
          <Card name="CHRIST" />
        </ContentColumn>
        <ContentColumn>
          <Card name="SJPUC" />
        </ContentColumn>
        <ContentColumn>
          <Card name="SJHS" />
        </ContentColumn>
      </ContentRow>
    </Container>
  );
};

export default Education;

// Profile.js
import React from "react";
import styled from "styled-components";
// import Fade from "react-reveal/Fade";
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

// const ProfileImage = styled.img`
//   border-radius: 50%;
//   width: 150px;
//   border: 1px solid #ccc;
//   padding: 5px;
// `;

// const ProfileDetailsUsername = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const EditProfileButton = styled.div`
//   background-color: transparent;
//   border: 1px solid #dbdbdb;
//   color: #262626;
//   border-radius: 4px;
//   cursor: pointer;
//   font-weight: 600;
//   padding: 5px 9px;
//   text-transform: capitalize;
//   font-size: 14px;
//   margin-left: 20px;
// `;

// const HeadingThreeText = styled.h3``;

// const ParagraphText = styled.p`
//   margin-right: 25px;
// `;

// const ProfileDetailsMeta = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const ProfileDetailsName = styled.div`
//   text-align: left;
// `;

// const ImagesWrapper = styled.div`
//   margin-top: 50px;
//   display: flex;
//   flex-wrap: wrap;
// `;

function Profile() {
  return (
    <Container>
      <Header>Education</Header>
      {/* <Fade top>
        <Header>Education</Header>
        <Header>Education</Header>
        <Header>Education</Header>
      </Fade> */}
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
}

export default Profile;

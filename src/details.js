import github from "./images/github.svg";
import gmail from "./images/gmail.svg";
import twitter from "./images/twitter.svg";
import angellist from "./images/angellist.svg";
import linkedin from "./images/linkedin.svg";

export const social = [
  {
    name: "Linked-In",
    url: "https://www.linkedin.com/in/harsh-lakhanpal-9b1180135/",
    icon: linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/HarshLakhanpal2",
    icon: twitter,
  },
  {
    name: "Angel List",
    url: "https://angel.co/u/harsh-lakhanpal",
    icon: angellist,
  },
  {
    name: "Github",
    url: "https://github.com/harshlakhanpal",
    icon: github,
  },
  {
    name: "mail",
    url: "mailto:harshlakhanpaln@gmail.com",
    icon: gmail,
  },
];

export const skills = [
  "Html",
  "Css",
  "Javascript(es6)",
  "React",
  "MongoDB",
  "Node.js",
  "Redux",
  "GraphQL",
  "Git",
  "React Native",
  "AWS",
  "Next js",
];

export const Education = {
  CHRIST: {
    name: "Christ University(Bangalore)",
    graduation: "2019",
    course: "Bachelor Of Computer Applications(BCA)",
    cgpa: true,
    marks: "3.32",
  },
  SJPUC: {
    name: "St.Josephs Pre-University College(Bangalore)",
    graduation: "2016",
    course: "P.C.M.C",
    cgpa: false,
    marks: "81.67",
  },
  SJHS: {
    name: "St.Johns High School(Bangalore)",
    graduation: "2014",
    course: "Primary Education",
    cgpa: false,
    marks: "88.5",
  },
};

export const workExperience = [
  {
    name: "EduFund",
    position: "Full Stack Engineer",

    startDate: "04/09/2020",
    endDate: "",
    isCurrent: true,
    about: "Building India's first 529",
    tasks: [
      "Worked on building multiple screens, reusable components, features and various logical implementations across the mobile app.",
      "Learned multiple concepts while creating apis, handling apis/data from thrid party services and implementing multiple features across a microservice architecture.",
      "Gained some understanding about a few AWS services and got the chance to work on them as well.",
      "Worked on a white labelled solution for a crucial part of the product.",
      "Directly involved in implementing multiple third party services across the stack.",
    ],
  },
];

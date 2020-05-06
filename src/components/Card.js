import React from "react";

const Education = {
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
const Card = (props) => {
  let displayContent = Education[props.name];
  return (
    <div className="card" style={{ width: "20rem" }}>
      <div className="card-header" style={{ fontSize: "20px" }}>
        {displayContent.name}
      </div>
      <div className="card-body">
        <p className="card-text">Course:{displayContent.course}</p>
        <p className="card-text">Graduation:{displayContent.graduation}</p>
        {displayContent.cgpa === true ? (
          <p className="card-text">
            CGPA : {displayContent.marks}(4 point scale)
          </p>
        ) : (
          <p className="card-text">Percentage : {displayContent.marks}%</p>
        )}
      </div>
    </div>
  );
};

export default Card;

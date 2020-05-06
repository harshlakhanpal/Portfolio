import React from "react";
import { Education } from "../details";

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

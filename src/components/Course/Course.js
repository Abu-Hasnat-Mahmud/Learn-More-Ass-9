import React from "react";
import "./Course.css";

const Course = (props) => {
  const { name, image, fee, duration, description } = props.course;
  return (
    <div className="col shadow course-item rounded p-2 mb-3">
      <img src={image} className="rounded"></img>
      <div className="m-2 lh-sm">
        <p className="text-end text-muted lh-sm m-0">
          <span className="me-1">
            <i className="far fa-clock "></i>
          </span>
          {duration}
        </p>
        <h3>{name}</h3>
        <p className="text-muted lh-sm">{description}</p>
        <p className="text-muted text-end">{fee}</p>
      </div>
    </div>
  );
};

export default Course;

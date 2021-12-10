import React from "react";

import { MyDB } from "../Hooks/MyDB";
import "./Certificates.css";

const Courses = () => {
  const certificates = MyDB.certificates;
  return (
    <div className="container">
      <div className="row  g-4 ">
        {certificates.map((item) => {
          const { id, name, image, date } = item;
          return (
            <div key={id} className="col shadow certificate-item rounded p-2 me-3">
              <img src={image} className="rounded"></img>
              <div className="m-2 lh-sm text-center">
                <h3>{name}</h3>
                <p className="text-muted">Completed: {date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;

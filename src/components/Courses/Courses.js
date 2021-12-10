import React from 'react';
import Course from '../Course/Course';
import { MyDB  } from "../Hooks/MyDB";

const Courses = () => {
    const courses = MyDB.courses;
    return (
      <div className="container">
        <div className="row row-cols-3 gy-4 justify-content-between">
          {courses.map((item) => (
            <Course key={item.id} course={item}></Course>
          ))}
        </div>
      </div>
    );
};

export default Courses;
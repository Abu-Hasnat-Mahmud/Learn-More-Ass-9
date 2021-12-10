import React from "react";
import Course from "../Course/Course";
import { MyDB  } from "../Hooks/MyDB";

import useCourses from "../Hooks/useCourses";

const Home = () => {
  //const [courses, setCourses] = useCourses();
  // top 3 courses
  const courses = MyDB.courses.slice(0, 3);
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

export default Home;

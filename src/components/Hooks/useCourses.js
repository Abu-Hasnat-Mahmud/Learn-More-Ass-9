import React, { useEffect, useState } from "react";
import { courses } from "./MyDB";

const useCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(courses);
  }, []);

  return [courses, setCourses];
};

export default useCourses;

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  // this header Component
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container">
        <NavLink className="navbar-brand fs-2" to="/Home">
          Learner
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/Home"
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Home
              </NavLink>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>
            <li className="nav-item">
              <NavLink
                to="/Courses"
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Certificate"
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Certificate
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/About"
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

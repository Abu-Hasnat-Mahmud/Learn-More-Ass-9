import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import About from "../About/About";
import Cources from "../Courses/Courses";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Certificates from "../Certificates/Certificates";
import PageNotFound from "../PageNotFound/PageNotFound";

// this navigation componet
const Nav = () => {
  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/Courses">
            <Cources></Cources>
          </Route>
          <Route exact path="/About">
            <About></About>
          </Route>
          
          <Route exact path="/Certificate">
            <Certificates></Certificates>
          </Route>

          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
};

export default Nav;

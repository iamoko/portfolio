import React from "react";
import Nav from "./nav";
import Profile from "./profile";
import Content from "./content";
import { BrowserRouter as Router } from "react-router-dom";

function Main() {
  return (
    <Router>
      <div className="container mx-auto h-screen xl:max-w-[1300px] md:py-14">
        <div className="h-full md:flex">
          <div className="flex xl:w-[calc(100%_-_30rem)] lg:w-[calc(100%_-_10rem)]  w-full">
            <Nav />
            <Profile />
          </div>
          <Content />
        </div>
      </div>
    </Router>
  );
}

export default Main;

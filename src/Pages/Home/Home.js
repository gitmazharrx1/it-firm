import React from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Sector from "./Sector/Sector";
import Slider from "./Silder/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Sector></Sector>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;

import React from "react";
import { Carousel } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import sliderImg1 from "../../../Images/h2-bg-slider1.jpg";
import sliderImg2 from "../../../Images/h2-bg-slider2.jpg";

const Slider = () => {
  const handleButton = () => {
    toast.error("We Will Fixed it ASAP");
  };
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderImg1} alt="First slide" />
          <Carousel.Caption>
            <h1>
              We are <span className="text-danger">IT Service</span> Agency
            </h1>
            <h2>Think Big, We Make it! Possible!!</h2>
            <button onClick={handleButton} className="bg-primary rounded">
              Join With Us
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderImg2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderImg1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Toaster></Toaster>
    </div>
  );
};

export default Slider;

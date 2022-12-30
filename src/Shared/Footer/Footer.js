import React from "react";
import { Button } from "react-bootstrap";
import logo from "../../Images/update-logo-footer-light1.png";

const Footer = () => {
  return (
    <div className="footer-bg text-white ">
      <div className="row align-items-center pt-5 pb-5">
        <div className="col">
          <img src={logo} alt="" width="100px" />
          <p>
            We work with a passion of taking challenges and creating new ones in
            advertising sector.
          </p>
          <button className="bg-primary rounded">About Us</button>
        </div>
        <div className="col">
          <h1>Newsletter</h1>
          <p>Subscribe our newsletter to get our latest update & news.</p>
          <input type="email" name="" id="" placeholder="Enter Your Mail" />
          <span>
            <Button className="ms-2">Send Us</Button>
          </span>
        </div>
        <div className="col">
          <h1>Official info:</h1>
          <p>Dhaka Bangladesh</p>
          <p>Phone: +8801608800066</p>
          <p>Email: mazharulislam.rx1@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

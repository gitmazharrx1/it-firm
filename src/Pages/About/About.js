import React from "react";
import img from "../../Images/h2-intro-video1.jpg";
import icon1 from "../../Images/About/money-back-guarantee.png";
import icon2 from "../../Images/About/technical-support.png";

const About = () => {
  return (
    <div>
      <h1 id="about">
        About Our <span className="text-danger">Company</span>
      </h1>
      <div className="row my-5">
        <div className="col col-11 col-sm-11 col-md-5  col-xl-5">
          <img className="rounded" src={img} alt="" />
        </div>
        <div className="col me-1 mt-5 col-12 col-sm-12 col-md-6  col-xl-6">
          <h1>
            Choose <span className="text-primary">The Best</span>
            <br /> IT Service Company
          </h1>
          <p>
            An IT firm or MSP who keeps your IT running smoothly at all times is
            like a plumber who fixes your pipes; that’s what they are supposed
            to do. Many IT firms struggle.
          </p>
          <div className="d-flex justify-content-around align-items-center">
            <div className="d-flex justify-content-around align-items-center">
              <img src={icon1} width="70" height="70" alt="" />
              <span className="ms-2">
                <h3>
                  Moneyback <br /> Gurentee
                </h3>
              </span>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <img src={icon2} alt="" width="70" height="70" />
              <span className="ms-2">
                <h3>
                  Technical <br /> Support
                </h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

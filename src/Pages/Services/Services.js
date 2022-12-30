import React from "react";
import icon1 from "../../Images/Service/idea.png";
import icon2 from "../../Images/Service/webpage.png";
import icon3 from "../../Images/Service/process.png";
import icon4 from "../../Images/Service/hacker.png";

const Services = () => {
  return (
    <div id="service" className="service-bg">
      <h3 className="text-primary">~ Our Awesome Services ~</h3>
      <h1>
        We Are <span className="text-danger">Dedicated</span> To <br /> Serve
        You All Time.
      </h1>
      <div className="row justify-content-around my-5">
        <div className="col me-4 bg-light rounded">
          <img className="mt-4" src={icon2} width="70" height="70" alt="" />
          <h1>UI/UX & Web Design</h1>
          <p>
            With over a decade of experience, we’ve established ourselves as one
            of the pioneering agencies in the region. Our small, flexible, agile
            and design-led structures and processes allow us to be highly
            responsive and innovative.
          </p>
        </div>
        <div className="col me-4 bg-secondary rounded">
          <img className="mt-4" src={icon1} width="70" height="70" alt="" />
          <h1>Business Planning</h1>
          <p>
            With over a decade of experience, we’ve established ourselves as one
            of the pioneering agencies in the region. Our small, flexible, agile
            and design-led structures and processes allow us to be highly
            responsive and innovative.
          </p>
        </div>
        <div className="col me-4 bg-light  rounded">
          <img className="mt-4" src={icon3} width="70" height="70" alt="" />
          <h1>Project Management</h1>
          <p>
            With over a decade of experience, we’ve established ourselves as one
            of the pioneering agencies in the region. Our small, flexible, agile
            and design-led structures and processes allow us to be highly
            responsive and innovative.
          </p>
        </div>
        <div className="col me-4 bg-secondary rounded">
          <img className="mt-4" src={icon4} width="70" height="70" alt="" />
          <h1>
            Cyber <br /> Security
          </h1>
          <p>
            With over a decade of experience, we’ve established ourselves as one
            of the pioneering agencies in the region. Our small, flexible, agile
            and design-led structures and processes allow us to be highly
            responsive and innovative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

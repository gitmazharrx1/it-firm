import React, { useState } from "react";
import { Button, Fade } from "react-bootstrap";
import img from "../../Images/h2-banner1-600x473.jpg";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="portfolio">
      <h3 className="text-primary">~ Why choose Us? ~</h3>
      <h1>
        We Serve A Wide <span className="text-danger">Variety</span> <br /> Of
        Industries
      </h1>
      <h4>
        Below is just a small sample of some of the <br /> industries that we
        serve.
      </h4>
      <hr className="w-50 mx-auto" />
      <div>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="fade"
          aria-expanded={open}
        >
          Company Mission
        </Button>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="fade"
          aria-expanded={open}
          className="ms-4 bg-danger"
        >
          Awards Winner
        </Button>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="fade"
          aria-expanded={open}
          className="ms-4"
        >
          Using Software
        </Button>
        <Fade in={open}>
          <div id="fade">
            <div>
              <div className="row my-5">
                <div className="col col-12 col-sm-12 col-md-6  col-xl-6">
                  <img className="rounded" src={img} alt="" />
                </div>
                <div className="col mt-5 col-12 col-sm-12 col-md-6  col-xl-6">
                  <h4 className="text-primary">
                    Touching Lives Through Technology
                  </h4>
                  <h1>
                    Fingent’s Four Pillars <br /> Of Influence
                  </h1>
                  <p>
                    We believe in four pillars of influence that drive our
                    growth. This <br /> is ingrained in everything we do We use
                    technology to create a <br /> better and smarter
                    environment.
                  </p>
                  <button className="bg-primary p-3 rounded border-none">
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Portfolio;

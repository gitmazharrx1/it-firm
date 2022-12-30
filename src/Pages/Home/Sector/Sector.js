import React from "react";
import img1 from "../../../Images/coding.png";
import img2 from "../../../Images/customer-service.png";
import img3 from "../../../Images/research.png";
import img4 from "../../../Images/technical-support.png";

const Sector = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="mx-1 col  border  border-secondary border-3 rounded  ">
          <img src={img1} width="70px" height="70px" alt="" />
          <h2>Website Development</h2>
        </div>
        <div className="mx-1 col  border p-2 border-secondary border-3 rounded ">
          <img src={img2} width="70px" height="70px" alt="" />
          <h2>24/7 Customer Service</h2>
        </div>
        <div className="mx-1 col   border p-2 border-secondary border-3 rounded ">
          <img src={img3} width="70px" height="70px" alt="" />
          <h2>Technical Support</h2>
        </div>
        <div className="mx-1 col   border p-2 border-secondary border-3 rounded ">
          <img src={img4} width="70px" height="70px" alt="" />
          <h2>Research center</h2>
        </div>
      </div>
    </div>
  );
};

export default Sector;

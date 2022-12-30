import React from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const { detailsId } = useParams();
  return (
    <div className="bg-success">
      <h1 className="my-5 p-5">Here We can See All Details about Blog</h1>
      <h1 className="my-5 p-5">Details Blog Id :{detailsId}</h1>
    </div>
  );
};

export default Details;

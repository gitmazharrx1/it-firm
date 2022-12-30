import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = (props) => {
  const { id, date, img, title, para } = props.blog;
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="col border border-secondary my-5 mx-1 rounded service-bg">
      <img src={img} alt="" width="350" height="250" />
      <p>Date : {date}</p>
      <h4>{title}</h4>
      <p>{para}</p>
      <button
        onClick={() => handleDetails(id)}
        className="bg-primary rounded p-3 my-3"
      >
        See details
      </button>
    </div>
  );
};

export default Blog;

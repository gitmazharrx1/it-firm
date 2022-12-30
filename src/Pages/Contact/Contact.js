import React from "react";

const Contact = () => {
  return (
    <div className="mt-5">
      <h1 className="mt-5 p-4">Please Fill Up This Form for Contact With Us</h1>
      <div>
        <form action="">
          <h4>Name</h4>
          <input type="text" name="name" id="" placeholder="Enter Your Name" />
          <h4>Email</h4>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
          />
          <h4>Type Your Word</h4>
          <textarea name="" id="" cols="70" rows="5"></textarea>
        </form>
        <button className="bg-primary my-3 rounded">Submit</button>
      </div>
    </div>
  );
};

export default Contact;

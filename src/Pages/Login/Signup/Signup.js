import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast, Toaster } from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    toast.success("Check Your Email for Verify Account");
  };
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h1 className="text-primary mt-5 p-4">Please Signup Here!!</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onBlur={handleName}
            type="text"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setChecked(!checked)}
            type="checkbox"
            label="Agree With Terms and Condition"
          />
        </Form.Group>

        <Button
          disabled={!checked}
          className="my-2"
          variant="primary"
          type="submit"
        >
          SignUp
        </Button>
        <p className="text-primary">
          Already Have Account?{" "}
          <Button
            as={Link}
            type="submit"
            to="/login"
            className="text-danger bg-white border-white "
          >
            Login Here
          </Button>
        </p>
      </Form>
      <SocialLogin></SocialLogin>
      <Toaster />
    </div>
  );
};

export default Signup;

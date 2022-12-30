import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast, Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <h1 className="text-primary mt-5 p-4">Please Login Here!!</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            If you forgot Your Password,Please Enter Your Mail Before Reset
            Password!
          </Form.Text>
        </Form.Group>

        <Form.Group
          onBlur={handlePassword}
          className="mb-2"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <p className="text-primary">
          Forget Your Password?{" "}
          <Button
            disabled={!email}
            onClick={async () => {
              const success = await sendPasswordResetEmail(email);
              if (success) {
                toast.success("Sent Email Successfully!");
              }
            }}
            className="text-danger bg-white border-white "
          >
            Click here for Reset
          </Button>
        </p>

        <Button className="my-2" variant="primary" type="submit">
          Login
        </Button>

        <p className="text-primary">
          Haven't Account?{" "}
          <Button
            type="submit"
            as={Link}
            to="/signup"
            className="text-danger bg-white border-white "
          >
            Create New Account
          </Button>
        </p>
      </Form>
      <SocialLogin></SocialLogin>
      <Toaster />
    </div>
  );
};

export default Login;

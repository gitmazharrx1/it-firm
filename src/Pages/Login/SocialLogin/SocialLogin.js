import React from "react";
import google from "../../../Images/google.png";
import facebook from "../../../Images/facebook.png";
import github from "../../../Images/github-sign.png";
import { Button } from "react-bootstrap";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast, Toaster } from "react-hot-toast";

const SocialLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  const [signInWithGithub] = useSignInWithGithub(auth);
  const handleGithubLogin = () => {
    signInWithGithub();
  };

  const handleFacebookLogin = () => {
    toast.error("Opps!! We are Working with it, ASAP We will FIXED it!");
  };
  return (
    <div>
      <div>
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          <p className="mt-2 px-2">or</p>
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <Button
            onClick={() => handleGoogleLogin()}
            className="d-flex mx-2 align-items-center social-bg"
          >
            <img src={google} width="25px" height="25px" alt="" />
            <p className="mt-3 ms-2">Continue With Google</p>
          </Button>
          <Button
            onClick={() => handleGithubLogin()}
            className="d-flex mx-2 align-items-center social-bg"
          >
            <img src={github} width="25px" height="25px" alt="" />
            <p className="mt-3 ms-2">Continue With GitHub</p>
          </Button>
          <Button
            onClick={() => handleFacebookLogin()}
            className="d-flex mx-2 align-items-center social-bg"
          >
            <img src={facebook} width="25px" height="25px" alt="" />
            <p className="mt-3 ms-2">Continue With Facebook</p>
          </Button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;

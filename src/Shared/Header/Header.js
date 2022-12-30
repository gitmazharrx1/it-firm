import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Images/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img src={logo} width="100px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              {user ? (
                <Nav.Link
                  onClick={async () => {
                    const success = await signOut();
                    if (success) {
                      toast.success("Successfully Signout!");
                    }
                  }}
                >
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Toaster />
    </div>
  );
};

export default Header;

import React, { useContext,useState  } from "react";
import HeaderCartButton from "./HeaderCartButton";
import AuthContext from "../store/auth-context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
const authCtx = useContext(AuthContext)

  const logoutHandler=(e)=>{
    e.preventDefault()
    authCtx.logout()
  }
  return (
    <Navbar bg="dark" expand="lg" className="py-3">
    <Container fluid>
      <Nav.Link
        href="/home"
        className="border border-5 border-info rounded-4 bg-dark ms-3"
      >
        <h5 className="text-white fw-bold border p-1 border-5 rounded-3 border-primary m-1">
          Vw
        </h5>
      </Nav.Link>
      <Navbar.Brand
        href="/home"
        className="badge text-wrap fst-italic text-white mt-1"
      >
        <h5>VOGUEWAY</h5>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 m-auto "
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/store" className="text-white fs-5 mx-3">
            FashionHub
          </Nav.Link>
          <Nav.Link href="/about" className="text-white fs-5 mx-3">
            About
          </Nav.Link>
          <Nav.Link href="/contact" className="text-white fs-5 mx-3">
            Contact-us
          </Nav.Link>
        </Nav>
        <Nav.Link href="/login" className="text-white fs-5 mx-3">
        Login
      </Nav.Link>
      <Nav.Link onClick={logoutHandler} className="text-white fs-5 mx-3">
      Logout
    </Nav.Link>
        <Nav>
          <Nav.Link className="me-3">
              <HeaderCartButton className="btn btn-info px-3 py-2 text-success fw-bold" onShow={props.onShow}/>
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>    
    </Container>
  </Navbar>

  );
};

export default Header;

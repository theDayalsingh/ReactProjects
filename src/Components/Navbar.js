import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../Pages/Store/Cart";

function NavbarHeader() {
  const [modalShow, setModalShow] = useState(false);

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
            <Nav.Link href="/blog" className="text-white fs-5 mx-3">
              Vogue-Blog
            </Nav.Link>
            <Nav.Link href="/about" className="text-white fs-5 mx-3">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart" className="me-3">
              <Button
                className="btn btn-info px-3 py-2 text-success fw-bold"
                onClick={() => setModalShow(true)}
              >
                CART
              </Button>
              <Cart show={modalShow} onHide={() => setModalShow(false)} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;

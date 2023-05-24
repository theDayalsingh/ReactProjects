import React from "react";
import Cart from "../components/Cart/Cart";
import { Container } from "react-bootstrap";

const Store = (props) => {
  return (
    <Container>
      {props.cart && <Cart onClose={props.onClose} />}
      <div className="title">
        <h1>The Generics</h1>
      </div>
    </Container>
  );
};

export default Store;

import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import CardImage from "./CardImage";
import Nav from "react-bootstrap/Nav";

function HomeCard(props) {
  

  return (
    <Card
      style={{ width: "18rem" }}
      className="rounded m-3 border border-5 p-1 border-light"
    >
      <CardImage image={props.image} />
      <Card.Body>
        <Card.Title className="text-center">{props.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        <ListGroup.Item>
          {props.price} Q:{props.quantity}
        </ListGroup.Item>
        <Nav.Link to="/cart" onClick={()=>addToCart(id,price)}>
        <Button className="list-group-flush text-center">
          Add to Cart
        </Button>
        </Nav.Link>
      </ListGroup>
      <Card.Body className="text-center">
        <Button href="/store" className="rounded-5 mx-3 p-3 bg-info"></Button>
        <Button href="/store" className="rounded-5 mx-3 p-3 bg-danger"></Button>
        <Button
          href="/store"
          className="rounded-5 mx-3 p-3 bg-warning"
        ></Button>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;

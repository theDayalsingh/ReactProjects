import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function Cart(props) {


  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          cartItems
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
                   <Row>
            <Col xs={6} md={4}>
            {props.name}
            </Col>
            <Col xs={6} md={4}>
            price
            </Col>
            <Col xs={6} md={4}>
             {props.quantity}
            </Col>
          </Row>
          <Row>
          <Col xs={12} md={8}>
          <Button href='/store'>Purchase</Button>
          </Col>
        </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Cart

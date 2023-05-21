import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HomeCard from './Card/Card';
import CardDetails from './Card/CardDetails';

function createCard(details) {
  return (
    <HomeCard
     quantity={details.quantity}
      name={details.name}
      image={details.imgURL}
      price={details.price}
    />
  );
}
let cardshow=CardDetails.map(createCard);

const Store = () => {
  return (
    <Container>
    <Row className='text-center'>
      
    {cardshow}
  
          </Row>
  </Container>
  )
}

export default Store

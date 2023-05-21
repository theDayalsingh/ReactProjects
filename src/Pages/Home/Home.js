import React,{Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeCarousel from './Carousel';
import HomeCard from './Card/Card';
import CardDetails from './Card/CardDetails';
import Testinomials from'./Testinomials/Testinomials';
import Testinomialdata from './Testinomials/TestinomialData';
import classes from './Home.module.css';
import { FaShippingFast } from 'react-icons/fa';
import { MdOutlineSupportAgent} from 'react-icons/md';
import { GiReturnArrow} from 'react-icons/gi';
import { TbSquareRoundedCheckFilled} from 'react-icons/tb'

function createCard(details) {
  return (
    <HomeCard
      key={details.id}
      name={details.name}
      image={details.imgURL}
    />
  );
}

function createTestinomials(data) {
  return (
    <Testinomials
      key={data.id}
      name={data.name}
      image={data.imgURL}
    />
  );
}

let cardshow=CardDetails.map(createCard);
let testinomialshow=Testinomialdata.map(createTestinomials);

const Home = () => {
  return (
    <div className={classes.home}>
    <HomeCarousel/>
    <Container className='my-4'>
    <Row className='fs-2 mb-2'>
      <Col className='text-center'><FaShippingFast/></Col>
      <Col className='text-center'><GiReturnArrow/></Col>
      <Col className='text-center'><MdOutlineSupportAgent/></Col>
      <Col className='text-center'><TbSquareRoundedCheckFilled/></Col>
      </Row>
      <Row>
      <Col className='text-center fs-5'>Free Shipping</Col>
      <Col className='text-center fs-5'>30-Day Returns</Col>
      <Col className='text-center fs-5'>24*7 Customer Suppport</Col>
      <Col className='text-center fs-5'>Quality</Col>
      </Row>
      <Row className='text-center'>
      
      {cardshow}
    
            </Row>
    </Container>
    <section className={classes.homesection}>
    Updates on What Is Trending and New Product Launches
Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.

Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.
    </section>
      <Container>
      <Row>
      
      {testinomialshow}
      
      </Row>
      </Container>
    </div>
  )
}

export default Home

import { Fragment } from "react";
import classes from "./About.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutimg from "../../Assets/aboutimg.jpg";
import { WiSunset } from "react-icons/wi";
import { SlBasketLoaded,SlBadge} from "react-icons/sl";

const About = () => {
  return (
    <Fragment >
    <img className={classes["main-image"] } src={aboutimg} alt="About-img"/>
    <Container fluid className={classes.allbackground}>
    <Row>
      <Col className="fs-1 fw-bold mt-5 text-center ">About Us</Col>
    </Row>
      <Row className="py-3">
        <Col xs={2}></Col>
        <Col xs={2}><SlBasketLoaded size='13vh'/></Col>
        <Col className="fs-4" xs={6}>VougueWay is the best of all online stores is the complete convenience that it offers.
         You can view your favourite brands with price options for different products in one place.
         </Col>
        <Col xs={2}></Col>
      </Row>
      <Row>
      <Col className="fs-1 fw-bold mt-5 text-center">The Legacy</Col>
    </Row>
      <Row className="py-3">
        <Col xs={2}></Col>
        <Col xs={2}><SlBadge size='13vh'/></Col>
        <Col className="fs-4" xs={6}>VougueWay, India’s no. 1 online fashion destination justifies its fashion relevance 
        by bringing something new and chic to the table on the daily.
         </Col>
        <Col xs={2}></Col>
      </Row>
      <Row>
      <Col className="fs-1 fw-bold mt-5 text-center">Our Mission </Col>
    </Row>
      <Row className="py-3">
        <Col xs={2}></Col>
        <Col xs={2}><WiSunset size='13vh'/></Col>
        <Col className="fs-4" xs={5}>Opportunity to master any domain in fashion with tips from celebrity stylists at 
        VougueWay Masterclass sessions.
        Curated collections from celeb stylists.
        </Col>
        <Col xs={2}></Col>
      </Row>
      <Row className="p-5">
         <Col className="fs-4 fw-bold text-success">VougueWay is one of the unique online shopping sites in India where fashion is 
        accessible to all. Check out our new arrivals to view the latest designer clothing, footwear 
        and accessories in the market. You can get your hands on the trendiest style every season in 
        western wear.
        </Col>        
      </Row>
    </Container>
    </Fragment>
  );
};

export default About;

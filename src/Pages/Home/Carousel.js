import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Carousel.module.css";
import caraA from "../../Assets/cara1.jpg";
import caraB from "../../Assets/cara11.jpg";
import caraC from "../../Assets/cara2.jpg";
import caraD from "../../Assets/cara22.jpg";
import caraE from "../../Assets/cara3.jpg";
import caraF from "../../Assets/cara33.jpg";

function HomeCarousel() {
  return (
    <Carousel className={classes.carousel}>
      <Carousel.Item interval={1000}>
        <Container fluid>
          <Row className={classes.carouselImg}>
            <Col xs={6}>
              <img
                className="d-block w-100 h-100 d-inline-block img-fluid"
                src={caraA}
                alt="Second slide"
              />
            </Col>
            <Col xs={6}>
              <img
                className="d-block w-100 h-100 d-inline-block img-fluid"
                src={caraB}
                alt="Second slide"
              />
            </Col>
          </Row>
        </Container>
        <Carousel.Caption>
          First slide label
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1800}>
        <Container fluid>
          <Row className={classes.carouselImg}>
            <Col xs={6}>
              <img
                className="d-block w-100 h-100 d-inline-block"
                src={caraC}
                alt="Second slide"
              />
            </Col>
            <Col xs={6}>
              <img
                className="d-block w-100 h-100 d-inline-block"
                src={caraD}
                alt="Second slide"
              />
            </Col>
          </Row>
        </Container>
        <Carousel.Caption>
          Second slide label
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container fluid>
          <Row className={classes.carouselImg}>
            <Col xs={6}>
              <img
                className="d-block w-100 h-100 d-inline-block"
                src={caraE}
                alt="Second slide"
              />
            </Col>
            <Col xs={6}>
              <img
                className="d-block w-100 h-100 d-inline-block"
                src={caraF}
                alt="Second slide"
              />
            </Col>
          </Row>
        </Container>
        <Carousel.Caption>
          Third slide label
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;

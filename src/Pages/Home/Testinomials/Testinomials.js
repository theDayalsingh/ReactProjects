import Card from "react-bootstrap/Card";
import TestinomialsImage from "./TestinomialsImage";

function HomeCard(props) {
  return (
    <Card style={{ width: "9rem"}} className="rounded-5 m-2 pt-2 border-light">
<TestinomialsImage image={props.image}/>
      <Card.Body>
      <Card.Title className="text-center">{props.name}</Card.Title>
    </Card.Body>
    </Card>
  );
}

export default HomeCard;

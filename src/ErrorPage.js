import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ErrorPage = () => {
  return (
    <>
      <Container className="text-center border  border-4 m-5 p-5 bg-secondary text-white rounded-5 border-primary">
          <h2 >404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

        
            <Button className="border border-2 mt-2 px-5 bg-info text-white rounded-4 border-primary" href="/">Go Back to Home</Button>
      </Container>
    </>
  );
};

export default ErrorPage;
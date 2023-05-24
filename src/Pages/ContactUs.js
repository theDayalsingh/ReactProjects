import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <>
      <h2 className="text-center m-3 text-secondary fw-bold ">CONTACT-US</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6886.564551713182!2d76.40838419012668!3d30.342926658302922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910285e7e9f66af%3A0xcf40d065f58acbbb!2sGurbax%20Colony%2C%20Patiala%2C%20Punjab%20147001!5e0!3m2!1sen!2sin!4v1684428183318!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Container>
        <Form
          action="https://formspree.io/f/xlekvkdp"
          method="POST"
          className="m-5 p-5 border bg-secondary border-primary border-3 rounded-5 text-center "
        >
        <h2 className="pb-5 fw-bold text-white"> Enquiry-Form</h2>
    
        <Form.Group className="mb-3 text-center">
            <Form.Control
              type="text"
              className="text-center p-2 fs-5 fw-bold"
              placeholder="Name"
              name="Name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Contact No."
              name="Contact"
              className="text-center p-2 fs-5 fw-bold"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="Email"
              className="text-center p-2 fs-5 fw-bold"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              placeholder="Text-area"
              className="text-center fs-5 fw-bold"
              as="textarea"
              rows={3}
              name="Textarea"
            />
          </Form.Group>

          <Button type="submit" value="send" className="px-5 fs-5 fw-bold bg-info text-white border-primary border-2 rounded-3">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Contact;

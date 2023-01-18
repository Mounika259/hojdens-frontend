import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Footer from './footer';
import NavigationBar from './navbar';

function Contact() {
  /*  const callAction = () => {
    window.location = 'tel:036-333 17 20';
  };
 */
  return (
    <>
      <NavigationBar />
      <header className="contacts-header text-center">
        Welcome!
        <br /> We are glad to help you with your questions
      </header>
      <Card className="contact-us pb-4 pt-4">
        <Card.Body>
          <Row>
            <Col>
              <Card.Title className="contacts-title">Contact us</Card.Title>
              <Card.Text className="call">
                Telephone: 036-333 17 20 <br />
                Working days: 08-20 <br />
                Saturday: 10-19
                <br />
                Sunday: 10-19
              </Card.Text>
              <Button className="btn-danger call-btn">
                <a href="tel:+46 36-333 17 20 ">Call us</a>
              </Button>
            </Col>
            <Col xs={6}>
              <Card.Title className="contacts-title">Open timings</Card.Title>
              <Card.Text className="call">
                Working days: 08-20 <br />
                Saturday: 10-19
                <br />
                Sunday: 10-19
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
}
export default Contact;

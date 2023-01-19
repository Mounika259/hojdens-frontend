import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function SubscribeForm() {
  /*  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    // TODO
    // eslint-disable-next-line no-console
    console.log(e);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  }; */

  return (
    <div className="subscribe mb-4">
      <Form>
        <Form.Group>
          <Row>
            <Col sm="auto">
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                name
              </Form.Label>
              <Form.Control
                aria-label="Your email address"
                name="email_address"
                placeholder="Subscribe via e-mail"
                required
                type="email"
                // onChange={handleEmailChange}
                // value={email}
              />
            </Col>
            <Col xs="auto">
              <Button
                type="submit"
                size="md"
                className="btnSubscribe btn-danger"
              >
                Subscribe
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
}
export default SubscribeForm;

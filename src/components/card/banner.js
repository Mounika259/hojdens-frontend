import React from 'react';
import { Card } from 'react-bootstrap';

function Banner() {
  return (
    <div className="offer-banner">
      <div className="col-md-6">
        <Card className="text-center card-offer-left">
          <Card.Body>
            <Card.Title className="offer-title">Special Offers</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6">
        <Card className="text-center card-offer-right">
          <Card.Body>
            <Card.Title className="offer-title">Special Offers</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Banner;

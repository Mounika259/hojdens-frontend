import React from 'react';
import { Card } from 'react-bootstrap';

function Offer() {
  return (
    <div>
      <div className="row">
        <Card className="text-center card-offer">
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
export default Offer;

import React from 'react';
import { Card } from 'react-bootstrap';

function Banner() {
  return (
    <div className="offer-banner my-4">
      <div className="col-md-6">
        <Card className="text-center card-offer-left">
          <Card.Body>
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
            <img
              src={require('../assets/images/c2.jpg')}
              alt="item"
              width={400}
              height={300}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Banner;

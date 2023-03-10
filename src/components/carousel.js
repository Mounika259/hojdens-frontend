import React from 'react';
/* import { Button, Card } from 'react-bootstrap'; */
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <div>
      <div className="row">
        <div>
          <Carousel fade className="carousel-items">
            <Carousel.Item className="item" interval={2000}>
              <img
                src={require('../assets/images/c1.jpg')}
                alt="First-slide"
                width={1500}
                height={600}
              />
            </Carousel.Item>
            <Carousel.Item className="item" interval={2000}>
              <img
                src={require('../assets/images/c2.jpg')}
                alt="Second-slide"
                width={1500}
                height={600}
              />
            </Carousel.Item>
            <Carousel.Item className="item" interval={2000}>
              <img
                src={require('../assets/images/c3.jpg')}
                alt="Third-slide"
                width={1500}
                height={600}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        {/*  <div className="col-md-6">
          <Card className="text-center main-offer">
            <Card.Body>
              <Card.Title className="offer-title">Special Offers</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button className="btn-danger offer-btn">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}
      </div>
    </div>
  );
}
export default CarouselComponent;

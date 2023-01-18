import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Products } from '../products';
/* import ShowMore from '../showMore';
 import { Products } from '../../products';
import ShowMore from '../showMore'; */

function CardGrid(data) {
  console.log(data);
  const getColumnsForRow = () => {
    let items = [];
    // eslint-disable-next-line react/destructuring-assignment
    if (data.data === 'noCategory') {
      items = Products.slice(0, 6).map((product) => (
        <div key={product.id}>
          <Card className="text-center">
            <Card.Body>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaPhzScJPYZs8LPQygV9kcYHOPYu0EhkOIpvvIlRriw&s"
                alt="item"
              />
              <Card.Title className="offer-title">{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ));
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (data.data === 'vegetables') {
      const vegetables = Products.filter(
        (product) => product.category === 'vegetables'
      );
      items = vegetables.map((vegetable) => (
        <div key={vegetable.id}>
          <Card className="text-center">
            <Card.Body>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaPhzScJPYZs8LPQygV9kcYHOPYu0EhkOIpvvIlRriw&s"
                alt="item"
              />
              <Card.Title className="offer-title">{vegetable.title}</Card.Title>
              <Card.Text>{vegetable.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ));
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (data.data === 'snacks') {
      const snacks = Products.filter(
        (product) => product.category === 'snacks'
      );
      items = snacks.map((snack) => (
        <div key={snack.id}>
          <Card className="text-center">
            <Card.Body>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaPhzScJPYZs8LPQygV9kcYHOPYu0EhkOIpvvIlRriw&s"
                alt="item"
              />
              <Card.Title className="offer-title">{snack.title}</Card.Title>
              <Card.Text>{snack.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ));
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (data.data === 'meat') {
      const meat = Products.filter((product) => product.category === 'meat');
      items = meat.map((meatItems) => (
        <div key={meatItems.id}>
          <Card className="text-center">
            <Card.Body className="card-body">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaPhzScJPYZs8LPQygV9kcYHOPYu0EhkOIpvvIlRriw&s"
                alt="item"
              />
              <Card.Title className="offer-title">{meatItems.title}</Card.Title>
              <Card.Text>{meatItems.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ));
    }
    return items;
  };
  return (
    <div>
      <div className="row">
        <Row>
          <Col className="cardGrid">{getColumnsForRow()}</Col>
        </Row>
      </div>
    </div>
  );
}
export default CardGrid;

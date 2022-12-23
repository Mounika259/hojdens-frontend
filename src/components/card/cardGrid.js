import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Products } from '../../products';
import ShowMore from '../showMore';
/* import { Products } from '../../products';
import ShowMore from '../showMore'; */

function CardGrid() {
  const columnsPerRow = 4;
  const getColumnsForRow = () => {
    const items = Products.map((product) => (
      <div className="flex-fill" key={product.id}>
        <Card className="text-center card-offer">
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
    return items;
  };
  return (
    <div>
      <div className="row cardGrid">
        <Row lg={2}>
          <Col className="d-flex" md="6">
            {getColumnsForRow(columnsPerRow)}
          </Col>
        </Row>
      </div>
      <div className="row">
        <ShowMore />
      </div>
    </div>
  );
}

export default CardGrid;

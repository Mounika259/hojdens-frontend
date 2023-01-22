/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Products } from '../products';
import ShowMore from './showMore';

function CardGrid(data) {
  // const [category, setCategory] = useState('');
  console.log(data);
  const getColumnsForRow = () => {
    let items = [];
    const [count, setCount] = useState(0);
    // eslint-disable-next-line react/destructuring-assignment
    if (data.data === 'noCategory') {
      items = Products.slice(0, 5).map((product) => (
        <div key={product.id}>
          <Card className="cardGrid text-center">
            <Card.Body>
              <img className="productImg" src={product.images} alt="item" />
              <Card.Title className="offer-title">{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ));
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (data.data === 'vegetables') {
      /* setCategory('vegetables');
      console.log(category); */
      const vegetables = Products.filter(
        (product) => product.category === 'vegetables'
      );
      items = vegetables.map((vegetable) => (
        <div key={vegetable.id}>
          <Card className="cardGrid text-center">
            <Card.Body>
              <img
                src={vegetable.images}
                alt="item"
                width="200px"
                height="150px"
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
      // setCategory('cookies');
      const snacks = Products.filter(
        (product) => product.category === 'snacks'
      );
      items = snacks.map((snack) => (
        <div key={snack.id}>
          <Card className="cardGrid text-center">
            <Card.Body>
              <img className="productImg" src={snack.images} alt="item" />
              <Card.Title className="offer-title">{snack.title}</Card.Title>
              <Card.Text>{snack.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ));
      console.log(items);
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (data.data === 'meat') {
      // setCategory('meat');
      const meat = Products.filter((product) => product.category === 'meat');
      items = meat.map((meatItems) => (
        <div key={meatItems.id}>
          <Card className="cardGrid text-center">
            <Card.Body className="card-body">
              <img className="productImg" src={meatItems.images} alt="item" />
              <Card.Title className="offer-title">{meatItems.title}</Card.Title>
              <Card.Text>{meatItems.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ));
    }
    if (items.length > 5) {
      setCount(count + 1);
    }
    return items;
  };
  return (
    <div>
      {data.data !== 'noCategory' ? <h3>{data.data}</h3> : null}

      <div className="row">
        <Row>
          <Col className="cardGrid">{getColumnsForRow()}</Col>
          {/*  <Col>
            {count >= 1 ? (
              <div>
                <ShowMore />
              </div>
            ) : null}
          </Col> */}
          <ShowMore />
        </Row>
      </div>
    </div>
  );
}
export default CardGrid;

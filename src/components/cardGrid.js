/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Products } from '../products';

function CardGrid(data) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/products').then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);
  // const [category, setCategory] = useState('');
  const [index, setIndex] = useState(6);
  const [isCompleted, setIsCompleted] = useState(false);
  console.log(data);
  const getColumnsForRow = () => {
    let items = [];
    // const [count, setCount] = useState(1);
    // eslint-disable-next-line react/destructuring-assignment
    if (data.data === 'noCategory') {
      items = products.map((product) => (
        <div key={product.id}>
          <Card className="cardGrid text-center">
            <Card.Body>
              <p>
                <img
                  className="productImg"
                  /* src={require(`./assets/images/${product.images}`).default} */
                  src={product.images}
                  alt="item"
                />
              </p>
              <Card.Title className="offer-title">{product.title}</Card.Title>
              <Card.Text className="offer-price">{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ));
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (data.data === 'Vegetables') {
      /* setCategory('vegetables');
      console.log(category); */
      const vegetables = Products.filter(
        (product) => product.category === 'Vegetables'
      );
      items = vegetables.map((vegetable) => (
        <div key={vegetable.id}>
          <Card className="cardGrid text-center">
            <Card.Body>
              <img
                className="productImg"
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
    if (data.data === 'Snacks') {
      // setCategory('cookies');
      const snacks = Products.filter(
        (product) => product.category === 'Snacks'
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
    if (data.data === 'Meat') {
      // setCategory('meat');
      const meat = Products.filter((product) => product.category === 'Meat');
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
    return items;
  };

  const loadMore = () => {
    setIndex(index + 5);
    console.log(index);
    if (index >= Products.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  useEffect(() => {
    getColumnsForRow();
  }, []);

  return (
    <div>
      {data.data !== 'noCategory' ? <h3>{data.data}</h3> : null}
      <div className="row">
        <Row>
          <Col className="cardGrid">{getColumnsForRow()}</Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center mt-4 mb-4">
              {isCompleted ? (
                <Button
                  className="btn-danger offer-btn disabled"
                  size="sm"
                  onClick={loadMore}
                  type="button"
                >
                  Show More
                </Button>
              ) : (
                <Button
                  className="btn-danger offer-btn"
                  size="sm"
                  onClick={loadMore}
                  type="button"
                >
                  Show More
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default CardGrid;

/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function SearchResult() {
  // const items = [];
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();
  console.log(location.state.data);
  const getColumnsForRow = () => {
    let items = [];
    items = location.state.data.map((product) => (
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
    /*     if (getColumnsForRow() ) {
      <h2 className="offers-header text-center">Search Items found!</h2>;
    } else {
      <h2 className="offers-header text-center">No Items found!</h2>;
    } */
    return items;
  };

  return (
    <>
      {' '}
      <Card className="searchResult pb-4 pt-4">
        <Card.Body>
          <Row>
            <Col className="cardGrid">{getColumnsForRow()}</Col>
          </Row>
          <Row />
        </Card.Body>
      </Card>
    </>
  );
}
export default SearchResult;

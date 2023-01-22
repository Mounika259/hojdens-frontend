/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Products } from '../products';

function SearchBarSection() {
  const navigate = useNavigate();
  const [query, setQuery] = useState({ data: '' });
  const [searchResult, setSearchResult] = useState([]);
  let items = [];
  const getItems = () => {
    items = Products.filter(
      (product) =>
        product.category.includes(query) || product.tags.includes(query)
    );
    console.log(items);
    return items;
  };
  const searchHandler = (e) => {
    e.preventDefault();
    getItems();
    /*   if (query.trim) {
      navigate(`/search/${query}`);
    } else {
      navigate(`/search`);
    } */
  };
  // eslint-disable-next-line no-console
  console.log(query);
  return (
    <div>
      <div className="searchBarSection">
        <div className="searchBar">
          <Form onSubmit={searchHandler}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  className="search-group"
                  type="search"
                  placeholder="Search for items and articles ..."
                  aria-label="Search"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <br />

      {searchResult !== [] ? (
        <div>
          {searchResult.map((item) => (
            <div key={item.id}>
              <Card className="text-center">
                <Card.Body className="card-body">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaPhzScJPYZs8LPQygV9kcYHOPYu0EhkOIpvvIlRriw&s"
                    alt="item"
                  />
                  <Card.Title className="offer-title">{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchBarSection;

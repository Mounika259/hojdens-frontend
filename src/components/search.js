/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Products } from '../products';

function SearchBarSection() {
  const navigate = useNavigate();
  const [query, setQuery] = useState({ data: '' });

  const getItems = () => {
    let items = [];
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
    if (query.trim) {
      navigate(`/search/${query}`);
    } else {
      navigate(`/search`);
    }
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
      {/*  <div>
        <Row>
          <Col className="cardGrid">{getItems()}</Col>
        </Row>
      </div> */}
    </div>
  );
}

export default SearchBarSection;

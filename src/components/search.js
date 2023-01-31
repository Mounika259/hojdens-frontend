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
    const result = getItems();
    console.log(result);
    setSearchResult(result);

    if (query.trim) {
      navigate(`/SearchResult`, { state: { data: result } });
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
      <br />
    </div>
  );
}

export default SearchBarSection;

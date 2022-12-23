import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SearchBarSection() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  console.log(query);
  const searchHandler = (e) => {
    e.preventDefault();

    if (query.trim()) {
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
    </div>
  );
}

export default SearchBarSection;

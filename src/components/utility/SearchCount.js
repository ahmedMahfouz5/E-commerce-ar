import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
function SearchCount({ title }) {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-between">
          <div className="sub-tile">{title}</div>
          <Dropdown data-bs-theme="dark" size="sm">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              ترتيب حسب
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>
                الاكثر مبيعا
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">الاعلى تقييما</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                السعر من الاقل الى الاعلى
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                السعر من الاعلى الى الاقل
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchCount;

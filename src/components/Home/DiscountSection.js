import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function DiscountSection() {
  return (
    <Container>
      <Row className="discount-backcolor my-3 mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">خصم يصل الى 30% على اللاب توت</div>
        </Col>
        <Col sm="6">
          <img
            className="dicount-img"
            src="https://m.media-amazon.com/images/I/51njTPRDwHL._AC_SX569_.jpg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DiscountSection;

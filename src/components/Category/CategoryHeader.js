import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function CategoryHeader() {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header">الكل</div>
            <div className="cat-text-header">الكترونيات</div>
            <div className="cat-text-header">ملابس</div>
            <div className="cat-text-header">بلاستيك</div>
            <div className="cat-text-header">اجهزة كهربيه</div>
            <div className="cat-text-header">تخفيضات</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CategoryHeader;

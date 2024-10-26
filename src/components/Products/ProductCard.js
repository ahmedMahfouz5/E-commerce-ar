import React from "react";
import { Card, Button, Col } from "react-bootstrap";
function ProductCard() {
  return (
    <Col>
      <Card
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px rgba(151,151,151,0.5)",
        }}
      >
        <Card.Img
          style={{ height: "30rem", width: "20rem" }}
          variant="top"
          src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
        />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>هارد ديسك</Card.Title>
            <dic className="d-flex">
              <div className="card-price">880</div>
              <div className="card-currency mx-1">جنيه</div>
            </dic>
          </div>
          <div className="d-flex justify-content-between">
            <Card.Text>هارد ديسك سوليد استات 1 تيرا بايت</Card.Text>
            <div className="card-rete mx-2">4.5</div>
          </div>
        </Card.Body>
        <Button variant="primary">اضافه الى العربه</Button>
      </Card>
    </Col>
  );
}

export default ProductCard;

import React from "react";
import { Card, Col } from "react-bootstrap";

function BrandCard({ imageUrl }) {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-center"
    >
      <Card
        className="my-1"
        style={{
          width: "100%",
          hight: "151px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Card.Img src={imageUrl} style={{ width: "100%", height: "151px" }} />
      </Card>
    </Col>
  );
}

export default BrandCard;

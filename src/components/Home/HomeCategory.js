import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../utility/SubTitle";
import CategoryCard from "../Category/CategoryCard";

function HomeCategory() {
  return (
    <Container>
      <SubTitle title="التصنيفات" btnTitle="المزيد" />
      <Row className="mx-2 justify-content-between d-flex">
        <CategoryCard
          title="اجهزة منزليه"
          img="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
          background="#ffc107"
        />
        <CategoryCard
          title="اجهزة منزليه"
          img="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
          background="#ffc107"
        />
        <CategoryCard
          title="اجهزة منزليه"
          img="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
          background="#ffc107"
        />
      </Row>
    </Container>
  );
}

export default HomeCategory;

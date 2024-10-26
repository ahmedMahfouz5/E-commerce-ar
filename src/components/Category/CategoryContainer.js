import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";

const cat_1 = "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg";
function CategoryContainer() {
  return (
    <Container className="mt-2">
      <div className="admin-content-text">كل التصنيفات</div>
      <Row className="mx-2 justify-content-between d-flex">
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
        <CategoryCard title="اجهزة منزليه" img={cat_1} background="#ffc107" />
      </Row>
    </Container>
  );
}

export default CategoryContainer;

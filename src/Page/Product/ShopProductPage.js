import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../components/Category/CategoryHeader";
import SearchCount from "../../components/utility/SearchCount";
import SideFilter from "../../components/utility/SideFilter";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import Pagination from "../../components/utility/Pagination";

export const ShopProductPage = (props) => {
  return (
    <Container>
      <CategoryHeader />
      <SearchCount title={"555 نتيجة بحث"} />
      <Row className="d-flex flex-row mt-3">
        <Col sm="2" xs="2" md="1" className="d-flex">
          <SideFilter />
        </Col>
        <Col sm="10" xs="10" md="11">
          <CardProductsContainer showSubtitle={false} />
        </Col>
      </Row>
      <Pagination />
    </Container>
  );
};
export default ShopProductPage;

import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryHeader from "../../components/Category/CategoryHeader";
import SearchCount from "../../components/utility/SearchCount";

export const ShopProductPage = (props) => {
  return (
    <Container >
      <Row>
        <CategoryHeader />
        <SearchCount title={"555 نتيجة بحث"} />
      </Row>
    </Container>
  );
};
export default ShopProductPage;

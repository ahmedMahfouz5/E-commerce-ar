import React from "react";
import { Container } from "react-bootstrap";
import BrandContainer from "../../components/Brand/BrandContainer";
import Pagination from "../../components/utility/Pagination";
function AllBrandPage() {
  return (
    <Container>
      <BrandContainer />
      <Pagination />
    </Container>
  );
}

export default AllBrandPage;

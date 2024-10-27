import React from "react";
import { Row, Container } from "react-bootstrap";
import BrandCard from "./BrandCard";

function BrandContainer() {
  const brand_1 =
    "https://i.pinimg.com/564x/43/58/7b/43587bbcb46715ee71db13a17d974340.jpg";
  const brand_2 =
    "https://i.pinimg.com/236x/1c/aa/03/1caa032c47f63d50902b9d34492e1303.jpg";
  const brand_3 =
    "https://i.pinimg.com/236x/c3/bc/03/c3bc03a6883926b3b4c69860d278aa76.jpg";
  const brand_4 =
    "https://i.pinimg.com/236x/72/b8/ab/72b8ab45bc7e1438a48c175229f7234d.jpg";
  return (
    <Container>
      <div className="admin-content-text mt-2">كل العلامات التجاريه</div>
      <Row className="my-1 d-flex justify-content-between">
        <BrandCard imageUrl={brand_1} />
        <BrandCard imageUrl={brand_2} />
        <BrandCard imageUrl={brand_3} />
        <BrandCard imageUrl={brand_4} />
        <BrandCard imageUrl={brand_1} />
        <BrandCard imageUrl={brand_2} />
        <BrandCard imageUrl={brand_3} />
        <BrandCard imageUrl={brand_4} />
        <BrandCard imageUrl={brand_1} />
        <BrandCard imageUrl={brand_2} />
        <BrandCard imageUrl={brand_3} />
        <BrandCard imageUrl={brand_4} />
        <BrandCard imageUrl={brand_1} />
        <BrandCard imageUrl={brand_2} />
        <BrandCard imageUrl={brand_3} />
        <BrandCard imageUrl={brand_4} />
        <BrandCard imageUrl={brand_1} />
        <BrandCard imageUrl={brand_2} />
        <BrandCard imageUrl={brand_3} />
        <BrandCard imageUrl={brand_4} />
        <BrandCard imageUrl={brand_3} />
        <BrandCard imageUrl={brand_4} />
      </Row>
    </Container>
  );
}

export default BrandContainer;

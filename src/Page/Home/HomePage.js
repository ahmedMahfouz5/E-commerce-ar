import Slider from "../../components/Home/Slider";
import HomeCategory from "../../components/Home/HomeCategory";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandFeatured from "../../components/Brand/BrandFeatured";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <div className="font" style={{ minHeight: "670px" }}>
        <Slider />
        <HomeCategory />
        <CardProductsContainer title="الاكثر مبيعا" path={"/products"} />
        <DiscountSection />
        <CardProductsContainer title="الاكثر بحثا" path={"/products"} />
        <BrandFeatured />
      </div>
    </Container>
  );
}

export default HomePage;

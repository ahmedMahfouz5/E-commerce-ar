import NavBarLogin from "../../components/utility/NavBarLogin";
import Slider from "../../components/Home/Slider";
import HomeCategory from "../../components/Home/HomeCategory";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandFeatured from "../../components/Brand/BrandFeatured";
import Footer from "../../components/utility/Footer";

function HomePage() {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
      <CardProductsContainer title="الاكثر مبيعا" />
      <DiscountSection />
      <CardProductsContainer title="الاكثر بحثا" />
      <BrandFeatured />
      <Footer />
    </div>
  );
}

export default HomePage;

import NavBarLogin from "../../components/utility/NavBarLogin";
import Slider from "../../components/Home/Slider";
import HomeCategory from "../../components/Home/HomeCategory";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import DiscountSection from "../../components/Home/DiscountSection";

function HomePage() {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
      <CardProductsContainer title="الاكثر مبيعا" />
      <DiscountSection />
      <CardProductsContainer title="الاكثر بحثا" />
    </div>
  );
}

export default HomePage;

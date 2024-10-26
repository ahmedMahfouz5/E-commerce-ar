import NavBarLogin from "../../components/utility/NavBarLogin";
import Slider from "../../components/Home/Slider";
import HomeCategory from "../../components/Home/HomeCategory";

function HomePage() {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
    </div>
  );
}

export default HomePage;

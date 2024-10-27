import HomePage from "./Page/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import NavBarLogin from "./components/utility/NavBarLogin";
import Footer from "./components/utility/Footer";
import Login from "./Page/Auth/Login";
import Register from "./Page/Auth/Register";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductPage from "./Page/Product/ShopProductPage";
// Type rfce and then press Tab.

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-category" element={<AllCategoryPage />} />
        <Route path="/all-brand" element={<AllBrandPage />} />
        <Route path="/products" element={<ShopProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

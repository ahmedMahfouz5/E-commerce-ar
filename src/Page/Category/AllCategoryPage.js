import React from "react";
import CategoryContainer from "../../components/Category/CategoryContainer";
import Pagination from "../../components/utility/Pagination";

function AllCategoryPage() {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
}

export default AllCategoryPage;

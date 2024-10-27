import React from "react";
import { Row } from "react-bootstrap";

function SideFilter() {
  return (
    <Row>
      <div className="d-flex flex-column mt-2">
        <div className="filter-title">الفئة</div>
        <div className="d-flex mt-3">
          <input type="checkbox" value="" />
          <div className="filter-sub me-2">الكل</div>
        </div>
        <div className="d-flex mt-3">
          <input type="checkbox" value="" />
          <div className="filter-sub me-2">اجهزة منزليه</div>
        </div>
        <div className="d-flex mt-3">
          <input type="checkbox" value="" />
          <div className="filter-sub me-2">الكترونيات</div>
        </div>
      </div>
    </Row>
  );
}

export default SideFilter;

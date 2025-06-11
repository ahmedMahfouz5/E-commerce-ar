import React from "react";
import { Link } from "react-router-dom";

function SubTitle({ title, btnTitle, path }) {
  return (
    <div className="d-flex justify-content-between">
      <div className="sub-tile">{title}</div>
      {btnTitle ? (
        <Link to={path} style={{ textDecoration: "none" }}>
          <div className="shopping-now">{btnTitle}</div>
        </Link>
      ) : null}
    </div>
  );
}

export default SubTitle;

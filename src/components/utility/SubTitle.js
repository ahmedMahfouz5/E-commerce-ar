import React from "react";

function SubTitle({ title, btnTitle }) {
  return (
    <div className="d-flex justify-content-between">
      <div className="sub-tile">{title}</div>
      {btnTitle ? <div className="shopping-now">{btnTitle}</div> : null}
    </div>
  );
}

export default SubTitle;

import React from "react";
import { Carousel, ExampleCarouselImage } from "react-bootstrap";

function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className="mr-5">
          <img
            style={{ width: "296px", height: "313.53px" }}
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            text="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3 className="slider-title">هناك خصم كبير</h3>
          <p className="slider-text">خصم يصل الى 50% عند شرائك</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "296px", height: "313.53px" }}
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          text="Second slide"
        />
        <Carousel.Caption>
          <h3 className="slider-title">هناك خصم كبير</h3>
          <p className="slider-text">خصم يصل الى 50% عند شرائك</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "296px", height: "313.53px" }}
          src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
          text="Third slide"
        />
        <Carousel.Caption>
          <h3 className="slider-title">هناك خصم كبير</h3>
          <p className="slider-text">خصم يصل الى 50% عند شرائك</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

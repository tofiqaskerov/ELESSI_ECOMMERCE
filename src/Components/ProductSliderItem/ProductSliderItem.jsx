import React from "react";
import { Link } from "react-router-dom";
import "./product_slider_item.scss";
function ProductSliderItem({ id, img, title, price }) {
  return (
    <div className="product__slider__item">
      <div className="img__side">
        <Link to={`/detail/${id}`}>
          <img src={img} alt="" />
        </Link>
      </div>
      <div className="info__side">
        <Link to={`/detail/${id}`}>
          <h1 className="title">{title}</h1>
        </Link>
        <p className="price">${price}</p>
      </div>
    </div>
  );
}

export default ProductSliderItem;

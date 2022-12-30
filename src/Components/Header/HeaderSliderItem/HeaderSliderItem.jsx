import React from "react";
import { Link } from "react-router-dom";
import "./header_slider_item.scss";
import {
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineShopping,
} from "react-icons/ai";
function HeaderSwiperItem({ img, hoverImage, name, price, stock }) {
  return (
    <div className="slider__item">
      <div className="img__side">
        <Link to="/">
          <img className="cover__photo" src={img} alt="" />
          <img className="hover__img" src={hoverImage[0].image} alt="" />
        </Link>
        <div className="shop__icon__side">
          <Link className="shop__icon__link">
            <AiOutlineShopping className="shop__icon" />
          </Link>
        </div>
      </div>
      <div className="info__side">
        <Link className="slider__info" to="/">
          <h3 className="title">{name}</h3>
        </Link>
        <span className="price">${price}</span>
      </div>
      {stock === null ? (
        <div className="stock__info__side">
          <span className="stock__info">sold out</span>
        </div>
      ) : (
        <></>
      )}
      <div className="favourite__icon__side">
        <Link className="heart__icon__link" to="/">
          <AiOutlineHeart className="heart__icon" />
        </Link>
      </div>
      <div className="detail__icon__side">
        <Link className="detail__icon__link">
          <AiOutlineEye className="preview__icon" />
        </Link>
      </div>
    </div>
  );
}

export default HeaderSwiperItem;

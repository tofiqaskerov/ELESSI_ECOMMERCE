import React from "react";
import { Link } from "react-router-dom";
import "./header_slider_item.scss";
function HeaderSwiperItem({ img, hoverImage, name, price }) {
  return (
    <div className="slider__item">

        <div className="img__side">
          <Link to="/">
            <img className="cover__photo" src={img} alt="" />
            <img className="hover__img" src={hoverImage[0].image} alt="" />
          </Link>
        </div>
        <div className="info__side">
          <Link className="slider__info" to="/">
            <h3 className="title">{name}</h3>
          </Link>
          <span className="price">${price}</span>
        </div>
        {/* <div className="overlay">
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
        </div> */}
      </div>

  );
}

export default HeaderSwiperItem;

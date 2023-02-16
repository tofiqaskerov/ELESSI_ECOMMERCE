import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineEye,
} from "react-icons/ai";
import "./product_item.scss";
import { useDispatch } from "react-redux";
import { openCart } from "../../../Redux/Slices/HeaderSlice";
import { addToCart } from "../../../Redux/Slices/CartSlice";
function ProductItem({ item }) {
  const { title, price, discount, coverPhoto, productPictures, id } = item;
  const dispatch = useDispatch();
  function handleAddToCart(item) {
    dispatch(openCart());
    dispatch(addToCart(item));
    
  }
  const scrollTo = () =>{
    window.scrollTo(0, 0)
  }
  let discountPercent = (price - discount) * 100 / price;
  discountPercent = Math.ceil(discountPercent)
  return (
    <Grid
      className="product__item"
      xs={6}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      xxl={3}
      style={{ paddingTop: "0", marginBottom: "20px" }}
      item
      
    >
      <div className="img__side" style={{height: "auto"}}>
        <Link to={`/detail/${id}`}  onClick={scrollTo}>
          <img
            className="cover__photo"
            src={coverPhoto}
            alt=""
            style={{ width: "100%", maxWidth: "100%", height: "auto" }}
          />
          <img
           className="hover__img"
           src={productPictures[0]}
            alt=""
            style={{ width: "100%", maxWidth: "100%", height: "auto" }} 
            />
        </Link>
        <div className="shop__icon__side">
          <Link
            className="shop__icon__link"
            onClick={() => handleAddToCart(item)}
          >
            <AiOutlineShopping className="shop__icon" />
          </Link>
        </div>
        {discount !== null ?(
          <div className="discount__percent">
            <span>-{discountPercent}%</span>
          </div>
        ) : (<></>)
      }
      </div>
      <div className="info__side">
        <Link className="slider__info" to={`/detail/${id}`} onClick={scrollTo}>
          <h3 className="title">{title}</h3>
        </Link>
        {discount !== null ? (
          <span className="discount">
            <del className="old__price">${price}</del>${discount}
          </span>
        ) : (
          <span className="price">${price}</span>
        )}
      </div>
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
      
    </Grid>
  );
}

export default ProductItem;

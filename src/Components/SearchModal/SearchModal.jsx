import React, { useEffect, useState } from "react";
import "./search_modal.scss";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { closeSearchModal } from "../../Redux/Slices/HeaderSlice";
import ProductList from "../UI/ProductList/ProductList";
import { BASE_URL } from "../../Config/api";
import { Grid } from "@mui/material";
import ProductItem from "../UI/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";
function SearchModal() {
  const header = useSelector(state => state.header);
  const dispatch = useDispatch();
  const handleCloseSearchModal = () => dispatch(closeSearchModal());
  const [products, setProducts] = useState([]);
  const handleSearch = (e) => {
    const filterProduct = e.target.value;
    const searchedProducts = products.filter(item =>
      item.title.toLowerCase().includes(filterProduct.toLowerCase())
    );
    setProducts(searchedProducts);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/product/getall`)
      .then(res => res.json())
      .then(data => {setProducts(data.data)});
  },[]);
 
  return (
    <>
      <div
        className={
          header.searchOpen
            ? "search__modal search__modal__active"
            : "search__modal "
        }
      >
        <div className="form__side">
          <div className="input__side">
            <button onClick={handleCloseSearchModal}>
              <span className="close__icon">
                <GrClose />
              </span>
            </button>
            <form className="search__header">
              <div>
                <input
                  type="text"
                  className="input__txt"
                  placeholder="search for products"
                  onChange={handleSearch}
                />
                <div className="input__line"></div>
              </div>
            </form>
          </div>
        </div>
        <div className="products">
          {products.length === 0 ? (
            <h1 className="text-center">No product found</h1>
          ) : (
            <Grid container columnSpacing={2} rowSpacing={2}>
              {products?.map((item, index) => (
                <Grid
                  className="product__item"
                  xs={6}
                  sm={6}
                  md={3}
                  lg={2}
                  xl={2}
                  xxl={2}
                  style={{ paddingTop: "0", marginBottom: "20px" }}
                  item
                  key={index}
                >
                  <div className="img__side">
                    <Link to={`/detail/${item.id}`}>
                      <img
                        className="cover__photo"
                        src={item.coverPhoto}
                        alt=""
                        style={{ width: "100%" }}
                      />
                      {/* <img className="hover__img" src={productPictures[0]} alt="" />  */}
                    </Link>
                    <div className="shop__icon__side">
                      <Link className="shop__icon__link">
                        <AiOutlineShopping className="shop__icon" />
                      </Link>
                    </div>
                  </div>
                  <div className="info__side">
                    <Link className="slider__info" to={`/detail/${item.id}`}>
                      <h3 className="title">{item.title}</h3>
                    </Link>
                    {item.discount !== null ? (
                      <span className="discount">
                        <del className="old__price">${item.price}</del>$
                        {item.discount}
                      </span>
                    ) : (
                      <span className="price">${item.price}</span>
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
              ))}
            </Grid>
          )}
        </div>
      </div>
      <div
        className={
          header.searchOpen
            ? " overlay__search__modal active__overlay__searchModal"
            : "overlay__search__modal"
        }
      ></div>
    </>
  );
}

export default SearchModal;

import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Helmet from "../../Components/Helmet/Helmet";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { GoAlert } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
} from "../../Redux/Slices/CartSlice";
import { useTranslation } from "react-i18next";

function Cart() {
  const { t } = useTranslation(["cart"]);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  const cart = useSelector((state) => state.cart);

  return (
    <Helmet title={"Cart Page"}>
      <section className="cart">
        <Container maxWidth="lg" disableGutters={true}>
          {cart.cartItems?.length !== 0 ? (
            <div className="cart__side">
              <div className="cart__items">
                <div className="head">
                  <h1 className="title">{t("Your_Cart")}</h1>
                </div>
                <div className="cart__content">
                  <Grid xs={12}>
                    <div className="alert">
                      <div className="icon__side">
                        <GoAlert className="alert__icon" />
                      </div>
                      <p className="alert__txt">
                        Someone has placed an order on one of the items you have
                        in the cart. We'll keep it for you for
                        <span className="minute">0:00</span> minutes.
                      </p>
                    </div>
                    <div className="shopify__cart">
                      <div className="product__table">
                        <table>
                          <thead>
                            <tr>
                              <th></th>
                              <th></th>
                              <th>{t("Product")}</th>
                              <th>{t("Price")}</th>
                              <th>{t("Quantity")}</th>
                              <th>{t("Total")}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart.cartItems?.map((item, index) => (
                              <Tr item={item} key={index} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Grid>
                </div>
                <div className="coupon__side">
                  <Grid xs={12} sm={6} md={6}>
                    <div className="coupon">
                      <input type="text" placeholder="Coupon code" />
                    </div>
                  </Grid>
                  <Grid xs={12} sm={6} md={6}></Grid>
                </div>
              </div>
              <div className="collaterals">
                <Grid xs={12} container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{ padding: "0px 10px" }}
                  >
                    <div className="box box__1">
                      <div className="note__side">
                        <h2>{t("Seller_Information")}</h2>
                        <textarea
                          name=""
                          className="note__input"
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <div className="calculator">
                        <h2>GET SHIPPING ESTIMATES</h2>
                        <Grid container columnSpacing={2} rowSpacing={2}>
                          <Grid item xs={12} md={6}>
                            <label
                              htmlFor="country"
                              style={{ display: "block" }}
                            >
                              Country
                            </label>
                            <CountryDropdown
                              value={country}
                              onChange={(val) => selectCountry(val)}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <label htmlFor="province">Provience</label>
                            <RegionDropdown
                              country={country}
                              value={region}
                              onChange={(val) => selectRegion(val)}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <label
                              htmlFor="postal__code"
                              style={{ display: "block" }}
                            >
                              Lorem
                            </label>
                            <input type="text" />
                          </Grid>
                        </Grid>
                        <div className="calculate__button__side">
                          <input
                            type="button"
                            value={"Calculate Shipping"}
                            className="calculate__button"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{ padding: "0px 10px" }}
                  >
                    <div className="box box__2">
                      <div className="note__side note__side2">
                        <h2>{t("Cart Totals")}</h2>
                      </div>
                      <div className="total__info">
                        <div className="subtotal overal">
                          <h5>Subtotal</h5>
                          <span>${cart.cartTotalAmount}</span>
                        </div>
                        <div className="shipping overal">
                          <h5>Subtotal</h5>
                          <span>Shipping & taxes calculated at checkout</span>
                        </div>
                        <div className="total__side">
                          <h1>Total</h1>
                          <h1>${cart.cartTotalAmount}</h1>
                        </div>
                      </div>
                      <div className="checkout__side">
                        <div className="progress__bar">
                          <div></div>
                        </div>
                        <p>
                          Spend
                          <strong>
                            <span style={{ color: "#83b828" }}>$22.00</span>
                          </strong>
                          more to reach <strong>FREE SHIPPING!</strong>
                          <Link
                            to={"/"}
                            style={{
                              textDecoration: "underline",
                              color: "#000",
                            }}
                          >
                            Continue shopping
                          </Link>
                          to add more products to your cart and receive free
                          shipping for orders over $200.00.
                        </p>
                        <p>
                          <input type="checkbox" name="" id="" /> I agree with
                          the terms and conditions.
                        </p>
                        <p>
                          *The final price with your coupon code will apply in
                          Checkout page
                        </p>
                        <p>
                          * All charges are billed in USD. While the content of
                          your cart is currently displayed in USD, the checkout
                          will use USD at the most current exchange rate.
                        </p>
                        <div className="checkout__button__side">
                          <input
                            type="button"
                            value={"Proceed to checkout"}
                            className="chechkout__button calculate__button"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          ) : (
            <div className="empty__side">
              <SlBasket className="basket__icon" />
              <h1>{t("Cart_Info")}</h1>
              <p>{t("Cart_Description")}</p>
              <p className="continue__shopping">
                <Link to={"/"}>{t("Product_Navigate")}</Link>
              </p>
            </div>
          )}
        </Container>
      </section>
    </Helmet>
  );
}

function Tr({ item }) {
  const { title, coverPhoto, price, cartQuantity, id } = item;
  const dispatch = useDispatch();
  const handleIncreaseCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(item));
  };

  const handleDecreaseCart = (e) => {
    e.preventDefault();
    dispatch(decreaseCart(item));
  };
  const handleClearAll = (e) => {
    e.preventDefault();
    dispatch(clearCart(item));
  };
  return (
    <tr>
      <td>
        <button className="close__icon__side" onClick={handleClearAll}>
          <IoMdClose className="close__icon" />
        </button>
      </td>
      <td>
        <Link to={`/detail/${id}`}>
          <img src={coverPhoto} style={{ width: "80px" }} alt="" />
        </Link>
      </td>
      <td data-title="Product">
        <Link to={`/detail/${id}`}>{title}</Link>
      </td>
      <td data-title="Price">${price}</td>
      <td data-title="Quantity">
        <div className="count__btn">
          <button className="minus btn" onClick={(e) => handleDecreaseCart(e)}>
            -
          </button>
          <span>{cartQuantity}</span>
          <button className="plus btn" onClick={(e) => handleIncreaseCart(e)}>
            +
          </button>
        </div>
      </td>
      <td data-title="Total">${cartQuantity * price}</td>
    </tr>
  );
}

export default Cart;

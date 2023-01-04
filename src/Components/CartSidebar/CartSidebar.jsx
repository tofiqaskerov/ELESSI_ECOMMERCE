import React from "react";
import "./cartSidebar.scss";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../Redux/Slices/HeaderSlice";
import { addToCart, decreaseCart } from "../../Redux/Slices/CartSlice";
function CartSidebar(props) {
  const header = useSelector((state) => state.header);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleIncreaseCart = (item) =>{
    dispatch(addToCart(item))
  }
  const handleDecreaseCart = (item) =>{
    dispatch(decreaseCart(item))
  }
  const handleCloseCart = () => dispatch(closeCart());
  return (
    <>
      <div
        className={
          header.cartOpen
            ? "cart__sidebar active__sidebar__cart"
            : "cart__sidebar"
        }
      >
        <div className="content__cart">
          <div className="content__all__cart">
            <div className="head">
              <h2>Your Cart</h2>
              <button onClick={handleCloseCart}>
                <GrClose className="icon close__btn__icon" />
              </button>
            </div>
            <div className="product__list">
              {cart.cartItems.length === 0 ? (
                <p>No products in the cart</p>
              ) : (
                cart.cartItems?.map((item, index) => (
                  <div key={index} className="item__content">
                    <Link to="">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2019_Cutthroat_Force1_Blue-uc-1_medium.jpg?v=1565595623"
                        alt=""
                      />
                    </Link>
                    <div className="item__content__title__side">
                      <div className="info">
                        <Link to="" className="title">
                          {item.title}
                        </Link>
                        <span className="price">${item.price}</span>
                      </div>
                      <div className="count__side">
                        <div className="quantity__box">
                          <div className="count__number">
                            {item.cartQuantity}
                          </div>
                          <div className="action">
                            <button className="plus" onClick={() =>handleIncreaseCart(item)} >+</button>
                            <button className="minus" onClick={() =>handleDecreaseCart(item)}>-</button>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={header.cartOpen ? " overlay__cart" : "activeOverlayCart"}
        onClick={handleCloseCart}
      ></div>
    </>
  );
}

export default CartSidebar;

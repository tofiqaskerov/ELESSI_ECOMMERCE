import React, { useEffect } from "react";
import "./cartSidebar.scss";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../Redux/Slices/HeaderSlice";
import {
  addToCart,
  clearCart,
  decreaseCart,
  totalPrice,
} from "../../Redux/Slices/CartSlice";
function CartSidebar() {
  const header = useSelector((state) => state.header);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleClearAll = (item) => {
    dispatch(clearCart(item));
  };
  const handleCloseCart = () => dispatch(closeCart());
  useEffect(() =>{
    dispatch(totalPrice())
  }, [cart, dispatch])
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
                <>
                  <div className="item__content__side">
                    <div className="item__content__all">
                      {cart.cartItems?.map((item, index) => (
                        <div key={index} className="item__content">
                          <Link to={`detail/${item.id}`}>
                            <img
                              src={item.coverPhoto}
                              alt=""
                            />
                          </Link>
                          <div className="item__content__title__side">
                            <div className="info">
                              <Link to="" className="title">
                                {item.title}
                              </Link>
                              {
                                item.discount !== null ? <span className="price">${item.discount}</span> : <span className="price">${item.price}</span>
                              }
                              
                            </div>
                            <div className="count__side">
                              <div className="quantity__box">
                                <div className="count__number">
                                  {item.cartQuantity}
                                </div>
                                <div className="action">
                                  <button
                                    className="plus"
                                    onClick={() => handleIncreaseCart(item)}
                                  >
                                    +
                                  </button>
                                  <button
                                    className="minus"
                                    onClick={() => handleDecreaseCart(item)}
                                  >
                                    -
                                  </button>
                                </div>
                              </div>
                              <div className="remove__all">
                                <button
                                  className="remove__btn"
                                  onClick={() => handleClearAll(item)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="note__side">
                      <label>Special instructions for seller</label>
                      <textarea rows="4" cols="50" className="note"></textarea>
                    </div>
                  </div>

                  <div className="checkout__side">
                    <div className="subtotal__side">
                      <h4>Subtotal</h4>
                      <span className="total__price">${cart.cartTotalAmount}</span>
                    </div>
                    <div className="conditions__side">
                      <label>
                        <input type="checkbox" className="chechbox" />I agree
                        with the terms and conditions.
                      </label>
                    </div>
                    <div className="buttons__side">
                      <button className="view__cart__btn btn">view cart</button>
                      <button className="check__out__btn btn">check out</button>
                    </div>
                  </div>
                </>
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

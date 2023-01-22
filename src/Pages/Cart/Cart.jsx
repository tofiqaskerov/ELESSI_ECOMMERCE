import { Container, Grid } from "@mui/material";
import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
import { GoAlert } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import "./cart.scss";
import { useSelector } from "react-redux";
function Cart() {
  const cart = useSelector(state => state.cart)
  return (
    <Helmet title={"Cart Page"}>
      <section className="cart">
        <Container maxWidth="lg">
          <div className="head">
            <h1 className="title">Your cart</h1>
          </div>
          <div className="cart__content">
            <Grid xs={12}>
              <div className="alert">
                <div className="icon__side">
                  <GoAlert className="alert__icon" />
                </div>
                <p className="alert__txt">
                  Someone has placed an order on one of the items you have in
                  the cart. We'll keep it for you for{" "}
                  <span className="minute">0:00</span> minutes.
                </p>
              </div>
              <div className="shopify__cart">
                <form action="">
                  <div className="product__table">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                            cart.cartItems.length !== 0 ?
                            (
                                cart.cartItems.map((item, index) => (
                                    <Tr item={item} key={index}/>
                                ))
                            )
                            :
                            (<h1>No Products</h1>)
                        }
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </Grid>
          </div>
        </Container>
      </section>
    </Helmet>
  );
}

function Tr({item}){
  const {title, coverPhoto, price, cartQuantity } = item
  return (
    <tr>
      <td>
        <IoMdClose className="close__icon" />
      </td>
      <td><img src={coverPhoto} style={{width: "100px"}} alt="" /></td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{cartQuantity}</td>
      <td>{cartQuantity * price}</td>
    </tr>
  );
}

export default Cart;

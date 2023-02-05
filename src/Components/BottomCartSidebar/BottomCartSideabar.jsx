import { Container } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./bottom_cart_sidebar.scss";
function BottomCartSideabar({title, productCount, setProductCount, handleAddToCart, newSelectedProduct}) {
  const {t} = useTranslation(["detail"])
  const [visible, setVisible]  = useState(false)
  const toggleVisible = () =>{
    const scrolled = document.documentElement.scrollTop;
    if(scrolled > 500){
      setVisible(true)
    }
    else if(scrolled<=500){
      setVisible(false)
    }
  }
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <>
      <div className={visible ? "bottom__cart__sidebar bottom__cart__sidebar__active " :  "bottom__cart__sidebar"}>
        <Container maxWidth="lg">
          <div className="all__side">
            <div className="left__side">
              <h1>{title}</h1>
            </div>
            <div className="right__side">
              <div className="count__btn">
                <button
                  className="minus btn"
                    onClick={() => {
                      productCount > 1
                        ? setProductCount(productCount - 1)
                        : setProductCount(1);
                    }}
                >
                  -
                </button>
                <span>{productCount}</span>
                <button
                  className="plus btn"
                    onClick={() => {
                      setProductCount(productCount + 1);
                    }}
                >
                  +
                </button>
              </div>
              <div className="addToCart">
                <button
                  className="addToCart__btn"
                    onClick={() => handleAddToCart(newSelectedProduct)}
                >
                  {t("Add_cart")}
                </button>
              </div>
              <div className="checkout">
                <button className="checkout__btn">{t("Buy_now")}</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default BottomCartSideabar;

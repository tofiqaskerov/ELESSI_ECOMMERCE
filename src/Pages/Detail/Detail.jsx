import { Container, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommonDetailSection from "../../Components/CommonDetailSection/CommonDetailSection";
import Helmet from "../../Components/Helmet/Helmet";
import {
  fetchProductById,
  fetchProducts,
} from "../../Redux/Slices/Product/ProductSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detail.scss";
import Clock from "../../Components/UI/Clock/Clock";
function Detail() {
  const [next, setNext] = useState({});
  const [prev, setPrev] = useState({});

  const dispatch = useDispatch();
  const id = useParams();
  const selectedProduct = useSelector((state) => state.products.product);
  const { title, coverPhoto, price, description, stock, offer } =
    selectedProduct;
  const products = useSelector((state) => state.products.products);
  const nextPrev = () => {
    const currentIndex = products.findIndex(
      (product) => product.title === title
    );
    if (currentIndex !== -1) {
      const nextElement = products[currentIndex + 1];
      const prevElement = products[currentIndex - 1];
      setNext(nextElement);
      setPrev(prevElement);
    }
  };
  // const {boxRef, imgRef} = useRef()
  const img = document.querySelector(".coverPhoto");
  const mouseMove = (e) => {
    e.preventDefault();
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
  };
  const mouseLeave = (e) => {
    img.style.transformOrigin = "center";
    img.style.transform = "scale(1)";
  };

  useEffect(() => {
    dispatch(fetchProductById(id.id));
    dispatch(fetchProducts());
  }, [dispatch, id.id]);

  useEffect(() => {
    nextPrev();
  });

  return (
    <Helmet title={"Detail"}>
      <section className="detail">
        <CommonDetailSection nextData={next} prevData={prev} title={title} />
        <div className="detail__side">
          <Container maxWidth="lg">
            <Grid container rowSpacing={4}>
              <Grid container item xs={12} columnSpacing={4}>
                <Grid className="product__img__side" item xs={12} md={6}>
                  <div
                    className="box"
                    onMouseLeave={(e) => mouseLeave(e)}
                    onMouseMove={(e) => mouseMove(e)}
                  >
                    <img className="coverPhoto" src={coverPhoto} alt="" />
                    {/* <div className="overlay__photo">
                    <FontAwesomeIcon icon="fa-thin fa-arrows-maximize" />
                   </div> */}
                  </div>
                </Grid>
                <Grid className="product__info__side" item xs={12} md={6}>
                  <h1 className="title">{title}</h1>
                  <div className="sold__info">
                    <span className="total__day">7</span>
                    sold in last
                    <span className="hour">5</span>
                    hours
                  </div>
                  <p className="price">${price}</p>
                  <p className="description">{description}</p>
                  <div className="stock">
                    <p className="stock__info">
                      Hurry! only <span>{stock}</span> left in stock.
                    </p>
                    <div className="progress__bar">
                      <div></div>
                    </div>
                  </div>
                  <h5>offer ends in:</h5>
                  <Clock time={offer} />
                  <p className="easter__egg">
                    The last day is June 4, 2023 :{")"}
                  </p>
                  <div className="addToCart__side">
                    <div className="count__addToCart">
                      <div className="count__btn">
                        <button className="minus btn">-</button>
                        <span>0</span>
                        <button className="plus btn">+</button>
                      </div>
                      <div className="addToCart">
                        <button className="addToCart__btn">ADD TO CART</button>
                      </div>
                    </div>
                    <p>— or —</p>
                    <div className="checkout">
                      <button className="checkout__btn">
                          BUY IT NOW
                      </button>
                    </div>
                  </div>
                  <div className="product__delivery">
                    Order in the next 
                    <span> 13 hours 29 minutes</span>
                    to get it by
                    <span> Friday 01/27/2023</span>
                  </div>
                  <div className="real__time__visitor">
                    Real time <span> <span>97</span></span> Visitor right now
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Container>
        </div>
      </section>
    </Helmet>
  );
}

export default Detail;

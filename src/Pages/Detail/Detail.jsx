import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CommonDetailSection from "../../Components/CommonDetailSection/CommonDetailSection";
import Helmet from "../../Components/Helmet/Helmet";
import {
  fetchProductById,
  fetchProducts,
} from "../../Redux/Slices/Product/ProductSlice";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialPinterest,
} from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoMdMail, IoMdHeartEmpty } from "react-icons/io";
import img1 from "../../Assets/Img/safe-checkout_1_550x.avif";
import "./detail.scss";
import Clock from "../../Components/UI/Clock/Clock";
import { addToCart } from "../../Redux/Slices/CartSlice";
import { openCart } from "../../Redux/Slices/HeaderSlice";
import "@fortawesome/fontawesome-svg-core/styles.css";
import DetailPopup from "../../Components/DetailPopup/DetailPopup";

function Detail() {
  const [next, setNext] = useState({});
  const [prev, setPrev] = useState({});
  const [activePopup, setActivePopup] = useState(false)
  const [productCount, setProductCount] = useState(1);
  const dispatch = useDispatch();
  const id = useParams();
  const selectedProduct = useSelector((state) => state.products.product);

  const newSelectedProduct = { ...selectedProduct, numDetail: productCount };
  console.log(newSelectedProduct);
  const {
    title,
    coverPhoto,
    price,
    description,
    stock,
    offer,
    productPictures,
  } = selectedProduct;
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

  const img = document.querySelector(".overlay__coverPhoto");
  const img2 = document.querySelector(".overlay__productPictures");
  const box = document.querySelector(".box__all");
  const mouseMove = (e) => {
    e.preventDefault();
    let x = e.clientX - box.offsetLeft;
    let y = e.clientY - box.offsetTop;
    const mWidth = box.offsetWidth;
    const mHeight = box.offsetHeight;

    x = (x / mWidth) * 50;
    y = (y / mHeight) * 50;

    img.style.transform = `translate(-${x}%, -${y}% )`;
  };
  const mouseMove2 = (e) => {
    e.preventDefault();

    let x = e.clientX - box.offsetLeft;
    let y = e.clientY - box.offsetTop;
    const mWidth = box.offsetWidth;
    const mHeight = box.offsetHeight;

    x = (x / mWidth) * 50;
    y = (y / mHeight) * 50;

    img2.style.transform = `translate(-${x}%, -${y}% )`;
  };
  function handleAddToCart(item) {
    dispatch(openCart());
    dispatch(addToCart(item));
  }
 
  useEffect(() => {
    dispatch(fetchProductById(id.id));
    dispatch(fetchProducts());
  }, [dispatch, id.id]);

  useEffect(() => {
    nextPrev(); 
    document.addEventListener("scroll", () => {
      const scroll = window.scrollY;
        scroll > 100 ? setActivePopup(false) : <></>
    });
    
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
                  <div className="box__all">
                    <div className="box" onMouseMove={(e) => mouseMove(e)}>
                      <img
                        className="coverPhoto detail__img"
                        src={coverPhoto}
                        alt=""
                      />
                      <img
                        src={coverPhoto}
                        className="overlay__coverPhoto overlay__img"
                        alt=""
                      />
                    
                    </div>
                    <div className="fullscreen">
                        <SlSizeFullscreen className="fullscreen__icon" onClick={() => setActivePopup(true) }/>
                        <IoMdHeartEmpty className="heart__icon" />
                     </div>
                  </div>

                  <div className="box__all">
                    <div className="box" onMouseMove={(e) => mouseMove2(e)}>
                      <img
                        className="productPictures detail__img"
                        src={productPictures}
                        alt=""
                      />
                      <img
                        src={productPictures}
                        className="overlay__productPictures overlay__img"
                        alt=""
                      />
                    </div>
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
                    The last day is June 4, 2023 {":)"}
                  </p>
                  <div className="addToCart__side">
                    <div className="count__addToCart">
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
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                    <p>— or —</p>
                    <div className="checkout">
                      <button className="checkout__btn">BUY IT NOW</button>
                    </div>
                  </div>
                  <div className="product__delivery">
                    Order in the next
                    <span> 13 hours 29 minutes </span>
                    to get it by
                    <span> Friday 01/27/2023</span>
                  </div>
                  <div className="real__time__visitor">
                    Real time
                    <span>
                      <span>97</span>
                    </span>
                    Visitor right now
                  </div>
                  <div className="guaranteed">
                    <img src={img1} alt="" />
                  </div>
                  <div className="share">
                    <span>Share on:</span>
                    <ul className="icon__ul">
                      <li className="icon__li">
                        <Link href="#">
                          <TiSocialFacebook />
                        </Link>
                      </li>
                      <li className="icon__li">
                        <Link href="#">
                          <TiSocialTwitter />
                        </Link>
                      </li>
                      <li className="icon__li">
                        <Link href="#">
                          <FaGooglePlusG />
                        </Link>
                      </li>
                      <li className="icon__li">
                        <Link href="#">
                          <IoMdMail />
                        </Link>
                      </li>
                      <li className="icon__li">
                        <Link href="#">
                          <TiSocialPinterest />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Container>
        </div>
       <DetailPopup  trigger={activePopup} setTrigger={setActivePopup}/>

      </section>
    </Helmet>
  );
}

export default Detail;

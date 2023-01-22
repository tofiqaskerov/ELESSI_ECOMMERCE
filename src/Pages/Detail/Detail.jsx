import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
import { addToCart } from "../../Redux/Slices/CartSlice";
import { openCart } from "../../Redux/Slices/HeaderSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";
import "./detail.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Helmet from "../../Components/Helmet/Helmet";
import Clock from "../../Components/UI/Clock/Clock";
import CommonDetailSection from "../../Components/CommonDetailSection/CommonDetailSection";
import DetailPopup from "../../Components/DetailPopup/DetailPopup";
import RelatedProductSection from "./RelatedProductSection/RelatedProductSection";
import ViewedProductsSection from "./ViewedProuductSection/ViewedProductsSection";
import GoToTop from "../../Components/GoToTop/GoToTop";
import BottomCartSideabar from "../../Components/BottomCartSidebar/BottomCartSideabar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Detail() {
  const [next, setNext] = useState({});
  const [prev, setPrev] = useState({});
  const [activePopup, setActivePopup] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const dispatch = useDispatch();
  const id = useParams();
  const selectedProduct = useSelector((state) => state.products.product);

  const newSelectedProduct = { ...selectedProduct, numDetail: productCount };
  const {
    title,
    coverPhoto,
    price,
    description,
    stock,
    offer,
    productPictures,
    discount,
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
  });

  const priceColor = discount !== null ? { color: "red" } : { color: "#55555" };
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let discountPercent = ((price - discount) * 100) / price;
  discountPercent = Math.ceil(discountPercent);
  return (
    <Helmet title={"Detail"}>
      <section className="detail">
        <CommonDetailSection nextData={next} prevData={prev} title={title} />
        <Container maxWidth="lg">
          <div className="detail__side">
            <Grid container rowSpacing={4}>
              <Grid
                container
                item
                xs={12}
                columnSpacing={4}
                className="product__detail__side"
              >
                <Grid className="product__img__side" item xs={12} md={6}>
                  <div className="box__all responsive__box">
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
                      <SlSizeFullscreen
                        className="fullscreen__icon"
                        onClick={() => setActivePopup(true)}
                      />
                      <IoMdHeartEmpty className="heart__icon" />
                    </div>
                  </div>
                  <div className="box__all responsive__box">
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

                  <div className="responsive__slider">
                    <Swiper
                      slidesPerView={2}
                      navigation={true}
                      effect={"fade"}
                      pagination={{ clickable: true }}
                      modules={[Navigation, EffectFade]}
                    >
                      <SwiperSlide className="equiment__swiper__slide">
                        <div className="box__all">
                          <div className="box">
                            <img
                              className="coverPhoto detail__img"
                              src={coverPhoto}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="equiment__swiper__slide">
                        <div className="box__all">
                          <div className="box">
                            <img
                              className="productPictures detail__img"
                              src={productPictures}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="fullscreen">
                      <SlSizeFullscreen
                        className="fullscreen__icon"
                        onClick={() => setActivePopup(true)}
                      />
                      <IoMdHeartEmpty className="heart__icon" />
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
                  {discount !== null ? (
                    <p className="price" style={priceColor}>
                      <del className="old__price">${discount}</del>${price}
                      <span className="discount__percent">
                        -{discountPercent}%
                      </span>
                    </p>
                  ) : (
                    <p className="price">${price}</p>
                  )}

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
              <Grid item xs={12} container flexDirection={"column"} style={{borderTop : "1px solid  rgb(218, 218, 218)", borderBottom: "1px solid  rgb(218, 218, 218)"}}>
                <div className="categories">
                  <Box sx={{ width: "100%" }}>
                    <Box>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        className="tabs"
                      >
                        <Tab label="DESCRIPTION" {...a11yProps(0)} />

                        <Tab label="REVIEWS" {...a11yProps(1)} />

                        <Tab label="SHIPPING" {...a11yProps(2)} />
                        <Tab label="CUSTOM TAB " {...a11yProps(3)} />
                      </Tabs>
                    </Box>

                    <TabPanel value={value} index={0}>
                      <div className="description__tab">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s.
                        </p>
                        <p>
                          The point of using Lorem Ipsum is that it has a
                          more-or-less normal distribution of letters. On the
                          other hand, we denounce with righteous indignation and
                          dislike men who are so beguiled and demoralized by the
                          charms of pleasure of the moment, so blinded by
                          desire.
                        </p>
                        <p>
                          It has survived not only five centuries, but also the
                          leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <h1 style={{ textAlign: "center" }}>Empty</h1>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <div className="shipping__tab">
                        <div className="box">
                          <h4>Shipping</h4>
                          <p>Free Shipping For Over $200 </p>
                        </div>
                        <div className="box">
                          <h4>Delivery</h4>
                          <div className="txt">
                            <p>
                              Estimated between
                              <span className="date__start">
                                Monday 01/30/2023
                              </span>
                              and
                              <span className="date__end">
                                Thursday 02/02/2023
                              </span>
                            </p>
                            <p>Will usually ship within 1 bussiness day.</p>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      <div className="custom__tab">
                        <img
                          src={
                            "https://cdn.shopify.com/s/files/1/2588/5532/files/care-icon.png?4014196417434054677"
                          }
                          alt=""
                        />
                        <p>
                          LT01: 70% wool, 15% polyester, 10% polyamide, 5%
                          acrylic 900 Grms/mt
                        </p>
                      </div>
                    </TabPanel>
                  </Box>
                </div>
                <div className="product__meta">
                  <ul>
                    <li>
                      <span>
                        <strong>Vendor: </strong>
                        <span>
                          <Link to={"/"}>Elessi Shopify Theme 2</Link>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>/</span>
                    </li>
                    <li>
                      <span>
                        <strong>SKU:</strong>
                        <span> N/A</span>
                      </span>
                    </li>
                    <li>
                      <span>/</span>
                    </li>
                    <li>
                      <span>
                        <strong>Availability: </strong>
                        {stock > 0 ? (
                          <span>In Stock</span>
                        ) : (
                          <span style={{ color: "red" }}>Not Stock</span>
                        )}
                      </span>
                    </li>
                    <li>
                      <span>/</span>
                    </li>
                    <li>
                      <span>
                        <strong>Categories: </strong>
                        <span>
                          <Link to={"/"}>Bike</Link>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>/</span>
                    </li>
                    <li>
                      <span>
                        <strong>Tags: </strong>
                        <span>
                          <Link to={"/"}>Bike</Link>,<Link to={"/"}>Bikes</Link>
                          ,<Link to={"/"}>Road</Link>,
                          <Link to={"/"}>Sport</Link>,
                          <Link to={"/"}>woo2shopify</Link>
                        </span>
                      </span>
                    </li>
                  </ul>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
        <RelatedProductSection products={products} selectedProduct={newSelectedProduct}  />
        <ViewedProductsSection  products={products} selectedProduct={newSelectedProduct}  />
        <BottomCartSideabar title={title} productCount={productCount} setProductCount={setProductCount} handleAddToCart={handleAddToCart} newSelectedProduct={newSelectedProduct}/>
        <DetailPopup
          productImages={selectedProduct}
          setTrigger={setActivePopup}
          trigger={activePopup}
        />
         <GoToTop  />
      </section>
    </Helmet>
  );
}

export default Detail;

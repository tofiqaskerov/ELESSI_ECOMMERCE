import { Container, Grid } from "@mui/material";
import React from "react";
import "./shopify_section.scss";
import img1 from "../../../Assets/Img/bike-banner-1_670x.jpg";
import img2 from "../../../Assets/Img/bike-banner-2_670x.webp";
import img3 from "../../../Assets/Img/bike-banner-3_670x.webp";
import { Link } from "react-router-dom";
function ShopifySection() {
  return (
    <section className="shopify">
      <Container maxWidth="lg">
        <Grid container xs={12} rowGap={{xs: 1}} >
          <Grid className="left__content" item xs={12} sm={12} md={6}>
            <Grid className="box left__content__item__1" item xs={12}>
              <Link to="/">
                <img src={img1} alt="" />
                <div className="overlay__item overlay__item__1">
                  <h1 className="title">The narrowest bike</h1>
                  <h1 className="sale__off"> Sale Off 50 %</h1>
                </div>
              </Link>
            </Grid>
          </Grid>
          <Grid
            className="right__content"
            item
            xs={12} sm={12} md={6}
            container
            rowGap={1}
            style={{ paddingLeft: "10px" }}
          >
            <Grid className=" box right__content__item__1 " item xs={12}>
              <Link to="/">
                <img src={img2} alt="" />
                <div className="overlay__item overlay__item__2">
                  <h1 className="title">Composants</h1>
                  <h1 className="sale__off"> Sale Off 30 %</h1>
                </div>
              </Link>
            </Grid>
            <Grid className="box right__content__item__2" item xs={12}>
              <Link to="/">
                <img src={img3} alt="" />
                <div className="overlay__item overlay__item__3">
                  <h1 className="title">Bike Equiment  <br /> & Accessories</h1>
                 
                </div>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default ShopifySection;

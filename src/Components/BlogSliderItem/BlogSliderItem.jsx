import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./blog_slider_item.scss";
import {GoBook} from 'react-icons/go'
function BlogSliderItem({ item }) {
  const { photoUrl, title, description } = item;
  return (
    <Grid
      className="blog__item"
      xs={6}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      xxl={3}
      style={{ paddingTop: "0", marginBottom: "20px" }}
      item
    >
      <div className="img__side">
        <Link to="/">
          <img
            className="cover__photo"
            src={photoUrl}
            alt=""
            style={{ width: "100%" }}
          />
        </Link>
      </div>
      <div className="info__side">
        <h3 className="category">
          <Link className="slider__info" to="/">
            {title}
          </Link>
        </h3>

        <h2 className="title">
          <Link to="/">{description}</Link>
        </h2>

        <span className="posted__time">on <span>August 12, 2019</span></span>

        <h4 className="read__more"> <Link className="read__more__link" to="/"><GoBook className="book__icon"/> <span>Read more</span> </Link></h4>
      </div>
    </Grid>
  );
}

export default BlogSliderItem;

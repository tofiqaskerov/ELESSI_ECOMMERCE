import React from "react";
import Slider from "react-slick";
import "./product_slider_section.scss";
import img1 from "../../../Assets/Img/Sample_Product_Image4-28@2x.webp";

import ProductSlider from "../../../Components/ProductSlider/ProductSlider";

function ProductSliderSection({product}) {
  
  return (
    <section className="product__slider">
      <ProductSlider data ={product} />
    </section>
  );
}

export default ProductSliderSection;

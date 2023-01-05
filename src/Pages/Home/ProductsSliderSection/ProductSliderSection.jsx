import React from "react";
import "./product_slider_section.scss";

import ProductSlider from "../../../Components/ProductSlider/ProductSlider";

function ProductSliderSection({product}) {
  
  return (
    <section className="product__slider">
      <ProductSlider data ={product} />
    </section>
  );
}

export default ProductSliderSection;

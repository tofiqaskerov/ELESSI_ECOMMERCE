import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
import Slider from "../../Components/Slider/Slider";
import ProductsSection from "./ProductsSection/ProductsSection";
import ShopifySection from "./ShopifySection/ShopifySection";
function Home() {
  return (
    <Helmet title={"Home Page"}>
       <section className="home">
         <Slider/>
         <ShopifySection/>
         <ProductsSection/>
       </section>
    </Helmet>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import Helmet from "../../Components/Helmet/Helmet";
import Slider from "../../Components/Slider/Slider";
import { BASE_URL } from "../../Config/api";
import BlogSection from "./BlogSection/BlogSection";
import EquimentSection from "./EquimentSection/EquimentSection";
import ProductsSection from "./ProductsSection/ProductsSection";
import ProductSliderSection from "./ProductsSliderSection/ProductSliderSection";
import ShopifySection from "./ShopifySection/ShopifySection";
function Home() {
  const [sliders, setSliders] = useState([]);
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/slider/getall`)
      .then(res => res.json())
      .then(data => setSliders(data.data));

    fetch(`${BASE_URL}/product/getall`)
      .then(res => res.json())
      .then(data => setProducts(data.data));

    fetch(`${BASE_URL}/blog/getall`)
    .then(res => res.json())
    .then(data => setBlogs(data.data))
  }, []);
  return (
    <Helmet title={"Home Page"}>
       <section className="home">
         <Slider data={sliders}/>
         <ShopifySection/>
         <ProductsSection product={products} />
         <ProductSliderSection product={products} />
         <EquimentSection product={products}/>
         <BlogSection blog={blogs} />
       </section>
    </Helmet>
  );
}

export default Home;

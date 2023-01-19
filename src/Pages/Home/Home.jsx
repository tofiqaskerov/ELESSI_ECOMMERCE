import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoToTop from "../../Components/GoToTop/GoToTop";
import Helmet from "../../Components/Helmet/Helmet";
import Slider from "../../Components/Slider/Slider";
import { fetchBlogs } from "../../Redux/Slices/Blog/BlogSlice";
import { fetchProducts } from "../../Redux/Slices/Product/ProductSlice";
import { fetchSliders } from "../../Redux/Slices/Slider/SliderSlice";
import BlogSection from "./BlogSection/BlogSection";
import BrandSection from "./BrandSection/BrandSection";
import EquimentSection from "./EquimentSection/EquimentSection";
import ProductsSection from "./ProductsSection/ProductsSection";
import ProductSliderSection from "./ProductsSliderSection/ProductSliderSection";
import ShopifySection from "./ShopifySection/ShopifySection";
function Home() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const blogs = useSelector(state => state.blogs.blogs)
  const sliders = useSelector(state => state.sliders.sliders)
  useEffect(() => {
      dispatch(fetchSliders())
      dispatch(fetchProducts())
      dispatch(fetchBlogs())
  }, [dispatch]);
  return (
    <Helmet title={"Home Page"}>
       <section className="home">
         <Slider data={sliders}/>
         <ShopifySection/>
         <ProductsSection product={products} />
         <ProductSliderSection product={products} />
         <EquimentSection product={products}/>
         <BlogSection blog={blogs} />
         <BrandSection/>
         <GoToTop position={"30px"} opacity={0}/>
       </section>
    </Helmet>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import "./products_section.scss";
import { Link, NavLink } from "react-router-dom";
import ProductList from "../../../Components/UI/ProductList/ProductList";
import { BASE_URL } from "../../../Config/api";
function ProductsSection() {
  const handleFilter = (i) => {
    switch (i) {
      case 1:
        console.log(i);
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        break;
    }
  };
  const categories = [
    {
        id:1,
      display: "New Arrivals",
    },
    {
        id:2,
      display: "Featured",
    },
    {
        id:3,
      display: "Best Seller",
    },
    {
        id:4,
      display: "On Sale",
    },
  ];
  const [products, setIsProducts] = useState([])
  useEffect(() =>{
    fetch(`${BASE_URL}/product/getall`).then(res => res.json()).then(data => setIsProducts(data.data) )
  }, [])
  console.log(products);
  return (
    <section className="products">
      <Container maxWidth="lg">
        <Grid container xs={12} flexDirection={"column"} textAlign={"center"}>
          <div className="head__title">
            <h1 className="title">Our Products</h1>
          </div>
          <div className="categories">
            <ul className="main__ul">
              <Grid container columnGap={8} justifyContent={"center"}>
                {categories?.map((item, index) => (
                  <li
                    className="child__li"
                    key={index}
                    onClick={handleFilter(item.id)}
                  >
                    <Link>{item.display}</Link>
                  </li>
                ))}
              </Grid>
            </ul>
          </div>
          <div className="all__products">
            <ProductList data={products} />
          </div>
        </Grid>
      </Container>
    </section>
  );
}

export default ProductsSection;

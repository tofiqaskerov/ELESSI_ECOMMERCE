import { Grid } from "@mui/material";
import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./product_list.scss";
function ProductList({ data }) {
  return (
    <>
      <Grid container columnSpacing={2}   rowSpacing={2}>
        {data?.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </Grid>
    </>
  );
}

export default ProductList;

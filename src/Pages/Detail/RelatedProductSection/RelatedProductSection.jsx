import { Container, Grid } from "@mui/material";
import React from "react";
import EquimentSlider from "../../../Components/EquimentSlider/EquimentSlider";
import './related_product_section.scss'
function RelatedProductSection({ products, selectedProduct }) {

 const relatedProducts = products.filter(product => product.price > selectedProduct.price )
  return (
    <section className="related__product">
      <Container maxWidth="lg">
        <Grid container xs={12} flexDirection={"column"} textAlign={"center"}>
          <div className="head__title">
            <h1 className="title">Related product</h1>
          </div>
        </Grid>
        {
            relatedProducts.length !== 0  ? (
             <EquimentSlider data={relatedProducts} />
            )
            :
            (<h1 style={{textAlign: "center"}}>Not Found</h1>)
        }
      </Container>
    </section>
  );
}

export default RelatedProductSection;

import { Container, Grid } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import EquimentSlider from '../../../Components/EquimentSlider/EquimentSlider'
import './viewed_product_section.scss'
function ViewedProductsSection({products, selectedProduct}) {
  const {t} = useTranslation(["detail"])
  const relatedProducts = products.filter(product => product.discount)
  return (
    <section className='viewed__product'>
         <Container maxWidth="lg" >
        <Grid container xs={12} flexDirection={"column"} textAlign={"center"}>
          <div className="head__title">
            <h1 className="title">{t("Discounted_product")}</h1>
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
  )
}

export default ViewedProductsSection
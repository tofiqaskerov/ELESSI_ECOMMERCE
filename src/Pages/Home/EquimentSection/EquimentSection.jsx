import { Container, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import EquimentSlider from "../../../Components/EquimentSlider/EquimentSlider";
import ProductList from "../../../Components/UI/ProductList/ProductList";
import "./equiment_section.scss";
function EquimentSection({product}) {
  const { t } = useTranslation(["home"])
  return (
    <div className="equiment">
      <Container maxWidth="lg" >
        <Grid container xs={12} flexDirection={"column"} textAlign={"center"}>
          <div className="head__title">
            <h1 className="title">{t("Our_equipment")}</h1>
          </div>
        </Grid>
        <EquimentSlider data={product}/>
      </Container>
    </div>
  );
}

export default EquimentSection;

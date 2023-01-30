import React, { useState } from "react";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import "./products_section.scss";
import ProductList from "../../../Components/UI/ProductList/ProductList";
import { useTranslation } from "react-i18next";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function ProductsSection({product}) {
  const { t } = useTranslation(["home"])
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="products">
      <Container maxWidth="lg">
        <Grid container xs={12} flexDirection={"column"} textAlign={"center"}>
          <div className="head__title">
            <h1 className="title">{t("Our_products")}</h1>
          </div>
          <div className="categories">
            <Box sx={{ width: "100%" }}>
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="tabs"
                >
                  
                    <Tab label={t("New_arrivals")} {...a11yProps(0)} />
                    <Tab label={t("Featured")} {...a11yProps(1)} />
                    <Tab label={t("Best_seller")} {...a11yProps(2)} />
                    <Tab label={t("On_sale")} {...a11yProps(3)} />
 
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <ProductList data={product} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ProductList data={product} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <h1>Empty</h1>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <ProductList data={product} />
              </TabPanel>
            </Box>
          </div> 
        </Grid>
      </Container>
    </section>
  );
}

export default ProductsSection;

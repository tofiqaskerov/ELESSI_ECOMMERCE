import React, { useState } from "react";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import "./products_section.scss";
import ProductList from "../../../Components/UI/ProductList/ProductList";

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
 
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event);
  };
  return (
    <section className="products">
      <Container maxWidth="lg">
        <Grid container xs={12} flexDirection={"column"} textAlign={"center"}>
          <div className="head__title">
            <h1 className="title">Our Products</h1>
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
                  
                    <Tab label="NEW ARRIVALS" {...a11yProps(0)} />
                    <Tab label="FEATURED" {...a11yProps(1)} />
                    <Tab label="BEST SELLER" {...a11yProps(2)} />
                    <Tab label="ON SALE " {...a11yProps(3)} />
 
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

import { Container, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import BlogSlider from "../../../Components/BlogSlider/BlogSlider";
import "./blog_section.scss";
function BlogSection({blog}) {
  const { t } = useTranslation(["home"])

  return (
    <div className="blog">
      <Container maxWidth="lg">
        <Grid container xs={12} flexDirection={"column"} textAlign={"center"}>
          <div className="head__title">
            <h1 className="title">{t("Latest_blog")}</h1>
            <i><span className="description">The freshest and most exciting news</span></i>
          </div>
        </Grid>
        <BlogSlider data={blog}/>
      </Container>
    </div>
  );
}

export default BlogSection;

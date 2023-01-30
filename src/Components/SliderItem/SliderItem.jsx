import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./slider_item.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
function SliderItem({ position, title, subtitle, img }) {
  const { t } = useTranslation(["home"])
  const bannerImg = {
    background: `url(${img})`,
    maxHeight: "638px"
  };

  return (
    <>
      <div className="banner">
        <div className="data__banner">
          {position % 2 === 0 ? (
            <Link to="/">
              <div className="all__content" style={bannerImg} >
                <Container>
                    <Grid className="left__side" xs={12}>
                      <motion.h1
                        initial={{
                          x: 40,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.6,
                        }}
                        className="title"
                      >
                        {t("Banner_title")}
                      </motion.h1>
                      <motion.h1
                        initial={{
                          x: 40,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.9,
                        }}
                        className="subtitle"
                      >
                         {t("Banner_subtitle")}
                      </motion.h1>
                      <motion.a
                        initial={{
                          x: 40,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        to="/"
                        className="shop__btn"
                      >
                        {t("Shop_now")}
                      </motion.a>
                    </Grid>
                </Container>
              </div>
            </Link>
          ) : (
            <Link to="/">
              <div className="all__content data__position" style={bannerImg}>
                <Container>
                    <Grid className="right__side" xs={12}>
                      <motion.h1
                        initial={{
                          x: -40,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.6,  
                        }}
                        className="title"
                      >
                        {t("Banner_title")}
                      </motion.h1>
                      <motion.h1
                        initial={{
                          x: -40,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.9,
                        }}
                        className="subtitle"
                      >
                        {t("Banner_subtitle_2")}
                      </motion.h1>
                      <motion.a
                        initial={{
                          x: -40,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 1.1,
                        }}
                        to="/"
                        className="shop__btn"
                      >
                        {t("Shop_now")}
                      </motion.a>
                    </Grid>
                </Container>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default SliderItem;

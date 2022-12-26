import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./slider_item.scss";
import { motion } from "framer-motion";
function SliderItem({ position, title, subtitle, img }) {
  return (
    <>
      <div className="banner">
        <div className="data__banner">
          <img src={img} alt="banner__image" />
          <div className="content">
            <Container>
              {position % 2 === 0 ? (
                <div className="all__content">
                  <Grid container>
                    <Grid xs={12}>
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
                        {title}
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
                        {subtitle}
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
                          duration: 1.1,
                        }}
                        to="/"
                        className="shop__btn"
                      >
                        Shop Now
                      </motion.a>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                <div className="all__content data__position">
                  <Grid container>
                    <Grid xs={12}>
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
                        {title}
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
                        {subtitle}
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
                        Shop Now
                      </motion.a>
                    </Grid>
                  </Grid>
                </div>
              )}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderItem;

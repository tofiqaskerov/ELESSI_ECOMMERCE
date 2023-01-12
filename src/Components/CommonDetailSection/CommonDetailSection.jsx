import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./common_detail_section.scss";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
function CommonDetailSection({ nextData, prevData, title }) {
  return (
    <div className="common__section">
      <Container maxWidth="xxl">
        <div className="all d-flex">
          <div className="breadcrumb d-flex">
            <Link to="">Home /</Link>
            <Link to="">Bike /</Link>
            <Link to="">{title}</Link>
          </div>
          <div className="back__next__icon">
            {prevData ? (
              <div className="prev__button">
                <Link className="icon__link" to={`/detail/${prevData.id}`}>
                  <HiOutlineArrowNarrowLeft />
                </Link>
                <div className="product__info prev__product__info">
                  <Link to={`/detail/${prevData.id}`}>
                    <img src={prevData.coverPhoto} alt="" />
                  </Link>
                  <Link className="title__link" to={`/detail/${prevData.id}`}>
                    <span>{prevData.title}</span>
                  </Link>
                  {prevData.discount ? (
                    <>
                      <span className="old__price"><del className="old__price__del"> ${prevData.price}</del>${prevData.discount}</span>
                    </>
                  ) : (
                    <span>${prevData.price}</span>
                  )}
                </div>
              </div>
            ) : (
              <></>
            )}
            {nextData ? (
              <div className="next__button">
                <Link className="icon__link" to={`/detail/${nextData.id}`}>
                  <HiOutlineArrowNarrowRight />
                </Link>
                <div className="product__info next__product__info">
                  <Link  to={`/detail/${nextData.id}`}>
                    <img src={nextData.coverPhoto} alt="" />
                  </Link>
                  <Link className="title__link"  to={`/detail/${nextData.id}`}>
                    <span>{nextData.title}</span>
                  </Link>
                  {nextData.discount ? (
                    <>
                      <span className="old__price"><del className="old__price__del"> ${nextData.price}</del>${nextData.discount}</span>
                    </>
                  ) : (
                    <span>${nextData.price}</span>
                  )}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CommonDetailSection;

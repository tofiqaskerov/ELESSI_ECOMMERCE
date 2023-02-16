import { Container } from "@mui/material";
import React from "react";
import "./detail_popup.scss";
import { AiOutlineZoomIn } from "react-icons/ai";
import { RiFullscreenLine, RiShareForwardFill, RiFullscreenExitFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import DetailPopupSlider from "./DetailPopupSlider/DetailPopupSlider";

function DetailPopup(props) {

  
  const fullScreen = () =>{
    const body =  document.querySelector("body")
    const exitIcon = document.querySelector(".exitFullscreen")
    const fullScreenIcon = document.querySelector(".fullScreen")
    if(!document.fullscreenElement){
        body.style.overflowY = "hidden"
        fullScreenIcon.classList.add("active__screen")
        exitIcon.classList.remove("active__screen")
        
        document.documentElement.requestFullscreen()
        .catch(error => alert(`Error attempting to enable fullscreen mode: ${error.message} (${error.name})`))
    }else{
        document.exitFullscreen()
        body.style.overflowY = "auto"
        fullScreenIcon.classList.remove("active__screen")
        exitIcon.classList.add("active__screen")
    }   
     
  }

  return (props.trigger) ? (
    <div className="detail__popup">
      <div className="detail__popup__inner">
        <div className="head__all">
          <Container maxWidth="xxl"  disableGutters={true}>
            <div className="head__side">
              <div className="postion_side">
                <span>1/3</span>
              </div>
              <div className="activity__side">
                <ul className="main__ul">
                  <li className="child__li">
                    <AiOutlineZoomIn />
                  </li>
                  <li className="child__li fullScreen__side"   onClick={() => fullScreen()} >
                    <RiFullscreenLine  className="fullScreen"/>
                    <RiFullscreenExitFill className="exitFullscreen active__screen " />
                  </li>
                  
                  <li className="child__li">
                    <RiShareForwardFill />
                  </li> 
                  <li className="child__li" onClick={() => props.setTrigger(false)}>
                    <MdClose />
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <DetailPopupSlider productImages={props.productImages}  />
        {/* <div className="footer__all"></div> */}
      </div>
    </div>
  ) : "";
}

export default DetailPopup;

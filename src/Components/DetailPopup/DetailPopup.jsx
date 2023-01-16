import { Container } from "@mui/material";
import React from "react";
import "./detail_popup.scss";
import { AiOutlineZoomIn } from "react-icons/ai";
import { RiFullscreenLine, RiShareForwardFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import DetailPopupSlider from "./DetailPopupSlider/DetailPopupSlider";

function DetailPopup(props) {

  const fullScreen = () =>{
    if(!document.fullscreenElement){
       const body =  document.querySelector("body")
        body.style.overflowY = "hidden"
        document.documentElement.requestFullscreen()
        .catch(error => alert(`Error attempting to enable fullscreen mode: ${error.message} (${error.name})`))
    }else{
        document.exitFullscreen()
    }   
     
  }

  return (props.trigger) ? (
    <div className="detail__popup">
      <div className="detail__popup__inner">
        <div className="head__all">
          <Container maxWidth="xxl">
            <div className="head__side">
              <div className="postion_side">
                <span>1/3</span>
              </div>
              <div className="activity__side">
                <ul className="main__ul">
                  <li className="child__li">
                    <AiOutlineZoomIn />
                  </li>
                  <li className="child__li fullScreen__icon" onClick={() => fullScreen()} >
                    <RiFullscreenLine />
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
        <DetailPopupSlider/>
      </div>
    </div>
  ) : "";
}

export default DetailPopup;

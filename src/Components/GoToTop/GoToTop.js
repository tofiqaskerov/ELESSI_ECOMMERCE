import React, { useState } from 'react'
import {IoIosArrowUp} from 'react-icons/io'

function GoToTop() {
  const [visible, setVisible]  = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
    window.addEventListener('scroll', toggleVisible);
    const buttonStyle = {
        position: "fixed",
        bottom: "110px",
        right: "20px",
        zIndex: "900",
        border: "none",
        width: "44px",
        height: "44px",
        color: "#fff",
        background: "#96C14B",
        transition: ".2s ease-in-out",
        transform: visible ? "translateY(0px)": `translateY(30px)`,
        fontSize: "18px",
        borderRadius: "50%",
        cursor: "pointer",
        opacity: visible ? "1" : `0`,
        visible: visible ? "visible" : "hidden"
    }
  return (
    <div >
        <button onClick={scrollToTop}  style={buttonStyle} className='goToTop'>
           <IoIosArrowUp/>
        </button>
    </div>
  )
}

export default GoToTop
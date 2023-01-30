import React, { useEffect, useState } from "react";
import "./login_register_sidebar.scss";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {SlUser} from 'react-icons/sl'
import { closeFormCart } from "../../Redux/Slices/HeaderSlice";
import { Link } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
function LoginRegisterSidebar() {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.header);
  const password = document.getElementById("password");
  const passwordRegister = document.getElementById("password__register");
  const [showIcon, setShowIcon] = useState(false);
  const [loginRegister, setloginRegister ] = useState(true)
 
  const handleShowPassword = () => {
    if (password.type === "password") {
      password.type = "text";
      setShowIcon(true);
    } else {
      password.type = "password";
      setShowIcon(false);
    }
    if(passwordRegister.type === "password"){
      passwordRegister.type = "text";
      setShowIcon(true);
    } else {
      passwordRegister.type = "password";
      setShowIcon(false);
    }
  };
  const handleCloseFormCart = () => {
    dispatch(closeFormCart());
  };
  const handleShowLoginRegister = () =>{
    if(loginRegister){
      setloginRegister(false)
    }else{
      setloginRegister(true)
    }
  }
 


  return (
    <>
      <div
        className={
          header.formCart
            ? "login__register__sidebar  active__login__register__sidebar"
            : "login__register__sidebar"
        }
      >
        <div className="head">
          <h2>Sign in</h2>
          <button onClick={handleCloseFormCart}>
            <GrClose className="icon close__btn__icon" />
          </button>
        </div>
        <div className="form__body">
          <div className="login__form">
            <Login showIcon={showIcon} loginRegister={loginRegister} handleShowPassword={handleShowPassword}/>
           <Register  showIcon={showIcon} setloginRegister={setloginRegister} loginRegister={loginRegister} handleShowPassword={handleShowPassword}/>
          </div>
          <div className="faq__side">
              <div className="faq__icon__side">
                <SlUser className="faq__icon" />
              </div>
              <span>No accaount yet?</span>
              <p className="register__info">
                Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
              </p>
              <Link  className={ !loginRegister ?"btn btn__link" : "d-none" } onClick={handleShowLoginRegister} >Login</Link>
              <Link  className={ loginRegister ? "btn btn__link" : "d-none"} onClick={handleShowLoginRegister}> Create An Accaount</Link>
          </div>
        </div>
      </div>
      <div
        className={
          header.formCart
            ? " overlay__login__register__sidebar active__overlay__login__register__sidebar"
            : "overlay__login__register__sidebar"
        }
        onClick={handleCloseFormCart}
      ></div>
    </>
  );
}

export default LoginRegisterSidebar;

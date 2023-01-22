import React, { useEffect, useState } from "react";
import "./login_register_sidebar.scss";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineLockClosed, HiOutlineUserPlus, HiOutlineDocument, HiOutlineEnvelope } from "react-icons/hi2";
import {  BiHide, BiShowAlt } from "react-icons/bi";
import {IoDocumentsOutline} from "react-icons/io5"
import {SlUser} from 'react-icons/sl'
import { closeFormCart } from "../../Redux/Slices/HeaderSlice";
import { Link } from "react-router-dom";
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
            <div className={loginRegister ? "login__form__side" : "d-none" }>
              <form action="" method={"post"}>
                <div className="email__side form__side">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <div className="email__box form__box">
                    <input type="email" id="email" name="email" required />
                    <HiOutlineUserPlus className="user__icon form__icon" />
                  </div>
                </div>
                <div className="password__side form__side">
                  <label htmlFor="password">
                    Password <span className="required">*</span>
                  </label>
                  <div className="password__box form__box">
                    <input
                      type={"password"}
                      id="password"
                      name="password"
                      required
                    />
                    <HiOutlineLockClosed className="lock__icon form__icon" />
                    <span
                      className="hide__show__icon"
                      id="hide__show__icon"
                      onClick={handleShowPassword}
                    >
                      <span
                        className={!showIcon ? "hide__icon" : "d-none"}
                        id="hide__icon"
                      >
                        <BiHide />
                      </span>
                      <span
                        className={showIcon ? " show__icon" : "d-none"}
                        id="show__icon"
                      >
                        <BiShowAlt />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="login__btn__side ">
                  <button type="submit" className="login__btn login__register__btn">
                    Login
                  </button>
                </div>
                <div className="forgot__side">
                  <Link to="/">Forgot your password ?</Link>
                </div>
              </form>
            </div>
            <div className={ !loginRegister ? "register__form__side " : "d-none"} >
              <form action="" method={"post"}>
                  <div className="first__name__side form__side">
                    <label htmlFor="first__name">First Name</label>
                    <div className="first__name__box form__box">
                      <input type="text" name="name" id="first__name" required />
                      <HiOutlineDocument className="document__icon form__icon" />  
                    </div>
                  </div>
                  <div className="last__name__side form__side">
                    <label htmlFor="last__name">Last Name</label>
                    <div className="last__name__box form__box">
                      <input type="text" name="last__name" id="last__name" required />
                      <IoDocumentsOutline className="document2x__icon form__icon"/>
                    </div>
                  </div>
                  <div className="email__side form__side">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <div className="email__box form__box">
                      <input type="email" name="email" id="email" required />
                      <HiOutlineEnvelope className="envelope__icon form__icon" />
                    </div>
                  </div>
                  <div className="password__side form__side">
                    <label htmlFor="password__register">Password <span className="required">*</span></label>
                    <div className="password__box form__box">
                      <input type="password" name="password" id="password__register" required />
                     <HiOutlineLockClosed className="lock__icon form__icon" />
                     <span
                      className="hide__show__icon"
                      id="hide__show__icon"
                      onClick={handleShowPassword}
                    >
                      <span
                        className={!showIcon ? "hide__icon" : "d-none"}
                        id="hide__icon"
                      >
                        <BiHide />
                      </span>
                      <span
                        className={showIcon ? " show__icon" : "d-none"}
                        id="show__icon"
                      >
                        <BiShowAlt />
                      </span>
                    </span>
                    </div>
                  </div>
                  <div className="privacy__side">
                    <p className="privacy__txt">
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                    </p>
                  </div>
                  <div className="register__btn__side">
                  <button type="submit" className="register__btn login__register__btn">
                    Register
                  </button>
                </div>
              </form>
            </div>
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

import React, { useEffect, useState } from "react";
import "./login_register_sidebar.scss";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { BiLockAlt, BiHide, BiShowAlt } from "react-icons/bi";
import { closeFormCart } from "../../Redux/Slices/HeaderSlice";
function LoginRegisterSidebar() {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.header);
  const password = document.getElementById("password");
  const [showIcon, setShowIcon] = useState(false);
  const handleShowPassword = () => {
    if (password.type === "password") {
      password.type = "text";
      setShowIcon(true);
    } else {
      password.type = "password";
      setShowIcon(false);
    }
  };
  const handleCloseFormCart = () =>{
      dispatch(closeFormCart())
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
            <div className="login__form__side">
              <form action="">
                <div className="email__side email__password__side">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <div className="email__box email__password__box">
                    <input type="text" id="email" name="email" required />
                    <HiOutlineUserPlus className="user__icon" />
                  </div>
                </div>
                <div className="password__side email__password__side">
                  <label htmlFor="password">
                    Password <span className="required">*</span>
                  </label>
                  <div className="password__box email__password__box">
                    <input
                      type={"password"}
                      id="password"
                      name="password"
                      required
                    />
                    <BiLockAlt className="user__icon" />
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
              </form>
            </div>
            <div className="register__form__side"></div>
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

import React, {  useState } from "react";
import { HiOutlineUserPlus, HiOutlineLockClosed } from "react-icons/hi2";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { Link, } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeFormCart } from "../../../Redux/Slices/HeaderSlice";
import { toast } from "react-toastify";
import {
  addUser,
  loginUser,
  setToken,
} from "../../../Redux/Slices/Auth/AuthSlice";
function Login({ loginRegister, handleShowPassword, showIcon }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch();
  const signInUser = async (e) => {
    e.preventDefault();
    const res =  await dispatch(
     loginUser({
       email: email,
       password: password,
     })
    );
     const payloadRes = res.payload
    if(payloadRes.status === 200){
      setEmail("")
      setPassword("")
      toast.success("You are logged in", { position: "top-right", pauseOnHover: false, })
      dispatch(setToken(payloadRes.token))
      dispatch(addUser(payloadRes.data))
      dispatch(closeFormCart()); 
      setLoginError(null);
    }else{
      setLoginError(payloadRes.message);
    }
  

  };

  return (
    <>
      <div className={loginRegister ? "login__form__side" : "d-none"}>
        <form action="" onSubmit={(e) =>signInUser(e)}>
          <div className="email__side form__side">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <div className="email__box form__box">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <span style={{ color: "red", fontWeight: "700" }}>{loginError}</span>
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
    </>
  );
}

export default Login;

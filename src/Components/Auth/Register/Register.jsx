import React, { useState } from "react";
import {
  HiOutlineDocument,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
} from "react-icons/hi2";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { IoDocumentsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../../../Redux/Slices/Auth/AuthSlice";
function Register({ setloginRegister, loginRegister, handleShowPassword, showIcon }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const registeredUser = async (e) => {
    e.preventDefault();
    const res = await dispatch(
      registerUser({
        name: name,
        surname: surname,
        email: email,
        password: password,
      })
    );
     const resPayload = res.payload
         
      if (resPayload.status === 200) {
        toast.success("Registered successfully", { position: "top-right", pauseOnHover: false })
        setloginRegister(true)
        setName("")
        setSurname("")
        setEmail("")
        setPassword("")
      }

  };

  return (
    <>
      <div className={!loginRegister ? "register__form__side " : "d-none"}>
        <form onSubmit={(e) => registeredUser(e)}>
          <div className="first__name__side form__side">
            <label htmlFor="first__name">First Name</label>
            <div className="first__name__box form__box">
              <input
                type="text"
                name="name"
                id="first__name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <HiOutlineDocument className="document__icon form__icon" />
            </div>
          </div>
          <div className="last__name__side form__side">
            <label htmlFor="last__name">Last Name</label>
            <div className="last__name__box form__box">
              <input
                type="text"
                name="surname"
                id="last__name"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
              <IoDocumentsOutline className="document2x__icon form__icon" />
            </div>
          </div>
          <div className="email__side form__side">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <div className="email__box form__box">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <HiOutlineEnvelope className="envelope__icon form__icon" />
            </div>
          </div>
          <div className="password__side form__side">
            <label htmlFor="password__register">
              Password <span className="required">*</span>
            </label>
            <div className="password__box form__box">
              <input
                type="password"
                name="password"
                id="password__register"
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
          <div className="privacy__side">
            <p className="privacy__txt">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <div className="register__btn__side">
            <button
              type="submit"
              className="register__btn login__register__btn"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;

import React from 'react'
import Header from '../sections/Header'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState, useEffect } from "react";
import { RootState } from "../store/store";
import { register } from '../store/apiCall';
import "../styles/pages/Register.scss"
const Register = () => {
  const [userForm, setUserForm] = useState({
    fullname: "",
    username: "",
    password: "",
    date: "",
    mail: "",
    avatar:"",
    phone: "",
    role: "user",
    slary: 0,
    gender: ""
  });

  const accessToken = localStorage.getItem("accessToken");
  const user = useSelector((state) => state.user.user);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = () => {
    register(dispatch, {
      fullname: userForm.fullname,
      username: userForm.username,
      password: userForm.password,
      date: userForm.date,
      mail: userForm.mail,
      avatar: userForm.avatar,
      phone: userForm.phone,
      role: userForm.role,
      slary: userForm.slary,
      gender:userForm.gender
    });
  };
  useEffect(() => {
    if (accessToken) {
      navigator("/");
    }
  }, [accessToken]);
  return (
    <div className="register">
        <Header />
        <div className="register__wrapper">
          <div className="register__form">
          <form>
          <h1>Create an account</h1>
            <p>Enter your information below to proceed. If you already have an account, please log in instead.</p>
                <div className="input_field">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder='Username'
                    required
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        username: e.target.value,
                      });
                    }}
                  />
            
                </div>
                <div className="input_field">
                  <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    id="password"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        password: e.target.value,
                      });
                    }}
                    required
                  />
                
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="mail"
                    id="mail"
                    placeholder='Mail'
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        mail: e.target.value,
                      });
                    }}
                    required
                  />
              
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder='Fullname'
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        fullname: e.target.value,
                      });
                    }}
                    required
                  />
                 
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    placeholder='Date'
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        date: e.target.value,
                      });
                    }}
                    required
                  />
            
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder='Phone'
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        phone: e.target.value,
                      });
                    }}
                    required
                  />
               
                </div>

                <div className="input_field">
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    placeholder='Gender'
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        gender: e.target.value,
                      });
                    }}
                    required
                  />
             
                </div>
              </form>

              <div className="login-sucess" onClick={() => handleRegister()}>
              Register
            </div>

            <div className="other-actions">
              <div>
                <Link to={"/login"}>Already have an account?</Link>
             
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register
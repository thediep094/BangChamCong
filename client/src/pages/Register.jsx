import React from 'react'
import Header from '../sections/Header'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState, useEffect } from "react";
import { RootState } from "../store/store";
import { register } from '../store/apiCall';
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
        <div className="register">
          <div className="register__form">
          <form>
                <div className="input_field">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        username: e.target.value,
                      });
                    }}
                  />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="input_field">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        password: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="mail"
                    id="mail"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        mail: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="main">Email</label>
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        fullname: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="fullname">Fullname</label>
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        date: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="date">Date</label>
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        phone: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="phone">Phone</label>
                </div>

                <div className="input_field">
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        gender: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="gender">gender</label>
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
import React, { useEffect, useState } from 'react'
import Header from '../sections/Header'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/apiCall";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
const Login = () => {
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });
  const accessToken = localStorage.getItem("accessToken");
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleLogin = () => {
    login(dispatch, {
      username: userForm.username,
      password: userForm.password,
    });
  };
  useEffect(() => {
    if (accessToken) {
      navigator("/");
    }
  }, [accessToken]);
  return (
    <div className="login">
        <Header />
        <div className="login">
          <div className="login__form">
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
                        ["username"]: e.target.value,
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
                        ["password"]: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </form>

              <div className="login-sucess" onClick={() => handleLogin()}>
              Login
            </div>

            <div className="other-actions">
              <div>
                <Link
                  to={"/register"}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Create account
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
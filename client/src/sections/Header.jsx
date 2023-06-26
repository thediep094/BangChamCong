import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/sections/Header.scss";
import { getDataFromAccessToken } from "../store/apiCall";
const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const userLocal = localStorage?.getItem("accessToken");
    if (!user) {
      if (userLocal) {
        getDataFromAccessToken(dispatch, userLocal);
      }
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };
  return (
    <div className="header">
      <div className="header__navigation">
        <a href="/">Home</a>
      </div>

      <div className="header__buttons">
        {!user ? (
          <Fragment>
            <a className="header__account" href="/login">
            Login
          </a>
          <a href="/register" className="header__account">
            Register
          </a>
          </Fragment>
        ) : (
          <div className="header__user">
            <a href="/account">{user.username}</a>
            <div
              className="header__logout"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

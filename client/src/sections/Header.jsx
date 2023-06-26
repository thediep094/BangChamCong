import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import "../styles/sections/Header.scss"
import { getDataFromAccessToken } from '../store/apiCall';
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
  return (
    <div className="header">
        <div className="header__navigation">
            <a href="/">Home</a>
        </div>

        <div className="header__buttons">
            <a className="header__account" href='/login'>
                Login
            </a>
        </div>
    </div>
  )
}

export default Header
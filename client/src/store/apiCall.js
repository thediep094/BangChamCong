import { loginStart, loginSuccess, loginFailure } from "./slice/userSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`http://localhost:3000/api/auth/login`, {
      username: user.username,
      password: user.password,
    });
    dispatch(loginSuccess(res.data.user));
    console.log(res.data);
    localStorage.setItem("accessToken", res.data.token.accessToken);
    alert("Đăng nhập thành công");
  } catch (error) {
    dispatch(loginFailure());
    alert("Đăng nhập thất bại");
  }
};

export const register = async (dispatch, user) => {
  try {
    dispatch(loginStart());
    const res = await axios.post(`http://localhost:3000/api/user/create`, {
      fullname: user.fullname,
      username: user.username,
      password: user.password,
      date: user.date,
      mail: user.mail,
      va: user.ingame,
      avatar: "",
      role: "user",
      phone: user.phone,
      salary: 0,
    });
    if (res.status == 200) {
      const res2 = await axios.post(`http://localhost:3000/api/auth/login`, {
        username: user.username,
        password: user.password,
      });
      dispatch(loginSuccess(res.data.user));
      localStorage.setItem("accessToken", res.data.token.accessToken);
      alert("Tạo tài khoản thành công");
    }
  } catch (error) {
    dispatch(loginFailure());
    alert("Tạo tài khoản thất bại");
  }
};

export const getDataFromAccessToken = async (dispatch, accessToken) => {
  dispatch(loginStart());
  try {
    const res = await axios.get(`http://localhost:3000/api/user/account`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(loginSuccess(res.data.user));
  } catch (error) {
    dispatch(loginFailure());
    localStorage.removeItem("accessToken");
    alert("Đăng nhập thất bại");
  }
};

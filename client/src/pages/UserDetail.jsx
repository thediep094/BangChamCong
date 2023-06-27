import React, { Fragment, useEffect, useState } from "react";
import Header from "../sections/Header";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../styles/pages/UserDetail.scss"
const UserDetail = () => {
  const user = useSelector((state) => state.user.user);
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file upload
  const handleUploadImg = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      // Make a POST request to the server
      const response = await axios.post(`http://localhost:3000/api/user/uploadimg/${user?.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Image uploaded successfully");
    } catch (error) {
      alert("Error uploading image:");
    }
  };
  const [userForm, setUserForm] = useState({
    fullname: user?.fullname,
    username: user?.username,
    password: "",
    date: user?.date,
    mail: user?.mail,
    avatar: user?.avatar,
    phone: user?.phone,
    role: user?.role,
    salary: user?.salary,
    gender: user?.gender,
  });

  useEffect(() => {
    setUserForm({
      fullname: user?.fullname,
      username: user?.username,
      password: "",
      date: user?.date,
      mail: user?.mail,
      avatar: user?.avatar,
      phone: user?.phone,
      role: user?.role,
      salary: user?.salary,
      gender: user?.gender,
    });
  }, [user]);

  const handleUpdate = async () => {
    try {
      let newForm;
      if(!userForm.password){
        const {password, ...form} = userForm;
        newForm = form
      } else {
        newForm = userForm
      }
      const res = await axios.put(
        `http://localhost:3000/api/user/update/${user?._id}`,
        newForm
      );
      alert("Updated");
    } catch (error) {
      alert("Error updating");
    }
  };
  return (
    <Fragment>
      <Header />
      <div className="userDetails">
        <form className="form__img">
          <input type="file"  onChange={(e)=>handleFileChange(e)}/>
          <div className="form__img-btn " onClick={()=>handleUploadImg()}>Upload Img</div>
        </form>

        <form>
          <div className="input_field">
            <input
              type="text"
              name="username"
              id="username"
              required
              disabled
              value={userForm.username}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input_field">
            <input
              type="password"
              name="password"
              id="password"
              value={userForm?.password}
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
              value={userForm?.mail}
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
              value={userForm?.fullname}
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
              value={userForm?.date}
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
              value={userForm?.phone}
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
              value={userForm?.gender}
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

          <div className="input_field">
            <input
              type="text"
              name="salary"
              id="salary"
              value={userForm?.salary}
              disabled
            />
            <label htmlFor="salary">Salary</label>
          </div>
        <div className="button__update" onClick={()=>handleUpdate()}>Update</div>
        </form>

      </div>
    </Fragment>
  );
};

export default UserDetail;

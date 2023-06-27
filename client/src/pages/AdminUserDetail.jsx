import React, { Fragment, useEffect, useState } from "react";
import Header from "../sections/Header";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../styles/pages/UserDetail.scss"
import { useParams } from "react-router-dom";
const AdminUserDetail = () => {
    const user = useSelector((state) => state.user.user);
    const { id } = useParams()
    const [userForm, setUserForm] = useState({
      fullname: "",
      username: "",
      password: "",
      date: "",
      mail: "",
      avatar: "",
      phone: "",
      role: "",
      salary: 0,
      gender: "",
    });
  
    useEffect(() => {
        const fetchUser = async () => {
           try {
            const res = await axios.post(`http://localhost:3000/api/user/admin/account/${id}`,
            {
                admin: user?.role == 'admin' ? true : false
            })

            console.log(res)

            setUserForm({
              fullname: res.data.user?.fullname,
              username: res.data.user?.username,
              password: "",
              date: res.data.user?.date,
              mail: res.data.user?.mail,
              avatar: res.data.user?.avatar,
              phone: res.data.user?.phone,
              role: res.data.user?.role,
              salary: res.data.user?.salary,
              gender: res.data.user?.gender,
            });
           } catch (error) {
            
           }
        }

        fetchUser()
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
          `http://localhost:3000/api/user/admin/update/${id}`,
         {
            ...newForm,
            admin: user?.role == 'admin' ? true : false
         }
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
                onChange={(e) => {
                    setUserForm({
                      ...userForm,
                      salary: e.target.value,
                    });
                  }}
              />
              <label htmlFor="salary">Salary</label>
            </div>
          <div className="button__update" onClick={()=>handleUpdate()}>Update</div>
          </form>
  
        </div>
      </Fragment>
    );
}

export default AdminUserDetail
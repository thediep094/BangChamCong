import React, { Fragment, useEffect, useState } from "react";
import Header from "../sections/Header";
import "../styles/pages/ListMember.scss";
import { useSelector } from "react-redux";
import axios from "axios";
const ListMember = () => {
  const [list, setList] = useState([]);
  const user = useSelector((state) => state.user.user);
  const fetchData = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/user/admin/getallusers`,
        {
          admin: user?.role == "admin" ? true : false,
        }
      );
      setList(res.data.users);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/user/admin/delete/${id}`,
        {
          admin: user?.role == "admin" ? true : false,
        }
      );
      alert("Deleted");
      fetchData();
    } catch (error) {
      alert("Error delete");
    }
  };
  return (
    <div className="listmember">
      <Header />
      <div className="listmember__wrapper">
        <h1>Danh sach nhan vien</h1>
        <div className="listmember__content-table">
          <div className="listmember__item">
            <div className="chamcong__heading-item">Ten</div>

            <div className="chamcong__heading-item">So dien thoai</div>

            <div className="chamcong__heading-item">gioi tinh</div>

            <div className="chamcong__edit">Chinh sua</div>
          </div>
          {list.map((item, index) => {
            return (
              <div className="listmember__item">
                <div className="chamcong__heading-item">{item?.fullname}</div>

                <div className="chamcong__heading-item">{item?.phone}</div>

                <div className="chamcong__heading-item">{item?.gender}</div>

                <div className="chamcong__edit">
                  <a href={`/admin/account/${item._id}`}>Sua</a>
                  <div
                    className="listmember__delete"
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    Xoa
                  </div>
                  <a href={`/admin/statistical/${item.id}`}>Xem chi tiet</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListMember;

import React, { Fragment, useEffect, useState } from "react";
import Header from "../sections/Header";
import "../styles/pages/ListMember.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../API_URL";
import { useParams } from "react-router-dom";
const ListMember = () => {
  const [list, setList] = useState([]);
  const [findPosition, setFindPosition] = useState("all");
  const [listPosition, setListPosition] = useState([]);
  const {position} =  useParams();
  const user = useSelector((state) => state.user.user);
  const fetchData = async () => {
    try {
      const res = await axios.post(
        `${API_URL}/api/user/admin/getallusers/${findPosition}`,
        {
          admin: user?.role == "admin" ? true : false,
        }
      );
      setList(res.data.users);
    } catch (error) {}
  };

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/position/getall`);

        setListPosition(res.data.data);
      } catch (error) {}
    };
    fetchPositions();
  }, []);


  useEffect(() => {
    fetchData();
  }, [user]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/user/admin/delete/${id}`,
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

      <div className="listmember__heading">
          <div>
            <h2>Chon chuc vu</h2>
            <select onChange={(e)=> setFindPosition(e.target.value)}  className="listmember__heading-inputs">
            <option value={"all"}>
                    Tat ca
                  </option>
              { listPosition ? listPosition.map((item) => {
                return(
                  <option value={item._id}>
                    {item.name}
                  </option>
                )
              }) : null}
            </select>

            <button className="listmember__heading-btn" onClick={() => fetchData()}>Tim</button>
          </div>
        </div>
        <h1>Danh sach nhan vien</h1>
        <div className="listmember__content-table">
          <div className="listmember__item">
            <div className="chamcong__heading-item">Ten</div>

            <div className="chamcong__heading-item">So dien thoai</div>

            <div className="chamcong__heading-item">gioi tinh</div>

            <div className="chamcong__heading-item">Chuc vu</div>

            <div className="chamcong__edit">Chinh sua</div>
          </div>
          {list.map((item, index) => {
            console.log(item)
            return (
              <div className="listmember__item">
                <div className="chamcong__heading-item">{item?.fullname}</div>

                <div className="chamcong__heading-item">{item?.phone}</div>

                <div className="chamcong__heading-item">{item?.gender}</div>

                <div className="chamcong__heading-item">{item?.position?.name}</div>

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

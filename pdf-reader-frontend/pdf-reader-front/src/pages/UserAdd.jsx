import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminNavi from "../layouts/AdminNavi"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserAdd() {
  const [kullaniciAdi, setkullaniciAdi] = useState();
  const [kullanici_sifre, setkullanici_sifre] = useState();
 

  const handleAdd = (event) => {
    event.preventDefault();

    const data = {
      kullanici_adi: kullaniciAdi,
      kullanici_sifre: kullanici_sifre,
    };

    axios
      .post("http://localhost:3000/admin/addUser", data, {
        headers: { "auth-token": sessionStorage.getItem("token") },
      })
      .then((res) => {
        toast.success("Kullanıcı Eklendi",{theme:"colored"})
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <AdminNavi/>
      <form onSubmit={handleAdd}>
        <ToastContainer/>
        <div className="form-group">
          <label>Kullanıcı Adı</label>
          <input
            style={{ width: "350px", marginLeft: "600px" }}
            className="form-control"
            type="text"
            onChange={(e) => setkullaniciAdi(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Şifre</label>
          <input
            style={{ width: "350px", marginLeft: "600px" }}
            className="form-control"
            type="password"
            onChange={(e) => setkullanici_sifre(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary btn-block"
          style={{ marginTop: "30px", width: "200px" }}
        >
          Kullanıcı Ekle
        </button>
      </form>
      
    </div>
  );
}

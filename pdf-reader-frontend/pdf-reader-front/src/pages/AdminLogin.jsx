import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

export default function AdminLogin() {
  const [admin_adi, setadmin_adi] = useState();
  const [admin_sifre, setadmin_sifre] = useState();
  const [isSigned, setisSigned] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
        admin_adi: admin_adi,
        admin_sifre: admin_sifre,
    };

    axios
      .post("http://localhost:3000/admin/login", data)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        setisSigned(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Home/>
      <form onSubmit={handleSubmit} style={{marginTop:"120px"}}>
        <div className="form-group">
          <label>Admin Adı</label>
          <input
            style={{ width: "350px", marginLeft: "600px" }}
            className="form-control"
            type="text"
            onChange={(e) => setadmin_adi(e.target.value)}
          />
        </div>

        <div className="form-group" style={{marginTop:"20px" }}>
          <label>Şifre</label>
          <input
            style={{ width: "350px", marginLeft: "600px" }}
            className="form-control"
            type="password"
            onChange={(e) => setadmin_sifre(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary btn-block"
          style={{ marginTop: "30px", width: "200px" }}
        >
          Sign in
        </button>
      </form>
      {isSigned ? (
        <Redirect to="/admin"></Redirect>
      ) : (
        <Redirect to="/adminlogin"></Redirect>
      )}
    </div>
  );
}

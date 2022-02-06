import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import jwt_decode from "jwt-decode";
import AdminNavi from "../layouts/AdminNavi";


export default function UpdateUser() {
  let { id } = useParams();

  const [defaultAd, setdefaultAd] = useState("");
  const [defaultSifre, setdefaultSifre] = useState("");
  

  var decoded = jwt_decode(sessionStorage.getItem("token"));

  const data = {
    kullanici_adi: defaultAd,
    kullanici_sifre: defaultSifre,
    rol: decoded.rol,
  };

  useEffect(() => {
    axios.get("http://localhost:3000/admin/getAllUsers/" + id).then((res) => {
      console.log(res.data);
      setdefaultAd(res.data[0].kullanici_adi);
      setdefaultSifre(res.data[0].kullanici_sifre);
      
    });
  }, [id]);

  const handleUpdate = () => {
    axios
      .post("http://localhost:3000/admin/updateUser/" + id, data)
      .then((res) => {
        console.log(res.data);
        
      });
  };
  return (
    <div>
      <AdminNavi />
     
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Kullanıcı Adı</label>
          <input
            style={{ width: "350px", marginLeft: "600px" }}
            className="form-control"
            type="text"
            onChange={(e) => setdefaultAd(e.target.value)}
            value={defaultAd}
          />
        </div>

        <div className="form-group">
          <label>Şifre</label>
          <input
            style={{ width: "350px", marginLeft: "600px" }}
            className="form-control"
            type="text"
            onChange={(e) => setdefaultSifre(e.target.value)}
            value={defaultSifre}
          />
        </div>

        <button
          className="btn btn-primary btn-block"
          style={{ marginTop: "30px", width: "200px" }}
        >
          Güncelle
        </button>
      </form>
      
    </div>
  );
}

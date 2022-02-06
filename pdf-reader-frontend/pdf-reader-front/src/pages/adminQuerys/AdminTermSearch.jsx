import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import AdminNavi from "../../layouts/AdminNavi";

export default function WriterSearch() {
  const [donem, setdonem] = useState("");
  const [info, setinfo] = useState([]);

  var decoded = jwt_decode(sessionStorage.getItem("token"));
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      rol: decoded.rol,
      donem: donem,
    };

    axios
      .post("http://localhost:3000/admin/getDonem", data)
      .then((res) => {
        console.log(res.data);
        setinfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        <AdminNavi/>
      <div className="form-group">
        <label>Dönem Adı</label>
        <input
          style={{ width: "350px", marginLeft: "600px" }}
          className="form-control"
          type="text"
          onChange={(e) => setdonem(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary btn-block"
        style={{ marginTop: "30px", width: "200px" }}
        onClick={(e) => handleSubmit(e)}
      >
        Ara
      </button>

      

      <Table
        style={{ marginTop: "100px", width: "1000px", marginLeft: "250px" }}
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>Ad Soyad</th>
            <th>Başlık</th>
            <th>Ders</th>
            <th>Dönem</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {info.map((i) => (
            <tr key={i.pdf_id}>
              <td>{i.ad_soyad}</td>
              <td>{i.baslik}</td>
              <td>{i.ders_adı}</td>
              <td>{i.donem}</td>

              <td>
                <Button variant="danger">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href={"http://localhost:3000/uploads/" + i.pdf_isim}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Görüntüle
                  </a>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

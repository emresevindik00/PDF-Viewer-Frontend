import axios from "axios";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Navi from "../layouts/Navi";

export default function UserFile() {
  const [info, setinfo] = useState([]);
  var decoded = jwt_decode(sessionStorage.getItem("token"));

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/getAllFile/" + decoded.kullanici_id, {
        headers: { "auth-token": sessionStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        setinfo(res.data);
      });
  }, [decoded.kullanici_id]);

  return (
    <div>
      <Navi/>
      <h1>Hoş Geldin</h1>
      <Table
        style={{ marginTop: "100px", width: "1500px", marginLeft: "10px" }}
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>Pdf ID</th>
            <th>PDF</th>
            <th>Sahip Olan Kullanıcı</th>
            <th>Ad Soyad</th>
            <th>Anahtar Kelimeler</th>
            <th>Başlık</th>
            <th>Danışman</th>
            <th>Ders</th>
            <th>Dönem</th>
            <th>Öğretim Türü</th>
            <th>Jüri</th>
            <th>Öğrenci No</th>
            <th>Özet</th>
            <th>Görüntüle</th>
          </tr>
        </thead>
        <tbody>
          {info.map((i) => (
            <tr key={i.pdf_id}>
              <td>{i.pdf_id}</td>
              <td>{i.pdf_isim}</td>
              <td>{i.kullanici_id}</td>
              <td>{i.ad_soyad}</td>
              <td>{i.anahtar_kelimeler}</td>
              <td>{i.baslik}</td>
              <td>{i.danisman}</td>
              <td>{i.ders_adı}</td>
              <td>{i.donem}</td>
              <td>{i.ogretim_turu}</td>
              <td>{i.juri}</td>
              <td>{i.ogrenci_no}</td>
              <td style={{width:"10%"}}>{i.ozet}</td>
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

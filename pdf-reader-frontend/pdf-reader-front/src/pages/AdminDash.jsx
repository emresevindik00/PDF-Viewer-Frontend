import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import AdminNavi from "../layouts/AdminNavi"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminDash() {
  const [info, setinfo] = useState([]);
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/getAllPdf", {
        headers: { "auth-token": sessionStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        setinfo(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/getAllUsers", {
        headers: { "auth-token": sessionStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        setuser(res.data);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/admin/deleteUser/" + id, {
        headers: { "auth-token": sessionStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <AdminNavi></AdminNavi>
      <ToastContainer/>
      <Table
        style={{ marginTop: "100px", width: "1000px", marginLeft: "250px" }}
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>Kullanıcı ID</th>
            <th>Kullanıcı Adı</th>
            <th>Kullanıcı Şifre</th>
            <th>PDF ID</th>
            <th>PDF</th>
            <th>Ders Adı</th>
            <th>Dönem</th>
           
          </tr>
        </thead>
        <tbody>
          {info.map((i, key) => (
            <tr>
              <td>{i.kullanici_id}</td>
              <td>{i.kullanici_adi}</td>
              <td>{i.kullanici_sifre}</td>
              <td key={key}>{i.pdf_id}</td>
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
              <td>{i.ders_adı}</td>
              <td>{i.donem}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>

      <Table
        style={{ marginTop: "100px", width: "1000px", marginLeft: "250px" }}
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>Kullanıcı ID</th>
            <th>Kullanıcı Adı</th>
            <th>Kullanıcı Şifre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {user.map((u, key) => (
            <tr>
              <td key={key}>{u.kullanici_id}</td>
              <td>{u.kullanici_adi}</td>
              <td>{u.kullanici_sifre}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {handleDelete(u.kullanici_id);toast.success("Kullanıcı Silindi",{theme:"colored"})}}
                >
                  Sil
                </Button>
              </td>
              <td>
              <Button as={NavLink} to={`/updateuser/${u.kullanici_id}`} variant="info">
                Güncelle
              </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Link to="/useradd">
        <Button>Kullanıcı Ekle</Button>
      </Link>
    </div>
  );
}

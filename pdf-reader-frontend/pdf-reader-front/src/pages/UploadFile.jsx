import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navi from "../layouts/Navi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UploadFile() {
  const [file, setfile] = useState();
  
  var decoded = jwt_decode(sessionStorage.getItem("token"));

  const handleUpload = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("file",file);
    data.append("kullanici_id",decoded.kullanici_id)

    axios
      .post("http://localhost:3000/users/file", data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navi/>
      <ToastContainer/>
      <form encType="multipart/form-data" onSubmit={handleUpload}>
        <div className="form-group">
          <label>Dosya</label>
          <input
            style={{ width: "350px", marginLeft: "600px" }}
            className="form-control"
            type="file"
            onChange={(e) => setfile(e.target.files[0])}
          />
        </div>
        <button
          className="btn btn-primary btn-block"
          style={{ marginTop: "30px", width: "200px" }}
          onClick={ () => toast.success("Dosya Yüklendi",{theme:"colored"})}
        >
          Dosyayı Yükle
        </button>
      </form>
      
    </div>
  );
}

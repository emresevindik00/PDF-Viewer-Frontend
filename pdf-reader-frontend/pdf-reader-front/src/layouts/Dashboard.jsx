import React from "react";
import { Route } from "react-router";
import AdminDash from "../pages/AdminDash";
import AdminLogin from "../pages/AdminLogin";
import Home from "../pages/Home";
import UploadFile from "../pages/UploadFile";
import UserAdd from "../pages/UserAdd";
import UserFile from "../pages/UserFile";
import UserLogin from "../pages/UserLogin";
import WriterSearch from "../pages/querys/WriterSearch";
import LessonSearch from "../pages/querys/LessonSearch"
import TitleSearch from "../pages/querys/TitleSearch"
import TermSearch from "../pages/querys/TermSearch"
import KeySearch from "../pages/querys/KeySearch"
import SecondQuery from "../pages/querys/SecondQuery";
import AdminWriterSearch from "../pages/adminQuerys/AdminWriterSearch"
import AdminLessonSearch from "../pages/adminQuerys/AdminLessonSearch"
import AdminTitleSearch from "../pages/adminQuerys/AdminTitleSearch"
import AdminTermSearch from "../pages/adminQuerys/AdminTermSearch"
import AdminKeySearch from "../pages/adminQuerys/AdminKeySearch"
import AdminSecondQuerySearch from "../pages/adminQuerys/AdminSecondQuerySearch"
import UpdateUser from "../pages/UpdateUser";

export default function Dashboard() {
  return (
    <div>
      
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/userfile" component={UserFile} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/adminlogin" component={AdminLogin} />
      <Route exact path="/admin" component={AdminDash} />
      <Route exact path="/useradd" component={UserAdd} />
      
      <Route exact path="/uploadfile" component={UploadFile} />
      <Route exact path="/getbywriter" component={WriterSearch} />
      <Route exact path="/getbylesson" component={LessonSearch} />
      <Route exact path="/getbytitle" component={TitleSearch} />
      <Route exact path="/getbyterm" component={TermSearch} />
      <Route exact path="/getbykey" component={KeySearch} />
      <Route exact path="/getbysecondquery" component={SecondQuery} />
      
      <Route exact path="/admingetbywriter" component={AdminWriterSearch} />
      <Route exact path="/admingetbylesson" component={AdminLessonSearch} />
      <Route exact path="/admingetbytitle" component={AdminTitleSearch} />
      <Route exact path="/admingetbyterm" component={AdminTermSearch} />
      <Route exact path="/admingetbykey" component={AdminKeySearch} />
      <Route exact path="/admingetbysecondquery" component={AdminSecondQuerySearch} />
      <Route exact path="/updateuser/:id" component={UpdateUser} />
    </div>
  );
}

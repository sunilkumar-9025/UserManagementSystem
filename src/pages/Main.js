import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "../Components//Navbar";
import Sidenav from "../Components//Sidenav";
import Users from "./Users";
import Teams from "./Teams";
import Comment from "./Comment";
import Contacts from "./Contacts";

const Main = () => {
  const checkUser = localStorage.getItem("authenticated");
  console.log(checkUser);
  if (!checkUser) {
    return <Navigate to="/login" replace />;
  } else {
    return (
      <div>
        <Navbar />
        <div className="main">
          <Sidenav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/teams" element={<Teams />}></Route>
            <Route path="/comment" element={<Comment />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
          </Routes>
        </div>
      </div>
    );
  }
};

export default Main;

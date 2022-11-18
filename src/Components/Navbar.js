import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("username"));
  const logoutHandler = () => {
    localStorage.removeItem("authenticated");
    navigate("/");
  };
  return (
    <div className="nav">
      <Link to="/dashboard">
        <span style={{ color: "red" }}>Good </span>To{" "}
        <span style={{ color: "red" }}>Go</span>
      </Link>
      <div className="userInfo">
        <div className="mx-3">
          <i className="fa-solid fa-user-tie mx-2"></i>
          {username}
        </div>
        <button className="btn btn-info" onClick={logoutHandler}>
          Logout <i className="fa-solid fa-right-from-bracket ms-2"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

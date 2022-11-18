import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
} from "react-icons/fa";

const Sidenav = ({ children }) => {
  const username = JSON.parse(localStorage.getItem("username"));
  const [isOpen, setIsOpen] = useState(false);
  const active = false;
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUserAlt />,
    },
    {
      path: "/teams",
      name: "Teams",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/contacts",
      name: "Contacts",
      icon: <FaShoppingBag />,
    },
  ];
  return (
    <div className="sidenav-cont">
      <div style={{ width: isOpen ? "15%" : "50px" }}>
        <div className="sidenav-top">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="side-logo"
          >
            {username}
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="side-bar"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={active ? "active" : "link"}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidenav;

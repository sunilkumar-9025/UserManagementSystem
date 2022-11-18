import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Users = () => {
  const [showpswd, setShowpswd] = useState(false);
  const [loginUsers, setLoginUsers] = useState(
    JSON.parse(localStorage.getItem("users"))
  );
  const [loginuser, setLoginuser] = useState([
    {
      id: nanoid(),
      username: "",
      password: "",
    },
  ]);

  const handleUserAddSubmit = (e) => {
    e.preventDefault();
    setLoginUsers({ ...loginUsers, loginuser });
    localStorage.setItem("users", JSON.stringify({...loginUsers, loginuser}));
  };

  const shwhand = (id) => {
    console.log("sunil");
  };
  return (
    <div style={{ margin: "30px" }}>
      <h3>Add Login User</h3>
      <form className="d-flex" onSubmit={handleUserAddSubmit}>
        <input
          type="email"
          placeholder="username"
          value={loginuser.username}
          onChange={(e) =>
            setLoginuser({ ...loginuser, username: e.target.value })
          }
        />
        <input
          type={showpswd ? "text" : "password"}
          placeholder="password"
          value={loginuser.password}
          onChange={(e) =>
            setLoginuser({ ...loginuser, password: e.target.value })
          }
        />
        <span>
          <input type="checkbox" onClick={() => setShowpswd(!showpswd)} />
          show/hide password
        </span>
        <button type="submit">ADD </button>
      </form>

      <table>
        <tbody>
          {loginUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={shwhand(user.id)}>show</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

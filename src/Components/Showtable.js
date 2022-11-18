import React from "react";

const Showtable = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td id="butt">
        <button
          className="btn btn-primary"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button
          className="btn btn-primary"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  );
};

export default Showtable;

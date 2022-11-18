import React from "react";

const Editable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          className="table-edit"
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className="table-edit"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className="table-edit"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          className="table-edit"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button className="btn btn-primary" type="submit">
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleCancelClick}
        >
          <i className="fa-solid fa-rectangle-xmark"></i>
        </button>
      </td>
    </tr>
  );
};

export default Editable;

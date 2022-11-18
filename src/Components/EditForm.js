import React from "react";

const EditForm = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
}) => {
  console.log(editFormData);
  return (
    <div className="addform">
      <form onSubmit={handleEditFormSubmit}>
        <h3>EDIT USER DATA</h3>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />

        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          value={editFormData.address}
          onChange={handleEditFormChange}
        />

        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        />

        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          value={editFormData.email}
          onChange={handleEditFormChange}
        />

        <button className="btn btn-info" type="submit">
          <i className="fa-solid fa-floppy-disk mx-2"></i>Save
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleCancelClick}
        >
          <i className="fa-solid fa-rectangle-xmark mx-2"></i>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;

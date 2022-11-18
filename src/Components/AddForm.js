import React from "react";

const AddForm = ({ handleAddFormSubmit, handleAddFormChange, setShow }) => {
  return (
    <div className="addform">
      <form onSubmit={handleAddFormSubmit}>
        <h3> ADD USER DETAILS </h3>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />

        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />

        <button className="btn btn-info" type="submit">
          Add
        </button>
        <button className="btn btn-danger" onClick={() => setShow(false)}>
          Close
        </button>
      </form>
    </div>
  );
};

export default AddForm;

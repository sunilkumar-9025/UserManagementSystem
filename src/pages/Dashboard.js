import { nanoid } from "nanoid";
import React, { Fragment, useEffect, useState } from "react";
import Editable from "../Components//Editable";
import Showtable from "../Components//Showtable";
import AddForm from "../Components/AddForm";
import EditForm from "../Components//EditForm";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const data = JSON.parse(localStorage.getItem("stored"));
  useEffect(() => {
    if (data === null) {
      setContacts([]);
    } else {
      setContacts(data);
    }
  }, []);

  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    localStorage.setItem("stored", JSON.stringify(newContacts));
    window.location.reload();
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
    setEdit(false);
    localStorage.setItem("stored", JSON.stringify(newContacts));
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEdit(true);
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
    setEdit(false);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    localStorage.setItem("stored", JSON.stringify(newContacts));
  };

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div className="dashboard-cont">
      <button className="btn btn-info" onClick={() => setShow(true)}>
        <i className="fa-solid fa-user-plus mx-2"></i>ADD USER DATA
      </button>
      <div>
        {show && (
          <AddForm
            handleAddFormChange={handleAddFormChange}
            handleAddFormSubmit={handleAddFormSubmit}
            setShow={setShow}
          />
        )}
      </div>
      <div>
        {edit && (
          <EditForm
            editFormData={editFormData}
            handleEditFormChange={handleEditFormChange}
            handleCancelClick={handleCancelClick}
            handleEditFormSubmit={handleEditFormSubmit}
          />
        )}
      </div>
      <form onSubmit={handleEditFormSubmit}>
        <table className="table table-striped mx-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <Editable
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <Showtable
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import "./XModal.css";

const XModal = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
//   const [formdata, setFormdata] = useState([]);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      handleCloseForm();
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;

    if (!username || !email || !phone || !dob) {
      alert("All fields are required!");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
    // setFormdata((prevData) => [...prevData, { ...formData }]);
    alert("Form submitted successfully!");
    // handleCloseForm();
    setFormData({ username: "", email: "", phone: "", dob: "" });
    
    // console.log(formdata)

  };

  return (
    <div>
      <div className="openform">
        <h1>User Details Modal</h1>
        <button className="openFormBtn" onClick={handleOpenForm}>
          Open Form
        </button>
      </div>

      {isFormOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <h1>Fill Details</h1>
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="inputs">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="inputs">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="inputs">
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;

import { useState } from 'react';
// import { redirect } from "react-router-dom";
import axios from 'axios';

const UserDetailsForm = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make POST request to the server to save the user data
    axios.post('http://localhost:5500/api/user', user)
      .then((response) => {
        console.log('User data saved successfully:', response.data);
        // Reset the form fields
        setUser({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: ''
        });
        window.location = "/index";
      })
      .catch((error) => {
        console.error('Error saving user data:', error);
      });
      
  };

  return (
    <div>
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={user.firstName} onChange={handleChange} required /><br /><br />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={user.lastName} onChange={handleChange} required /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required /><br /><br />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} required /><br /><br />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={user.address} onChange={handleChange} required></textarea><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserDetailsForm;

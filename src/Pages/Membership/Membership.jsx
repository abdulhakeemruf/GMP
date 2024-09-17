// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './Membership.css';  // Add your CSS styles here

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    day: '',
    month: '',
    year: '',
    contactNumber: '',
    whatsappNumber: '',
    country: '',
    contactAddress: '',
    state: '',
    email: '',
    linkedIn: ''
  });

  // Create arrays for days, months, and years
  const days = Array.from({ length: 31 }, (_, i) => i + 1); // 1 to 31
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i); // Last 100 years

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Combine day, month, year to create a dateOfBirth field
    const dateOfBirth = `${formData.day}-${formData.month}-${formData.year}`;
  
    try {
      await axios.post('http://localhost:5000/send-email', {
        formData: {
          ...formData,
          dateOfBirth
        }
        
      });
      console.log(formData);
      alert('Form submitted and email sent successfully!');
    } catch (error) {
      console.error('There was an error!', error);
      alert('There was an error submitting the form. Please try again.');
    }
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Middle Name:</label>
        <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
      </div>
      <div>
        <label>Date of Birth:</label>
        <div className="dob-dropdowns">
          <select name="day" value={formData.day} onChange={handleChange} required>
            <option value="">Day</option>
            {days.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
          <select name="month" value={formData.month} onChange={handleChange} required>
            <option value="">Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
          <select name="year" value={formData.year} onChange={handleChange} required>
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Other form fields */}
      <div>
        <label>Contact Number:</label>
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>WhatsApp Number:</label>
        <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} />
      </div>
      <div>
        <label>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} required />
      </div>
      <div>
        <label>Contact Address:</label>
        <input type="text" name="contactAddress" value={formData.contactAddress} onChange={handleChange} required />
      </div>
      <div>
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>LinkedIn Profile:</label>
        <input type="url" name="linkedIn" value={formData.linkedIn} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

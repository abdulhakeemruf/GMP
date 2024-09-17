/* eslint-disable no-undef */
// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abdulhakeemrufai3@gmail.com', // Your Gmail
    pass: 'Ola$2004' // Your Gmail Password (use App Password if you have 2FA enabled)
  }
});

mongoose.connect('mongodb+srv://abdulhakeemrufai3:Olanrewaju2004@cluster0.dmyzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define the schema for the form data
const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  middleName: String,
  dateOfBirth: String,
  contactNumber: String,
  whatsappNumber: String,
  country: String,
  contactAddress: String,
  state: String,
  email: String,
  linkedIn: String
});

// Create the model from the schema
const FormModel = mongoose.model('Form', formSchema);

// POST route to handle form submission, save data, and send an email
app.post('/send-email', (req, res) => {
  const { formData } = req.body;

  // Save form data to MongoDB
  const newForm = new FormModel(formData);
  newForm.save()
    .then(() => {
      // If saved successfully, send the email
      const mailOptions = {
        from: formData.email,
        to: 'abdulhakeemrufai3@gmail.com',
        subject: 'New Form Submission',
        text: `Form data: ${JSON.stringify(formData)}`
      };

      // eslint-disable-next-line no-unused-vars
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json({ error: 'Email failed to send: ' + error.message });
        }
        res.status(200).json({ message: 'Form saved and email sent successfully!' });
      });
    })
    .catch(error => {
      res.status(500).json({ error: 'Form failed to save: ' + error.message });
    });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});

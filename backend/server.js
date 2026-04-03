const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Mahwa Fondation API is running...');
});

// Post route for contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Nouveau message reçu:', { name, email, message });
  
  // Ici vous pourrez intégrer un service d'envoi d'email comme Nodemailer ou Resend
  
  res.status(200).json({ success: true, message: 'Message bien reçu !' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

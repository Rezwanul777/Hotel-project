const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000;

// body parser
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.json({ limit:'10mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit:'10mb' }))
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

const blogRoutes = require('./src/routes/blog.route');
const commentRoutes = require('./src/routes/comment.route');
const authRoutes = require('./src/routes/auth.route');

// Database connection with retry logic
async function main() {
  let retries = 5;
  while (retries) {
    try {
      await mongoose.connect(process.env.DB_URL, {
        serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of default 30 seconds
        connectTimeoutMS: 30000, // 30 seconds
        socketTimeoutMS: 45000, // 45 seconds
        family: 4, // Use IPv4
      });
      console.log('Database connected successfully');
      break;
    } catch (err) {
      console.log('Failed to connect to the database, retrying...', err);
      retries -= 1;
      await new Promise(res => setTimeout(res, 5000)); // Wait 5 seconds before retrying
    }
  }
  if (retries === 0) {
    console.error('Could not connect to the database after multiple attempts');
    process.exit(1);
  }
}

main();

// Define routes
app.use('/api/v1/blog', blogRoutes);
app.use('/api/v1/comment', commentRoutes);
app.use('/api/v1/auth', authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

##Project Overview
The Hotel Rooftop Operations project is a full-stack application designed to manage and streamline operations for hotel rooftops, especially those with pool facilities. This application helps manage bookings, track amenities, handle customer inquiries, and view analytics for rooftop pools.

This system is built with a React frontend styled with Tailwind CSS and an Express.js backend connected to a MongoDB database.

##Features
User Authentication: User registration and login with JWT-based authentication.
Rooftop Management: Add, edit, and delete rooftop pool information.
Booking System: Real-time booking availability and management for rooftop pools.
Customer Feedback: Users can leave reviews and feedback on rooftop amenities.
Admin Dashboard: Analytics and reports on bookings, reviews, and rooftop usage.
Responsive Design: User-friendly interface optimized for mobile and desktop.
Technology Stack
Frontend
React: JavaScript library for building the user interface.
Tailwind CSS: Utility-first CSS framework for styling.
Backend
Express.js: Web framework for Node.js to create the API.
MongoDB: NoSQL database for data storage.
Other Tools
JWT: For secure user authentication.
Axios: For API requests from the frontend.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
Installation
Follow these steps to set up the project locally.

Prerequisites
Node.js installed on your machine.
MongoDB setup locally or a MongoDB Atlas account for a cloud database.
Steps
Clone the repository

bash
Copy code
git clone 
cd hotel
Install Backend Dependencies

bash
Copy code
cd backend
npm install
Install Frontend Dependencies

bash
Copy code
cd ../frontend
npm install
Environment Variables
Create a .env file in the backend folder and add the following variables:

MONGODB_URI: MongoDB connection string.
JWT_SECRET: Secret key for JWT authentication.
PORT: Server port (default: 5000).
Run the Backend Server

bash
Copy code
cd backend
npm start
Run the Frontend Development Server

bash
Copy code
cd ../frontend
npm run dev
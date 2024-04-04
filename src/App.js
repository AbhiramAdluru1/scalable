// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import CalorieTracker from './components/BMI';
import MealDB from './components/MealDB'; // Import the MealDB component
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Wrap your routes with <Routes> */}
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/BMI" element={<CalorieTracker />} />
          {/* Add Route for MealDB component */}
          <Route path="/meal-db" element={<MealDB />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

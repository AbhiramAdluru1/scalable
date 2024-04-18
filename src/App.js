import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import CalorieTracker from './components/BMI';
import MealDB from './components/MealDB';
import NewLogin from './components/NewLogin';
import { Container } from '@mui/material';
import SignUp from './components/Signup';

function App() {
  return (
    <Container>
    <Router>
      <div>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<NewLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/BMI" element={<CalorieTracker />} />
          <Route path="/meal-db" element={<MealDB />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
    </Container>
  );
}

export default App;

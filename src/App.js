import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import LocationPages from './pages/LocationPages/LocationPages';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<LocationPages />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

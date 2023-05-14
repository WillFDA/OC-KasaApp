import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import LocationPages from './pages/LocationPages/LocationPages';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} index />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/location/:id" element={<MainLayout><LocationPages /></MainLayout>} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function MainLayout({ children }) {
  return (
    <>
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}

export default App;

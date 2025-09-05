import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import RoutePlanner from './pages/RoutePlanner';
import FareInfo from './pages/FareInfo';
import Schedules from './pages/Schedules';
import About from './pages/About';
export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plan" element={<RoutePlanner />} />
            <Route path="/fares" element={<FareInfo />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}
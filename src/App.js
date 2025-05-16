// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';  // ← import Routes, Route
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Spinner from './Helpers/Spinner/Spinner';
import Header from './layouts/Header/Header';
import HeaderCarousel from './components/HeaderCarousel/HeaderCarousel';
import About from './components/About/About';
import BoardOfTrusteesSection from './components/BoardOfTrusteesSection/BoardOfTrusteesSection';
import DonateSection from './components/DonateSection/DonateSection';
import TeamSection from './components/TeamSection/TeamSection';
import GetInvolveSection from './components/GetInvoveSection/GetInvolveSection';
import ContactFormSection from './components/ContactFormSection/ContactFormSection';
import Footer from './components/Footer/Footer';
import VolunteerForm from './pages/volunteerForm/VolunteerForm';
import PatientDetailsForm from './pages/PatientDetailsForm/PatientDetailsForm';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="App">
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeaderCarousel />
              <About />
              <BoardOfTrusteesSection />
              <DonateSection />
              <TeamSection />
              <GetInvolveSection />
              <ContactFormSection />
              <Footer />
            </>
          }
        />

        {/* Volunteer Form Route */}
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route path="/patientDetails" element={<PatientDetailsForm />} />
        
      </Routes>
    </div>
  );
}

export default App;

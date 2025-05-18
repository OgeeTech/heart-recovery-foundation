// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';  // ← import useLocation
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

  // Get current location
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="App" id="root">
      {/* Pass isHomePage prop */}
      <Header isHomePage={isHomePage} />

      {/* Add paddingTop dynamically based on isHomePage */}
      <div
        className="main"
        style={{
          paddingTop: isHomePage ? '0' : '80px',
          paddingBottom: '60px'  // Optional footer spacing
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderCarousel />
                <About />
                <BoardOfTrusteesSection />
                <DonateSection />
                <TeamSection />
                <GetInvolveSection />
                <ContactFormSection />
              </>
            }
          />
          <Route path="/volunteer" element={<VolunteerForm />} />
          <Route path="/patientDetails" element={<PatientDetailsForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/boardOfTrustees" element={<BoardOfTrusteesSection />} />
          <Route path="/donate" element={<DonateSection />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/getInvolved" element={<GetInvolveSection />} />
          <Route path="/contact" element={<ContactFormSection />} />
          <Route path="/latestNews" element={<GetInvolveSection />} />
          <Route path="/corporateSponsors" element={<GetInvolveSection />} />
          <Route path="/individualSponsors" element={<GetInvolveSection />} />
          <Route path="/patientFinancialApplicationForm" element={<PatientDetailsForm />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

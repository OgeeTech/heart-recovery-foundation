// src/App.js
import React, { useState, useEffect } from 'react';
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
import Footer from './components/Footer/Footer';
import TeamSection from './components/TeamSection/TeamSection';
import ContactFormSection from './components/ContactFormSection/ContactFormSection';
import GetInvolveSection from './components/GetInvoveSection/GetInvolveSection';
function App() {
  const [loading, setLoading] = useState(true);

  // Effect to simulate loading for 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second
    }, 1000); // 1000ms = 1 second

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <div className="App">
      {loading && <Spinner />}
      {!loading && (
        <div>

          <Header />
          <HeaderCarousel />
          <About />
          <BoardOfTrusteesSection /> 
          <DonateSection />
          <TeamSection/>
          <GetInvolveSection/>
          <ContactFormSection/>
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;

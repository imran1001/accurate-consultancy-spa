import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import WhyChooseUs from './components/WhyChooseUs';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <WhyChooseUs />
      <ConsultationForm />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;

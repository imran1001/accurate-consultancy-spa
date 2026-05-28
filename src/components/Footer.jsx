import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="Accurate Consultancy" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Your trusted partner in global immigration, delivering premium visa services with expertise, integrity, and personalized care.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Linkedin, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-blue-900 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Services</h3>
            <ul className="space-y-3">
              {['Visit Visa', 'Work Visa', 'Study Abroad', 'Skilled Immigration', 'Business Visa'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center space-x-2">
                    <ChevronRight size={16} />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <div className="text-gray-400">+92 316 0285386</div>
                  <div className="text-gray-400">+92 303 0411114</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                <a href="mailto:info@accurate-consultancy.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                  info@accurate-consultancy.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                <div className="text-gray-400">Lahore, Pakistan</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Accurate Consultancy. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

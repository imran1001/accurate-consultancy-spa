import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const phoneNumber = '923160285386'; // Pakistan number without +
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Accurate%20Consultancy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20visa%20services.`;

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Ring Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500/20 animate-pulse group-hover:animate-none group-hover:scale-110 transition-all duration-300"></div>
        
        {/* Main Button */}
        <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 flex items-center justify-center group/btn">
          <MessageCircle size={28} className="text-white" />
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 rotate-45 -mt-1"></div>
          </div>
        </div>
      </a>

      {/* Mobile responsive version */}
      <style>{`
        @media (max-width: 640px) {
          [aria-label="Chat on WhatsApp"] {
            bottom: 6rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppWidget;

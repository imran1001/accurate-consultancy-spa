import React from 'react';
import { X } from 'lucide-react';

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  const detailedDescriptions = {
    'Visit Visa': {
      fullDescription: 'Our comprehensive visit visa services cover tourism, family reunification, and short-term travel across multiple countries. We manage the entire process from documentation preparation to embassy liaison, ensuring smooth approval and timely processing.',
      benefits: [
        'Fast-track visa processing with priority handling',
        'Expert documentation package preparation',
        'Direct embassy coordination and follow-ups',
        'Visa interview guidance and preparation',
        'Multiple destination visa expertise'
      ],
      timeline: '7-15 business days',
      requirements: 'Valid passport, financial proof, travel itinerary, invitation letter'
    },
    'Work Visa': {
      fullDescription: 'Employment-based immigration solutions for professionals seeking international career opportunities. We specialize in work visas, corporate transfers, and skilled worker programs across USA, UK, Canada, Australia, and UAE.',
      benefits: [
        'Employer sponsorship coordination',
        'Skills assessment and profile optimization',
        'Job market guidance for target countries',
        'Contract negotiation support',
        'Post-visa relocation assistance'
      ],
      timeline: '2-6 months depending on country',
      requirements: 'Educational credentials, work experience, professional certifications, job offer letter'
    },
    'Study Abroad': {
      fullDescription: 'Complete study visa consultancy for global education opportunities. We guide students through university selection, application processes, and visa procedures for top institutions worldwide.',
      benefits: [
        'University shortlisting based on profile',
        'Application strategy and essay guidance',
        'Admission coordination with institutions',
        'Financial documentation preparation',
        'Scholarship opportunity identification'
      ],
      timeline: '3-4 months for full process',
      requirements: 'Academic transcripts, English proficiency (IELTS/TOEFL), financial proof, university admission letter'
    },
    'Skilled Immigration': {
      fullDescription: 'Permanent residency pathways for qualified professionals through express entry, points-based systems, and provincial nominee programs in Canada, Australia, and New Zealand.',
      benefits: [
        'Career assessment and skills evaluation',
        'Points calculation and optimization',
        'EOI and application preparation',
        'Provincial sponsorship guidance',
        'Post-approval settlement support'
      ],
      timeline: '4-8 months for complete process',
      requirements: 'Relevant work experience, education qualification, English language proficiency, skill assessment certificate'
    },
    'Business Immigration': {
      fullDescription: 'Tailored solutions for entrepreneurs and investors seeking business visas, startup programs, and investment-based immigration across multiple jurisdictions.',
      benefits: [
        'Business plan development and review',
        'Investment structuring guidance',
        'Source of funds documentation',
        'Business registration support',
        'Tax and legal compliance consultation'
      ],
      timeline: '3-6 months depending on investment amount',
      requirements: 'Business plan, financial statements, investment proof, personal background documentation'
    },
    'Travel Management': {
      fullDescription: 'Comprehensive travel and relocation management services beyond immigration. We handle visa coordination, travel logistics, accommodation, and settlement support for a seamless global transition.',
      benefits: [
        'Coordinated visa and travel document processing',
        'Flight and accommodation arrangements',
        'Travel insurance guidance',
        'Airport transfers and ground logistics',
        'Settlement and orientation in destination'
      ],
      timeline: 'Flexible based on your schedule',
      requirements: 'Immigration status confirmation, travel dates, accommodation preferences'
    }
  };

  const serviceDetails = detailedDescriptions[service.title] || {
    fullDescription: service.description,
    benefits: ['Expert guidance', 'Fast processing', 'Dedicated support'],
    timeline: 'Contact us for details',
    requirements: 'Contact us for requirements'
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'}`}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className={`relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto transition-all duration-300 transform ${isOpen ? 'scale-100' : 'scale-95'}`}>
        
        {/* Header */}
        <div className={`sticky top-0 bg-gradient-to-r ${service.gradient} p-8 text-white flex items-center justify-between`}>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <service.icon size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{service.title}</h2>
              <p className="text-white/80 mt-1">Comprehensive Immigration Solution</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          
          {/* Full Description */}
          <div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Overview</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {serviceDetails.fullDescription}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Key Benefits</h3>
            <div className="grid gap-3">
              {serviceDetails.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline and Requirements */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <h4 className="text-lg font-bold text-blue-950 mb-2">Typical Timeline</h4>
              <p className="text-gray-700 font-semibold">{serviceDetails.timeline}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h4 className="text-lg font-bold text-blue-950 mb-2">Basic Requirements</h4>
              <p className="text-gray-700 text-sm">{serviceDetails.requirements}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition-all duration-300"
            >
              Close
            </button>
            <a
              href="#consultation"
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;

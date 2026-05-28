import React, { useState } from 'react';
import { Plane, Briefcase, GraduationCap, Users, Building2, Compass, ChevronRight } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import ServiceModal from './ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Plane,
      title: 'Visit Visa',
      description: 'Tourism, family visits, and short-term travel visas with streamlined processing and expert guidance for hassle-free approval.',
      gradient: 'from-blue-900 to-blue-800'
    },
    {
      icon: Briefcase,
      title: 'Work Visa',
      description: 'Employment-based visas, corporate transfers, and skilled worker programs for global career opportunities and professional growth.',
      gradient: 'from-amber-700 to-amber-600'
    },
    {
      icon: GraduationCap,
      title: 'Study Abroad',
      description: 'Student visas, university placements, and educational pathway consulting for top global institutions worldwide.',
      gradient: 'from-blue-800 to-blue-700'
    },
    {
      icon: Users,
      title: 'Skilled Immigration',
      description: 'Express Entry, points-based pathways, and permanent residency programs for qualified professionals seeking permanent settlement.',
      gradient: 'from-amber-600 to-yellow-600'
    },
    {
      icon: Building2,
      title: 'Business Immigration',
      description: 'Investor visas, entrepreneur programs, and business expansion immigration solutions for global ventures and startups.',
      gradient: 'from-blue-900 to-indigo-900'
    },
    {
      icon: Compass,
      title: 'Travel Management',
      description: 'Comprehensive travel and relocation services including visa coordination, logistics, and settlement support for seamless transitions.',
      gradient: 'from-amber-500 to-yellow-500'
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollAnimationWrapper animationType="fadeInUp" className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-600 font-bold text-sm tracking-[0.2em] uppercase">WHAT WE OFFER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Premium Immigration Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive visa solutions tailored to your unique goals and circumstances. Click any service to learn more details.
          </p>
        </ScrollAnimationWrapper>

        {/* Services Grid - 3x2 Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper 
              key={index} 
              animationType="fadeInUp" 
              className="h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                onClick={() => handleServiceClick(service)}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-400 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col justify-between"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <service.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center text-amber-600 font-semibold group-hover:gap-2 transition-all duration-300 pt-4 border-t border-gray-100">
                  <span>View Details</span>
                  <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="fadeInUp" className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-950 to-indigo-950 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Immigration Journey?</h3>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to guide you through every step of your visa process. Get a personalized consultation today.
            </p>
            <a
              href="#consultation"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-amber-500/60 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Schedule Free Consultation</span>
              <ChevronRight size={20} />
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* Service Modal */}
      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Services;

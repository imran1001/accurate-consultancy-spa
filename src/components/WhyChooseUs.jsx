import React from 'react';
import { Award, FileCheck, Shield, Target } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const WhyChooseUs = () => {
  const whyChoose = [
    {
      icon: Award,
      title: 'Unmatched Expertise',
      description: '15+ years of proven success with thousands of approved visa applications across multiple jurisdictions and immigration categories.'
    },
    {
      icon: FileCheck,
      title: 'Personalized Strategy',
      description: 'Every client receives a tailored immigration strategy designed specifically for their unique circumstances and goals.'
    },
    {
      icon: Shield,
      title: 'Complete Transparency',
      description: 'End-to-end documentation support with real-time updates and honest assessments throughout your immigration journey.'
    },
    {
      icon: Target,
      title: 'High Success Rate',
      description: 'Industry-leading approval rates backed by meticulous preparation and deep regulatory knowledge of each country.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animationType="fadeInUp" className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-600 font-bold text-sm tracking-[0.2em] uppercase">OUR ADVANTAGE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Why Choose Accurate Consultancy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your success is built on our foundation of excellence, integrity, and unparalleled expertise</p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {whyChoose.map((item, index) => (
            <ScrollAnimationWrapper 
              key={index} 
              animationType="fadeInUp"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

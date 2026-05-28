import React, { useState } from 'react';
import { Send } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    visaType: '',
    country: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ fullName: '', email: '', phone: '', visaType: '', country: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="consultation" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimationWrapper animationType="fadeInUp" className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-amber-600 font-bold text-sm tracking-[0.2em] uppercase">GET STARTED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Start Your Journey Today</h2>
          <p className="text-xl text-gray-600">Book a personalized consultation with our immigration experts</p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationType="fadeInUp">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-200">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Send className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-2">Thank You!</h3>
                <p className="text-gray-600">We'll contact you within 24 hours. Check your email for confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-950 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-950 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-950 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-950 mb-2">Visa Type *</label>
                    <select
                      name="visaType"
                      value={formData.visaType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none bg-white"
                    >
                      <option value="">Select visa type</option>
                      <option value="visit">Visit Visa</option>
                      <option value="work">Work Visa</option>
                      <option value="study">Study Visa</option>
                      <option value="skilled">Skilled Immigration</option>
                      <option value="business">Business Immigration</option>
                      <option value="travel">Travel Management</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-blue-950 mb-2">Destination Country *</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none bg-white"
                    >
                      <option value="">Select destination</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="newzealand">New Zealand</option>
                      <option value="uae">United Arab Emirates</option>
                      <option value="europe">Europe (Schengen)</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-blue-950 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none resize-none"
                      placeholder="Tell us about your immigration goals..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-amber-600/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Submit Consultation Request</span>
                </button>

                <p className="text-center text-sm text-gray-500">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            )}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default ConsultationForm;

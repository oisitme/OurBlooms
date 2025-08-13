import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import RazorpayReact from '../Components/RazorpayReact';
import CalendarPicker from '../Components/CalendarPicker';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      
      const result = await emailjs.send(
        'service_edxijph', 
        'template_tyen59e', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'trashhwork@gmail.com', 
        },
        'wNISsR78GTKFnabA5' 
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-16 mt-10 px-4">
      <h1 className="text-4xl font-bold text-amber-600 mb-6">Contact Us</h1>
      <p className="text-gray-600 text-center max-w-xl mb-10">
        We'd love to hear from you! Whether you have a question about our floral services, want to book a consultation, or just want to say hello, our team is ready to help you bloom.
      </p>
      <div className="w-full max-w-2xl bg-gray-50 rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-4 justify-center md:mt-[-90px] mt-0">
          <div className="flex items-center gap-2">
            <span className=" w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <span className="text-gray-700">Swatantra Nagar Narela Delhi</span>
          </div>
          <div className="flex items-center gap-2">
            <span className=" w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </span>
            <span className="text-gray-700">+91 (7065508384)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </span>
            <span className="text-gray-700 text-[14px]">raushankumarsam500@gmail.com</span>
          </div>
        </div>
        {/* Contact Form */}
        <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleInputChange}
            className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" 
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleInputChange}
            className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" 
            required 
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows={4} 
            value={formData.message}
            onChange={handleInputChange}
            className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" 
            required
          ></textarea>
          
          {submitStatus === 'success' && (
            <div className="text-green-600 text-sm text-center">Message sent successfully!</div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-600 text-sm text-center">Failed to send message. Please try again.</div>
          )}
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-amber-500 text-white font-semibold rounded-xl py-2 mt-2 hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

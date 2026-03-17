import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Explore India Smartly";
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation of form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="bg-brand-navy min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Get in <span className="text-brand-cyan">Touch</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question about a destination, want to partner with us, or have feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-8 rounded-3xl hover:border-brand-cyan/50 transition-colors">
              <div className="w-14 h-14 bg-brand-cyan/20 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-brand-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-2">For general inquiries & partnerships</p>
              <a href="mailto:hello@exploreindiasmartly.com" className="text-brand-cyan font-semibold hover:underline">hello@exploreindiasmartly.com</a>
            </div>

            <div className="glass-card p-8 rounded-3xl hover:border-brand-orange/50 transition-colors">
              <div className="w-14 h-14 bg-brand-orange/20 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Explore India Smartly HQ<br/>
                Connaught Place, New Delhi<br/>
                India 110001
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl hover:border-green-500/50 transition-colors">
              <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 mb-2">Mon-Fri from 9am to 6pm IST</p>
              <a href="tel:+919876543210" className="text-white font-semibold hover:text-brand-cyan">+91 98765 43210</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 md:p-12 rounded-3xl h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              
              {submitted ? (
                <div className="h-64 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea 
                      required
                      rows="5"
                      className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all resize-none"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="flex justify-center items-center gap-2 w-full md:w-auto px-10 py-4 bg-brand-cyan hover:bg-cyan-500 text-brand-navy rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-1"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

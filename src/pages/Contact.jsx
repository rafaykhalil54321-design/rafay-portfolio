import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 🚀 Success Message dikhane ke liye naya state
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 Fake Submit Function (Sare maslon ka hal)
  const handleSubmit = (e) => {
    e.preventDefault(); // Page ko refresh hone se rokega
    
    // 1. Success message on karega
    setIsSent(true); 
    
    // 2. Form ko wapas khali kar dega
    setFormData({ name: '', email: '', subject: '', message: '' });

    // 3. 5 seconds baad success message khud hi ghayab ho jayega
    setTimeout(() => {
      setIsSent(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get In <span className="text-teal-400">Touch</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out. I'm currently open to new challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              {/* Phone */}
              <a href="tel:03179671179" className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="p-3 bg-slate-950 rounded-lg text-teal-400 group-hover:bg-teal-400 group-hover:text-slate-950 transition-colors">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Phone Number</p>
                  <p className="text-white font-bold tracking-wide">0317 9671179</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:rafaykhalil54321@gmail.com" className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="p-3 bg-slate-950 rounded-lg text-teal-400 group-hover:bg-teal-400 group-hover:text-slate-950 transition-colors">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Email Address</p>
                  <p className="text-white font-bold">rafaykhalil54321@gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <div className="p-3 bg-slate-950 rounded-lg text-teal-400">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Location</p>
                  <p className="text-white font-bold">Nowshera, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Connect on Social</h3>
              <div className="flex gap-4">
                <a href="https://github.com/rafaykhalil54321-design" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/50 hover:bg-teal-400 hover:text-slate-950 text-slate-300 transition-all duration-300 shadow-lg">
                  <FiGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/rafay-khalil-46a2aa347/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/50 hover:bg-teal-400 hover:text-slate-950 text-slate-300 transition-all duration-300 shadow-lg">
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg space-y-6 relative overflow-hidden group">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              
              {/* 🚀 Form Tag lagaya aur onSubmit add kiya */}
              <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-slate-400">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-slate-400">Your Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Hello Rafay, I would like to discuss..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                  ></textarea>
                </div>

                {/* 🚀 Dynamic Button Area (Ya Submit Button hoga ya Success Message) */}
                <div className="sm:col-span-2 pt-2">
                  <AnimatePresence mode="wait">
                    {!isSent ? (
                      <motion.button 
                        key="submit-btn"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3.5 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-teal-500/20"
                      >
                        Send Message
                        <FiSend size={18} />
                      </motion.button>
                    ) : (
                      <motion.div 
                        key="success-msg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 font-bold py-3.5 px-8 rounded-lg"
                      >
                        <FiCheckCircle size={20} />
                        Message Sent Successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
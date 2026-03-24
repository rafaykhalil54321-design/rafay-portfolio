import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Text Content (Left Side - 3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 text-center lg:text-left space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Hello, I'm <span className="text-teal-400">Rafay Khalil</span>.
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-slate-100">
              Transforming Ideas into <span className="text-teal-400">Robust Code</span>
            </p>
            
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              Based in Pakistan, I am a passionate Full-Stack Developer specializing in React, Node.js, and Laravel. Currently focusing on building scalable systems at the University of Technology (UoT), Nowshera.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link 
                to="/projects" 
                className="group flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg shadow-teal-500/20"
              >
                Explore Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/resume" 
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium py-3.5 px-8 rounded-full transition-colors"
              >
                <FiDownload />
                View Resume
              </Link>
            </div>
          </motion.div>

          {/* 👇 Profile Photo (Right Side - 2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center items-center"
          >
            {/* The Container with Glow */}
            <div className="relative group">
              {/* Animated Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Actual Photo Circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-900 border-4 border-slate-8\00 rounded-full flex flex-col items-center justify-center text-slate-500 shadow-2xl overflow-hidden group-hover:border-teal-400 transition-colors duration-300">
                
                {/* 🌟 Your Photo Added Here 🌟 */}
                <img 
                  src="/rafay.png" // Pointing to public/rafay.png
                  alt="Rafay Khalil" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Home;
import { motion } from 'framer-motion';
import { FiDownload, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ResumeViewer = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 flex flex-col items-center">
      
      {/* Top Action Bar */}
      <div className="w-full max-w-5xl px-4 flex justify-between items-center mb-8">
        <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors font-medium">
          <FiArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>
        
        <a 
          href="/resume.pdf" 
          download="Rafay_Khalil_Resume.pdf"
          className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-teal-500/20"
        >
          <FiDownload size={18} />
          Download PDF
        </a>
      </div>

      {/* Premium PDF Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl px-4 h-[75vh]"
      >
        <div className="w-full h-full p-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl relative group hover:border-teal-500/50 transition-colors duration-500">
          
          {/* Background Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
          
          {/* Actual PDF Iframe */}
          <div className="relative w-full h-full bg-slate-950 rounded-xl overflow-hidden">
            <iframe 
              src="/resume.pdf#toolbar=0" 
              className="w-full h-full border-none"
              title="Rafay Khalil Resume"
            ></iframe>
          </div>
          
        </div>
      </motion.div>

    </div>
  );
};

export default ResumeViewer;
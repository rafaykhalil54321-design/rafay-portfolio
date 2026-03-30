import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiBriefcase, FiBookOpen, FiTarget, FiAward, FiZoomIn, FiX } from 'react-icons/fi';

const About = () => {
  // 🚀 Lightbox (Image Zoom) ke liye state
  const [selectedCert, setSelectedCert] = useState(null);

  // 🚀 Aapke Academic Certificates ka Data (Real Data Extracted)
  const certificates = [
    {
      id: 1,
      title: "HSSC Pre-Engineering (Part-II)",
      issuer: "BISE Mardan • 733/1100 Marks",
      image: "/images/E2.jpeg" // 👈 Capital E2 kar diya hai
    },
    {
      id: 2,
      title: "HSSC Pre-Engineering (Part-I)",
      issuer: "BISE Mardan • 395/550 Marks",
      image: "/images/E1.jpeg" // 👈 Capital E1 kar diya hai
    },
    {
      id: 3,
      title: "SSC Science (Matriculation)",
      issuer: "FBISE Islamabad • Grade A1 (1016/1100)",
      image: "/images/E3.jpeg" // 👈 Capital E3 kar diya hai
    }
  ];

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
            About <span className="text-teal-400">Me</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A passionate Full-Stack Developer and AI enthusiast dedicated to building scalable, real-world solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* ════ LEFT COLUMN: Intro & Skills ════ */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* My Journey */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg relative overflow-hidden group">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 relative z-10">
                <FiTarget className="text-teal-400" /> My Journey
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed relative z-10 text-base md:text-lg">
                <p>
                  Hello! I'm <span className="text-teal-400 font-semibold">Rafay Khalil</span>, an independent Full-Stack Developer based in Pakistan. My journey in tech is driven by a deep curiosity to solve complex problems and build systems that make a difference.
                </p>
                <p>
                  I specialize in modern web and mobile architectures. From developing comprehensive platforms like the <strong className="text-white">Plantie App</strong> to engineering <strong className="text-white">AI Car Detection Systems</strong>, I take pride in handling everything from backend databases to sleek frontend interfaces entirely on my own.
                </p>
                <p>
                  Currently, I am expanding my expertise in integrating Artificial Intelligence with web technologies, ensuring the products I build are not just functional, but future-proof.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FiCode className="text-teal-400" /> Technical Arsenal
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'React.js & Next.js', 'Node.js & Express', 'Laravel', 
                  'Python & AI/YOLO', 'React Native', 'MongoDB & MySQL', 
                  'Tailwind CSS', 'Git & GitHub', 'Web3 Basics'
                ].map((skill, index) => (
                  <div key={index} className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-center text-sm font-medium text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ════ RIGHT COLUMN: Experience, Education & Certifications ════ */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Experience Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <FiBriefcase size={80} className="text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                <FiBriefcase className="text-teal-400" /> Experience
              </h2>
              
              <div className="relative pl-6 border-l-2 border-slate-800 space-y-8 z-10">
                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-slate-950 border-2 border-teal-400"></div>
                  <h3 className="text-lg font-bold text-white">Full-Stack Developer</h3>
                  <p className="text-teal-400 font-medium mb-2">Elite Software Forge</p>
                  <p className="text-sm text-slate-400">
                    Leading the development of scalable web and mobile applications. Designing backend architectures, API integrations, and crafting responsive frontend interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <FiBookOpen size={80} className="text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                <FiBookOpen className="text-teal-400" /> Education
              </h2>
              
              <div className="relative pl-6 border-l-2 border-slate-800 space-y-8 z-10">
                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-slate-950 border-2 border-teal-400"></div>
                  <h3 className="text-lg font-bold text-white">Bachelors in IETY</h3>
                  <p className="text-teal-400 font-medium mb-2">University of Technology (UoT), Nowshera</p>
                  <p className="text-sm text-slate-400">
                    Currently pursuing my degree, focusing on modern engineering technologies, software development, and building real-world academic projects.
                  </p>
                </div>
              </div>
            </div>

            {/* 🌟 NEW: Academic Certificates Card 🌟 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <FiAward size={80} className="text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                <FiAward className="text-teal-400" /> Academic Certificates
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {certificates.map((cert) => (
                  <div 
                    key={cert.id} 
                    className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden group/cert cursor-pointer hover:border-teal-500/50 transition-colors"
                    onClick={() => setSelectedCert(cert.image)}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-32 w-full bg-slate-800 overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover opacity-70 group-hover/cert:opacity-100 group-hover/cert:scale-110 transition-all duration-500"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "https://via.placeholder.com/300x200/0f172a/14b8a6?text=Certificate";
                        }}
                      />
                      <div className="absolute inset-0 bg-slate-950/40 group-hover/cert:bg-transparent transition-colors flex items-center justify-center">
                        <FiZoomIn className="text-white opacity-0 group-hover/cert:opacity-100 transition-opacity scale-50 group-hover/cert:scale-100 duration-300" size={24} />
                      </div>
                    </div>
                    {/* Title */}
                    <div className="p-3 text-center">
                      <p className="text-xs font-bold text-white line-clamp-1">{cert.title}</p>
                      <p className="text-[10px] text-teal-400 mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* 🖼️ CERTIFICATE ZOOM LIGHTBOX (Pop-up) */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4"
          >
            <button 
              className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors z-50"
              onClick={() => setSelectedCert(null)}
            >
              <FiX size={24} />
            </button>

            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedCert}
              alt="Certificate Zoom"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default About;
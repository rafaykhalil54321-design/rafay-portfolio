import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZoomIn, FiX, FiAward } from 'react-icons/fi';

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Categories list
  const categories = ['All', 'Internships', 'Udemy', 'University', 'Sports', 'Education'];

  // Certificates Data (Exact names from your VS Code screenshot)
  const certificatesData = [
    // --- INTERNSHIPS (I) ---
    { id: 1, title: 'Back End Development', issuer: 'DevelopersHub Corporation', image: '/certificates/1I.png', category: 'Internships' },
    { id: 2, title: 'Full Stack Web Development', issuer: 'Global Tech Academy', image: '/certificates/2I.png', category: 'Internships' },
    
    // --- UDEMY (U - White) ---
    { id: 3, title: 'The Best ChatGPT & AI Course', issuer: 'Udemy', image: '/certificates/3U.jpg', category: 'Udemy' },
    { id: 4, title: 'Backend REST API with Node JS', issuer: 'Udemy', image: '/certificates/4U.png', category: 'Udemy' },
    { id: 5, title: 'Python, Java and PHP Essentials', issuer: 'Udemy', image: '/certificates/5U.png', category: 'Udemy' },
    { id: 6, title: 'Java And C++ Complete Course', issuer: 'Udemy', image: '/certificates/7U.jpg', category: 'Udemy' },
    { id: 7, title: 'Learn the Python Programming', issuer: 'Udemy', image: '/certificates/8U.jpg', category: 'Udemy' },
    { id: 8, title: 'Super Communicator at Work', issuer: 'Udemy', image: '/certificates/9U.jpg', category: 'Udemy' },

    // --- UNIVERSITY & EVENTS (U - Colorful) ---
    { id: 9, title: 'SOF-TECH 2025 Participation', issuer: 'University of Technology', image: '/certificates/14U.png', category: 'University' },
    { id: 10, title: 'Youth Marathon 2023', issuer: 'Event', image: '/certificates/15U.png', category: 'University' },
    { id: 11, title: 'AWKUM Literary Fest', issuer: 'AWKUM', image: '/certificates/16U.png', category: 'University' },
    { id: 12, title: 'Internship Program PR', issuer: 'Inter Services Public Relations', image: '/certificates/18U.png', category: 'University' },

    // --- SPORTS (S) ---
    { id: 13, title: 'Certificate of Merit', issuer: 'Fazaia Degree College', image: '/certificates/10S.png', category: 'Sports' },
    { id: 14, title: 'Certificate of Merit', issuer: 'Fazaia Degree College', image: '/certificates/13S.png', category: 'Sports' },
    { id: 15, title: 'Sports Certificate', issuer: 'Nisar Shaheed School', image: '/certificates/S10.png', category: 'Sports' },
    
    // Note: Agar koi file miss ho gayi ho, toh aap is array mein copy-paste kar ke add kar sakte hain.
  ];

  // Filter logic
  const filteredCertificates = certificatesData.filter(cert => 
    activeCategory === 'All' ? true : cert.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            My <span className="text-teal-400">Achievements</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A showcase of my continuous learning, professional internships, and extracurricular milestones.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {/* If Education is selected and it's empty */}
            {activeCategory === 'Education' && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="col-span-full flex flex-col items-center justify-center py-20 bg-slate-900/50 border border-slate-800 border-dashed rounded-2xl"
              >
                <FiAward className="text-6xl text-slate-600 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Academic Degrees Coming Soon</h3>
                <p className="text-slate-400 text-center max-w-md">I will be uploading my formal education degrees and transcripts in this section shortly.</p>
              </motion.div>
            )}

            {/* Render Filtered Certificates */}
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-teal-500/50 transition-all duration-300"
              >
                {/* Image Container */}
                <div 
                  className="relative h-56 w-full cursor-pointer bg-slate-800 overflow-hidden"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FiZoomIn className="text-white text-4xl drop-shadow-lg" />
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-5 border-t border-slate-800">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1 block">
                    {cert.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{cert.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* 🖼️ LIGHTBOX / MODAL FOR ZOOMING IMAGE */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FiX size={24} />
            </button>

            {/* Large Image */}
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Certificate Full View"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Certificates;
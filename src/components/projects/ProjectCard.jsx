import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiZoomIn, FiX } from 'react-icons/fi';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // 🚀 Full Portfolio Projects Data (15 Projects + Plantie)
  const projectsData = [
    {
      id: 'plantie',
      title: 'Plantie - AI Plant Care App',
      category: 'Mobile App / AI',
      desc: 'A comprehensive mobile application featuring AI plant identification, disease diagnosis, and smart watering calculations. Integrated with Web3 Crypto Wallets for premium subscriptions. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['React Native', 'Laravel', 'OpenAI API', 'MySQL'],
      link: '#', 
      image: '/images/plantie.png' 
    },
    {
      id: 1,
      title: 'Professional Resume SaaS',
      category: 'Web Application',
      desc: 'A dynamic platform to build professional resumes with real-time preview and seamless export functionalities. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['Next.js', 'React.js', 'Tailwind CSS'],
      link: 'https://resume-saas-rafay.vercel.app',
      image: '/images/1.png'
    },
    {
      id: 2,
      title: 'TruthGuard - AI Fake News Detector',
      category: 'AI Application',
      desc: 'An AI-powered web application designed to combat misinformation. It analyzes news articles and headlines in real-time using generative AI to determine authenticity with logical reasoning. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['Next.js', 'Google Gemini API', 'Tailwind'],
      link: 'https://fake-news-detector-one-nu.vercel.app',
      image: '/images/2.png'
    },
    {
      id: 3,
      title: 'RafayOS - Developer OS',
      category: 'Simulation',
      desc: 'A highly advanced browser-based operating system simulation replicating real-world desktop environments, including window management, terminal interaction, and multi-app support. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['HTML5', 'CSS3 Glassmorphism', 'JS ES6+'],
      link: 'https://coruscating-phoenix-2ccfd7.netlify.app',
      image: '/images/3.png'
    },
    {
      id: 4,
      title: 'E-Commerce Product Experience',
      category: 'E-Commerce',
      desc: 'A modern e-commerce interface designed to replicate real-world online shopping experiences with dynamic product interactions and responsive UI handling. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['React Components', 'CSS3', 'JS Logic'],
      link: 'https://bespoke-manatee-3cee8e.netlify.app',
      image: '/images/4.png'
    },
    {
      id: 5,
      title: 'AI Chat Assistant',
      category: 'AI Interface',
      desc: 'A modern AI-powered conversational interface featuring real-time chat rendering, typing simulations, and dynamic response handling. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['Async JS', 'Simulated API', 'Dark UI'],
      link: 'https://willowy-crostata-65fef9.netlify.app',
      image: '/images/5.png'
    },
    {
      id: 6,
      title: 'Interactive Music Player',
      category: 'Media',
      desc: 'A fully interactive media player that handles audio playback, UI synchronization, and dynamic controls similar to modern streaming platforms. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['HTML5 Audio API', 'State Management', 'CSS3'],
      link: 'https://loquacious-hummingbird-2becb4.netlify.app',
      image: '/images/6.png'
    },
    {
      id: 7,
      title: 'Interactive Game Hub',
      category: 'Gaming',
      desc: 'A browser-based gaming platform featuring multiple mini-games with interactive mechanics, real-time user engagement systems, and animation loops. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['Canvas Engine', 'JS Physics', 'Animations'],
      link: 'https://heroic-kitten-cfbc36.netlify.app',
      image: '/images/7.png'
    },
    {
      id: 8,
      title: 'SkillForge - AI Career Analyzer',
      category: 'Full-Stack SaaS',
      desc: 'A comprehensive Full-Stack AI application to revolutionize career planning. Analyzes PDF resumes to suggest optimal career roles and learning roadmaps using microservices. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['Next.js', 'Python Flask', 'OpenAI', 'MongoDB'],
      link: 'https://skill-forge-iml5wkx2t-rafaykhalil54321-1834s-projects.vercel.app',
      image: '/images/8.png'
    },
    {
      id: 9,
      title: 'Smart Invoice Generator',
      category: 'Finance Tool',
      desc: 'A scalable invoicing system that dynamically generates invoices with real-time calculations and structured data handling. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['JSON Structures', 'DOM Rendering', 'JS Logic'],
      link: 'https://boisterous-kheer-92c0b7.netlify.app',
      image: '/images/9.png'
    },
    {
      id: 10,
      title: 'AI Resume Precision',
      category: 'Analytics',
      desc: 'An AI-inspired resume analysis platform that evaluates user resumes and provides intelligent feedback through data visualization and scoring systems. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['Data Modeling', 'JS Processing', 'CSS Grid'],
      link: 'https://shimmering-cassata-0883f3.netlify.app',
      image: '/images/10.png'
    },
    {
      id: 11,
      title: 'University Timetable Generator',
      category: 'Full-Stack Tool',
      desc: 'Automates complex academic scheduling for multiple sections. Features dynamic data entry, conflict resolution, and instant export to high-quality PNG/PDF formats. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['React.js', 'Zustand', 'jsPDF'],
      link: 'https://rafaykhalil54321.github.io',
      image: '/images/11.png'
    },
    {
      id: 12,
      title: 'Neurex Analytics Dashboard',
      category: 'Dashboard',
      desc: 'A professional-grade analytics dashboard designed to visualize complex datasets using interactive charts, KPI tracking, and real-time UI updates. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['Chart.js', 'Modular JS', 'Responsive UI'],
      link: 'https://benevolent-clafoutis-da2d44.netlify.app',
      image: '/images/12.png'
    },
    {
      id: 13,
      title: 'UoT Exam Duty Scheduler',
      category: 'Management System',
      desc: 'A streamlined scheduling application built to manage and allocate exam duties for university staff efficiently, preventing scheduling conflicts. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['React.js', 'Tailwind CSS', 'State Logic'],
      link: 'https://rafaykhalil54321.github.io/SHEDULAR',
      image: '/images/13.png'
    },
    {
      id: 14,
      title: 'Point of Sale (POS) System',
      category: 'Enterprise Software',
      desc: 'A robust Point of Sale system designed for seamless inventory management, product carting, and checkout processes. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['Full-Stack JS', 'DB Architecture', 'REST APIs'],
      link: 'https://rafaykhalil54321-design.github.io/POINT-OF-SALE',
      image: '/images/14.png'
    },
    {
      id: 15,
      title: 'Interactive Developer Portfolio',
      category: 'Web Application',
      desc: 'A highly interactive and modern developer portfolio featuring smooth animations, glassmorphism UI, and dynamic project filtering. 👉 This project is built using advanced frontend architecture with concepts inspired by React.js, Node.js, and modern full-stack development practices.',
      tech: ['React.js', 'Framer Motion', 'Tailwind CSS'],
      link: 'https://funny-bubblegum-04f5d7.netlify.app#about',
      image: '/images/15.png'
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
            Featured <span className="text-teal-400">Projects</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A collection of my full-stack applications, AI integrations, and advanced UI developments.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-teal-500/50 hover:shadow-teal-500/10 transition-all duration-300 flex flex-col group h-full"
            >
              {/* Image Container with Zoom Icon */}
              <div 
                className="relative h-52 w-full overflow-hidden cursor-pointer bg-slate-800 shrink-0"
                onClick={() => setSelectedImage(project.image)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/600x400/0f172a/14b8a6?text=Image+Coming+Soon";
                  }}
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FiZoomIn className="text-white text-4xl drop-shadow-lg" />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tech Stack Pills (Now placed at the top of content for modern look) */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techItem, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-300 bg-teal-400/10 rounded-full border border-teal-400/20"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                {/* Action Button */}
                <div className="mt-auto border-t border-slate-800 pt-5">
                  {project.link !== '#' ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full gap-2 text-sm font-bold text-white bg-slate-800 hover:bg-teal-500 hover:text-slate-950 py-3 rounded-lg transition-colors"
                    >
                      <FiExternalLink size={16} /> View Live Project
                    </a>
                  ) : (
                    <div className="flex items-center justify-center w-full gap-2 text-sm font-bold text-teal-400 bg-teal-400/10 py-3 rounded-lg border border-teal-400/20">
                      In Development / Private Repo
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 🖼️ IMAGE ZOOM LIGHTBOX / MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4"
          >
            <button 
              className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <FiX size={24} />
            </button>

            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Project Full View"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Projects;
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Portfolio & Resume
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Rafay Khalil</span>.
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            A Full Stack Developer crafting scalable architecture and intuitive digital experiences. Specializing in modern web and mobile ecosystems.
          </p>
        </motion.div>

        {/* Quick Tech Stack Scan */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['React', 'Next.js', 'Node.js', 'Laravel', 'MongoDB', 'Angular'].map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <NavLink
            to="/projects"
            className="flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all duration-300 shadow-lg shadow-teal-500/25 group"
          >
            View My Work
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </NavLink>
          <div className="flex gap-4 justify-center">
            <a href="#" className="p-4 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="#" className="p-4 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
              <FiLinkedin size={24} />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
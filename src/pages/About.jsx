import { motion } from 'framer-motion';
import { FiTerminal, FiBookOpen, FiCpu } from 'react-icons/fi';

const About = () => {
  const skills = [
    'React', 'Next.js', 'Angular', 
    'Node.js', 'Laravel', 'MongoDB', 
    'Python', 'Tailwind CSS'
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Behind the <span className="text-teal-400">Code</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            A blend of engineering, design, and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Bio & Education (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Bio Card */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FiTerminal className="text-teal-400 text-2xl" />
                <h2 className="text-2xl font-bold text-white">Who I Am</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                I am a passionate Full Stack Developer focused on building scalable, efficient, and user-centric applications. With experience spanning both front-end aesthetics and back-end architecture, I enjoy bridging the gap between design and engineering. I tackle complex problems by breaking them down into clean, maintainable code.
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <FiBookOpen className="text-teal-400 text-2xl" />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="border-l-2 border-slate-800 pl-4 relative">
                <div className="absolute w-3 h-3 bg-teal-400 rounded-full -left-[7px] top-2"></div>
                <h3 className="text-lg font-bold text-white">Computer Science</h3>
                <p className="text-teal-400 text-sm font-medium mb-2">University of Technology (UoT), Nowshera</p>
                <p className="text-slate-500 text-sm">
                  Focusing on software engineering principles, modern web technologies, and scalable systems architecture.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg h-full">
              <div className="flex items-center gap-3 mb-6">
                <FiCpu className="text-teal-400 text-2xl" />
                <h2 className="text-2xl font-bold text-white">Tech Arsenal</h2>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 text-sm font-medium hover:border-teal-400 hover:text-teal-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
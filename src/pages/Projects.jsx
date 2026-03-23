import { motion } from 'framer-motion';
import ProjectCard from '../components/projects/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-teal-400">Projects</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            A collection of my recent work, from complex AI computer vision systems to responsive full-stack applications.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Placeholder */}
      <div className="h-48 w-full bg-slate-800 relative overflow-hidden group">
        <div className="absolute inset-0 bg-slate-700 animate-pulse" />
        {/* Jab actual images hon, is img tag ko uncomment kar lijiye ga */}
        {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative z-10" /> */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="text-slate-500 font-medium">Image: {project.title}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium text-teal-400 bg-teal-400/10 rounded-md border border-teal-400/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm font-medium text-white hover:text-teal-400 transition-colors"
          >
            <FiExternalLink className="mr-1.5" /> Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors ml-auto"
          >
            <FiGithub className="mr-1.5" /> Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
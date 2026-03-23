import { motion } from 'framer-motion';
import CertificateCard from '../components/certificates/CertificateCard';
import { certsData } from '../data/certsData';

const Certificates = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Licenses & <span className="text-teal-400">Certifications</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Continuous learning and professional milestones achieved along my journey as a developer.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CertificateCard cert={cert} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Certificates;
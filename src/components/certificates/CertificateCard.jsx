import { motion } from 'framer-motion';

const CertificateCard = ({ cert }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-slate-900 border border-slate-800 p-1 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300"
    >
      <div className="bg-slate-950 rounded-xl p-6 h-full flex flex-col items-center text-center">
        {/* Certificate Image/Icon Placeholder */}
        <div className="w-full h-40 bg-slate-800 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-slate-700 animate-pulse" />
          {/* <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative z-10" /> */}
          <span className="text-slate-500 font-medium relative z-10">Image: {cert.title}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
        <p className="text-teal-400 font-medium text-sm mb-1">{cert.issuer}</p>
        <p className="text-slate-500 text-xs mt-auto">{cert.date}</p>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
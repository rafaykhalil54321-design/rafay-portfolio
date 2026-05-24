import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import ResumeViewer from './pages/ResumeViewer'; // <-- Naya Resume Page

function App() {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen font-sans selection:bg-teal-500/30 selection:text-teal-200">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<ResumeViewer />} /> {/* <-- Naya Route */}
          </Routes>
        </main>
        <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-sm mt-auto">
          <p>© {new Date().getFullYear()} Rafay Khalil. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
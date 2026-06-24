import { Outlet, Link, useLocation } from 'react-router-dom';
import { Layers, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to hash if present on mount or location change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white">
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <Layers size={28} className="text-[#FF5A00] group-hover:scale-110 transition-transform" />
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  TerraData Insights
                </span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/#services" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">Services</Link>
              <Link to="/#workflow" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">Workflow</Link>
              <Link to="/#compliance" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">Compliance</Link>
              <Link to="/#contact" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">Contact</Link>
              <Link to="/#contact" className="bg-[#FF5A00] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#E04D00] transition-colors shadow-md shadow-orange-500/20">
                Work With Us
              </Link>
            </nav>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-[#FF5A00] focus:outline-none p-2 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-xl absolute w-full overflow-hidden"
            >
              <Link 
                to="/#services" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-[#FF5A00] hover:bg-orange-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/#workflow" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-[#FF5A00] hover:bg-orange-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Workflow
              </Link>
              <Link 
                to="/#compliance" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-[#FF5A00] hover:bg-orange-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Compliance
              </Link>
              <Link 
                to="/#contact" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-[#FF5A00] hover:bg-orange-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Link 
                  to="/#contact" 
                  className="block w-full text-center bg-[#FF5A00] text-white px-5 py-3 rounded-md font-medium hover:bg-[#E04D00] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Work With Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-white py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Layers size={24} className="text-[#FF5A00]" />
              <span className="font-extrabold tracking-tight text-slate-900">
                TerraData Insights
              </span>
            </Link>
            
            <div className="flex gap-8">
              <Link to="/terms-of-service" className="text-sm text-slate-500 hover:text-[#FF5A00] transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="text-sm text-slate-500 hover:text-[#FF5A00] transition-colors">
                Privacy Policy
              </Link>
            </div>

            <div className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} TerraData Insights. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

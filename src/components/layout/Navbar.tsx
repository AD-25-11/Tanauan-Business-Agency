import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={cn("fixed top-0 w-full z-50 transition-all duration-300", isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4 shadow-sm")}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Bar (Hidden on Mobile) */}
        <div className={cn("hidden lg:flex justify-between items-center pb-4 border-b border-gray-100 mb-4 transition-all", isScrolled ? "hidden overflow-hidden h-0 p-0 m-0 border-0" : "flex")}>
          <div className="flex gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>RGC Building, Trapiche Road, Tanauan City</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>info@tanauanbusiness.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-brand-blue">
            <Phone className="w-4 h-4 text-brand-gold" />
            <span>(043) 778 1743</span>
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
             <div className="w-10 h-10 bg-brand-blue rounded flex items-center justify-center text-white font-bold text-xl">
               TB
             </div>
             <div>
               <h1 className="text-xl md:text-2xl font-bold text-brand-blue leading-none">Tanauan</h1>
               <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">Business Agency</p>
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "text-sm font-medium hover:text-brand-gold transition-colors",
                  location.pathname === link.path ? "text-brand-blue font-semibold" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-brand-blue hover:bg-brand-blue-hover text-white px-6 py-2.5 rounded font-medium transition-colors text-sm shadow-sm">
              Book Consultation
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-600 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "p-2 text-base font-medium rounded",
                  location.pathname === link.path ? "bg-brand-gray text-brand-blue" : "text-gray-600 active:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-100" />
            <div className="flex flex-col gap-2 p-2">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>(043) 778 1743</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Tanauan City, Batangas</span>
              </div>
            </div>
            <Link to="/contact" className="bg-brand-blue text-white text-center px-6 py-3 rounded font-medium mt-2">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

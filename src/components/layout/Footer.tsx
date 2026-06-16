import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Intro */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
               <div className="w-10 h-10 bg-brand-gold rounded flex items-center justify-center text-slate-900 font-bold text-xl">
                 TB
               </div>
               <div>
                 <h2 className="text-xl font-bold text-white leading-none">Tanauan</h2>
                 <p className="text-xs text-brand-gold font-medium tracking-widest uppercase">Business Agency</p>
               </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Professional business consulting and management solutions for entrepreneurs and growing businesses in Tanauan City and beyond.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-gold hover:text-slate-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-gold hover:text-slate-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Services', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-brand-gold transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-brand-gold" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {[
                'Business Registration',
                'Business Consulting',
                'Compliance Services',
                'Business Support',
                'Strategic Planning'
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm hover:text-brand-gold transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-brand-gold" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <span className="text-sm">RGC Building, Trapiche Road,<br/>Poblacion Barangay 6,<br/>Tanauan City, Batangas 4232</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-sm">(043) 778 1743</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-sm">info@tanauanbusiness.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tanauan Business Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

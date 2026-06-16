import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-gray">
      <div className="absolute inset-0 bg-brand-blue/5 z-0 pb-10"></div>
      {/* Background illustration abstract */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-brand-gold/10 blur-[100px] z-0"></div>
      <div className="absolute top-[20%] -left-[10%] w-[30%] h-[60%] rounded-full bg-brand-blue/10 blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm w-fit">
              <span className="flex h-2 w-2 rounded-full bg-brand-blue"></span>
              Local Business Expertise in Tanauan City
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Helping Businesses <span className="text-brand-blue hidden md:inline"><br /></span>
              <span className="text-brand-blue inline md:hidden"> </span>
              <span className="relative">
                Start, Grow,
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-gold" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7C47.5 -1.5 131.5 -1.5 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
              </span><br />
              and Succeed
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Professional business consulting and management solutions for entrepreneurs and growing businesses in Tanauan City and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/contact" className="bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-4 rounded font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Book a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:0437781743" className="bg-white border-2 border-brand-blue/10 hover:border-brand-blue text-brand-blue px-8 py-4 rounded font-semibold text-lg transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden flex items-center justify-center">
                      <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i * 5}&backgroundColor=e2e8f0`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-gold flex items-center justify-center text-xs font-bold text-slate-900">
                    250+
                  </div>
                </div>
              </div>
              <div>
                <div className="flex text-brand-gold">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-700 mt-1">4.3/5 Google Rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Using a robust placeholder image representing professional consultation */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Business consultant meeting with client" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 leading-tight">Proven Growth</h3>
                    <p className="text-sm text-slate-600 mt-1">Strategies that drive measurable results for local businesses.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative dot pattern */}
            <svg className="absolute -bottom-8 -left-8 w-32 h-32 text-brand-blue/20 -z-10" fill="currentColor" viewBox="0 0 100 100">
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" />
              </pattern>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

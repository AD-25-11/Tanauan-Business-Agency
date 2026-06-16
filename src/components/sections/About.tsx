import { motion } from 'motion/react';
import { ArrowRight, Target, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=600" 
                  alt="Business consultation" 
                  className="rounded-2xl w-full h-[240px] object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&q=80&w=600" 
                  alt="Team planning" 
                  className="rounded-2xl w-full h-[320px] object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=600" 
                  alt="Business growth" 
                  className="rounded-2xl w-full h-[320px] object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-brand-gray p-6 rounded-2xl h-[240px] flex flex-col justify-center border border-gray-100 shadow-inner">
                  <h4 className="text-4xl font-bold text-brand-blue mb-2">10+</h4>
                  <p className="text-slate-600 font-medium">Years of Local Excellence</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-white rounded-full p-4 shadow-xl hidden md:block">
              <div className="w-full h-full bg-brand-blue rounded-full flex items-center justify-center text-white flex-col">
                 <span className="text-2xl font-bold">TB</span>
                 <span className="text-[10px] tracking-widest font-semibold uppercase mt-1">Agency</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 text-brand-blue font-semibold tracking-wide uppercase text-sm">
              <span className="w-8 h-px bg-brand-gold"></span>
              About Our Agency
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Your Trusted Business Consulting Partner
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              At Tanauan Business Agency, we bridge the gap between entrepreneurial vision and operational reality. We are dedicated to providing strategic, actionable guidance tailored to the unique economic landscape of Tanauan City and the wider Batangas region.
            </p>
            
            <div className="space-y-6 mt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Client-Centered Approach</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">We listen first. Every business is distinct, and our consulting frameworks are adapted to your specific market position, resources, and goals.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Local Market Knowledge</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Navigating local regulations and market trends requires deep community roots. We understand the Batangas business ecosystem intimately.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Long-Term Growth</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">We don't just help you start; we build the foundational resilience necessary for sustained expansion and profitability.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 border-b-2 border-brand-gold text-brand-blue font-bold pb-1 hover:text-brand-blue-hover hover:border-brand-blue-hover transition-colors text-lg">
                Talk to an Expert
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

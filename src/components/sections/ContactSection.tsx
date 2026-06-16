import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden text-left" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Let's Grow Your Business Together
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              Ready to take the next step? Contact us today to schedule a consultation with our business experts.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start pb-8 border-b border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Office Location</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Tanauan Business Agency<br />
                    RGC Building, Trapiche Road,<br />
                    Poblacion Barangay 6,<br />
                    Tanauan City, Batangas 4232
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start pb-8 border-b border-gray-100">
                <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-gold-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Contact Number</h4>
                  <a href="tel:0437781743" className="text-brand-blue hover:underline font-semibold text-lg">(043) 778 1743</a>
                  <p className="text-slate-500 text-sm mt-1">Available Mon-Fri, 9am - 5pm</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Business Hours</h4>
                  <p className="text-slate-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-slate-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative"
          >
            {/* Form decorative accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-bl-3xl rounded-tr-2xl -z-10 absolute pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Consultation</h3>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 block text-left">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="John" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 block text-left">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 block text-left">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="john@example.com" />
              </div>

              <div className="space-y-1.5">
               <label className="text-sm font-semibold text-slate-700 block text-left">Phone Number</label>
               <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="09XX XXX XXXX" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 block text-left">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all text-slate-700 bg-white">
                  <option value="">Select a service</option>
                  <option value="registration">Business Registration</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="compliance">Compliance Services</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 block text-left">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none" placeholder="Tell us about your business goals..."></textarea>
              </div>

              <button className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors mt-4">
                Submit Inquiry
                <Send className="w-5 h-5" />
              </button>
              
              <p className="text-xs text-slate-500 text-center mt-4">
                Your information is kept strictly confidential. 
              </p>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Map Embed Placeholder */}
      <div className="w-full h-96 mt-20 md:mt-32 bg-slate-200 relative">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15478.432657782622!2d121.1444214!3d14.0864387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6f123dddcaf5%3A0x6bbaea3f8bd1e0d!2sPoblacion%20Barangay%206%2C%20Tanauan%2C%20Batangas!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
           className="grayscale mix-blend-multiply opacity-80 z-0"
         ></iframe>
         <div className="absolute inset-0 z-10 pointer-events-none border-t border-gray-200"></div>
      </div>
    </section>
  );
}

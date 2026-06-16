import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive Business Management Consulting, Business Registration (DTI, SEC, BIR, Mayor's Permit), Compliance Services, Strategic Planning, and ongoing Business Support for startups and enterprises."
  },
  {
    question: "Do you assist with business registration?",
    answer: "Yes. Business registration is one of our core specialties. We handle the end-to-end process of securing DTI, SEC, BIR, and local Mayor's permits to ensure full legal compliance."
  },
  {
    question: "How long does the registration process take?",
    answer: "Timelines vary depending on the business type (Sole Proprietorship vs. Corporation) and local government requirements. However, our expertise significantly accelerates the standard timeline by ensuring all documents are perfectly prepared."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide variety of industries including Retail, E-commerce, Food and Beverage, Real Estate, Technology Startups, and traditional local services in Batangas."
  },
  {
    question: "How can I contact your office?",
    answer: "You can reach us by phone at (043) 778 1743, via email, or by visiting our office at RGC Building, Trapiche Road, Poblacion Barangay 6, Tanauan City, Batangas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-brand-gray border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Find quick answers to common questions about our consulting and registration services.
            </p>
            <div className="bg-brand-blue p-8 rounded-2xl text-white shadow-xl">
              <MessageCircle className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-white/80 mb-6">Our consultants are ready to provide custom answers for your specific business needs.</p>
              <Link to="/contact" className="inline-block bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-brand-gold transition-colors">
                Contact Support
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-left"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-blue shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-gray-50 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

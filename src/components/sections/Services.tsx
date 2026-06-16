import { motion } from 'motion/react';
import { ArrowRight, FileText, Briefcase, ChevronRight, TrendingUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <FileText className="w-8 h-8 text-brand-gold" />,
    title: "Business Registration",
    description: "End-to-end assistance with local and national government compliance to legitimize your operation quickly and correctly.",
    benefits: ["DTI & SEC Registration", "BIR Registration & Compliance", "Mayor's Permit Processing"]
  },
  {
    icon: <Briefcase className="w-8 h-8 text-brand-gold" />,
    title: "Business Consulting",
    description: "Data-driven strategies and operational blueprints designed to capture market share and optimize efficiency.",
    benefits: ["Comprehensive Business Planning", "Local Market Research", "Operational Improvement"]
  },
  {
    icon: <ChevronRight className="w-8 h-8 text-brand-gold" />,
    title: "Compliance Services",
    description: "Eliminate the friction of regulatory maintenance with our proactive compliance management system.",
    benefits: ["Document Preparation", "Annual Renewals", "Regulatory Guidance"]
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-brand-gold" />,
    title: "Business Support",
    description: "Continuous advisory and coaching to navigate scaling challenges and refine leadership execution.",
    benefits: ["Startup Incubation", "Expansion Strategy", "Executive Coaching"]
  }
];

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-brand-gray relative overflow-hidden" id="services">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 transform -skew-x-12 translate-x-20 z-0 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 text-brand-blue font-semibold tracking-wide uppercase text-sm mb-4">
            <span className="w-8 h-px bg-brand-gold"></span>
            Our Expertise
            <span className="w-8 h-px bg-brand-gold"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Services Built for Growth
          </h2>
          <p className="text-lg text-slate-600">
            We provide a comprehensive suite of management and consulting services designed to support your business lifecycle from inception to market leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-brand-gray rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="mt-auto inline-flex items-center justify-between w-full p-4 rounded-xl bg-slate-50 text-brand-blue font-semibold hover:bg-brand-blue hover:text-white transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

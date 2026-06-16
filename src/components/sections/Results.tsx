import { motion } from 'motion/react';

const stats = [
  { value: "500+", label: "Businesses Assisted" },
  { value: "1,200+", label: "Consultations Conducted" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Serving Businesses" }
];

export default function Results() {
  return (
    <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center pt-4 md:pt-0 border-l-0 md:border-l first:border-l-0 border-white/10 px-4"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold mb-2 block tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-white/80 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

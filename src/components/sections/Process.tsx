import { motion } from 'motion/react';

const steps = [
  {
    title: "Schedule Consultation",
    description: "Book an initial meeting to discuss your goals."
  },
  {
    title: "Business Assessment",
    description: "We analyze your current position and challenges."
  },
  {
    title: "Strategic Planning",
    description: "Development of tailored operational blueprints."
  },
  {
    title: "Implementation Support",
    description: "Active guidance during execution and registration phase."
  },
  {
    title: "Business Growth",
    description: "Ongoing advisory to accelerate market expansion."
  }
];

export default function Process() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            How We Help Your Business
          </h2>
          <p className="text-lg text-slate-600">
            A structured, proven methodology designed to take you from initial concept to sustained market leadership.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-brand-gray border-t-2 border-dashed border-gray-200" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-full border-4 border-brand-gray group-hover:border-brand-gold flex items-center justify-center relative z-10 mb-6 shadow-md transition-colors duration-300">
                  <div className="w-14 h-14 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 px-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

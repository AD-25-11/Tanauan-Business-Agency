import { motion } from 'motion/react';
import { Target, Clock, MessageSquare, Award, Lightbulb, Users } from 'lucide-react';

const options = [
  {
    icon: <Users className="w-6 h-6 text-brand-blue" />,
    title: "Personalized Consulting",
    description: "Tailored strategies that fit your specific industry and organizational goals."
  },
  {
    icon: <Target className="w-6 h-6 text-brand-blue" />,
    title: "Local Market Knowledge",
    description: "Deep understanding of the Tanauan and Batangas economic landscape."
  },
  {
    icon: <Clock className="w-6 h-6 text-brand-blue" />,
    title: "Efficient Processes",
    description: "Streamlined workflows to save you time during registrations and planning."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-brand-blue" />,
    title: "Transparent Communication",
    description: "Clear, jargon-free advice and consistent updates on your projects."
  },
  {
    icon: <Award className="w-6 h-6 text-brand-blue" />,
    title: "Professional Guidance",
    description: "Expert advice rooted in years of analytical and practical business experience."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-brand-blue" />,
    title: "Client-Focused Approach",
    description: "Your business success is our primary metric. We invest in your outcomes."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Businesses Trust Tanauan Business Agency
          </h2>
          <p className="text-lg text-slate-600 block max-w-2xl mx-auto">
            We deliver clarity in complex markets. Our comprehensive approach ensures that every foundational block of your business is built for resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {options.map((option, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center shrink-0 border border-brand-blue/10">
                {option.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{option.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {option.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

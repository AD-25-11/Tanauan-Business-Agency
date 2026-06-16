import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Santos",
    business: "Retail Startup Founder",
    text: "Tanauan Business Agency made our SEC and Mayor's permit registration entirely stress-free. Their consulting on our early-stage business plan was incredibly valuable and set us on the right path.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Maria&backgroundColor=e2e8f0"
  },
  {
    name: "Jose Reyes",
    business: "Restaurant Owner",
    text: "The strategic planning support we received helped us expand our restaurant to two new locations. Their deep understanding of the local Batangas market is unmatched.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Jose&backgroundColor=e2e8f0"
  },
  {
    name: "Elena Dimaculangan",
    business: "E-commerce Enterprise",
    text: "Their compliance services ensure we never miss a deadline. Having them as our consulting partner allows me to focus purely on growing my online sales.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Elena&backgroundColor=e2e8f0"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-brand-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-lg text-slate-600">
              Don't just take our word for it. Here's what business owners in Tanauan and across Batangas have to say about our consulting services.
            </p>
          </div>
          <div className="flex flex-col items-end">
             <div className="flex text-brand-gold mb-2">
               {[1, 2, 3, 4, 5].map((i) => (
                 <Star key={i} className="w-5 h-5 fill-current" />
               ))}
             </div>
             <p className="font-semibold text-slate-900">4.3/5 Overall Rating</p>
             <a href="#" className="text-sm font-medium text-brand-blue hover:underline mt-1">Read all Google Reviews &rarr;</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full bg-brand-gray border-2 border-white shadow-sm" />
                <MessageSquareQuote className="w-10 h-10 text-brand-blue/10" />
              </div>
              
              <div className="flex text-brand-gold mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <p className="text-sm text-slate-500 font-medium">{testimonial.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

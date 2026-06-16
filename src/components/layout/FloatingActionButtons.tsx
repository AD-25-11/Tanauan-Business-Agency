import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <motion.a
        href="tel:0437781743"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="w-14 h-14 bg-white text-brand-blue rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform border border-gray-100 group relative"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none border border-gray-100">
          Call Now
        </span>
      </motion.a>

      {/* Messenger Button (Styled as generic chat or blue messenger color) */}
      <motion.a
        href="#contact"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.1, type: "spring" }}
        className="w-14 h-14 bg-[#0A7CFF] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform group relative"
        aria-label="Message Us"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none border border-gray-100">
          Message Us
        </span>
      </motion.a>
    </div>
  );
}

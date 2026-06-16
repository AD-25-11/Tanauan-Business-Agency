import { useEffect } from 'react';
import ContactSection from '@/src/components/sections/ContactSection';
import FAQ from '@/src/components/sections/FAQ';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      <div className="bg-brand-blue py-16">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We're here to help coordinate your next big move. Reach out to our consultants for personalized guidance.
          </p>
        </div>
      </div>
      <ContactSection />
      <FAQ />
    </main>
  );
}

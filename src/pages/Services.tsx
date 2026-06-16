import { useEffect } from 'react';
import ServicesList from '@/src/components/sections/Services';
import Process from '@/src/components/sections/Process';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      <div className="bg-brand-gray py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive business management solutions designed to streamline operations, ensure compliance, and accelerate your growth strategy.
          </p>
        </div>
      </div>
      <ServicesList />
      <Process />
    </main>
  );
}

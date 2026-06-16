import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-8">About Tanauan Business Agency</h1>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl">
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Tanauan Business Agency is a premier business management consulting firm dedicated to helping entrepreneurs, startups, and established enterprises in Tanauan City, Batangas, and surrounding areas achieve their fullest potential.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Our team of seasoned professionals understands that navigating the complexities of business registration, compliance, and strategic growth can be overwhelming. We bridge the gap between vision and execution, providing personalized, localized, and actionable advice that drives real results.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            We don't just process paperwork; we partner with our clients to engineer robust foundational structures. From securing crucial permits (DTI, SEC, BIR, Mayor's Permit) to architecting long-term expansion plans, our client-centered approach ensures that you have the robust support system necessary for sustained success.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To empower local enterprises through operational excellence, strategic clarity, and unwavering support, fostering a vibrant and competitive business community in Batangas.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

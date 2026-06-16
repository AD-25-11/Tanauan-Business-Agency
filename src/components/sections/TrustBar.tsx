import { CheckCircle2 } from 'lucide-react';

export default function TrustBar() {
  const trustPoints = [
    "Professional Consulting",
    "Business Registration",
    "Strategic Planning",
    "Local Expertise",
    "Personalized Solutions",
    "Dedicated Support"
  ];

  return (
    <div className="bg-brand-blue py-6 border-b-4 border-brand-gold">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-4">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 text-white/90">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
              <span className="text-sm font-medium tracking-wide">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

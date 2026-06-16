import Hero from '@/src/components/sections/Hero';
import TrustBar from '@/src/components/sections/TrustBar';
import About from '@/src/components/sections/About';
import Services from '@/src/components/sections/Services';
import WhyChooseUs from '@/src/components/sections/WhyChooseUs';
import Results from '@/src/components/sections/Results';
import Testimonials from '@/src/components/sections/Testimonials';
import Process from '@/src/components/sections/Process';
import FAQ from '@/src/components/sections/FAQ';
import ContactSection from '@/src/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChooseUs />
      <Results />
      <Testimonials />
      <Process />
      <FAQ />
      <ContactSection />
    </main>
  );
}

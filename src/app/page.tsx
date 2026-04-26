import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UrgencyStrip from "@/components/UrgencyStrip";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import ServiceArea from "@/components/ServiceArea";
import SeoContentSections from "@/components/SeoContentSections";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function ArlingtonLocksmithPage() {
  return (
    <main>
      <Header />
      <Hero />
      <UrgencyStrip />
      <Services />
      <WhyUs />
      <HowItWorks />
      <ServiceArea />
      <SeoContentSections />
      <Testimonials />
      <CallToAction />
      <Footer />
      {/* Bottom padding for mobile sticky call button (accounts for iPhone safe area) */}
      <div className="h-20 md:hidden" />
    </main>
  );
}

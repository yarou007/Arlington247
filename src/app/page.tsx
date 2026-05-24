import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UrgencyStrip from "@/components/UrgencyStrip";
import QuickLinks from "@/components/QuickLinks";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import ServiceArea from "@/components/ServiceArea";
import SeoContentSections from "@/components/SeoContentSections";
import Testimonials from "@/components/Testimonials";
import CustomerReviews from "@/components/CustomerReviews";
import GoogleMap from "@/components/GoogleMap";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

export default function ArlingtonLocksmithPage() {
  return (
    <main>
      <Header />
      <Hero />
      <UrgencyStrip />
      <QuickLinks />
      <Services />
      <WhyUs />
      <HowItWorks />
      <ServiceArea />
      <SeoContentSections />
      <RelatedServices />
      <Testimonials />
      <CustomerReviews />
      <GoogleMap />
      <CallToAction />
      <Footer />
    </main>
  );
}

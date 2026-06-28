import SEO from "../components/SEO.jsx";
import Hero from "../components/home/Hero.jsx";
import ServicesPreview from "../components/home/ServicesPreview.jsx";
import Stats from "../components/home/Stats.jsx";
import Process from "../components/home/Process.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Portfolio from "../components/home/Portfolio.jsx";
import CTASection from "../components/CTASection.jsx";

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Builder House",
  "url": "https://builderhouse.co.in",
  "description": "Premium website design and development studio for small and growing businesses in India.",
  "email": "builderhouse.work@gmail.com",
  "telephone": "+918602475603",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  }
};

export default function Home() {
  return (
    <>
      <SEO
        title="Builder House — Premium Websites for Ambitious Businesses"
        description="Builder House designs and builds premium, conversion-ready websites for small and growing businesses in India. Fixed pricing, fast delivery, honest process."
        canonical="/"
        structuredData={homeStructuredData}
      />
      <Hero />
      <ServicesPreview />
      <Stats />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTASection />
    </>
  );
}

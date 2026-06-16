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
  "name": "WebUplift",
  "url": "https://builderhouse.co.in",
  "description": "AI-powered website development, automation, and digital marketing agency based in India.",
  "email": "builderhouse.work@gmail.com",
  "telephone": "+918602475603",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "10"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Priya Sharma" },
      "reviewBody": "WebUplift transformed our online presence completely. Within 2 weeks of launch, enquiries doubled."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Rahul Mehta" },
      "reviewBody": "Professional, fast, and they actually understood what we needed. Best investment for our business."
    }
  ]
};

export default function Home() {
  return (
    <>
      <SEO
        title="WebUplift — AI-Powered Websites & Automation Agency"
        description="WebUplift builds modern, conversion-focused websites and AI automation systems for ambitious businesses. Fast delivery, fixed pricing, real results."
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

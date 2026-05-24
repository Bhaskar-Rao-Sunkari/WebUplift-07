import SEO from "../components/SEO.jsx";
import Hero from "../components/home/Hero.jsx";
import ServicesPreview from "../components/home/ServicesPreview.jsx";
import Stats from "../components/home/Stats.jsx";
import Process from "../components/home/Process.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Portfolio from "../components/home/Portfolio.jsx";
import CTASection from "../components/CTASection.jsx";

export default function Home() {
  return (
    <>
      <SEO
        title="WebUplift — AI-Powered Websites & Automation Agency"
        description="WebUplift builds modern, conversion-focused websites and AI automation systems for ambitious businesses. Fast delivery, fixed pricing, real results."
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

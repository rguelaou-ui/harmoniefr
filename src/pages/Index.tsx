import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import QuoteForm from "@/components/QuoteForm";
import SeoSection from "@/components/SeoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <ProcessSection />
      <PortfolioSection />
      <QuoteForm />
      <SeoSection />
      <Footer />
    </main>
  );
};

export default Index;

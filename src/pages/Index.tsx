import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import AdditionalFeatures from '@/components/AdditionalFeatures';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import AcquisitionStats from '@/components/AcquisitionStats';
import TargetAudience from '@/components/TargetAudience';
const Index = () => {
  return <div className="min-h-screen bg-netflix-dark text-white">
      
      
      <main>
        <Hero />
        <AcquisitionStats />
        <FeatureSection />
        <TargetAudience />
        <AdditionalFeatures />
        <PricingSection />
      </main>
      
      <Footer />
    </div>;
};
export default Index;
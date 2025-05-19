
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import AdditionalFeatures from '@/components/AdditionalFeatures';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import AcquisitionStats from '@/components/AcquisitionStats';
import TargetAudience from '@/components/TargetAudience';
import { getDeviceType, getAppStoreLink } from '@/utils/deviceDetection';

const Index = () => {
  useEffect(() => {
    // Check if user is on mobile and redirect if needed
    const deviceType = getDeviceType();
    
    if (deviceType === 'iOS' || deviceType === 'Android') {
      // Set a timeout to allow the user to see some content before redirecting
      const timer = setTimeout(() => {
        window.location.href = getAppStoreLink();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-netflix-dark text-white">
      <div className="sticky top-0 z-50 bg-netflix-dark/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-netflix-gray">
        <h1 className="text-xl font-bold text-netflix-red">Direito 360 Premium</h1>
        <button 
          onClick={() => window.location.href = getAppStoreLink()} 
          className="bg-netflix-red px-4 py-1 rounded-sm text-sm font-bold hover:bg-netflix-lightRed transition-colors"
        >
          Baixar App
        </button>
      </div>
      
      <main>
        <Hero />
        <AcquisitionStats />
        <FeatureSection />
        <TargetAudience />
        <AdditionalFeatures />
        <PricingSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

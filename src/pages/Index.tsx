
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import AdditionalFeatures from '@/components/AdditionalFeatures';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import AcquisitionStats from '@/components/AcquisitionStats';
import TargetAudience from '@/components/TargetAudience';

const Index = () => {
  return (
    <div className="min-h-screen bg-netflix-dark text-white">
      <div className="sticky top-0 z-50 bg-netflix-dark/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-netflix-gray">
        <h1 className="text-xl font-bold text-netflix-red">Direito 360 Premium</h1>
        <a 
          href={window.location.href.includes('android') || window.location.href.includes('play.google') ? 
            'https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0&pli=1' : 
            'https://apps.apple.com/us/app/direito-premium/id6451451647'} 
          className="bg-netflix-red px-4 py-1 rounded-sm text-sm font-bold hover:bg-netflix-lightRed transition-colors"
        >
          Baixar App
        </a>
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

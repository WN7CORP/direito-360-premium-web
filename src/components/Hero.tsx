
import { useEffect } from 'react';
import { getDeviceType, getAppStoreLink } from '@/utils/deviceDetection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Auto-redirect based on device type
    const deviceType = getDeviceType();
    if (deviceType === 'iOS' || deviceType === 'Android') {
      setTimeout(() => {
        window.location.href = getAppStoreLink();
      }, 3000); // Redirect after 3 seconds
    }
  }, []);

  const handleGetAppClick = () => {
    window.location.href = getAppStoreLink();
  };
  
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-netflix-dark z-10"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center h-[70vh] relative">
        <div className="hero-gradient absolute inset-0"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Direito 360 Premium</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl">Sua formação jurídica completa por apenas <span className="text-netflix-red font-bold">R$49,99</span> (pagamento único)</p>
          <p className="text-lg mb-8">Redirecionando você para a loja de aplicativos do seu dispositivo...</p>
          <Button onClick={handleGetAppClick} className="cta-button group">
            Baixar Agora 
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

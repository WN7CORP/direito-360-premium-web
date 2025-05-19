
import { useEffect } from 'react';
import { getDeviceType, getAppStoreLink } from '@/utils/deviceDetection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award } from 'lucide-react';

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
      <div className="bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center h-[80vh] relative">
        <div className="hero-gradient absolute inset-0"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
          <div className="mb-2 flex items-center">
            <Award className="text-netflix-red mr-2 h-6 w-6" />
            <span className="text-sm md:text-base font-medium text-netflix-lightRed">ACESSO ILIMITADO</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            Direito <span className="text-netflix-red">360</span> Premium
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl">
            Sua formação jurídica completa por apenas <span className="text-netflix-red font-bold text-2xl md:text-3xl animate-pulse-slow">R$49,99</span> <span className="text-netflix-lightGray">(pagamento único)</span>
          </p>
          
          <div className="mb-8 flex flex-col md:flex-row items-center gap-4 p-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg border border-netflix-gray">
            <div className="flex items-center">
              <div className="flex h-2.5 w-2.5 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-netflix-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-netflix-lightRed"></span>
              </div>
              <p>Redirecionando para a loja do seu dispositivo...</p>
            </div>
          </div>
          
          <Button onClick={handleGetAppClick} className="cta-button group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Baixar Agora 
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-netflix-red to-netflix-lightRed transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

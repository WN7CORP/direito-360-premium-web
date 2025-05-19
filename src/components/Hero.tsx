
import { getAppStoreLink } from '@/utils/deviceDetection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Sparkles } from 'lucide-react';

const Hero = () => {
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
            <Award className="text-netflix-red mr-2 h-6 w-6 animate-bounce-subtle" />
            <span className="text-sm md:text-base font-medium text-netflix-lightRed">ACESSO ILIMITADO</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            Direito <span className="text-netflix-red">360</span> Premium
          </h1>
          
          <div className="relative my-5 animate-scale-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-netflix-red to-netflix-lightRed rounded-lg blur-md opacity-75"></div>
            <div className="relative bg-netflix-dark/90 rounded-lg border border-netflix-red p-4 flex flex-col items-center">
              <div className="flex items-center mb-1">
                <Sparkles className="text-netflix-red h-5 w-5 mr-2 animate-pulse-slow" />
                <span className="text-sm uppercase font-bold text-netflix-lightRed">Oferta Especial</span>
              </div>
              <div className="flex items-center">
                <span className="text-3xl md:text-4xl font-bold text-white animate-pulse-slow">R$49,99</span>
                <span className="ml-3 px-3 py-1 bg-netflix-red text-white text-xs font-bold rounded-full">
                  PAGAMENTO ÚNICO
                </span>
              </div>
              <p className="text-sm text-netflix-lightGray mt-1">Acesso vitalício a todo conteúdo</p>
            </div>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row items-center gap-4 p-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg border border-netflix-gray">
            <p>Clique em "Baixar Agora" para acessar a loja do seu dispositivo</p>
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

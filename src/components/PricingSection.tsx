import { getAppStoreLink } from '@/utils/deviceDetection';
import { Button } from '@/components/ui/button';
import { Download, Check, Sparkles, Medal } from 'lucide-react';

const PricingSection = () => {
  const handleGetAppClick = () => {
    window.open(getAppStoreLink(), "_blank");
  };
  
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGxhdyUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="bg-gradient-to-b from-netflix-dark to-black py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-10 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-netflix-red to-netflix-lightRed rounded-lg blur-md"></div>
            <div className="relative bg-netflix-dark px-8 py-4 rounded-lg border border-netflix-red/30">
              <h2 className="text-3xl md:text-5xl font-bold flex items-center justify-center">
                <Medal className="h-8 w-8 mr-3 text-netflix-red animate-bounce-subtle" />
                Apenas <span className="text-netflix-red ml-2 text-glow">R$49,99</span>
              </h2>
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <span className="px-3 py-1 bg-netflix-red/80 rounded-full text-sm font-bold">PAGAMENTO ÚNICO</span>
                <span className="px-3 py-1 bg-netflix-gray rounded-full text-sm">Sem mensalidades</span>
                <span className="px-3 py-1 bg-netflix-gray rounded-full text-sm">Acesso vitalício</span>
              </div>
            </div>
          </div>
          
          <div className="bg-netflix-gray rounded-lg p-6 md:p-8 max-w-md mx-auto mb-8 transform hover:scale-105 transition-transform duration-300 border border-netflix-red/30 shadow-[0_0_30px_rgba(229,9,20,0.2)]">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-netflix-red text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
              <Sparkles className="h-4 w-4 mr-1 animate-pulse-slow" />
              OFERTA EXCLUSIVA
            </div>
            
            <h3 className="text-2xl font-bold mb-6">O que você recebe:</h3>
            <ul className="text-left space-y-3 mb-6">
              {[
                "Acesso a mais de 300 livros jurídicos",
                "Mais de 200 audioaulas",
                "Mais de 500 videoaulas",
                "30 mil modelos de petições",
                "Vade Mecum 2025 atualizado",
                "Assistente jurídica pessoal",
                "Acesso pelo computador e celular"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 p-1 rounded-full bg-netflix-red mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-netflix-red to-netflix-lightRed rounded-md blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <Button onClick={handleGetAppClick} className="cta-button w-full group relative">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" /> 
                Baixar Agora
              </Button>
            </div>
            
            <div className="mt-4 p-3 bg-netflix-darkGray rounded-md border border-netflix-gray animate-pulse-slow">
              <p className="text-sm text-netflix-lightGray">
                <strong className="text-white">Estudantes online agora:</strong> 
                <span className="ml-1 text-netflix-red font-bold">28+</span> pessoas
              </p>
            </div>
          </div>
          
          <p className="text-netflix-lightGray">Disponível para Android e iOS</p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

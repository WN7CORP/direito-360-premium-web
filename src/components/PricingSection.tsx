
import { getAppStoreLink } from '@/utils/deviceDetection';
import { Button } from '@/components/ui/button';
import { Download, Check } from 'lucide-react';

const PricingSection = () => {
  const handleGetAppClick = () => {
    window.location.href = getAppStoreLink();
  };
  
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGxhdyUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="bg-gradient-to-b from-netflix-dark to-black py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Apenas <span className="text-netflix-red">R$49,99</span>
          </h2>
          <p className="text-xl mb-6">Pagamento único. Sem mensalidades. Acesso vitalício.</p>
          
          <div className="bg-netflix-gray rounded-lg p-6 md:p-8 max-w-md mx-auto mb-8 transform hover:scale-105 transition-transform duration-300 border border-netflix-red/30 shadow-[0_0_30px_rgba(229,9,20,0.2)]">
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
              <Button onClick={handleGetAppClick} className="cta-button w-full group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" /> 
                Baixar Agora
              </Button>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-netflix-red to-netflix-lightRed rounded-md blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
            </div>
          </div>
          
          <p className="text-netflix-lightGray">Disponível para Android e iOS</p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

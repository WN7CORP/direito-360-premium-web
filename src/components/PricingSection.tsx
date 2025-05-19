
import { getAppStoreLink } from '@/utils/deviceDetection';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const PricingSection = () => {
  const handleGetAppClick = () => {
    window.location.href = getAppStoreLink();
  };
  
  return (
    <div className="bg-gradient-to-b from-netflix-dark to-black py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Apenas R$49,99</h2>
        <p className="text-xl mb-6">Pagamento único. Sem mensalidades. Acesso vitalício.</p>
        
        <div className="bg-netflix-gray rounded-lg p-6 max-w-md mx-auto mb-8">
          <h3 className="text-2xl font-bold mb-4">O que você recebe:</h3>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-netflix-red mr-2">✓</span>
              <span>Acesso a mais de 300 livros jurídicos</span>
            </li>
            <li className="flex items-start">
              <span className="text-netflix-red mr-2">✓</span>
              <span>Mais de 200 audioaulas</span>
            </li>
            <li className="flex items-start">
              <span className="text-netflix-red mr-2">✓</span>
              <span>Mais de 500 videoaulas</span>
            </li>
            <li className="flex items-start">
              <span className="text-netflix-red mr-2">✓</span>
              <span>30 mil modelos de petições</span>
            </li>
            <li className="flex items-start">
              <span className="text-netflix-red mr-2">✓</span>
              <span>Vade Mecum 2025 atualizado</span>
            </li>
            <li className="flex items-start">
              <span className="text-netflix-red mr-2">✓</span>
              <span>Assistente jurídica pessoal</span>
            </li>
            <li className="flex items-start">
              <span className="text-netflix-red mr-2">✓</span>
              <span>Acesso pelo computador e celular</span>
            </li>
          </ul>
          
          <Button onClick={handleGetAppClick} className="cta-button w-full">
            <Download className="mr-2 h-5 w-5" /> Baixar Agora
          </Button>
        </div>
        
        <p className="text-netflix-lightGray">Disponível para Android e iOS</p>
      </div>
    </div>
  );
};

export default PricingSection;

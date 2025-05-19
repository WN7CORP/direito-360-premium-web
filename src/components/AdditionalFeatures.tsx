
import { Check } from 'lucide-react';

const AdditionalFeatures = () => {
  const features = [
    "Assistente jurídica pessoal (Evelyn) no aplicativo e no WhatsApp",
    "Resumos e mapas mentais estratégicos",
    "Dicionário jurídico com mais de 500 termos",
    "JurisFlix: recomendações de filmes e séries jurídicas",
    "Notícias jurídicas atualizadas diariamente",
    "Atualizações frequentes e conteúdos exclusivos"
  ];
  
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhdyUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="bg-netflix-gray bg-opacity-90 py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">E Muito Mais...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="h-6 w-6 rounded-full bg-netflix-red flex items-center justify-center mt-1 mr-3 shadow-glow">
                  <Check className="text-white h-3 w-3" />
                </div>
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalFeatures;

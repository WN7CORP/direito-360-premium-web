
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
    <div className="bg-netflix-gray py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">E Muito Mais...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-netflix-red flex items-center justify-center mt-1 mr-3">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <p className="text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalFeatures;

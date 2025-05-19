
import { Book, Headphones, Video, Calendar, BookOpen, Bookmark, Newspaper, Computer } from 'lucide-react';
import { motion } from 'framer-motion';

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

const FeatureSection = () => {
  const features: Feature[] = [
    {
      title: "Leitura e Download Ilimitado",
      description: "Acesso a mais de 300 livros jurídicos para leitura online e download em PDF, todos com explicações claras e base legal atualizada.",
      icon: <Book className="feature-icon" />,
      delay: 0.1
    },
    {
      title: "200+ Audioaulas em Podcast",
      description: "Audioaulas exclusivas para estudar de forma prática em qualquer lugar, ideais para revisão e fixação de conteúdo.",
      icon: <Headphones className="feature-icon" />,
      delay: 0.2
    },
    {
      title: "Flashcards Inteligentes",
      description: "Mais de mil flashcards organizados por tema e matéria, criados para facilitar a memorização dos principais conceitos jurídicos.",
      icon: <Calendar className="feature-icon" />,
      delay: 0.3
    },
    {
      title: "Videoaulas Completas",
      description: "Mais de 500 videoaulas com professores especializados, voltadas para a prática, OAB e concursos públicos.",
      icon: <Video className="feature-icon" />,
      delay: 0.4
    },
    {
      title: "Vade Mecum 2025 Pro",
      description: "Todos os códigos e estatutos atualizados em um só lugar, com navegação fácil e pesquisa rápida por artigos.",
      icon: <BookOpen className="feature-icon" />,
      delay: 0.5
    },
    {
      title: "100+ Cursos Jurídicos",
      description: "Cursos completos organizados por áreas do Direito, com material complementar e foco na aplicação prática.",
      icon: <Bookmark className="feature-icon" />,
      delay: 0.6
    },
    {
      title: "30 Mil Modelos de Petições",
      description: "Modelos de petições prontos para editar, com mais de 30 mil exemplos organizados por assunto e especialidade.",
      icon: <Newspaper className="feature-icon" />,
      delay: 0.7
    },
    {
      title: "Acesso pelo Computador",
      description: "Estude pelo celular ou pelo computador com sincronização completa de conteúdo, desempenho e histórico.",
      icon: <Computer className="feature-icon" />,
      delay: 0.8
    }
  ];
  
  return (
    <div className="container py-16 px-4 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Tudo Que Você Precisa Em Um Só Lugar</h2>
        <div className="h-1 w-20 bg-netflix-red mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            style={{
              animationDelay: `${feature.delay}s`,
              animation: 'fade-in 0.6s ease-out forwards',
              opacity: 0
            }}
          >
            <div className="p-3 rounded-full inline-block bg-netflix-darkGray mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-netflix-lightGray">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

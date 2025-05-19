
import { Book, Headphones, Video, Calendar, BookOpen, Bookmark, Newspaper, Computer } from 'lucide-react';

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureSection = () => {
  const features: Feature[] = [
    {
      title: "Leitura e Download Ilimitado",
      description: "Acesso a mais de 300 livros jurídicos para leitura online e download em PDF, todos com explicações claras e base legal atualizada.",
      icon: <Book className="feature-icon" />
    },
    {
      title: "200+ Audioaulas em Podcast",
      description: "Audioaulas exclusivas para estudar de forma prática em qualquer lugar, ideais para revisão e fixação de conteúdo.",
      icon: <Headphones className="feature-icon" />
    },
    {
      title: "Flashcards Inteligentes",
      description: "Mais de mil flashcards organizados por tema e matéria, criados para facilitar a memorização dos principais conceitos jurídicos.",
      icon: <Calendar className="feature-icon" />
    },
    {
      title: "Videoaulas Completas",
      description: "Mais de 500 videoaulas com professores especializados, voltadas para a prática, OAB e concursos públicos.",
      icon: <Video className="feature-icon" />
    },
    {
      title: "Vade Mecum 2025 Pro",
      description: "Todos os códigos e estatutos atualizados em um só lugar, com navegação fácil e pesquisa rápida por artigos.",
      icon: <BookOpen className="feature-icon" />
    },
    {
      title: "100+ Cursos Jurídicos",
      description: "Cursos completos organizados por áreas do Direito, com material complementar e foco na aplicação prática.",
      icon: <Bookmark className="feature-icon" />
    },
    {
      title: "30 Mil Modelos de Petições",
      description: "Modelos de petições prontos para editar, com mais de 30 mil exemplos organizados por assunto e especialidade.",
      icon: <Newspaper className="feature-icon" />
    },
    {
      title: "Acesso pelo Computador",
      description: "Estude pelo celular ou pelo computador com sincronização completa de conteúdo, desempenho e histórico.",
      icon: <Computer className="feature-icon" />
    }
  ];
  
  return (
    <div className="container py-16 px-4 mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Tudo Que Você Precisa Em Um Só Lugar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-netflix-lightGray">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;


import { Book, GraduationCap, School, Briefcase } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

interface AudienceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AudienceItem = ({ icon, title, description }: AudienceItemProps) => (
  <div className="flex flex-col items-center p-6 bg-netflix-gray rounded-lg bg-opacity-60 backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300">
    <div className="p-4 rounded-full bg-gradient-to-br from-netflix-red to-netflix-lightRed mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-center text-netflix-lightGray">{description}</p>
  </div>
);

const TargetAudience = () => {
  const audiences = [
    {
      icon: <Book className="h-8 w-8 text-white" />,
      title: "Estudantes de Direito",
      description: "Complemento perfeito para a graduação, com conteúdo alinhado ao currículo do curso."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      title: "Candidatos à OAB",
      description: "Material completo e atualizado para aprovação no Exame da Ordem com alto desempenho."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "Concurseiros",
      description: "Preparação específica para concursos jurídicos com foco nas disciplinas mais cobradas."
    },
    {
      icon: <School className="h-8 w-8 text-white" />,
      title: "Profissionais do Direito",
      description: "Atualização constante e modelos práticos para o dia a dia da advocacia."
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-black to-netflix-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center">Para Quem é o Direito 360 Premium?</h2>
        <p className="text-netflix-lightGray text-center mb-10 max-w-2xl mx-auto">Criado especialmente para quem busca excelência na formação jurídica, independente da etapa da carreira.</p>
        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <AudienceItem key={index} {...item} />
          ))}
        </div>
        
        <Carousel className="md:hidden">
          <CarouselContent>
            {audiences.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <AudienceItem {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default TargetAudience;

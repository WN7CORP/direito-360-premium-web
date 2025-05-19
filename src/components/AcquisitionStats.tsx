import { useEffect, useState } from 'react';
import { Users, TrendingUp, CheckCircle, BarChart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

// List of fictional names for people acquiring the app
const recentPurchasers = ["Maria S.", "João P.", "Luiza M.", "Carlos A.", "Ana B.", "Pedro H.", "Julia C.", "Rafael D.", "Fernanda L.", "Bruno G.", "Thiago R.", "Mariana S.", "Lucas T.", "Isabela V.", "Daniel W.", "Amanda X.", "Felipe Y.", "Gabriela Z.", "Rodrigo A.", "Camila B.", "Patricia N.", "Eduardo Q.", "Carla K.", "Roberto L.", "Monica P."];
const locations = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre", "Curitiba", "Brasília", "Salvador", "Recife", "Fortaleza", "Manaus", "Florianópolis", "Goiânia", "Belém", "Campo Grande", "Vitória"];
const AcquisitionStats = () => {
  const [currentUsers, setCurrentUsers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [recentBuyer, setRecentBuyer] = useState("");
  const [recentLocation, setRecentLocation] = useState("");
  const [purchasePercentage, setPurchasePercentage] = useState(82);
  const [displayTimeValue, setDisplayTimeValue] = useState("5 minutos");
  useEffect(() => {
    // Starting values
    setTotalUsers(12847);
    setCurrentUsers(28);

    // Simulate real-time statistics
    const interval = setInterval(() => {
      // Randomly increment total users
      if (Math.random() > 0.7) {
        setTotalUsers(prev => prev + 1);
        setCurrentUsers(prev => Math.min(prev + 1, 35));

        // Show a new purchaser
        const randomName = recentPurchasers[Math.floor(Math.random() * recentPurchasers.length)];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        setRecentBuyer(randomName);
        setRecentLocation(randomLocation);

        // Show toast notification
        toast({
          title: "Nova aquisição!",
          description: `${randomName} de ${randomLocation} acabou de adquirir o app.`,
          variant: "default"
        });

        // Clear the recent buyer after 3 seconds
        setTimeout(() => {
          setRecentBuyer("");
          setRecentLocation("");
        }, 5000);

        // Adjust percentage randomly between 78% and 88%
        setPurchasePercentage(78 + Math.floor(Math.random() * 10));

        // Adjust time values
        const timeValues = ["3 minutos", "4 minutos", "5 minutos", "7 minutos"];
        setDisplayTimeValue(timeValues[Math.floor(Math.random() * timeValues.length)]);
      } else {
        // Fluctuate current users between 20-35
        setCurrentUsers(prev => {
          const direction = Math.random() > 0.5 ? 1 : -1;
          return Math.max(20, Math.min(35, prev + direction));
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <div className="py-10 bg-netflix-darkGray bg-opacity-50">
      <div className="container mx-auto px-4">
        {recentBuyer && <div className="mb-6 p-3 bg-gradient-to-r from-netflix-darkGray to-netflix-gray border border-netflix-red rounded-md flex items-center animate-slide-in shadow-md">
            <CheckCircle className="text-netflix-red h-6 w-6 mr-3 animate-pulse-slow" />
            <div>
              <span className="text-sm font-medium">
                <span className="font-bold text-white">{recentBuyer}</span> de <span className="font-bold">{recentLocation}</span> acabou de adquirir 
                <span className="font-bold text-netflix-red ml-1">Direito 360 Premium</span>
              </span>
              <div className="text-xs text-netflix-lightGray mt-1">Há alguns segundos atrás</div>
            </div>
          </div>}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-netflix-gray border-netflix-darkGray hover:shadow-[0_0_15px_rgba(229,9,20,0.3)] transition-all duration-300">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center">
                <Users className="text-netflix-red h-8 w-8 mr-3" />
                <div>
                  <p className="text-netflix-lightGray text-sm">Estudando agora</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold">{currentUsers}</p>
                    <p className="text-netflix-lightGray text-sm ml-2">usuários</p>
                  </div>
                </div>
              </div>
              <Progress className="mt-3 h-2" value={currentUsers / 50 * 100} />
            </CardContent>
          </Card>
          
          <Card className="bg-netflix-gray border-netflix-darkGray hover:shadow-[0_0_15px_rgba(229,9,20,0.3)] transition-all duration-300">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center">
                <TrendingUp className="text-netflix-red h-8 w-8 mr-3" />
                <div>
                  <p className="text-netflix-lightGray text-sm">Acessos totais</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold animate-pulse-slow">{totalUsers.toLocaleString('pt-BR')}</p>
                    <p className="text-netflix-lightGray text-sm ml-2">estudantes</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs text-netflix-lightGray">Dados em tempo real</div>
            </CardContent>
          </Card>
          
          <Card className="bg-netflix-gray border-netflix-darkGray hover:shadow-[0_0_15px_rgba(229,9,20,0.3)] transition-all duration-300">
            
          </Card>
        </div>
      </div>
    </div>;
};
export default AcquisitionStats;
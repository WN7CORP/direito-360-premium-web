
import { useEffect, useState } from 'react';
import { Users, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

const AcquisitionStats = () => {
  const [currentUsers, setCurrentUsers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  
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
      } else {
        // Fluctuate current users between 20-35
        setCurrentUsers(prev => {
          const direction = Math.random() > 0.5 ? 1 : -1;
          return Math.max(20, Math.min(35, prev + direction));
        });
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="py-6 bg-netflix-darkGray bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <Progress className="mt-3 h-2" value={currentUsers/50*100} />
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
        </div>
      </div>
    </div>
  );
};

export default AcquisitionStats;

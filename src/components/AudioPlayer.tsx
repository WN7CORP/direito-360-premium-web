
import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface AudioPlayerProps {
  audioUrl: string;
  caption: string;
}

const AudioPlayer = ({ audioUrl, caption }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play()
          .catch(() => {
            toast({
              title: "Erro ao reproduzir áudio",
              description: "Tente novamente mais tarde.",
              variant: "destructive"
            });
          });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const value = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(value);
    }
  };

  return (
    <div className="mt-6 relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-netflix-red to-netflix-lightRed rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-netflix-dark/90 rounded-lg border border-netflix-red/50 p-4 flex flex-col items-center">
        <audio 
          ref={audioRef} 
          src={audioUrl} 
          onTimeUpdate={updateProgress}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        />
        
        <div className="w-full flex items-center justify-between mb-2">
          <button 
            onClick={togglePlay} 
            className="flex items-center justify-center w-12 h-12 bg-netflix-red hover:bg-netflix-lightRed text-white rounded-full transition-all duration-300 transform hover:scale-110 animate-pulse-slow"
            aria-label={isPlaying ? "Pausar áudio" : "Reproduzir áudio"}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6 ml-0.5" />
            )}
          </button>
          
          <div className="flex-1 mx-4">
            <div className="relative w-full h-2 bg-netflix-gray rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-netflix-red"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          <button 
            onClick={toggleMute}
            className="text-netflix-lightRed hover:text-white transition-colors duration-300"
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
        
        <p className="text-netflix-lightGray text-sm text-center italic">{caption}</p>
      </div>
    </div>
  );
};

export default AudioPlayer;

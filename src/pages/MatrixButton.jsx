// MatrixButton.jsx
import { useRef } from 'react';

export default function MatrixButton({ onClick, sonido = '/sounds/glitch-fx.mp3', children = "Access"}) {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; 
      audioRef.current.volume = 0.9;
      // reinicia el sonido
      audioRef.current.play();
    }
    onClick?.();
  };

  return (
    <div
      className="relative m-3 w-[200px] h-10 z-10"
    >
    <button
  onClick={handleClick}
className="animate-flicker bg-black text-[#0f0] border border-[#0f0] px-2 py-2 rounded font-mono shadow-lg hover:bg-green-900/40 transition-all duration-200"

>

  {children}
</button>


      {/* Audio oculto */}
      <audio ref={audioRef} src={sonido} preload="auto" />
    </div>
  );
}

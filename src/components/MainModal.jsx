import { useEffect, useState, useRef } from "react";
import MatrixButton from "../pages/MatrixButton"; // tu botón personalizado

export default function MainModal({ children, onClick, sonido = "/sounds/glitch-fx.mp3" }) {
  const [show, setShow] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }

    // Esperar un poco antes de cerrar (opcional)
    setTimeout(() => {
      if (onClick) onClick();
    }, 700); // da tiempo a que el sonido empiece
  };

  return (
    <div className="absolute inset-0 bg-black/90 text-neon-green p-4 z-50 flex justify-center items-center">
      <div
        className={`transform transition-all duration-200 ease-out ${
          show ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } w-full max-w-4xl h-[90vh] overflow-y-auto border border-neon-green rounded p-6 shadow-lg font-mono`}
      >
        

        <MatrixButton onClick={handleClick}>Exit</MatrixButton>
       
        <audio ref={audioRef} src={sonido} preload="auto" />
        {children}
      </div>
    </div>
  );
}

import { useEffect, useState, useRef } from "react";

export default function MatrixModal({ onClose, onActivate }) {
  const [show, setShow] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  const handleActivar = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume= 0.9;
      audioRef.current.play();
    }

    // Espera 500ms antes de cerrar
    setTimeout(() => {
      onClose();
      onActivate()
    }, 500);
  };

  return (
    <div className="absolute inset-0 bg-black/90 text-neon-green p-4 z-50 flex justify-center items-center">
      {/* 🔊 Audio oculto */}
      <audio ref={audioRef} src="/sounds/glitch-fx-3.mp3" preload="auto" />

      {/* ⚡ Modal Principal */}
      <div 
        className={`transform transition-all duration-100 ease-in-out ${
          show ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } bg-white text-green-300 m-9 border border-green-500 p-8 rounded shadow-lg font-mono  w-[90vw] h-[90vh] text-center`}
      >
      <button onClick={() => handleActivar(onClose)}
        className="animate-flicker bg-black text-[#0f0] border border-[#0f0] px-2 py-2 rounded font-mono shadow-lg hover:bg-green-900/40 transition-all duration-200"
        > active</button>
      
        {/* Botón especial con sonido */}
      
      </div>
    </div>
  );
}

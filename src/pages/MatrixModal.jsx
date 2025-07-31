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
      <audio ref={audioRef} src="/sounds/jump-fx.mp3" preload="auto" />

      {/* ⚡ Modal Principal */}
      <div
        className={`transform transition-all duration-300 ease-out ${
          show ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } bg-white text-green-300 m-9 border border-green-500 p-8 rounded shadow-lg font-mono  w-[90vw] h-[90vh] text-center`}
      >
      
       

        {/* Botón especial con sonido */}
        <button
          onClick={handleActivar}
          className="mt-6 px-6 py-2 bg-green-800 hover:bg-green-500 text-white rounded-full font-bold shadow-lg transition-transform duration-200 active:scale-0 hover:scale-105"
        >
          🔘 
        </button>
      </div>
    </div>
  );
}

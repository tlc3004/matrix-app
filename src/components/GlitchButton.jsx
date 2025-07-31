import { useState, useRef } from "react";

export default function GlitchButton({ onClick, sonido = "/sounds/jump-fx.mp3" }) {
  const [activar, setActivar] = useState(false);
  const audioRef = useRef(null);

  const handleActivar = () => {
    setActivar(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.9;
      audioRef.current.play();
    }

    setTimeout(() => {
      setActivar(false);
      if (onClick) onClick();
    }, 2000); // después de 1s
  };

  return (
    <div className="perspective-1000">
      <button
        onClick={handleActivar}
        className={`relative mt-2 px-4 py-2 ml-[500px] bg-green-800 text-white rounded-full font-bold shadow-lg transition-transform duration-700 ease-in-out
          ${
            activar
              ? "scale-50 blur-sm opacity-30 translate-z-[-300px]"
              : "hover:bg-green-500 hover:scale-105"
          }`}
        style={{
          transform: activar
            ? "translateZ(-300px) scale(0.5)"
            : "translateZ(0) scale(1)",
          transition: "transform 0.7s ease-in-out",
        }}
      >
        {activar ? "" : "🔘"}
      </button>
      <audio ref={audioRef} src={sonido} preload="auto" />
    </div>
  );
}

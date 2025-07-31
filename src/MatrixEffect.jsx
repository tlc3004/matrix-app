// MatrixRain.jsx
import { useEffect, useRef } from 'react';

export default function MatrixEffect({ activeMatrix = true}) {
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'アァカサタナハマヤャラワンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$%&';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0f0';
      ctx.font = fontSize + 'px monospace';

      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);
        drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
      });
    };
    if (activeMatrix){
      intervalRef.current=setInterval(draw, 50);
    }
    return()=>{
      clearInterval(intervalRef.current)
    };
  },[activeMatrix])

  return <canvas ref={canvasRef} style={{ display: 'block', background: 'black' }} />;
}

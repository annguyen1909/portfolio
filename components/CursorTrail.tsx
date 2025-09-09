'use client';

import { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef<Array<{ x: number; y: number; age: number }>>([]);
  const animationIdRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let isMouseMoving = false;
    let mouseTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      isMouseMoving = true;
      
      clearTimeout(mouseTimeout);
      
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0
      });

      if (trailRef.current.length > 8) {
        trailRef.current.shift();
      }

      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = (currentTime: number) => {
      if (currentTime - lastTimeRef.current < 33.33) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTimeRef.current = currentTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isMouseMoving || trailRef.current.length > 0) {
        trailRef.current.forEach((point) => {
          point.age += 1;
          
          const opacity = Math.max(0, 1 - point.age / 8);
          const size = Math.max(0, 5 - point.age * 0.4);
          
          if (opacity > 0.01) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.4})`;
            ctx.fill();
          }
        });

        trailRef.current = trailRef.current.filter(point => point.age < 8);
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimeout);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 10 }}
    />
  );
};

export default CursorTrail;
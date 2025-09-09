'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    
    const resizeCanvas = useCallback(() => {
      if (typeof window === 'undefined') return;
      
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * pixelRatio;
      canvas.height = rect.height * pixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(pixelRatio, pixelRatio);
    }, [ctx, pixelRatio]);

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Reduced number of shapes for better performance
    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      baseOpacity: number;
      type: 'circle' | 'triangle' | 'square';
      color: string;
    }> = [];

    const colors = [
      'rgba(30, 64, 175, 0.06)',   // Blue - reduced opacity
      'rgba(76, 29, 149, 0.06)',   // Purple
      'rgba(8, 145, 178, 0.06)',   // Cyan
      'rgba(67, 56, 202, 0.06)',   // Indigo
      'rgba(30, 58, 138, 0.06)',   // Navy
    ];

    // Reduced from 15 to 6 shapes for better performance
    for (let i = 0; i < 6; i++) {
      const baseOpacity = Math.random() * 0.15 + 0.03;
      shapes.push({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
        size: Math.random() * 50 + 10, // Smaller sizes
        speedX: (Math.random() - 0.5) * 0.2, // Slower movement
        speedY: (Math.random() - 0.5) * 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005, // Slower rotation
        opacity: baseOpacity,
        baseOpacity: baseOpacity,
        type: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'square',
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Cache gradients to avoid recreation on each frame
    const gradientCache = new Map<string, CanvasGradient>();

    const getGradient = (shape: typeof shapes[0]) => {
      const key = `${shape.color}-${Math.round(shape.size)}`;
      if (!gradientCache.has(key)) {
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size);
        gradient.addColorStop(0, shape.color);
        gradient.addColorStop(1, 'transparent');
        gradientCache.set(key, gradient);
      }
      return gradientCache.get(key)!;
    };

    const drawShape = (shape: typeof shapes[0]) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.globalAlpha = shape.opacity;

      ctx.fillStyle = getGradient(shape);

      switch (shape.type) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -shape.size);
          ctx.lineTo(-shape.size * 0.866, shape.size * 0.5);
          ctx.lineTo(shape.size * 0.866, shape.size * 0.5);
          ctx.closePath();
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(-shape.size * 0.5, -shape.size * 0.5, shape.size, shape.size);
          break;
      }

      ctx.restore();
    };

    // Optimized animation with frame rate control
    const animate = (currentTime: number) => {
      // Limit to 30fps for better performance
      if (currentTime - lastTimeRef.current < 33.33) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTimeRef.current = currentTime;
      
      // Use willReadFrequently optimization
      ctx.clearRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);

      shapes.forEach(shape => {
        // Update position
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;

        // Wrap around edges
        const canvasWidth = canvas.width / pixelRatio;
        const canvasHeight = canvas.height / pixelRatio;
        
        if (shape.x < -shape.size) shape.x = canvasWidth + shape.size;
        if (shape.x > canvasWidth + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvasHeight + shape.size;
        if (shape.y > canvasHeight + shape.size) shape.y = -shape.size;

        // Optimized opacity calculation
        shape.opacity = shape.baseOpacity + Math.sin(currentTime * 0.0005 + shape.x * 0.005) * 0.03;

        drawShape(shape);
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeCanvas);
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  // Only render canvas after component is mounted
  if (!isMounted) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default AnimatedBackground;

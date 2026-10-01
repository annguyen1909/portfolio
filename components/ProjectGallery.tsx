'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastTrigger = useRef(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (activeIndex === null) return;
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        setIsZoomed(false);
        setActiveIndex(index => index === null ? null : (index + (event.key === 'ArrowLeft' ? -1 : 1) + images.length) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="gallery-list">
        {images.map((image, index) => (
          <motion.figure
            key={image}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gallery-item"
          >
            <button
              ref={element => { triggerRefs.current[index] = element; }}
              type="button"
              className="gallery-trigger"
              onClick={() => { lastTrigger.current = index; setIsZoomed(false); setActiveIndex(index); }}
              aria-label={`Open ${title} image ${index + 1} of ${images.length}`}
            >
              <img src={image} alt={`${title} screenshot ${index + 1}`} />
              <span className="gallery-open-hint" aria-hidden="true">VIEW IMAGE <Maximize2 size={16} /></span>
            </button>
            <figcaption>{String(index + 1).padStart(2, '0')} / {title}</figcaption>
          </motion.figure>
        ))}
      </div>

      {activeIndex !== null && (
        <dialog
          ref={dialogRef}
          className="gallery-dialog"
          aria-label={`${title} image gallery`}
          onClose={() => {
            setActiveIndex(null);
            requestAnimationFrame(() => triggerRefs.current[lastTrigger.current]?.focus());
          }}
          onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}
        >
          <div className="gallery-dialog-toolbar">
            <span>{String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
            <div>
              <button type="button" onClick={() => setIsZoomed(!isZoomed)} aria-label={isZoomed ? 'Zoom out image' : 'Zoom in image'} aria-pressed={isZoomed}>{isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}</button>
              <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close image gallery"><X size={20} /></button>
            </div>
          </div>
          <div className="gallery-dialog-viewport">
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`${title} screenshot ${activeIndex + 1}`}
              draggable={false}
              className={`gallery-dialog-image ${isZoomed ? 'gallery-dialog-image--zoomed' : ''}`}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            />
          </div>
          <div className="gallery-dialog-controls">
            <button type="button" onClick={() => { setIsZoomed(false); setActiveIndex((activeIndex - 1 + images.length) % images.length); }} aria-label="Previous image"><ArrowLeft size={20} /></button>
            <span>{title}</span>
            <button type="button" onClick={() => { setIsZoomed(false); setActiveIndex((activeIndex + 1) % images.length); }} aria-label="Next image"><ArrowRight size={20} /></button>
          </div>
        </dialog>
      )}
    </>
  );
}

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FaTimes } from 'react-icons/fa';

export default function TopRibbon({
  messages = [],
  bgColor = 'bg-green-600',
  textColor = 'text-white',
  speed = 60, // pixels por segundo
  pauseOnHover = false,
  showCloseButton = true,
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const offsetRef = useRef(0);
  const router = useRouter();

  const renderMessages = [...messages, ...messages];

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      window.__topRibbonClosed = true;
    }
    setPaused(true);
    setIsVisible(false);
  };

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && window.__topRibbonClosed) {
      setIsVisible(false);
    }
    const saved = Number(localStorage.getItem('topRibbonOffset') || 0);
    if (!Number.isNaN(saved)) {
      setOffset(saved);
    }
  }, []);

  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  useEffect(() => {
    if (!mounted) return;
    const tick = (ts) => {
      if (paused) {
        rafRef.current = requestAnimationFrame(tick);
        lastTsRef.current = ts;
        return;
      }
      if (lastTsRef.current == null) {
        lastTsRef.current = ts;
      }
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      const contentWidth = contentRef.current?.offsetWidth || 0;
      setOffset((prev) => {
        if (contentWidth <= 0) return prev;
        let next = prev + speed * dt;
        if (next >= contentWidth) next = next - contentWidth;
        if (Math.floor(next) % 128 === 0) {
          localStorage.setItem('topRibbonOffset', String(next));
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    const onVisibility = () => {
      lastTsRef.current = null;
    };
    document.addEventListener('visibilitychange', onVisibility);
    const onRouteChangeStart = () => {
      localStorage.setItem('topRibbonOffset', String(offsetRef.current));
    };
    router.events?.on('routeChangeStart', onRouteChangeStart);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener('visibilitychange', onVisibility);
      router.events?.off('routeChangeStart', onRouteChangeStart);
      localStorage.setItem('topRibbonOffset', String(offsetRef.current));
    };
  }, [mounted, paused, speed]);

  const onMouseEnter = () => { if (pauseOnHover) setPaused(true); };
  const onMouseLeave = () => { if (pauseOnHover) setPaused(false); };

  return (
    <div
      className={`${bgColor} ${textColor} py-2 overflow-hidden relative transition-all duration-300`}
      style={{ maxHeight: isVisible ? 64 : 0, opacity: isVisible ? 1 : 0 }}
    >
      <div className="flex items-center justify-center">
        {mounted && (
          <div
            ref={containerRef}
            className="relative"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
              transform: `translate3d(${-offset}px, 0, 0)`,
              willChange: 'transform',
            }}
          >
            <div ref={contentRef} className="flex">
              {renderMessages.map((message, index) => (
                <div key={index} className="flex-shrink-0 px-8">
                  <span className="text-sm font-medium">
                    {message}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {showCloseButton && (
          <button
            onClick={handleClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:opacity-75 transition-opacity duration-200"
            aria-label="Fechar banner"
          >
            <FaTimes className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

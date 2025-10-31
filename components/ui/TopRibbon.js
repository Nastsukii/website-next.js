import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function TopRibbon({
  messages = [],
  bgColor = 'bg-green-600',
  textColor = 'text-white',
  speed = 30,
  pauseOnHover = true,
  showCloseButton = true,
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || messages.length === 0) {
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className={`${bgColor} ${textColor} py-2 overflow-hidden relative`}>
      <div className="flex items-center justify-between">
        <div
          className={`flex animate-marquee ${pauseOnHover ? 'hover:pause' : ''}`}
          style={{
            animationDuration: `${speed}s`,
          }}
        >
          {messages.map((message, index) => (
            <div key={index} className="flex-shrink-0 px-8">
              <span className="text-sm font-medium">
                {message}
              </span>
            </div>
          ))}
        </div>
        
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
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee linear infinite;
        }
        
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface HeroVideoProps {
  videoSrc: string;
}

export function HeroVideo({ videoSrc }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setIsLoaded(true);
    video.addEventListener('canplay', handleCanPlay);
    
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, []);

  return (
    <>
      {/* Placeholder while video loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#544515] to-[#1c190d]" />
      )}
      <video 
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </>
  );
}

interface ModuleTabsProps {
  modules: Array<{
    num: number;
    label: string;
    title: string;
    special?: string;
    weeks: Array<{
      week: string;
      classes: string[];
    }>;
  }>;
}

export function ModuleTabs({ modules }: ModuleTabsProps) {
  const [activeModule, setActiveModule] = useState(5);
  const activeModuleData = modules.find(m => m.num === activeModule);

  return (
    <>
      {/* Module Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {modules.map((mod) => (
          <button
            key={mod.num}
            onClick={() => setActiveModule(mod.num)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeModule === mod.num
                ? 'bg-[#8B7355] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {mod.label}
          </button>
        ))}
      </div>

      {/* Module Content */}
      <div className="text-left max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#5D5340] mb-2 text-center">
          {activeModuleData?.title}
        </h3>
        {activeModuleData?.special && (
          <p className="text-center text-gray-600 mb-6">
            Seminario especial: <span style={{ color: '#D4AF37' }}>{activeModuleData.special}</span>
          </p>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          {activeModuleData?.weeks.map((weekData) => (
            <div key={weekData.week} className="flex gap-3">
              <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#D4AF37' }} />
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: '#D4AF37' }}>{weekData.week}</p>
                {weekData.classes.map((cls, i) => (
                  <p key={i} className="text-xs text-gray-600">Clase {i + 1}: {cls}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

interface ClientLogoCarouselProps {
  logos: Array<{
    id: string;
    name: string;
    src: string;
  }>;
}

export function ClientLogoCarousel({ logos }: ClientLogoCarouselProps) {
  return (
    <div className="overflow-hidden">
      <div 
        className="flex gap-12"
        style={{
          animation: 'scroll-continuous 25s linear infinite',
          display: 'flex',
          width: '200%'
        }}
      >
        {/* Logos duplicados para loop continuo */}
        {[...logos, ...logos, ...logos].map((client, index) => (
          <div 
            key={`${client.id}-${index}`}
            className="flex-shrink-0 w-40 h-20 flex items-center justify-center relative"
          >
            <Image 
              src={client.src}
              alt={client.name}
              width={160}
              height={80}
              className="max-w-full object-contain"
              style={{ width: 'auto', height: 'auto' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

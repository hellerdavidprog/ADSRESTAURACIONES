'use client';

import React from 'react';

export default function NosotrosSection() {
  return (
    <div className="w-full px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* PRIMERA SECCIÓN - GRID PRINCIPAL */}
      <div 
        className="w-full overflow-hidden rounded-2xl"
        style={{
          backgroundImage: 'url(/images/nosotros-bg-final.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'repeat-y',
          minHeight: '100vh'
        }}
      >
        <div className="py-6 sm:py-8 md:py-12 lg:py-16 w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
            {/* COLUMNA IZQUIERDA */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {/* Logo ADS */}
              <div className="flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-52 lg:h-52">
                <img 
                  src="/images/ads-logo-gold.png" 
                  alt="ADS Restauraciones" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Acerca de nosotros */}
              <div className="flex flex-col gap-1 sm:gap-2 text-center md:text-left">
                <p className="text-[8px] sm:text-[9px] md:text-xs font-bold tracking-widest" style={{ color: '#D4AF37', fontFamily: 'Luxia, serif', fontWeight: 400 }}>Acerca de nosotros</p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ color: '#D4AF37', fontFamily: 'Luxia, serif', fontWeight: 400 }}>ADS Restauraciones</h3>
                <div style={{ color: 'white', fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: 'clamp(10px, 1.8vw, 12px)', lineHeight: '1.5', maxWidth: '280px' }}>
                  En ADS Restauraciones nos dedicamos a la preservación y recuperación de obras de arte con un enfoque profesional, ético y profundamente comprometido con el valor histórico y cultural de cada pieza.
                </div>
              </div>
            </div>

            {/* COLUMNA CENTRO - ESCULTURA */}
            <div className="flex justify-center items-start pt-2 sm:pt-3 md:pt-6 lg:pt-8">
              <img 
                src="/images/david-michelangelo.png" 
                alt="David de Miguel Ángel" 
                style={{ height: 'clamp(250px, 60vw, 975px)' }}
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* COLUMNA DERECHA */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6 pt-2 sm:pt-3 md:pt-6 lg:pt-8 text-center md:text-left">
              <div>
                <p className="text-[8px] sm:text-[9px] md:text-xs font-bold tracking-widest" style={{ color: '#D4AF37', fontFamily: 'Luxia, serif', fontWeight: 400 }}>Nuestro Director</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ color: '#D4AF37', fontFamily: 'Luxia, serif', fontWeight: 400 }}>Douglas Sosa</h2>
              </div>
              
              <div className="space-y-2 sm:space-y-2.5 md:space-y-3" style={{ maxWidth: '380px' }}>
                <p style={{ color: 'white', fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: 'clamp(10px, 1.8vw, 12px)', lineHeight: '1.5' }}>
                  Douglas Sosa es restaurador especialista en obras de arte con más de una década de experiencia en intervenciones sobre piezas de alto valor histórico y simbólico.
                </p>

                <p style={{ color: 'white', fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: 'clamp(10px, 1.8vw, 12px)', lineHeight: '1.5' }}>
                  Es Licenciado en Artes del Instituto de Estudios Superiores de Artes Plásticas Armando Reverón, y ha realizado estudios de maestría en Conservación y Restauración de Monumentos en la Facultad de Arquitectura y Urbanismo de la Universidad Central de Venezuela.
                </p>

                <p style={{ color: 'white', fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: 'clamp(10px, 1.8vw, 12px)', lineHeight: '1.5' }}>
                  Complementó su formación con un Diplomado en Economía Cultural en la Universidad Nacional Experimental de las Artes y Maestría Internacional en Tasación de Obras de Arte y Experticia en Falsificaciones por la Escuela Europea de Versalles (España).
                </p>

                <p style={{ color: 'white', fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: 'clamp(10px, 1.8vw, 12px)', lineHeight: '1.5' }}>
                  Su liderazgo en ADS Restauraciones garantiza la rigurosidad técnica, el respeto patrimonial y la sensibilidad artística que definen cada proyecto que asumimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN SU FUNDACIÓN */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div 
          className="w-full rounded-2xl overflow-hidden"
          style={{
            backgroundImage: 'url(/images/nosotros-bg-final.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'repeat-y',
            minHeight: 'auto'
          }}
        >
          <div className="py-6 sm:py-8 md:py-12 lg:py-16 w-full px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
              {/* IMAGEN IZQUIERDA */}
              <div className="flex justify-center md:justify-start">
                <img 
                  src="/images/su-fundacion.jpg" 
                  alt="Su fundación - restauración" 
                  className="w-full h-auto rounded-xl shadow-2xl object-cover"
                  style={{ maxWidth: '400px', aspectRatio: '1/1' }}
                />
              </div>

              {/* CONTENIDO DERECHA */}
              <div className="flex flex-col gap-4 text-center md:text-left">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ color: '#D4AF37', fontFamily: 'Luxia, serif', fontWeight: 400 }}>Su fundación</h2>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <p style={{ color: 'white', fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: 'clamp(10px, 1.8vw, 12px)', lineHeight: '1.6' }}>
                    Fue registrada legalmente en julio del 2015 pero su fundador ya tenía experiencia en restauración trabajando como asistente del Dr. en BB AA restaurador Fernando de Tovar, con quien participa en diferentes proyectos de restauración de Patrimonio Cultural y colecciones de arte como el Panteón Nacional, Palacio de Miraflores y las Iglesias de San Francisco y Dulce Nombre de Jesús en Petare, proyecto a cargo del Arq. Luis Guillermo Marcano, ganador del V Bienal Nacional de Arquitectura en 2014, mención: Restauración.
                  </p>

                  <p style={{ color: 'white', fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: 'clamp(10px, 1.8vw, 12px)', lineHeight: '1.6' }}>
                    Ya bajo la firma de ADS Restauraciones se comienzan restauraciones de colecciones de arte moderno y contemporáneo en Colombia para galerías como La Cometa en Bogotá, LGM Galería y Jacob Karpio Galería.
                  </p>

                  <p style={{ color: 'white', fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: 'clamp(10px, 1.8vw, 12px)', lineHeight: '1.6' }}>
                    En Venezuela comienza a desarrollar monumentos y restauraciones para diferentes instituciones y consulados, siendo los más significativos la Embajada de Argentina, la Embajada de Polonia, el Consulado del Reino de España y el Consulado del Reino de Tailandia.
                  </p>

                  <p style={{ color: 'white', fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: 'clamp(10px, 1.8vw, 12px)', lineHeight: '1.6' }}>
                    ADS actualmente trabaja en alianza con la Galería Freites, siendo esta la galería más grande e importante de Venezuela.
                  </p>

                  <p style={{ color: 'white', fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: 'clamp(10px, 1.8vw, 12px)', lineHeight: '1.6' }}>
                    En 2025 tiene previsto restaurar colecciones en Italia y Alemania en el Kallman Museum a quienes les restauró una de sus obras principales, una pintura al natural de Armando Reverón realizada por Hans Jürgen Kallman, durante su estadía en Venezuela en 1949.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import NextImage from 'next/image';
import { Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1c190d] text-white pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-12">
        {/* Logo */}
        <div className="flex flex-col items-start col-span-2 sm:col-span-1">
          <NextImage 
            src="/logos/ads-logo-gold.png"
            alt="ADS Restauraciones"
            width={80}
            height={80}
            className="w-14 sm:w-20 h-14 sm:h-20 rounded-full mb-2 sm:mb-4"
          />
        </div>

        {/* Contacto */}
        <div className="col-span-1">
          <h4 className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs sm:text-sm mb-2 sm:mb-4">
            <Phone size={12} className="hidden sm:inline" />
            <span className="hidden sm:inline">Contacto</span>
            <span className="sm:hidden">Info</span>
          </h4>
          <div className="space-y-0.5 sm:space-y-1.5 text-xs sm:text-sm text-gray-400">
            <p className="truncate">+43 650 4290258</p>
            <p className="truncate">@ads.restauraciones</p>
            <p className="truncate text-[9px] sm:text-sm">support@ads...</p>
          </div>
        </div>

        {/* Ubicacion/Info adicional */}
        <div className="col-span-1">
          <h4 className="text-[#D4AF37] font-semibold text-xs sm:text-sm mb-2 sm:mb-4">Ubicación</h4>
          <div className="space-y-0.5 sm:space-y-1.5 text-xs sm:text-sm text-gray-400">
            <p className="truncate">San Antonio de los Altos, Venezuela</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 border-t border-white/10 text-[8px] sm:text-[10px] text-gray-500 tracking-wide">
        ADS Restauraciones 2025 &copy; Todos los derechos reservados.
      </div>
    </footer>
  );
}

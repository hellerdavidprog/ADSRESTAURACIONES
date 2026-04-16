'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/ads/navbar';
import NosotrosSection from '@/components/nosotros-section';
import { Check, Users, Briefcase, BookOpen, FileText } from 'lucide-react';

// ============================================
// PLACEHOLDER COMPONENTS - Reemplazar con assets reales
// ============================================

// Logo placeholder (ROJO en la imagen)
function LogoPlaceholder({ name, className = '' }: { name: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-red-100 border-2 border-dashed border-red-400 rounded-lg ${className}`}>
      <span className="text-red-500 text-xs font-medium text-center px-2">[LOGO: {name}]</span>
    </div>
  );
}

// Image placeholder (AZUL en la imagen)
function ImagePlaceholder({ name, className = '' }: { name: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-blue-100 border-2 border-dashed border-blue-400 rounded-lg ${className}`}>
      <span className="text-blue-500 text-xs font-medium text-center px-2">[IMAGEN: {name}]</span>
    </div>
  );
}

// ============================================

export default function InicioPage() {
  const [activeModule, setActiveModule] = useState(5);

  const modules = [
    {
      num: 1,
      label: 'Módulo 1',
      title: 'Bases teóricas de la restauración',
      weeks: [
        { week: 'Semana 1', classes: ['Introducción a la conservación', 'Registro e investigación del objeto'] },
        { week: 'Semana 2', classes: ['Historia de la restauración y evolución de sus criterios', 'Identificación de patologías / diagnóstico'] },
        { week: 'Semana 3', classes: ['Procesos de la conservación y la restauración', 'Criterios de intervención'] },
        { week: 'Semana 4', classes: ['Criterios aplicados al arte contemporáneo', 'Mantenimiento y tutela'] },
      ]
    },
    {
      num: 2,
      label: 'Módulo 2',
      title: 'Metodología de la conservación y restauración de pinturas',
      special: 'La pintura',
      weeks: [
        { week: 'Semana 6', classes: ['Limpieza', 'Limpieza'] },
        { week: 'Semana 7', classes: ['Consolidación', 'Consolidación'] },
        { week: 'Semana 8', classes: ['Reintegro', 'Reintegro'] },
        { week: 'Semana 9', classes: ['Protección', 'Protección'] },
      ]
    },
    {
      num: 3,
      label: 'Módulo 3',
      title: 'Técnicas de conservación de esculturas',
      special: 'La escultura',
      weeks: [
        { week: 'Semana 10', classes: ['Limpieza', 'Limpieza'] },
        { week: 'Semana 11', classes: ['Consolidación', 'Consolidación'] },
        { week: 'Semana 12', classes: ['Reintegro', 'Reintegro'] },
        { week: 'Semana 13', classes: ['Protección'] },
      ]
    },
    {
      num: 4,
      label: 'Módulo 4',
      title: 'Conservación de obra gráfica sobre papel',
      special: 'El papel',
      weeks: [
        { week: 'Semana 14', classes: ['Investigación'] },
        { week: 'Semana 15', classes: ['Limpieza', 'Consolidación'] },
        { week: 'Semana 16', classes: ['Reintegro', 'Reintegro'] },
        { week: 'Semana 17', classes: ['Protección', 'Reintegro'] },
      ]
    },
    {
      num: 5,
      label: 'Módulo 5',
      title: 'Tasación e identificación de falsificaciones',
      weeks: [
        { week: 'Semana 18', classes: ['Método comparativo en la tasación de obras de arte', 'Método de la oferta y la demanda'] },
        { week: 'Semana 19', classes: ['Aproximación a las falsificaciones', 'Métodos de detección de falsificaciones'] },
        { week: 'Semana 20', classes: ['Taller práctico', 'Taller práctico'] },
        { week: 'Semana 21', classes: ['Taller práctico', 'Taller práctico'] },
      ]
    },
  ];

  const benefits = [
    { icon: Users, title: 'Formacion practica con expertos' },
    { icon: FileText, title: 'Certificacion reconocida' },
    { icon: Briefcase, title: 'Oportunidades laborales post-curso' },
    { icon: BookOpen, title: 'Acceso a materiales exclusivos' },
  ];

  // Logos de clientes (ACTUALIZADOS)
  const clientLogos = [
    { id: 'lacometa', name: 'La Cometa Galería', src: '/logos/la-cometa-galeria.png' },
    { id: 'jacobkarpio', name: 'Jacob Karpio', src: '/logos/jacob-karpio.png' },
    { id: 'galeriafreites', name: 'Galería Freites', src: '/logos/galeria-freites.png' },
    { id: 'baruta', name: 'Baruta', src: '/logos/baruta.png' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeItem="inicio" />

      {/* HERO - Carrusel grande con contenido superpuesto */}
      <section className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Contenedor principal del carrusel con bordes redondeados */}
          <div className="relative rounded-3xl overflow-hidden h-[360px]">
            
            {/* VIDEO DE FONDO */}
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://xixhmmi4m64wc0dd.public.blob.vercel-storage.com/Video-Home%20%281%29.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Contenido alineado a la IZQUIERDA */}
            <div className="relative z-10 flex flex-col items-start justify-center h-[360px] px-12 md:px-16 py-12 text-left">
              
              {/* Logo Programa Restauro */}
              <Image 
                src="/logos/programa-restauro-gold.png"
                alt="Programa Restauro"
                width={320}
                height={100}
                className="mb-6 w-auto h-auto max-w-[280px] md:max-w-[320px]"
              />
              
              <p className="text-white text-sm md:text-base mb-2 max-w-xl">
                Domina las tecnicas de restauracion con nuestra formacion avanzada
              </p>
              <p className="text-[#D4AF37] text-sm font-semibold mb-6">
                 Ultimos cupos disponibles
              </p>
              <button className="bg-[#1c190d]/80 border border-white/30 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1c190d] transition backdrop-blur-sm">
                Inscribirme ahora
              </button>
            </div>
            
            {/* Indicadores del carrusel (4 lineas) */}
            {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              <div className="w-12 h-1 rounded-full bg-[#D4AF37]" /> 
              <div className="w-12 h-1 rounded-full bg-white/40" />
              <div className="w-12 h-1 rounded-full bg-white/40" />
              <div className="w-12 h-1 rounded-full bg-white/40" />
            </div>*/}
          </div>
        </div>
      </section> 

      
      {/* SECCIÓN SERVICIOS - Estructura sin imágenes de fondo */}
      <section  id='inicio' className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#544515' }}>
              Servicios especializados para preservar, valorar y proteger el arte
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
              Ofrecemos un portafolio de servicios profesionales orientados a la restauración, valoración y certificación de obras de arte, combinando conocimiento técnico, enfoque ético y sensibilidad estética.
            </p>
          </div>

          {/* Grid de Servicios - 2x2 */}
          <div className="grid md:grid-cols-1 gap-6" >
            {/* Tasación */}
            <div className="rounded-2xl overflow-hidden h-70 flex items-center justify-center" style={{
              backgroundImage: 'url(/Banners-20260416T151501Z-3-001/Banners/Banner_tasacion_1840x513.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
              }} >
              <div className="text-center bg-black/50 w-full h-full flex items-center justify-center p-4">
                <div>
                  <div className="text-5xl font-bold" style={{ color: '#f7f6f2', fontFamily: 'Lato, sans-serif', fontWeight: '900' }}>Tasación</div>
                  <p className="text-white text-sm mt-2" style={{ color: '#f7f6f2', fontFamily: 'Lato, sans-serif', fontWeight: '600' }}>Valoramos piezas con precisión técnica y criterio profesional, generando informes confiables para coleccionistas, aseguradores y entidades culturales.</p>
                </div>
              </div>
            </div>

            {/* Restauración */}
            <div className="rounded-2xl overflow-hidden h-70 flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400" style={{
              backgroundImage: 'url(/Banners-20260416T151501Z-3-001/Banners/Banner_restauracion_1840x513.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'}}>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: '#f7f6f2', fontFamily: 'Lato, sans-serif', fontWeight: '900' ,}}>Restauración</div>
                <p className="text-white-500 text-sm mt-2" style={{color: '#f7f6f2',  fontFamily: 'Lato, sans-serif', fontWeight: '600' }}>Recuperamos la integridad estética e histórica de cada obra con intervenciones precisas, respetuosas y técnicas especializadas de conservación. </p>
              </div>
            </div>

            {/* Certificación de autenticidad */}
            <div className="rounded-2xl overflow-hidden h-70 flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400" style={{
              backgroundImage: 'url(/Banners-20260416T151501Z-3-001/Banners/Banner_certificacion_1840x513.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'}}>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: '#f7f6f2', fontFamily: 'Lato, sans-serif', fontWeight: '900' }}>Certificación de autenticidad</div>
                <p className="text-white-500 text-sm mt-2" style={{ color: '#f7f6f2', fontFamily: 'Lato, sans-serif', fontWeight: '600' }}>Emitimos dictámenes técnicos especializados que verifican la autenticidad de obras de arte, respaldados por análisis formales, materiales y de procedencia.</p>
              </div>
            </div>

            {/* Compra-Venta */}
            <div className="rounded-2xl overflow-hidden h-70 flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400" style={{
              backgroundImage: 'url(/Banners-20260416T151501Z-3-001/Banners/Banner_compra_venta_1840x513.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'}}>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: '#f7f6f2', fontFamily: 'Lato, sans-serif', fontWeight: '900' }}>Compra-Venta</div>
                <p className="text-white-500 text-sm mt-2" style={{color: '#f7f6f2',  fontFamily: 'Lato, sans-serif', fontWeight: '600' }}>Asesoramos en la adquisición y comercialización de piezas artísticas, garantizando transacciones seguras, justas y alineadas con el valor real del mercado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN FORMACIÓN - Aprende a recuperar */}
      <section id='programa restauro' className="py-8 px-6" style={{ backgroundColor: '#F5F3EF', borderBottom: '3px solid #D4AF37' }}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm py-10 px-8 text-center">
            <h2 className="text-[#5D5340] text-xl md:text-2xl font-bold leading-tight mb-3">
              Aprende a recuperar la inversion monetaria de decenas de galerias y colecciones en Latinoamerica
            </h2>
            <p className="text-gray-500 text-xs mb-8">
              Te presentamos un METODO PROBADO para que aproveches la oportunidad de ser una pieza fundamental del arte
            </p>
            
            <div className="flex justify-center gap-3">
              {/* Tarjeta 1 - Pluma/Lapiz */}
              <div 
                className="flex items-center gap-3 px-5 py-4 rounded-lg text-sm font-medium text-white flex-1 max-w-[220px]"
                style={{ backgroundColor: '#B99A32' }}
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                Tecnicas tradicionales y modernas
              </div>
              
              {/* Tarjeta 2 - Escultura/Busto */}
              <div 
                className="flex items-center gap-3 px-5 py-4 rounded-lg text-sm font-medium text-white flex-1 max-w-[220px]"
                style={{ backgroundColor: '#B99A32' }}
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C9.243 2 7 4.243 7 7c0 2.063 1.252 3.831 3.035 4.6-.01.132-.035.26-.035.4v2h4v-2c0-.14-.025-.268-.035-.4C15.748 10.831 17 9.063 17 7c0-2.757-2.243-5-5-5zm-2 18v2h4v-2h-4zm0-2h4v-2h-4v2z"/>
                  </svg>
                </div>
                Practicas con piezas reales
              </div>
              
              {/* Tarjeta 3 - Corona de Laurel */}
              <div 
                className="flex items-center gap-3 px-5 py-4 rounded-lg text-sm font-medium text-white flex-1 max-w-[220px]"
                style={{ backgroundColor: '#B99A32' }}
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
                  </svg>
                </div>
                Certificacion al finalizar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descubre la mezcla perfecta - CON PLACEHOLDER AZUL */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-0 h-[286px] rounded-2xl overflow-hidden">
            {/* Left - 2 columns (40%) */}
            <div 
              className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center"
              style={{ 
                background: 'linear-gradient(to bottom, #544515 0%, #352C0D 50%, #110E04 100%)' 
              }}
            >
              <div className="flex items-start gap-2">
                {/* Barra amarilla vertical - más pequena */}
                <div className="w-1 h-12 rounded-full flex-shrink-0" style={{ backgroundColor: '#D4AF37' }} />
                <div>
                  <h3 className="text-[#D4AF37] text-lg md:text-xl font-extrabold leading-tight" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Descubre la mezcla<br />
                    perfecta entre el<br />
                    arte y la ciencia
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed mt-3 font-light" style={{ fontFamily: 'Lato, sans-serif' }}>
                El taller ha sido disenado por Douglas Sosa, especialista en conservacion de colecciones de arte moderno y restaurador de obras a nivel internacional.
              </p>
            </div>
            
            {/* Right - 3 columns (60%) - IMAGEN DEL RESTAURADOR */}
            <Image 
              src="/images/descubre-restaurador.jpg"
              alt="Restaurador trabajando"
              width={600}
              height={286}
              className="md:col-span-3 h-[286px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 px-6" style={{ backgroundColor: '#F5F3EF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-2xl italic leading-relaxed mb-4 font-bold" style={{ color: '#827015', fontFamily: 'Lato, sans-serif' }}>
            &quot;Te ensenare los pasos exactos y las estrategias, como tambien las herramientas y tacticas que he aprendido en el ejercicio de mi carrera por mas de 10 años y que sustentan mi reputacion internacionalmente&quot;.
          </p>
          <p className="text-sm md:text-base font-semibold" style={{ color: '#675D39', fontFamily: 'Lato, sans-serif' }}>
            Douglas Sosa.
          </p>
        </div>
      </section>

      {/* Beneficios del programa */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-2xl md:text-3xl font-extrabold mb-12" style={{ color: '#675D39', fontFamily: 'Lato, sans-serif' }}>
            Beneficios del programa
          </h3>
          <div className="flex justify-between items-start gap-6">
            {/* Beneficio 1 - Formacion practica con expertos */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#675D39' }}>
                  <path d="M12 2C9.243 2 7 4.243 7 7c0 2.063 1.252 3.831 3.035 4.6-.01.132-.035.26-.035.4v2h4v-2c0-.14-.025-.268-.035-.4C15.748 10.831 17 9.063 17 7c0-2.757-2.243-5-5-5zm-2 18v2h4v-2h-4zm0-2h4v-2h-4v2z"/>
                </svg>
              </div>
              <p className="text-xs md:text-sm font-medium leading-tight" style={{ color: '#675D39' }}>Formacion practica con expertos</p>
            </div>
            
            {/* Beneficio 2 - Certificacion reconocida */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#675D39' }}>
                  <path d="M12 2L15.09 8.26H22L17.55 12.91L18.91 19.16L12 15.01L5.09 19.16L6.45 12.91L2 8.26H8.91L12 2Z"/>
                </svg>
              </div>
              <p className="text-xs md:text-sm font-medium leading-tight" style={{ color: '#675D39' }}>Certificacion reconocida</p>
            </div>
            
            {/* Beneficio 3 - Oportunidades laborales */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#675D39' }}>
                  <path d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6ZM13 9H18V20H6V4H13V9Z"/>
                </svg>
              </div>
              <p className="text-xs md:text-sm font-medium leading-tight" style={{ color: '#675D39' }}>Oportunidades laborales post-curso</p>
            </div>
            
            {/* Beneficio 4 - Acceso a materiales */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#675D39' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.88 12L14.88 10L13.47 11.41L12 9.94L7.12 14.82L8.53 16.23L12 12.76L14.88 15.64L16.29 14.23L19 17L13.47 22.53L8.53 17.59L7.12 19L13.47 25.35L19 19.88L16.88 12Z"/>
                </svg>
              </div>
              <p className="text-xs md:text-sm font-medium leading-tight" style={{ color: '#675D39' }}>Acceso a materiales exclusivos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programa Restauro - Countdown - CON PLACEHOLDER AZUL */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - IMAGEN PROGRAMA RESTAURO PROMO */}
            <Image 
              src="/images/programa-restauro-promo.png"
              alt="Programa Restauro Promo"
              width={400}
              height={300}
              className="h-[300px] w-full object-cover rounded-2xl"
            />

            {/* Right - Info */}
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Proximas fechas</p>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Cupos limitados</h3>
              <p className="text-gray-600 text-sm mb-4"></p>
              <p className="text-gray-500 text-sm mb-2"><span className="text-[#D4AF37] font-bold text-lg"></span></p>
              <p className="text-gray-400 text-xs mb-6"></p>
              
            </div>
          </div>
        </div>
      </section>

      {/* 3 Info Columns - CON PLACEHOLDER AZUL para toda la seccion */}
      <section className="py-0 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Este grid puede tener imagen de fondo */}
          <div className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden">
            <div className="p-8 text-white" style={{ backgroundColor: '#D4AF37' }}>
              <h4 className="font-bold text-lg mb-4">La duracion del programa de estudios</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Es de cinco (5) modulos, cada uno de cuatro (4) semanas. Las clases seran impartidas en dos dias por semana, equivalentes a cuatro (4) horas semanales.
              </p>
            </div>
            <div className="bg-white p-8">
              <h4 className="font-bold text-lg mb-4 text-gray-800">A QUIENES VA DIRIGIDO</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                Responde a la necesidad de capacitar al personal del ambito de las artes plasticas y areas afines, como el diseno y la arquitectura, que deseen adquirir conocimientos teoricos y practicos para la conservacion de colecciones de arte.
              </p>
            </div>
            <div className="p-8 text-white" style={{ backgroundColor: '#8B7355' }}>
              <h4 className="font-bold text-lg mb-4">Las clases</h4>
              <p className="text-sm leading-relaxed opacity-90">
                A partir del segundo modulo se ejecutan como taller practico, cada uno con una duracion de cinco (5) semanas y se extienden a cinco (5) horas semanales. Para un total de 116 horas academicas y 8 horas de seminarios especializados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programa Restauro - Modules */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo PROGRAMA RESTAURO */}
          <Image 
            src="/logos/programa-restauro-gold.png"
            alt="Programa Restauro"
            width={300}
            height={90}
            className="mx-auto mb-8 w-auto h-auto max-w-[300px]"
          />
          
          <h4 className="text-xl font-bold text-gray-800 mb-2">TODO PUEDE SER RESTAURADO</h4>
          <p className="text-gray-500 text-sm mb-8">Asi es como lo hacemos. Te mostramos el PROGRAMA RESTAURO paso a paso</p>

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
            {(() => {
              const activeModuleData = modules.find(m => m.num === activeModule);
              return (
                <>
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
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Clients - CARRUSEL AUTOMATICO TIPO CINTA TRANSPORTADORA */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-gray-800 mb-12">Nuestros clientes</h3>
          
          {/* Carrusel automático infinito */}
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
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                <div 
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
                >
                  <Image 
                    src={client.src}
                    alt={client.name}
                    width={160}
                    height={80}
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN ABOUT - NOSOTROS */}
      <section id="nosotros">
        <NosotrosSection />
      </section>

    </div>
  );
}

'use client';

import { useState } from 'react';

export function UIExamples() {
  return (
    <div className="min-h-screen bg-background py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Sección de Botones */}
        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-8">Botones</h2>

          <div className="space-y-6">
            {/* Botones Primarios */}
            <div>
              <p className="text-sm text-text-secondary mb-4">Primarios</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-accent text-background rounded-full font-medium hover:bg-accent-light transition-all hover:scale-105">
                  Primary Button
                </button>
                <button className="px-8 py-4 bg-accent text-background rounded-lg font-medium hover:bg-accent-light transition-colors">
                  Primary Rounded
                </button>
                <button className="px-6 py-3 bg-accent text-background rounded-full text-sm font-medium hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/20">
                  Small Primary
                </button>
              </div>
            </div>

            {/* Botones Secundarios */}
            <div>
              <p className="text-sm text-text-secondary mb-4">Secundarios</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 border-2 border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-background transition-all">
                  Outlined Button
                </button>
                <button className="px-8 py-4 border border-border text-text-primary rounded-full font-medium hover:border-accent hover:text-accent transition-colors">
                  Ghost Button
                </button>
                <button className="px-8 py-4 bg-surface border border-border text-text-primary rounded-lg font-medium hover:border-accent transition-all hover:shadow-lg">
                  Surface Button
                </button>
              </div>
            </div>

            {/* Botones con Iconos */}
            <div>
              <p className="text-sm text-text-secondary mb-4">Con Iconos</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-accent text-background rounded-full font-medium hover:bg-accent-light transition-all flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  Ver Proyectos
                </button>
                <button className="px-8 py-4 border border-border text-text-primary rounded-full font-medium hover:border-accent hover:text-accent transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contacto
                </button>
              </div>
            </div>

            {/* Botones Especiales */}
            <div>
              <p className="text-sm text-text-secondary mb-4">Especiales</p>
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-4 overflow-hidden rounded-full font-medium text-background">
                  <span className="absolute inset-0 bg-linear-to-r from-accent via-accent-light to-accent bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></span>
                  <span className="relative">Gradiente Animado</span>
                </button>
                <button className="px-8 py-4 bg-surface border border-accent/20 text-text-primary rounded-full font-medium hover:bg-accent/10 transition-all backdrop-blur-sm">
                  Glass Effect
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Cards */}
        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-8">Cards de Proyectos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Estilo 1 - Minimalista */}
            <div className="group bg-surface border border-border rounded-2xl p-6 hover:border-accent transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-background/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-accent/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Proyecto Mobile</h3>
              <p className="text-text-secondary text-sm mb-4">App nativa iOS/Android con React Native</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">React Native</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">TypeScript</span>
              </div>
            </div>

            {/* Card Estilo 2 - Con Hover Effect */}
            <div className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-linear-to-br from-accent/30 via-surface to-background relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">Web Application</h3>
                <p className="text-text-secondary text-sm mb-4">Dashboard moderno con Next.js y Tailwind</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="w-2 h-2 bg-accent-light rounded-full"></span>
                    <span className="w-2 h-2 bg-accent-dark rounded-full"></span>
                  </div>
                  <svg className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card Estilo 3 - Glass Effect */}
            <div className="group relative bg-surface/50 backdrop-blur-md border border-border rounded-2xl p-6 hover:bg-surface/80 hover:border-accent transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">API Development</h3>
              <p className="text-text-secondary text-sm mb-4">Backend escalable con Node.js y PostgreSQL</p>
              <div className="flex items-center gap-2 text-accent text-sm font-medium">
                Ver detalles
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Imágenes/Contenedores */}
        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-8">Contenedores de Imagen</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Carrusel Estilo 1 - Borde Gradiente */}
            <ImageCarousel variant="gradient" />

            {/* Carrusel Estilo 2 - Overlay al Hover */}
            <ImageCarousel variant="overlay" />

            {/* Carrusel Estilo 3 - Marco Elegante */}
            <ImageCarousel variant="elegant" />

            {/* Carrusel Estilo 4 - Múltiples Capas */}
            <ImageCarousel variant="layered" />
          </div>
        </section>

        {/* Sección de Badges/Tags */}
        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-8">Badges y Tags</h2>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-text-secondary mb-4">Skills / Tecnologías</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent text-background rounded-full text-sm font-medium">React</span>
                <span className="px-4 py-2 bg-surface border border-accent text-accent rounded-full text-sm font-medium">Next.js</span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium">TypeScript</span>
                <span className="px-4 py-2 bg-surface text-text-primary rounded-full text-sm">Node.js</span>
                <span className="px-4 py-2 border border-border text-text-secondary rounded-full text-sm hover:border-accent hover:text-accent transition-colors">PostgreSQL</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-text-secondary mb-4">Status / Estados</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Disponible
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">En progreso</span>
                <span className="px-3 py-1 bg-surface border border-border text-text-secondary rounded-full text-xs">Completado</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Inputs */}
        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-8">Inputs de Contacto</h2>

          <div className="max-w-2xl space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-6 py-4 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-6 py-4 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Mensaje</label>
              <textarea
                rows={4}
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full px-6 py-4 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

// Componente de Carrusel de Imágenes
function ImageCarousel({ variant }: { variant: 'gradient' | 'overlay' | 'elegant' | 'layered' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mockups = [0, 1, 2]; // 3 mockups por carrusel

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockups.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockups.length) % mockups.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (variant === 'gradient') {
    return (
      <div className="relative group">
        {/* Contenedor del carrusel */}
        <div className="relative overflow-hidden">
          <div className="absolute -inset-0.5 bg-linear-to-r from-accent via-accent-light to-accent rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-300"></div>
          <div className="relative aspect-video bg-surface rounded-2xl overflow-hidden">
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {mockups.map((_, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <div className="absolute inset-0 bg-linear-to-br from-accent/20 via-transparent to-accent-dark/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                    Screenshot del proyecto {index + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-4">
          {mockups.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-accent/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'overlay') {
    return (
      <div className="relative group">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {mockups.map((_, index) => (
              <div key={index} className="min-w-full relative">
                <div className="aspect-video bg-linear-to-br from-surface to-background"></div>
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <button className="px-6 py-3 bg-accent text-background rounded-full font-medium mb-2">
                      Ver más
                    </button>
                    <p className="text-text-secondary text-sm">Mockup {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-4">
          {mockups.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-accent/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'elegant') {
    return (
      <div className="relative">
        <div className="relative">
          <div className="aspect-video bg-surface border-2 border-border rounded-2xl p-4 overflow-hidden">
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {mockups.map((_, index) => (
                <div key={index} className="min-w-full h-full">
                  <div className="w-full h-full bg-linear-to-br from-accent/10 to-transparent rounded-lg flex items-center justify-center text-text-secondary">
                    Mockup de aplicación {index + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 hover:bg-background rounded-full flex items-center justify-center text-text-primary transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 hover:bg-background rounded-full flex items-center justify-center text-text-primary transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-accent rounded-full blur-2xl opacity-30"></div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-4">
          {mockups.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-accent/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'layered') {
    return (
      <div className="relative">
        <div className="absolute top-4 left-4 right-4 h-full bg-surface/30 rounded-2xl"></div>
        <div className="absolute top-2 left-2 right-2 h-full bg-surface/50 rounded-2xl"></div>
        <div className="relative aspect-video bg-surface border border-border rounded-2xl overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {mockups.map((_, index) => (
              <div key={index} className="min-w-full h-full">
                <div className="w-full h-full bg-linear-to-br from-background to-surface flex items-center justify-center text-text-secondary">
                  Portfolio screenshot {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Controles de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center text-text-primary transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center text-text-primary transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-4 relative z-10">
          {mockups.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-accent/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
}

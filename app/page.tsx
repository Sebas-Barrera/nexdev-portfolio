'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  // Estado para menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Intersection Observer para animaciones al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationType = entry.target.getAttribute('data-animation') || 'fade-in-slide';
            entry.target.classList.remove('animate-on-scroll');
            entry.target.classList.add(`animate-${animationType}`);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Fondo con animaciones orgánicas */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-surface/50"></div>

        {/* Luces serpenteantes - Snake effect */}
        <div
          className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
          style={{
            animation: 'snake-light 25s ease-in-out infinite',
            top: '-10%',
            left: '-10%',
          }}
        ></div>

        <div
          className="absolute w-[600px] h-[600px] bg-surface/40 rounded-full blur-[120px]"
          style={{
            animation: 'snake-light-2 30s ease-in-out infinite',
            animationDelay: '-10s',
          }}
        ></div>

        {/* Luces flotantes adicionales */}
        <div
          className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-accent/15 rounded-full blur-[80px]"
          style={{ animation: 'float-slow 20s ease-in-out infinite' }}
        ></div>

        <div
          className="absolute bottom-[30%] left-[15%] w-[400px] h-[400px] bg-accent-light/10 rounded-full blur-[90px]"
          style={{ animation: 'float-slower 25s ease-in-out infinite', animationDelay: '-5s' }}
        ></div>

        {/* Puntos de luz pulsantes */}
        <div
          className="absolute top-[40%] left-[5%] w-[200px] h-[200px] bg-accent/25 rounded-full"
          style={{ animation: 'pulse-glow 8s ease-in-out infinite' }}
        ></div>

        <div
          className="absolute bottom-[15%] right-[20%] w-[250px] h-[250px] bg-accent-dark/20 rounded-full"
          style={{ animation: 'pulse-glow 12s ease-in-out infinite', animationDelay: '-4s' }}
        ></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/logos/logoND.png"
                  alt="NexDev Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold tracking-tight text-accent">Nex</span>
                <span className="text-xl font-bold tracking-tight text-text-primary">Dev</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm text-text-secondary hover:text-accent transition-colors">Inicio</a>
              <a href="#services" className="text-sm text-text-secondary hover:text-accent transition-colors">Servicios</a>
              <a href="#projects" className="text-sm text-text-secondary hover:text-accent transition-colors">Proyectos</a>
              <a href="#about" className="text-sm text-text-secondary hover:text-accent transition-colors">Nosotros</a>
              <a href="#ideas" className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-1">
                <span>Colaboración</span>
              </a>
              <a href="#contact" className="text-sm text-text-secondary hover:text-accent transition-colors">Contacto</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 border-b border-border' : 'max-h-0'}`}>
          <div className="px-6 py-4 space-y-3 bg-background/95 backdrop-blur-md">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-text-secondary hover:text-accent transition-colors"
            >
              Inicio
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-text-secondary hover:text-accent transition-colors"
            >
              Servicios
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-text-secondary hover:text-accent transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-text-secondary hover:text-accent transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#ideas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-text-secondary hover:text-accent transition-colors"
            >
              Colaboración
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-text-secondary hover:text-accent transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Container con altura para sticky */}
      <div id="hero-container" className="relative" style={{ height: '100vh' }}>
        <section
          className="fixed top-0 left-0 right-0 h-screen flex items-center px-6 lg:px-8 z-0"
          style={{
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            perspective: 1000
          }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-4xl">
              <p className="text-accent mb-4 text-sm font-medium tracking-wider uppercase opacity-0 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]">
                Desarrollo de Software Profesional
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                Transformamos tus ideas en <span className="text-accent">soluciones digitales</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
                Ingeniería Full Stack especializada en desarrollo web, móvil y backend.
                Creamos aplicaciones escalables y de alto rendimiento.
              </p>
              <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
                <a href="#contact" className="px-8 py-4 bg-accent text-background rounded-full font-medium hover:bg-accent-light transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30">
                  Iniciar Proyecto
                </a>
                <a href="#projects" className="px-8 py-4 border border-border text-text-primary rounded-full font-medium hover:border-accent hover:text-accent transition-all duration-500 hover:scale-105">
                  Ver Trabajos
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Servicios Section */}
      <section id="services" className="relative z-10 py-20 px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-12 text-center animate-fade-in-slide">
            Nuestros Servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Desarrollo Web */}
            <div className="group bg-surface border border-border rounded-2xl p-8 hover:border-accent organic-hover cursor-pointer animate-on-scroll animate-fade-in-slide animation-delay-100">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-500">
                <svg className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                Desarrollo Web
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Aplicaciones web modernas y responsivas con las últimas tecnologías
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-accent">Next.js</span>
                <span className="text-xs text-text-secondary">•</span>
                <span className="text-xs text-accent">Vue.js</span>
                <span className="text-xs text-text-secondary">•</span>
                <span className="text-xs text-accent">Angular</span>
              </div>
            </div>

            {/* Desarrollo Móvil */}
            <div className="group bg-surface border border-border rounded-2xl p-8 hover:border-accent organic-hover cursor-pointer animate-on-scroll animate-fade-in-slide animation-delay-300">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-500">
                <svg className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                Apps Móviles
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Aplicaciones nativas y multiplataforma para iOS y Android
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-accent">Flutter</span>
                <span className="text-xs text-text-secondary">•</span>
                <span className="text-xs text-accent">Swift</span>
                <span className="text-xs text-text-secondary">•</span>
                <span className="text-xs text-accent">Ionic</span>
              </div>
            </div>

            {/* Backend & APIs */}
            <div className="group bg-surface border border-border rounded-2xl p-8 hover:border-accent organic-hover cursor-pointer animate-on-scroll animate-fade-in-slide animation-delay-500">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-500">
                <svg className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                Backend & APIs
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Arquitecturas robustas y escalables con bases de datos optimizadas
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-accent">Node.js</span>
                <span className="text-xs text-text-secondary">•</span>
                <span className="text-xs text-accent">Laravel</span>
                <span className="text-xs text-text-secondary">•</span>
                <span className="text-xs text-accent">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="projects" className="relative z-10 py-20 px-6 lg:px-8 border-t border-border overflow-hidden">
        {/* Fondo sólido primero */}
        <div className="absolute inset-0 bg-background"></div>

        {/* Gradiente base encima del fondo sólido */}
        <div className="absolute inset-0 bg-linear-to-b from-surface/30 via-transparent to-surface/20"></div>

        {/* Efectos de luz animados - distribuidos por toda la sección */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Luces serpenteantes - Snake effect */}
          <div
            className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
            style={{
              animation: 'snake-light 25s ease-in-out infinite',
              top: '-10%',
              left: '-10%',
            }}
          ></div>

          <div
            className="absolute w-[600px] h-[600px] bg-surface/40 rounded-full blur-[120px]"
            style={{
              animation: 'snake-light-2 30s ease-in-out infinite',
              animationDelay: '-10s',
            }}
          ></div>

          {/* Luces flotantes - parte superior */}
          <div
            className="absolute top-[5%] right-[10%] w-[300px] h-[300px] bg-accent/15 rounded-full blur-[80px]"
            style={{ animation: 'float-slow 20s ease-in-out infinite' }}
          ></div>

          <div
            className="absolute top-[15%] left-[15%] w-[400px] h-[400px] bg-accent-light/10 rounded-full blur-[90px]"
            style={{ animation: 'float-slower 25s ease-in-out infinite', animationDelay: '-5s' }}
          ></div>

          {/* Luces flotantes - parte media */}
          <div
            className="absolute top-[40%] right-[5%] w-[350px] h-[350px] bg-accent/12 rounded-full blur-[85px]"
            style={{ animation: 'float-slow 22s ease-in-out infinite', animationDelay: '-7s' }}
          ></div>

          <div
            className="absolute top-[50%] left-[8%] w-[380px] h-[380px] bg-accent-dark/10 rounded-full blur-[95px]"
            style={{ animation: 'float-slower 24s ease-in-out infinite', animationDelay: '-12s' }}
          ></div>

          {/* Luces flotantes - parte inferior */}
          <div
            className="absolute bottom-[15%] right-[15%] w-[420px] h-[420px] bg-accent-light/12 rounded-full blur-[100px]"
            style={{ animation: 'float-slow 26s ease-in-out infinite', animationDelay: '-3s' }}
          ></div>

          <div
            className="absolute bottom-[25%] left-[12%] w-[360px] h-[360px] bg-accent/11 rounded-full blur-[88px]"
            style={{ animation: 'float-slower 23s ease-in-out infinite', animationDelay: '-15s' }}
          ></div>

          {/* Puntos de luz pulsantes - superior */}
          <div
            className="absolute top-[20%] left-[5%] w-[200px] h-[200px] bg-accent/25 rounded-full"
            style={{ animation: 'pulse-glow 8s ease-in-out infinite' }}
          ></div>

          <div
            className="absolute top-[30%] right-[20%] w-[250px] h-[250px] bg-accent-dark/20 rounded-full"
            style={{ animation: 'pulse-glow 12s ease-in-out infinite', animationDelay: '-4s' }}
          ></div>

          {/* Puntos de luz pulsantes - medio */}
          <div
            className="absolute top-[55%] left-[25%] w-[220px] h-[220px] bg-accent-light/22 rounded-full"
            style={{ animation: 'pulse-glow 10s ease-in-out infinite', animationDelay: '-2s' }}
          ></div>

          {/* Puntos de luz pulsantes - inferior */}
          <div
            className="absolute bottom-[10%] right-[18%] w-[240px] h-[240px] bg-accent/23 rounded-full"
            style={{ animation: 'pulse-glow 11s ease-in-out infinite', animationDelay: '-6s' }}
          ></div>

          <div
            className="absolute bottom-[20%] left-[22%] w-[210px] h-[210px] bg-accent-dark/21 rounded-full"
            style={{ animation: 'pulse-glow 9s ease-in-out infinite', animationDelay: '-8s' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-primary mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Soluciones reales que han transformado negocios. Aquí algunos de nuestros trabajos más relevantes.
            </p>
          </div>

          <div className="space-y-20">
            {/* Proyecto 1 - ChallengeMe App */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 animate-on-scroll" data-animation="fade-in-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                    App Móvil
                  </div>
                  <div className="inline-flex px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    En Desarrollo
                  </div>
                </div>
                <h3 className="text-3xl font-semibold text-text-primary mb-4">
                  ChallengeMe
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Aplicación móvil innovadora que ofrece retos con diferentes temáticas para cualquier tipo de reunión,
                  desde pláticas profundas hasta diversión garantizada en fiestas. Desarrollada en colaboración con
                  <span className="text-accent font-medium"> Techvision</span> como socios, esta app promete transformar
                  la forma en que las personas interactúan y se divierten en grupos.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">Expo</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">Supabase</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">TypeScript</span>
                </div>
                <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                  <p className="text-sm text-text-secondary">
                    <span className="text-accent font-medium">Disponibilidad:</span> App Store y Play Store (próximamente)
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    <span className="text-accent font-medium">Rol NexDev:</span> Frontend Development
                  </p>
                </div>
              </div>

              {/* Mockup Container - Carrusel de Móvil */}
              <div className="order-2 lg:order-2 animate-on-scroll" data-animation="fade-in-right">
                <MobileCarousel
                  images={[
                    '/muckUpMovile/CM/1.png',
                    '/muckUpMovile/CM/2.png',
                    '/muckUpMovile/CM/3.png',
                    '/muckUpMovile/CM/4.png',
                    '/muckUpMovile/CM/5.png',
                  ]}
                />
              </div>
            </div>

            {/* Separador sutil entre proyectos */}
            <div className="flex items-center gap-4 my-16">
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-accent/50"></div>
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
            </div>

            {/* Proyecto 2 - Gestor Visión Allende (Layout Izquierda) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mockup Container - Web Carousel */}
              <div className="order-2 lg:order-1 animate-on-scroll" data-animation="fade-in-left">
              <WebCarousel
                images={[
                  '/muckUpWeb/VA/1.png',
                  '/muckUpWeb/VA/2.png',
                  '/muckUpWeb/VA/3.png',
                  '/muckUpWeb/VA/4.png',
                  '/muckUpWeb/VA/5.png',
                  '/muckUpWeb/VA/6.png',
                ]}
              />
              </div>

              <div className="order-1 lg:order-2 animate-on-scroll" data-animation="fade-in-right">
                <div className="flex items-center gap-2 mb-4">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                    Aplicación Web
                  </div>
                  <div className="inline-flex px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Completado
                  </div>
                </div>
                <h3 className="text-3xl font-semibold text-text-primary mb-4">
                  Gestor Visión Allende
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Sistema de gestión integral para ópticas que optimiza el control de clientes, ventas y graduaciones.
                  Incluye registro completo de usuarios con datos personales y graduación oftalmológica, gestión de ventas
                  y sistema de abonos, historial detallado de cada cliente, y generación automática de reportes mensuales de ventas.
                  Una solución completa que digitaliza y moderniza la administración de negocios ópticos.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">NeonDB</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">PostgreSQL</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">Tailwind</span>
                </div>
                <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                  <p className="text-sm text-text-secondary">
                    <span className="text-accent font-medium">Características:</span> Gestión de clientes, ventas, abonos y reportes mensuales
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    <span className="text-accent font-medium">Stack:</span> Full-stack Next.js con backend integrado
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    <span className="text-accent font-medium">Rol NexDev:</span> Full-stack Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Separador sutil entre proyectos */}
            <div className="flex items-center gap-4 my-16">
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-accent/50"></div>
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
            </div>

            {/* Proyecto 3 - Arcana */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 animate-on-scroll" data-animation="fade-in-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                    App Móvil
                  </div>
                  <div className="inline-flex px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    En Desarrollo
                  </div>
                </div>
                <h3 className="text-3xl font-semibold text-text-primary mb-4">
                  Arcana
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Plataforma móvil premium dedicada al mundo esotérico y holístico. Ofrece contenido especializado sobre
                  fases lunares y su significado, simbolismo de velas, guías para rituales espirituales, y un juego de
                  Tarot Sí/No para consultas personales. Incluye un feed social donde expertos comparten publicaciones
                  y conocimientos. Desarrollada en colaboración con <span className="text-accent font-medium">Techvision</span> como
                  socios. Acceso mediante suscripción mensual o anual con pasarela de pagos integrada.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">Expo</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">Supabase</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">Stripe</span>
                </div>
                <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                  <p className="text-sm text-text-secondary">
                    <span className="text-accent font-medium">Disponibilidad:</span> App Store y Play Store (próximamente)
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    <span className="text-accent font-medium">Modelo:</span> Suscripción mensual/anual con pasarela de pagos
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    <span className="text-accent font-medium">Contenido:</span> Tarot, fases lunares, velas, rituales y comunidad
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    <span className="text-accent font-medium">Rol NexDev:</span> Frontend Developer 
                  </p>
                </div>
              </div>

              <div className="order-2 lg:order-2 animate-on-scroll" data-animation="fade-in-right">
                <MobileCarousel
                  images={[
                    '/muckUpMovile/AC/6.png',
                    '/muckUpMovile/AC/7.png',
                    '/muckUpMovile/AC/8.png',
                    '/muckUpMovile/AC/9.png',
                    '/muckUpMovile/AC/10.png',
                    '/muckUpMovile/AC/11.png',
                  ]}
                />
              </div>
            </div>

            {/* Separador sutil entre proyectos */}
            <div className="flex items-center gap-4 my-16">
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-accent/50"></div>
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
            </div>

            {/* Proyecto 4 - Tipsterzone */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mockup Container - Web Carousel */}
              <div className="order-2 lg:order-1 animate-on-scroll" data-animation="fade-in-right">
              <WebCarousel
                images={[
                  '/muckUpWeb/TP/1.png',
                  '/muckUpWeb/TP/2.png',
                  '/muckUpWeb/TP/3.png',
                  '/muckUpWeb/TP/4.png',
                  '/muckUpWeb/TP/5.png',
                  '/muckUpWeb/TP/6.png',
                ]}
              />
              </div>

              <div className="order-1 lg:order-2 animate-on-scroll" data-animation="fade-in-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                    Aplicación Web
                  </div>
                  <div className="inline-flex px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Completado
                  </div>
                </div>
                <h3 className="text-3xl font-semibold text-text-primary mb-4">
                  Tipsterzone
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Plataforma web especializada en pronósticos deportivos y parlays de múltiples deportes.
                  Sistema de membresías que permite acceso a contenido gratuito y premium. Integración con
                  autenticación de Google para facilitar el registro. Los usuarios pueden consultar tips y
                  parlays de expertos en diferentes disciplinas deportivas. Desarrollada en colaboración con
                  <span className="text-accent font-medium"> Techvision</span> como socios. La plataforma funciona como un
                  centro de información, sin realizar apuestas directamente.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">Angular</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">NeonDB</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">Google Auth</span>
                  <span className="px-3 py-1 bg-surface border border-border text-text-primary text-xs rounded-full">TypeScript</span>
                </div>
                <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                  <p className="text-sm text-text-secondary">
                    <span className="text-accent font-medium">Características:</span> Tips gratuitos y premium, múltiples deportes
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    <span className="text-accent font-medium">Autenticación:</span> Google OAuth para acceso rápido
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    <span className="text-accent font-medium">Modelo:</span> Freemium con membresías premium
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    <span className="text-accent font-medium">Rol NexDev:</span> Full-stack Developer (principalmente Frontend)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre NexDev Section */}
      <section id="about" className="relative z-10 py-20 px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll" data-animation="fade-in-left">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-primary mb-6">
                Sobre NexDev
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Somos un equipo de desarrollo de software especializado en crear soluciones digitales completas.
                  Ofrecemos servicios de desarrollo web, móvil y backend con las tecnologías más modernas y
                  demandadas del mercado.
                </p>
                <p>
                  Nuestro enfoque está en entregar código limpio, arquitecturas escalables y productos que realmente
                  resuelvan problemas de negocio. Cada proyecto es una oportunidad para aplicar las mejores
                  prácticas de la industria.
                </p>
                <p className="text-text-primary font-medium">
                  ¿Por qué NexDev? Experiencia técnica completa + compromiso con la calidad.
                </p>
              </div>
            </div>

            {/* Logo o imagen */}
            <div className="relative flex items-center justify-center animate-on-scroll" data-animation="fade-in-right">
              {/* Efecto glow detrás */}
              <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-accent/20 rounded-full blur-3xl"></div>

              {/* Logo principal - perfectamente redondo */}
              <div className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl hover:border-accent/60 hover:scale-105 transition-all duration-500">
                <Image
                  src="/logos/logoND.png"
                  alt="NexDev Logo"
                  fill
                  className="object-cover"
                  sizes="384px"
                />
              </div>
            </div>
          </div>

          {/* Stack Tecnológico Completo */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
              Stack Tecnológico
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Frontend
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">Next.js / React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">Vue.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">Angular</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">Vite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  Backend
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">Node.js / Express</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">PHP / Laravel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">Python</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">C# / .NET</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">REST APIs / GraphQL</span>
                  </div>
                </div>
              </div>

              {/* Mobile & Databases */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Móvil & Datos
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">Flutter / Dart</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">Swift (iOS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">Ionic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">PostgreSQL / MySQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-text-secondary">MongoDB / Firebase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideas Section - Nuevo */}
      <section id="ideas" className="relative z-10 py-20 px-6 lg:px-8 border-t border-border bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm rounded-full mb-4 font-medium">
              💡 Oportunidad de Colaboración
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-primary mb-6">
              ¿Tienes una idea de negocio?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Si tienes una gran idea pero no el conocimiento técnico para desarrollarla,
              podemos convertirla en realidad juntos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Cómo funciona */}
            <div className="bg-background border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                Cómo funciona
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-accent text-background flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-text-primary font-medium mb-1">Comparte tu idea</p>
                    <p className="text-sm text-text-secondary">Cuéntanos sobre tu concepto de negocio</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-accent text-background flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-text-primary font-medium mb-1">Análisis de viabilidad</p>
                    <p className="text-sm text-text-secondary">Evaluamos el potencial y rentabilidad</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-accent text-background flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-text-primary font-medium mb-1">Desarrollo conjunto</p>
                    <p className="text-sm text-text-secondary">Construimos el proyecto como socios</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-accent text-background flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <p className="text-text-primary font-medium mb-1">Participación compartida</p>
                    <p className="text-sm text-text-secondary">Cada quien obtiene un porcentaje del proyecto</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lo que buscamos */}
            <div className="bg-background border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Lo que buscamos
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-text-secondary text-sm">Ideas innovadoras con potencial de mercado</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-text-secondary text-sm">Problemas reales que resolver</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-text-secondary text-sm">Modelos de negocio escalables</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-text-secondary text-sm">Compromiso y visión a largo plazo</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-text-secondary text-sm">Emprendedores con conocimiento del sector</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                <p className="text-sm text-text-secondary">
                  <span className="text-accent font-medium">Nota:</span> Firmamos acuerdos de confidencialidad (NDA)
                  para proteger tu idea desde el primer contacto.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background rounded-full font-medium hover:bg-accent-light transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
            >
              Comparte tu idea
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-sm text-text-secondary mt-4">
              O escríbenos a <span className="text-accent">nexdevcoding@gmail.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contact" className="relative z-10 py-20 px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-primary mb-4 text-center">
            Trabajemos juntos
          </h2>
          <p className="text-center text-text-secondary mb-4">¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte</p>

          {/* Llamado a cotización */}
          <div className="mb-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Cotización gratuita
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Envíanos un mensaje con las especificaciones o necesidades de tu proyecto para obtener una
                  <span className="text-accent font-medium"> cotización sin compromiso</span>.
                  Te responderemos en menos de 24 horas con un presupuesto detallado y tiempo estimado de desarrollo.
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <ContactForm />

          {/* Enlaces de contacto directo */}
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-center text-text-secondary mb-6">O contáctanos directamente:</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="mailto:nexdevcoding@gmail.com" className="flex items-center justify-center gap-2 text-text-primary hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                nexdevcoding@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/sebas-barrera-571242247/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-text-primary hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/Sebas-Barrera" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-text-primary hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-background border-t border-border py-12 px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-text-secondary">
              2025 Portfolio. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">GitHub</a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

// Componente de Formulario de Contacto
function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | 'limit' | null>(null);
  const [remainingTime, setRemainingTime] = useState(0);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Primero verificar rate limit con el servidor
      const checkResponse = await fetch('/api/contact');
      const checkResult = await checkResponse.json();

      if (!checkResult.allowed) {
        // Límite alcanzado
        setRemainingTime(checkResult.remainingTime || 30);
        setSubmitStatus('limit');
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 8000);
        return;
      }

      // Si está permitido, enviar email desde el navegador con EmailJS
      if (formRef.current) {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

        console.log('Email enviado exitosamente:', result.text);

        // Registrar el envío en el servidor para incrementar contador
        await fetch('/api/contact', { method: 'POST' });

        // Éxito
        setSubmitStatus('success');
        if (formRef.current) {
          formRef.current.reset();
        }
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="from_name" className="block text-sm font-medium text-text-primary mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            required
            placeholder="Tu nombre"
            className="w-full px-6 py-4 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent transition-all duration-300"
          />
        </div>

        <div>
          <label htmlFor="from_email" className="block text-sm font-medium text-text-primary mb-2">
            Email
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            required
            placeholder="tu@email.com"
            className="w-full px-6 py-4 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent transition-all duration-300"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          placeholder="Sobre qué quieres hablar"
          className="w-full px-6 py-4 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent transition-all duration-300"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Cuéntame sobre tu proyecto..."
          className="w-full px-6 py-4 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent transition-all duration-300 resize-none"
        ></textarea>
      </div>

      {/* Mensajes de estado */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
          <p className="text-green-400 text-sm">
            ¡Mensaje enviado exitosamente! Te responderemos pronto.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
          <p className="text-red-400 text-sm">
            Error al enviar el mensaje. Por favor intenta nuevamente.
          </p>
        </div>
      )}

      {submitStatus === 'limit' && (
        <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
          <p className="text-yellow-400 text-sm">
            Has alcanzado el límite de envíos (2 mensajes). Por favor espera {remainingTime} minutos para enviar otro mensaje,
            o contáctanos directamente a nexdevcoding@gmail.com
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-8 py-4 bg-accent text-background rounded-full font-medium hover:bg-accent-light transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}

// Componente de Carrusel para Mockups Móviles
function MobileCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Detectar swipe táctil
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
      setShowSwipeHint(false);
    }
    if (isRightSwipe) {
      prevSlide();
      setShowSwipeHint(false);
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-linear-to-r from-accent/20 to-accent-light/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
      <div className="relative bg-surface/50 backdrop-blur-sm border-2 border-border rounded-3xl p-6 group-hover:border-accent/50 transition-all duration-500">

        {/* Indicador de swipe - solo visible en móvil */}
        {showSwipeHint && currentIndex === 0 && (
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-30 md:hidden pointer-events-none">
            <div className="flex items-center gap-2 bg-accent/90 text-background px-3 py-2 rounded-full text-xs font-medium shadow-lg" style={{ animation: 'swipe-hint 2s ease-in-out infinite' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Desliza</span>
            </div>
          </div>
        )}
        {/* Contenedor de mockup móvil con aspecto de teléfono */}
        <div className="mx-auto max-w-[250px]">
          <div className="relative overflow-hidden shadow-2xl rounded-2xl" style={{ aspectRatio: '9.5/19.5' }}>
            {/* Carrusel de imágenes */}
            <div
              className="relative w-full h-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <Image
                      src={image}
                      alt={`Mockup ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                ))}
              </div>

              {/* Controles de navegación */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/90 hover:bg-background rounded-full flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/90 hover:bg-background rounded-full flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-accent/50'
              }`}
              aria-label={`Ir a mockup ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador de imágenes */}
        <div className="text-center mt-3">
          <span className="text-xs text-text-secondary">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}

// Componente de Carrusel para Mockups Web
function WebCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Detectar swipe táctil
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
      setShowSwipeHint(false);
    }
    if (isRightSwipe) {
      prevSlide();
      setShowSwipeHint(false);
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-linear-to-r from-accent-light/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="relative bg-surface/50 backdrop-blur-sm border-2 border-border rounded-3xl p-6 group-hover:border-accent/50 transition-all duration-500">

        {/* Indicador de swipe - solo visible en móvil */}
        {showSwipeHint && currentIndex === 0 && (
          <div className="absolute top-1/2 right-6 -translate-y-1/2 z-30 md:hidden pointer-events-none">
            <div className="flex items-center gap-2 bg-accent/90 text-background px-3 py-2 rounded-full text-xs font-medium shadow-lg" style={{ animation: 'swipe-hint 2s ease-in-out infinite' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Desliza</span>
            </div>
          </div>
        )}
        {/* Contenedor browser mockup */}
        <div className="bg-background rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
          {/* Browser bar */}
          <div className="h-8 bg-surface border-b border-border flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <div className="flex-1 mx-4 h-5 bg-background rounded-md"></div>
          </div>

          {/* Screen con carrusel */}
          <div
            className="aspect-video relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <Image
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              ))}
            </div>

            {/* Controles de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-accent/50'
              }`}
              aria-label={`Ir a screenshot ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador de imágenes */}
        <div className="text-center mt-3">
          <span className="text-xs text-text-secondary">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}

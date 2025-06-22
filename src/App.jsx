import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Globe, BarChart3, Sparkles, Mail, Github, Linkedin, ExternalLink, MapPin, GraduationCap } from 'lucide-react';

const App = () => {
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [activeFlipImage, setActiveFlipImage] = useState(0);
  const [activeLociImage, setActiveLociImage] = useState(0);
  const [activeAdventuresImage, setActiveAdventuresImage] = useState(0);
  const [activeDissertationMedia, setActiveDissertationMedia] = useState(0);
  const [activeWaveImage, setActiveWaveImage] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState([]);
  const particlesRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update cursor trail
      setCursorTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, time: Date.now() }];
        return newTrail.slice(-15); // Keep only last 15 positions
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Floating particles animation
  useEffect(() => {
    const particles = [];
    const canvas = particlesRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cursor trail cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorTrail(prev => {
        const now = Date.now();
        return prev.filter(point => now - point.time < 1000);
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroImages = [
    { src: 'https://picsum.photos/600/800?random=1', alt: 'Jex Portrait 1' },
    { src: 'https://picsum.photos/600/800?random=2', alt: 'Jex Portrait 2' },
    { src: 'https://picsum.photos/600/800?random=3', alt: 'Jex Portrait 3' }
  ];

  const flipImages = [
    { src: 'IMG_3510.PNG', description: 'FL!P app screenshot showing main timer interface' },
    { src: 'IMG_3267.PNG', description: 'FL!P leaderboard and competition features' },
    { src: 'flipgang2.jpeg', description: 'FL!P community', isWide: true },
    { src: 'IMG_2962.jpg', description: 'FL!P settings and customization options' },
    { src: 'IMG_2963.PNG', description: 'FL!P statistics and progress tracking' },
    { src: 'IMG_2960.jpg', description: 'FL!P notification and focus features' },
    { src: 'IMG_3519.PNG', description: 'FL!P session management and controls' },
    { src: 'IMG_3521.PNG', description: 'FL!P achievements and rewards system' },
    { src: 'IMG_3511.PNG', description: 'FL!P additional features showcase' },
    { src: 'IMG_3516.PNG', description: 'FL!P advanced settings panel' },
    { src: 'IMG_3518.PNG', description: 'FL!P performance analytics' },
    { src: 'IMG_3497.PNG', description: 'FL!P user interface details' },
    { src: 'IMG_2970.PNG', description: 'FL!P social connectivity options' },
    { src: 'IMG_2938.PNG', description: 'FL!P productivity insights' },
    { src: 'IMG_3358.jpg', description: 'FL!P community engagement features' },
    { src: 'IMG_3477 2.jpg', description: 'FL!P comprehensive feature overview' }
  ];

  const lociImages = [
    { src: 'loci1.PNG', description: 'Main screen for quick import of recently played Spotify tracks to your building or region via Spotify API' },
    { src: 'loci2.PNG', description: 'Leaderboards showing top artists, genres, and total listening time for regions and buildings' },
    { src: 'loci3.PNG', description: 'Advanced interface for importing specific playlists or songs from certain time periods' },
    { src: 'loci4.PNG', description: 'Your main profile showing top artists, visible to friends and leaderboard users based on privacy settings' },
    { src: 'loci5.PNG', description: 'Match feature connecting you with others in your region based on similar music tastes via geocoding' },
    { src: 'loci6.PNG', description: 'Session and import history tracking your music listening activity' },
    { src: 'loci7.PNG', description: 'Advanced "Strava-style" music map feature for tracking songs during runs or drives, connecting locations with music' },
    { src: 'loci8.PNG', description: 'Privacy settings for controlling where you import songs - regional or building-specific geolocation options' }
  ];

  const adventuresImages = [
    { src: 'authenticadventures1.png', description: 'Top travel tips from web-scraped Reddit posts specific to each city via Reddit API' },
    { src: 'authenticadventures2.png', description: 'Food and nightlife recommendations sourced from authentic user experiences' },
    { src: 'authenticadventures3.png', description: 'AI-generated summary creating authentic itineraries from real Reddit user experiences, no external sponsorship' }
  ];

  const dissertationMedia = Array(8).fill(null).map((_, i) => ({
    src: `https://picsum.photos/800/600?random=${40 + i}`,
    type: 'image'
  }));



  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Cursor Trail Only */}
      {cursorTrail.map((point, index) => {
        const age = Date.now() - point.time;
        const opacity = Math.max(0, 1 - age / 1000);
        const scale = Math.max(0.2, 1 - age / 1000);
        
        return (
          <div
            key={`${point.x}-${point.y}-${point.time}`}
            className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9998] mix-blend-screen"
            style={{
              left: point.x - 4,
              top: point.y - 4,
              opacity: opacity * 0.6,
              transform: `scale(${scale})`,
              transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
            }}
          />
        );
      })}
      
      {/* Animated Background Canvas */}
      <canvas 
        ref={particlesRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
      />

      {/* Geometric Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10" />
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-40 w-24 h-24 border border-indigo-500/20 rotate-45 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/3 w-20 h-20 border border-orange-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {['About', 'iOS Apps', 'Data Science & Analytics', 'Creative Engineering', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/[&\s]/g, '-'))}
                className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 px-3 py-2 rounded-lg hover:bg-cyan-400/10 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center px-6 pt-20 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 pointer-events-none"></div>
        
        {/* Static Diagonal Elements - Hero Only */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-1 bg-gradient-to-b from-transparent via-cyan-500/25 to-transparent transform rotate-45 animate-pulse-glow" style={{ height: '150vh', left: '15%', top: '-25vh' }} />
          <div className="absolute w-1 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent transform -rotate-45 animate-pulse-glow" style={{ height: '150vh', right: '20%', top: '-25vh', animationDelay: '1s' }} />
          <div className="absolute w-0.5 bg-gradient-to-b from-transparent via-orange-500/15 to-transparent transform rotate-12 animate-pulse-glow" style={{ height: '150vh', left: '65%', top: '-25vh', animationDelay: '2s' }} />
          <div className="absolute w-0.5 bg-gradient-to-b from-transparent via-purple-500/15 to-transparent transform -rotate-12 animate-pulse-glow" style={{ height: '150vh', left: '35%', top: '-25vh', animationDelay: '3s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white relative group">
              <span className="relative z-10">Jex Pearce</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-indigo-400/30 to-orange-400/30 -skew-y-1 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Durham mathematics graduate crafting elegant iOS experiences. Built FL!P for the App Store, developing Loci in beta. Also passionate about data science and creative engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.durham.ac.uk/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 px-3 py-2 rounded-lg hover:bg-cyan-400/10 group">
                <GraduationCap size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Durham University, UK
              </a>
              <a href="https://www.linkedin.com/in/jex-pearce-904bb7224/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 px-3 py-2 rounded-lg hover:bg-cyan-400/10 group">
                <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                LinkedIn
              </a>
              <a href="https://github.com/jexpearce" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 px-3 py-2 rounded-lg hover:bg-cyan-400/10 group">
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                GitHub
              </a>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl border border-gray-800 transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-2xl group-hover:shadow-cyan-400/20">
              <img 
                src={heroImages[activeHeroImage].src} 
                alt={heroImages[activeHeroImage].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveHeroImage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeHeroImage ? 'bg-cyan-400 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* iOS Apps Section */}
      <section id="ios-apps" className="py-24 px-6 bg-gray-900/30 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center relative group">
            <span className="relative z-10 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-extrabold tracking-wide">
              iOS Apps
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-cyan-400/30 to-blue-400/30 -skew-y-1 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
          </h2>
          
          {/* FL!P Project */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <a href="https://apps.apple.com/us/app/fl-p/id6741734983" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-3xl font-bold mb-4 relative group cursor-pointer">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent font-extrabold tracking-wider">
                      FL!P
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                  </h3>
                </a>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Tired of notifications stealing your focus? FL!P is a productivity app that uses motion tracking to ensure your phone stays face down. Start a timer, flip your phone, and lock in. Compete on location-based leaderboards, build streaks, and join friends' sessions. Perfect for anyone ready to reclaim their attention.
                </p>
                
                <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="text-sm text-gray-400 mb-2">Featured in Palatinate News • June 19th, 2025</p>
                  <p className="text-sm text-gray-400">
                    Built with Swift, UIKit/SwiftUI, Core Motion, MapKit, Firebase • Live Activities • Real-time sessions
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <a href="https://apps.apple.com/us/app/fl-p/id6741734983" target="_blank" rel="noopener noreferrer"
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50 group">
                    App Store
                    <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a href="https://flipthephone.netlify.app/" target="_blank" rel="noopener noreferrer"
                    className="px-4 py-3 border border-gray-600 hover:border-cyan-400 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 hover:bg-cyan-400/10 group">
                    Website
                    <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/company/fl-p/" target="_blank" rel="noopener noreferrer"
                    className="px-4 py-3 border border-gray-600 hover:border-cyan-400 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 hover:bg-cyan-400/10 group">
                    LinkedIn
                    <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>

                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <p className="text-sm text-gray-400">
                    {flipImages[activeFlipImage].description}
                  </p>
                </div>
              </div>

              <div className="relative group max-w-sm mx-auto">
                <div className={`${flipImages[activeFlipImage].isWide ? 'aspect-video' : 'aspect-[3/4]'} relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-2xl group-hover:shadow-cyan-400/20`}>
                  <img 
                    src={flipImages[activeFlipImage].src} 
                    alt={`FL!P Screenshot ${activeFlipImage + 1}`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <button
                  onClick={() => setActiveFlipImage((prev) => (prev - 1 + flipImages.length) % flipImages.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 group"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => setActiveFlipImage((prev) => (prev + 1) % flipImages.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 group"
                >
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {flipImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFlipImage(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === activeFlipImage ? 'bg-cyan-400 w-6' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Loci Project */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
                                              <a href="https://locii.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-3xl font-bold mb-4 relative group cursor-pointer">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-extrabold tracking-wider">
                      Loci
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                  </h3>
                </a>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Discover what people around you are actually listening to right now. Loci creates real-time music maps, building by building, city by city. Match with others who share your taste and compete on location-based music leaderboards. Currently in closed TestFlight beta.
              </p>
              
              <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400">
                  March 2025 - Present • MediaPlayer Framework • Spotify Web API • WebSocket Real-time • Multi-tier Caching
                </p>
              </div>

              <a href="https://locii.netlify.app/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 border border-gray-600 hover:border-cyan-400 rounded-lg transition-colors">
                Website
                <ExternalLink size={16} />
              </a>

              <div className="mt-8 p-4 bg-gray-800/30 rounded-lg">
                <p className="text-sm text-gray-400">
                  {lociImages[activeLociImage].description}
                </p>
              </div>
            </div>

            <div className="relative group max-w-sm mx-auto">
              <div className="aspect-[3/4] relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-2xl group-hover:shadow-cyan-400/20">
                <img 
                  src={lociImages[activeLociImage].src} 
                  alt={`Loci Screenshot ${activeLociImage + 1}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <button
                onClick={() => setActiveLociImage((prev) => (prev - 1 + lociImages.length) % lociImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 group"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => setActiveLociImage((prev) => (prev + 1) % lociImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 group"
              >
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {lociImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveLociImage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeLociImage ? 'bg-cyan-400 w-6' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Science Section */}
      <section id="data-science--analytics" className="py-24 px-6 bg-gradient-to-b from-gray-900/30 to-gray-900/50 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center relative group">
            <span className="relative z-10 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold tracking-wide">
              Data Science & Analytics
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30 -skew-y-1 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
          </h2>
          
          {/* Worldwide Population Report */}
          <div className="mb-20">
            <a href="world_study/" target="_blank" rel="noopener noreferrer">
              <h3 className="text-3xl font-bold mb-4 text-indigo-400 cursor-pointer hover:text-indigo-300 transition-colors group">
                <Globe className="inline mr-2 group-hover:rotate-12 transition-transform duration-300" size={32} />
                Worldwide Population Report
              </h3>
            </a>
            <p className="text-gray-300 mb-8 max-w-3xl">
              An extensive analysis of key demographic trends worldwide. Includes Population Pyramids, Heatmaps, and Scatterplots, allowing each reader to gain crucial insights into modern populations, such as Japan's aging citizens, male-to-female ratios in countries like India, and Africa's booming birth rate.
            </p>
            <a href="world_study/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 border border-gray-600 hover:border-indigo-400 rounded-lg transition-colors mb-8">
              View Report
              <ExternalLink size={16} />
            </a>
                         <div className="grid md:grid-cols-3 gap-4">
               <div className="group hover-lift">
                 <img src="heatmap copy.png" alt="Heatmap" className="rounded-lg border border-gray-800 group-hover:border-indigo-400/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-400/20" />
               </div>
               <div className="group hover-lift" style={{ animationDelay: '0.2s' }}>
                 <img src="pyramid copy.png" alt="Population Pyramid" className="rounded-lg border border-gray-800 group-hover:border-indigo-400/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-400/20" />
               </div>
               <div className="group hover-lift" style={{ animationDelay: '0.4s' }}>
                 <img src="correlation copy.png" alt="Correlation" className="rounded-lg border border-gray-800 group-hover:border-indigo-400/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-400/20" />
               </div>
             </div>
          </div>

          {/* Data Analysis Reports */}
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <a href="Superyacht%20insights%20(1).pdf" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-400 cursor-pointer hover:text-indigo-300 transition-colors">Market Report for Super Yachts</h3>
                </a>
                <p className="text-gray-300 mb-4">
                  A Python-driven analysis report on Super Yachts utilizing Web Scraping and SQL for data gathering, then Python for advanced visualization.
                </p>
                <a href="Superyacht%20insights%20(1).pdf" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  View Report
                  <ExternalLink size={16} />
                </a>
              </div>
                             <img src="lurssen v others (14-24) copy.png" alt="Super Yacht Analysis" className="rounded-lg border border-gray-800" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <a href="5G Availability Report.pdf" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-400 cursor-pointer hover:text-indigo-300 transition-colors">Analysis of 5G Availability</h3>
                </a>
                <p className="text-gray-300 mb-4">
                  A visual analysis showcasing global 5G network availability, highlighting key cities, operators, and future trends.
                </p>
                <a href="5G Availability Report.pdf" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  View Report
                  <ExternalLink size={16} />
                </a>
              </div>
                             <img src="5Gcities copy.png" alt="5G Analysis" className="rounded-lg border border-gray-800" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <a href="siliconvalleyhousing2.html" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-400 cursor-pointer hover:text-indigo-300 transition-colors">Predicting Housing Prices with Machine Learning</h3>
                </a>
                <p className="text-gray-300 mb-4">
                  Created a machine learning algorithm that can determine the price of a new house given its area, bedrooms, bathrooms, etc, by analyzing the prior houses given in the data.
                </p>
                <a href="siliconvalleyhousing2.html" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
                             <img src="houseprices copy.png" alt="Housing Price Prediction" className="rounded-lg border border-gray-800" />
            </div>
          </div>
        </div>
      </section>

      {/* Creative Engineering Section */}
      <section id="creative-engineering" className="py-24 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center relative group">
            <span className="relative z-10 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent font-extrabold tracking-wide">
              Creative Engineering
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-red-400/30 to-yellow-400/30 -skew-y-1 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-yellow-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
          </h2>
          
          {/* Authentic Adventures */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <a href="https://authenticadventures.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-3xl font-bold mb-4 relative group cursor-pointer">
                    <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent font-extrabold tracking-wider">
                      Authentic Adventures
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-yellow-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                  </h3>
                </a>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Created a website that uses Reddit's API & OpenAI to generate authentic travel summaries based on real advice from location-specific subreddits. Built to cut through sponsored content and surface genuine travel tips from real people, covering itineraries, food & nightlife, and budget advice.
                </p>
                <a href="https://authenticadventures.onrender.com/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 border border-gray-600 hover:border-orange-400 rounded-lg transition-colors">
                  Visit Site
                  <ExternalLink size={16} />
                </a>
              </div>
              
              <div className="relative">
                <div className="aspect-video relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
                  <img 
                    src={adventuresImages[activeAdventuresImage].src} 
                    alt={`Authentic Adventures ${activeAdventuresImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => setActiveAdventuresImage((prev) => (prev - 1 + adventuresImages.length) % adventuresImages.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-orange-500/20 border border-gray-700/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/20 group"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => setActiveAdventuresImage((prev) => (prev + 1) % adventuresImages.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-orange-500/20 border border-gray-700/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/20 group"
                >
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-300 bg-gray-900/80 px-3 py-1 rounded">
                  {adventuresImages[activeAdventuresImage].description}
                </p>
              </div>
            </div>
          </div>

          {/* Mathematics Dissertation */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-orange-400 cursor-pointer hover:text-orange-300 transition-colors">Mathematics Dissertation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Durham University final year project modeling cardiac spiral waves using the FitzHugh-Nagumo framework. Built Python simulations with NumPy and Matplotlib to bridge mathematical modeling with biological systems, incorporating stochastic elements to represent natural cardiac variability. Developed using Jupyter notebooks and collaborative tools.
                </p>
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="text-sm text-gray-400">
                    Python • NumPy • Matplotlib • Jupyter • Git • Google Colab
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
                  {dissertationMedia[activeDissertationMedia].type === 'image' ? (
                    <img 
                      src={dissertationMedia[activeDissertationMedia].src} 
                      alt={`Dissertation ${activeDissertationMedia + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video 
                      src={dissertationMedia[activeDissertationMedia].src}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <button
                  onClick={() => setActiveDissertationMedia((prev) => (prev - 1 + dissertationMedia.length) % dissertationMedia.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setActiveDissertationMedia((prev) => (prev + 1) % dissertationMedia.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* 3D Wave Modeling */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <a href="Wavepropagation.html" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-2xl font-bold mb-3 text-orange-400 cursor-pointer hover:text-orange-300 transition-colors">Creating and Analyzing Wave Propagations</h3>
                </a>
                <p className="text-gray-300 mb-4">
                  Used VPython to simulate mathematical models of sinusoidal waves using the numerical Central Differences method, explained with LaTeX. This work inspired another developer to create their own wave simulation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="Wavepropagation.html" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
                    View Project
                    <ExternalLink size={16} />
                  </a>
                  <a href="https://www.hendrikse.name/science/waves/pool.html" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-300 transition-colors">
                    Inspired Work
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <img 
                  src="model copy.png" 
                  alt="Wave Model 1"
                  className="rounded-lg border border-gray-800"
                />
                <img 
                  src="wsvemodelpic copy.png" 
                  alt="Wave Model 2"
                  className="rounded-lg border border-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Earlier Projects */}
          <div className="mt-16 p-8 bg-gray-800/30 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Earlier Projects</h3>
            <div className="space-y-4">
              <div>
                <a href="https://jexpearce.github.io/ropes/flappybird.html" target="_blank" rel="noopener noreferrer"
                  className="text-lg font-semibold text-orange-400 hover:text-orange-300 transition-colors">
                  Flappy Bird Replica
                </a>
                <p className="text-gray-400 text-sm">A simple replica of the hit game. Adjusted for phone screens.</p>
              </div>
              <div>
                <a href="https://jexpearce.github.io/ropes/spooky_tennis/game.html" target="_blank" rel="noopener noreferrer"
                  className="text-lg font-semibold text-orange-400 hover:text-orange-300 transition-colors">
                  Spooky Tennis
                </a>
                <p className="text-gray-400 text-sm">A fun pong type game with a spooky twist! Not adjusted for phones.</p>
              </div>
              <div>
                <a href="https://jexpearce.github.io/jex/meatgraphs" target="_blank" rel="noopener noreferrer"
                  className="text-lg font-semibold text-orange-400 hover:text-orange-300 transition-colors">
                  Nutrient Analysis of Pork & Beef
                </a>
                <p className="text-gray-400 text-sm">My first project. Combining my love of protein with visual graphs and predictive linear regression.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-gray-800 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 relative group">
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-blue-400/20 -skew-y-1 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
          </h2>
          <div className="flex flex-col items-center gap-4">
            <a href="mailto:jex@jajajeev.com" className="text-2xl font-medium text-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 px-4 py-2 rounded-lg hover:bg-cyan-400/10 group">
              <Mail size={28} className="group-hover:rotate-12 transition-transform duration-300" />
              jex@jajajeev.com
            </a>
            <div className="flex gap-6 mt-4">
              <a href="https://www.linkedin.com/in/jex-pearce-904bb7224/" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 p-3 rounded-full hover:bg-cyan-400/10 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 group">
                <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="https://github.com/jexpearce" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 p-3 rounded-full hover:bg-cyan-400/10 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 group">
                <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              This website was created using React
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

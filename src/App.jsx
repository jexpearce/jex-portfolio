import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Globe, BarChart3, Sparkles, Mail, Github, Linkedin, ExternalLink, MapPin, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [activeFlipImage, setActiveFlipImage] = useState(0);
  const [activeLociImage, setActiveLociImage] = useState(0);
  const [activeAdventuresImage, setActiveAdventuresImage] = useState(0);
  const [activeDissertationMedia, setActiveDissertationMedia] = useState(0);
  const [activeWaveImage, setActiveWaveImage] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroImages = [
    { src: 'https://picsum.photos/600/800?random=1', alt: 'Jex Portrait 1' },
    { src: 'https://picsum.photos/600/800?random=2', alt: 'Jex Portrait 2' },
    { src: 'https://picsum.photos/600/800?random=3', alt: 'Jex Portrait 3' }
  ];

  const flipImages = Array(8).fill(null).map((_, i) => ({
    src: `https://picsum.photos/400/600?random=${10 + i}`,
    description: `Placeholder description for image ${i + 1}`
  }));

  const lociImages = Array(8).fill(null).map((_, i) => ({
    src: `https://picsum.photos/400/600?random=${20 + i}`,
    description: `Placeholder description for image ${i + 1}`
  }));

  const adventuresImages = Array(3).fill(null).map((_, i) => ({
    src: `https://picsum.photos/800/600?random=${30 + i}`,
    description: `Short description ${i + 1}`
  }));

  const dissertationMedia = Array(8).fill(null).map((_, i) => ({
    src: `https://picsum.photos/800/600?random=${40 + i}`,
    type: 'image'
  }));

  const waveImages = Array(4).fill(null).map((_, i) => ({
    src: `https://picsum.photos/400/300?random=${50 + i}`
  }));

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {['About', 'iOS Apps', 'Data Science & Analytics', 'Creative Engineering', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/[&\s]/g, '-'))}
                className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Jex Pearce
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Durham mathematics graduate crafting elegant iOS experiences. Built FL!P for the App Store, developing Loci in beta. Also passionate about data science and creative engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.durham.ac.uk/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <GraduationCap size={20} />
                Durham University, UK
              </a>
              <a href="https://www.linkedin.com/in/jex-pearce-904bb7224/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://github.com/jexpearce" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl border border-gray-800">
              <img 
                src={heroImages[activeHeroImage].src} 
                alt={heroImages[activeHeroImage].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
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
      <section id="ios-apps" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">iOS Apps</h2>
          
          {/* FL!P Project */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-cyan-400">FL!P</h3>
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
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold rounded-lg transition-colors flex items-center gap-2">
                    App Store
                    <ExternalLink size={16} />
                  </a>
                  <a href="https://flipthephone.netlify.app/" target="_blank" rel="noopener noreferrer"
                    className="px-4 py-3 border border-gray-600 hover:border-cyan-400 rounded-lg transition-colors flex items-center gap-2">
                    Website
                    <ExternalLink size={16} />
                  </a>
                  <a href="https://www.linkedin.com/company/fl-p/" target="_blank" rel="noopener noreferrer"
                    className="px-4 py-3 border border-gray-600 hover:border-cyan-400 rounded-lg transition-colors flex items-center gap-2">
                    LinkedIn
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <p className="text-sm text-gray-400">
                    {flipImages[activeFlipImage].description}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[9/16] relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
                  <img 
                    src={flipImages[activeFlipImage].src} 
                    alt={`FL!P Screenshot ${activeFlipImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => setActiveFlipImage((prev) => (prev - 1 + flipImages.length) % flipImages.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setActiveFlipImage((prev) => (prev + 1) % flipImages.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <ChevronRight size={20} />
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
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Loci</h3>
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

            <div className="relative">
              <div className="aspect-[9/16] relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
                <img 
                  src={lociImages[activeLociImage].src} 
                  alt={`Loci Screenshot ${activeLociImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => setActiveLociImage((prev) => (prev - 1 + lociImages.length) % lociImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setActiveLociImage((prev) => (prev + 1) % lociImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ChevronRight size={20} />
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
      <section id="data-science--analytics" className="py-24 px-6 bg-gradient-to-b from-gray-900/30 to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Data Science & Analytics</h2>
          
          {/* Worldwide Population Report */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-4 text-indigo-400">
              <Globe className="inline mr-2" size={32} />
              Worldwide Population Report
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl">
              An extensive analysis of key demographic trends worldwide. Includes Population Pyramids, Heatmaps, and Scatterplots, allowing each reader to gain crucial insights into modern populations, such as Japan's aging citizens, male-to-female ratios in countries like India, and Africa's booming birth rate.
            </p>
            <a href="world_study/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 border border-gray-600 hover:border-indigo-400 rounded-lg transition-colors mb-8">
              View Report
              <ExternalLink size={16} />
            </a>
            <div className="grid md:grid-cols-3 gap-4">
              <img src="img/heatmap.png" alt="Heatmap" className="rounded-lg border border-gray-800" />
              <img src="img/pyramid.png" alt="Population Pyramid" className="rounded-lg border border-gray-800" />
              <img src="img/correlation.png" alt="Correlation" className="rounded-lg border border-gray-800" />
            </div>
          </div>

          {/* Data Analysis Reports */}
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-indigo-400">Market Report for Super Yachts</h3>
                <p className="text-gray-300 mb-4">
                  A Python-driven analysis report on Super Yachts utilizing Web Scraping and SQL for data gathering, then Python for advanced visualization.
                </p>
                <a href="Superyacht%20insights%20(1).pdf" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  View Report
                  <ExternalLink size={16} />
                </a>
              </div>
              <img src="img/lurssen v others (14-24).png" alt="Super Yacht Analysis" className="rounded-lg border border-gray-800" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-indigo-400">Analysis of 5G Availability</h3>
                <p className="text-gray-300 mb-4">
                  A visual analysis showcasing global 5G network availability, highlighting key cities, operators, and future trends.
                </p>
                <a href="5G Availability Report.pdf" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  View Report
                  <ExternalLink size={16} />
                </a>
              </div>
              <img src="img/5Gcities.png" alt="5G Analysis" className="rounded-lg border border-gray-800" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-indigo-400">Predicting Housing Prices with Machine Learning</h3>
                <p className="text-gray-300 mb-4">
                  Created a machine learning algorithm that can determine the price of a new house given its area, bedrooms, bathrooms, etc, by analyzing the prior houses given in the data.
                </p>
                <a href="siliconvalleyhousing2.html" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
              <img src="img/houseprices.png" alt="Housing Price Prediction" className="rounded-lg border border-gray-800" />
            </div>
          </div>
        </div>
      </section>

      {/* Creative Engineering Section */}
      <section id="creative-engineering" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Creative Engineering</h2>
          
          {/* Authentic Adventures */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-orange-400">Authentic Adventures</h3>
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
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setActiveAdventuresImage((prev) => (prev + 1) % adventuresImages.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <ChevronRight size={20} />
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
                <h3 className="text-3xl font-bold mb-4 text-orange-400">Mathematics Dissertation</h3>
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
                <h3 className="text-2xl font-bold mb-3 text-orange-400">Creating and Analyzing Wave Propagations</h3>
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
                {waveImages.map((img, i) => (
                  <img 
                    key={i}
                    src={img.src} 
                    alt={`Wave Model ${i + 1}`}
                    className="rounded-lg border border-gray-800"
                  />
                ))}
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
      <section id="contact" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <div className="flex flex-col items-center gap-4">
            <a href="mailto:jex@jajajeev.com" className="text-2xl font-medium text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
              <Mail size={28} />
              jex@jajajeev.com
            </a>
            <div className="flex gap-6 mt-4">
              <a href="https://www.linkedin.com/in/jex-pearce-904bb7224/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/jexpearce" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={24} />
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

export default Portfolio;

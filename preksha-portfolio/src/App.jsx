import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, Play, Instagram, Youtube, ExternalLink, Menu, X, Mail, Linkedin, Download, Star, ArrowUp } from 'lucide-react';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const reelsRef = useRef(null);
  const landscapeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only 4 assets: 1 image + 3 videos in project root
  const profileImage = '/media/image0.png';
  const verticalVideos = ['/media/Video_1.MOV','/media/Video-1.MOV'];
  const landscapeVideo = '/media/Video.MOV';

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Autoplay when scrolled into view
  useEffect(() => {
    const observers = [];
    const makeObserver = (rootEl) => new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const videos = rootEl ? rootEl.querySelectorAll('video') : [];
        videos.forEach(v => {
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        })
      })
    }, { threshold: 0.5 });

    if (reelsRef.current) {
      const ob = makeObserver(reelsRef.current);
      ob.observe(reelsRef.current);
      observers.push(ob);
    }
    if (landscapeRef.current) {
      const ob = makeObserver(landscapeRef.current);
      ob.observe(landscapeRef.current);
      observers.push(ob);
    }
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-jakarta">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-black/80 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-[1400px] px-[5%] py-4 flex items-center justify-between">
          <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold bg-gradient-to-tr from-white to-neutral-400 bg-clip-text text-transparent tracking-tight">PT</button>
          <div className="hidden md:flex items-center gap-8">
            {['Home','Work','Portfolio','Skills','Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-sm uppercase tracking-wide text-white/80 hover:text-white transition-colors">
                {item}
              </button>
            ))}
          </div>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(p=>!p)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/95 flex md:hidden flex-col items-center justify-center gap-8 transition-[right] duration-300 ${mobileMenuOpen ? 'right-0' : '-right-full'}`}>
        {['Home','Work','Portfolio','Skills','Contact'].map((item) => (
          <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-xl uppercase tracking-wide text-white/90">
            {item}
          </button>
        ))}
      </div>

      {/* Hero */}
      <section id="home" className="relative min-h-[100svh] flex items-center bg-gradient-to-br from-fuchsia-600/10 via-sky-500/10 to-emerald-500/10">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-[60%_40%] gap-10 items-center px-[5%] w-full">
          <div className="[animation:fadeInUp]">
            <div className="inline-block relative">
              <h1 className="text-[clamp(48px,8vw,88px)] font-extrabold leading-none tracking-tight font-grotesk">PREKSHA TYAGI</h1>
              <span className="absolute -inset-1 -z-10 rounded-xl blur-xl bg-[linear-gradient(135deg,#FFD70033,#00E5FF33)]" />
            </div>
            <p className="text-lg text-neutral-300 mt-2 font-jakarta">Digital Marketing Strategist | Content Creator | Brand Storyteller</p>
            <div className="mt-6 text-[17px] leading-7 text-neutral-200 border border-white/10 rounded-xl bg-white/[.03] p-6 backdrop-blur-sm">
              Hey there! I'm Preksha Tyagi — an Economics & Business Management graduate with a creative spark and a data-driven mindset! 
              From building brand stories to boosting online visibility, I bring marketing strategies to life with flair and focus. 
              Whether it's crafting compelling campaigns or analyzing what makes audiences tick, I'm passionate about turning ideas into impact.
            </div>
            <p className="mt-4 text-[20px] font-semibold -tracking-[.5px] bg-gradient-to-r from-[#FFD700] via-[#8AF5FF] to-[#FFD700] bg-clip-text text-transparent">Welcome to my digital marketing portfolio — where creativity meets conversion!</p>
          </div>
          <div className="h-[500px] rounded-2xl border-2 border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] relative overflow-hidden bg-neutral-900">
            <img src={profileImage} alt="Preksha" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/50 border border-yellow-400/50 text-yellow-300">FEATURED</div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
          </div>
        </div>
        <button onClick={() => scrollToSection('work')} className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounceX">
          <ChevronDown size={30} color="#888" />
        </button>
      </section>

      {/* Reels (2 portrait videos) */}
      <section id="work" ref={reelsRef} className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <h2 className="text-center text-[clamp(36px,5vw,48px)] font-bold mb-14 tracking-tight">MY WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verticalVideos.map((src, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 relative">
              <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded-md text-[10px] font-semibold bg-black/60 border border-white/20 text-yellow-300">
                Reels
              </div>
              <video
                src={src}
                playsInline
                muted
                loop
                preload="metadata"
                className="w-full h-full object-cover aspect-[9/16]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Landscape video near end */}
      <section id="portfolio" ref={landscapeRef} className="py-10 px-[5%] max-w-[1400px] mx-auto">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 relative">
          <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded-md text-[10px] font-semibold bg-black/60 border border-white/20 text-yellow-300">
            Feature
          </div>
          <video
            src={landscapeVideo}
            playsInline
            muted
            loop
            preload="metadata"
            className="w-full h-full object-cover aspect-video"
          />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <h2 className="text-center text-[clamp(36px,5vw,48px)] font-bold mb-14 tracking-tight">SKILLS & EXPERTISE</h2>
        <div className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {[{
            cat:'Content Creation', items:[
              '• Video Production & Editing',
              '• Photography & Visual Design',
              '• Copywriting & Storytelling',
              '• Trend Analysis & Adaptation']
          },{
            cat:'Social Media Management', items:[
              '• Instagram Growth Strategy',
              '• TikTok Content Optimization',
              '• YouTube Channel Management',
              '• Community Engagement']
          },{
            cat:'Analytics & Strategy', items:[
              '• Data Analysis & Insights',
              '• Campaign Planning & Execution',
              '• ROI Tracking & Reporting',
              '• A/B Testing & Optimization']
          },{
            cat:'Tools & Platforms', items:[
              '• Meta Business Suite',
              '• TikTok Analytics',
              '• Canva & CapCut',
              '• Google Analytics']
          }].map((col, i) => (
            <div key={i} className="bg-[#0a0a0a] p-9 rounded-xl border border-white/5">
              <h3 className="text-lg font-semibold mb-5 text-[#00d4ff]">{col.cat}</h3>
              <div className="flex flex-col gap-3 text-sm text-neutral-300">
                {col.items.map((it, idx) => (
                  <div key={idx}>{it}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Removed testimonial per request */}

      {/* Contact */}
      <section id="contact" className="bg-[#0a0a0a] py-24 px-[5%] text-center">
        <h2 className="text-[clamp(32px,5vw,48px)] font-bold tracking-tight mb-3">LET'S CREATE SOMETHING AMAZING</h2>
        <p className="text-lg text-neutral-400 mb-10">Ready to elevate your brand's digital presence? Let's connect and discuss how we can work together.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-black font-semibold rounded-md">
            <Mail size={20} />
            Get in Touch
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-white rounded-md">
            <Linkedin size={20} />
            LinkedIn
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-white rounded-md">
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-[5%] py-10 border-t border-white/5 text-center">
        <p className="text-sm text-neutral-500 mb-5">© 2024 Preksha Tyagi. All rights reserved.</p>
        <div className="flex gap-6 justify-center">
          <Instagram size={20} className="text-neutral-400 cursor-pointer" />
          <Linkedin size={20} className="text-neutral-400 cursor-pointer" />
          <Mail size={20} className="text-neutral-400 cursor-pointer" />
        </div>
      </footer>

      {/* Back to Top */}
      <button onClick={scrollToTop} className={`fixed bottom-7 right-7 bg-[#00d4ff] text-black w-12 h-12 rounded-full grid place-items-center transition-opacity ${showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ArrowUp size={20} />
      </button>

      {/* Removed modal because only direct inline videos remain */}
      </div>
  );
};

export default Portfolio;

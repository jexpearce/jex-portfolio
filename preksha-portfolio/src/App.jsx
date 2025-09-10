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

  // Only 4 assets: 1 image + 3 videos
  const base = import.meta.env.BASE_URL || '/';
  const profileImage = `${base}media/image0.png`;
  const verticalVideos = [
    { mp4: `${base}media/vertical-1.mp4`, fallback: `${base}media/Video_1.MOV` },
    { mp4: `${base}media/vertical-2.mp4`, fallback: `${base}media/Video-1.MOV` },
  ];
  const landscapeVideo = { mp4: `${base}media/feature.mp4`, fallback: `${base}media/Video.MOV` };

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

      {/* Hero: Name + Photo only */}
      <section id="home" className="relative min-h-[85svh] flex items-center bg-gradient-to-br from-fuchsia-600/10 via-sky-500/10 to-emerald-500/10">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 gap-10 items-center px-[5%] w-full">
          <div className="[animation:fadeInUp]">
            <div className="inline-block relative">
              <h1 className="text-[clamp(48px,8vw,88px)] font-extrabold leading-none tracking-tight font-grotesk">PREKSHA TYAGI</h1>
              <span className="absolute -inset-1 -z-10 rounded-xl blur-xl bg-[linear-gradient(135deg,#FFD70033,#00E5FF33)]" />
            </div>
            <p className="text-lg text-neutral-300 mt-2 font-jakarta">Digital Marketing Strategist | Content Creator | Brand Storyteller</p>
          </div>
          <div className="h-[520px] rounded-2xl border-2 border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] relative overflow-hidden bg-neutral-900">
            <img src={profileImage} alt="Preksha" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
          </div>
        </div>
        <button onClick={() => scrollToSection('intro')} className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounceX">
          <ChevronDown size={30} color="#888" />
        </button>
      </section>

      {/* Intro: description + CTA */}
      <section id="intro" className="py-20 px-[5%] max-w-[1200px] mx-auto">
        <div className="text-[17px] leading-7 text-neutral-200 border border-white/10 rounded-xl bg-white/[.03] p-6 backdrop-blur-sm">
          Hey there! I'm Preksha Tyagi — an Economics & Business Management graduate with a creative spark and a data-driven mindset.
          From building brand stories to boosting online visibility, I bring marketing strategies to life with flair and focus.
          Whether it's crafting compelling campaigns or analyzing what makes audiences tick, I'm passionate about turning ideas into impact.
        </div>
        <p className="mt-4 text-[20px] font-semibold -tracking-[.5px] bg-gradient-to-r from-[#FFD700] via-[#8AF5FF] to-[#FFD700] bg-clip-text text-transparent">Welcome to my digital marketing portfolio — where creativity meets conversion!</p>
        <div className="mt-6 flex gap-4">
          <button onClick={() => scrollToSection('work')} className="px-5 py-3 bg-[#FFD700] text-black font-semibold rounded-md">View My Work</button>
          <button onClick={() => scrollToSection('contact')} className="px-5 py-3 border border-white/20 rounded-md">Get in Touch</button>
        </div>
      </section>

      {/* Reels (2 portrait videos) */}
      <section id="work" ref={reelsRef} className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <h2 className="text-center text-[clamp(36px,5vw,48px)] font-bold mb-14 tracking-tight">MY WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verticalVideos.map((video, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 relative">
              <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded-md text-[10px] font-semibold bg-black/60 border border-white/20 text-yellow-300">
                Reels
              </div>
              <video playsInline muted loop preload="metadata" className="w-full h-full object-cover aspect-[9/16]">
                <source src={video.mp4} type="video/mp4" />
                <source src={video.fallback} type="video/quicktime" />
              </video>
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
          <video playsInline muted loop preload="metadata" className="w-full h-full object-cover aspect-video">
            <source src={landscapeVideo.mp4} type="video/mp4" />
            <source src={landscapeVideo.fallback} type="video/quicktime" />
          </video>
        </div>
      </section>

      {/* Featured Pages - screenshots */}
      <section id="brands" className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <h2 className="text-center text-[clamp(36px,5vw,48px)] font-bold mb-14 tracking-tight">FEATURED PAGES</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* the_weirdough_ */}
          <a href="https://www.instagram.com/the_weirdough_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] hover:-translate-y-1 transition-all">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.instagram.com%2Fthe_weirdough_%2F?w=1200"
                alt="@the_weirdough_ Instagram"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="font-semibold">@the_weirdough_</div>
              <ExternalLink size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
          </a>

          {/* thedurhamstudent (TikTok) */}
          <a href="https://www.tiktok.com/@thedurhamstudent?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] hover:-translate-y-1 transition-all">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.tiktok.com%2F%40thedurhamstudent?w=1200"
                alt="@thedurhamstudent TikTok"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="font-semibold">@thedurhamstudent</div>
              <ExternalLink size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
          </a>

          {/* JustParkHQ */}
          <a href="https://www.instagram.com/justparkhq/" target="_blank" rel="noopener noreferrer" className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] hover:-translate-y-1 transition-all">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.instagram.com%2Fjustparkhq%2F?w=1200"
                alt="@JustparkHQ Instagram"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="font-semibold">@JustparkHQ</div>
              <ExternalLink size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-[5%] max-w-[1200px] mx-auto">
        <h2 className="text-center text-[clamp(36px,5vw,48px)] font-bold mb-10 tracking-tight">SKILLS</h2>
        <div className="space-y-6">
          <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/10">
            <h3 className="text-[#FFD700] font-semibold mb-2">Marketing & Campaigns</h3>
            <p className="text-neutral-300 text-sm">B2B Marketing, CRM/Email Campaigns, Content Creation, Campaign Reporting, Social Media Strategy, Influencer Outreach, Event Marketing</p>
          </div>
          <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/10">
            <h3 className="text-[#FFD700] font-semibold mb-2">Digital Tools & Analytics</h3>
            <p className="text-neutral-300 text-sm">SEMrush, Google Search Console, Salesforce, Meta Business Suite, Google Analytics, Excel, SAS, Canva, Photoshop, Hootsuite</p>
          </div>
          <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/10">
            <h3 className="text-[#FFD700] font-semibold mb-2">Soft Skills</h3>
            <p className="text-neutral-300 text-sm">Attention to Detail, Problem-Solving, Organisation, Collaboration</p>
          </div>
        </div>
      </section>

      {/* Removed testimonial per request */}

      {/* Contact */}
      <section id="contact" className="bg-[#0a0a0a] py-24 px-[5%] text-center">
        <h2 className="text-[clamp(32px,5vw,48px)] font-bold tracking-tight mb-3">LET'S CREATE SOMETHING AMAZING</h2>
        <p className="text-lg text-neutral-400 mb-10">Ready to elevate your brand's digital presence? Let's connect and discuss how we can work together.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="mailto:emailtopreksha@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-black font-semibold rounded-md">
            <Mail size={20} />
            emailtopreksha@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/preksha-tyagi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-white rounded-md">
            <Linkedin size={20} />
            LinkedIn
          </a>
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

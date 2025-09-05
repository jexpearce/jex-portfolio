import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown, Play, Instagram, Youtube, ExternalLink, Menu, X, Mail, Linkedin, Download, Star, ArrowUp } from 'lucide-react';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videos = useMemo(() => ([
    { id: 1, category: 'Personal Brand', platform: 'instagram', title: 'Lifestyle Content', engagement: '12.5K views', thumbnail: '🎬' },
    { id: 2, category: 'Personal Brand', platform: 'instagram', title: 'Brand Collaboration', engagement: '8.2K views', thumbnail: '🎬' },
    { id: 3, category: 'Personal Brand', platform: 'instagram', title: 'Trending Reel', engagement: '15K views', thumbnail: '🎬' },
    { id: 4, category: 'Personal Brand', platform: 'instagram', title: 'Product Feature', engagement: '9.7K views', thumbnail: '🎬' },
    { id: 5, category: 'Durham Student', platform: 'tiktok', title: 'Campus Life', engagement: '25K views', thumbnail: '🎬' },
    { id: 6, category: 'Durham Student', platform: 'tiktok', title: 'Student Tips', engagement: '18K views', thumbnail: '🎬' },
    { id: 7, category: 'Durham Student', platform: 'tiktok', title: 'Viral Challenge', engagement: '45K views', thumbnail: '🎬' },
    { id: 8, category: 'JustPark', platform: 'instagram', title: 'Product Demo', engagement: '6.5K views', thumbnail: '🎬' },
    { id: 9, category: 'JustPark', platform: 'instagram', title: 'User Testimonial', engagement: '4.2K views', thumbnail: '🎬' },
    { id: 10, category: 'JustPark', platform: 'instagram', title: 'Feature Launch', engagement: '7.8K views', thumbnail: '🎬' },
  ]), []);

  const youtubeFeatures = useMemo(() => ([
    { id: 11, title: 'Digital Marketing Insights', channel: 'Marketing Weekly', views: '50K views', thumbnail: '📺' },
    { id: 12, title: 'Content Strategy Masterclass', channel: 'Creator Hub', views: '32K views', thumbnail: '📺' },
  ]), []);

  const filteredVideos = useMemo(() => (
    activeFilter === 'All' ? videos : videos.filter(v => v.category === activeFilter)
  ), [activeFilter, videos]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-black text-white font-inter">
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
      <section id="home" className="relative min-h-[100svh] flex items-center bg-[radial-gradient(circle_at_20%_50%,rgba(29,29,29,.5)_0%,transparent_50%)]">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-[60%_40%] gap-10 items-center px-[5%] w-full">
          <div className="[animation:fadeInUp]">
            <h1 className="text-[clamp(48px,8vw,88px)] font-extrabold leading-none tracking-tight">PREKSHA TYAGI</h1>
            <p className="text-lg text-neutral-400 mt-2">Digital Marketing Strategist | Content Creator | Brand Storyteller</p>
            <div className="mt-6 text-[17px] leading-7 text-neutral-300 border border-white/10 rounded-lg bg-white/[.02] p-6">
              Hey there! I'm Preksha Tyagi — an Economics & Business Management graduate with a creative spark and a data-driven mindset! 
              From building brand stories to boosting online visibility, I bring marketing strategies to life with flair and focus. 
              Whether it's crafting compelling campaigns or analyzing what makes audiences tick, I'm passionate about turning ideas into impact.
            </div>
            <p className="mt-4 text-[20px] font-semibold text-[#00d4ff] -tracking-[.5px]">Welcome to my digital marketing portfolio — where creativity meets conversion!</p>
          </div>
          <div className="h-[500px] rounded-2xl border-2 border-white/5 shadow-[0_25px_50px_rgba(0,0,0,0.5)] relative overflow-hidden bg-neutral-900 flex items-center justify-center">
            <div className="text-center text-neutral-500">
              <div className="text-7xl mb-2">📸</div>
              <p>Professional Photo</p>
            </div>
          </div>
        </div>
        <button onClick={() => scrollToSection('work')} className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounceX">
          <ChevronDown size={30} color="#888" />
        </button>
      </section>

      {/* Work */}
      <section id="work" className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <h2 className="text-center text-[clamp(36px,5vw,48px)] font-bold mb-14 tracking-tight">MY WORK</h2>
        <div className="grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(350px,1fr))] mb-20">
          {[
            {title:'@the_weirdough_', icon:<Instagram size={20}/>, subtitle:'Personal Brand | Paid Collaborations', desc:'Building authentic connections through lifestyle content and strategic brand partnerships'},
            {title:'@thedurhamstudent', icon:null, subtitle:'University Part-Time | Multi-Platform Management', desc:'Managing Instagram and TikTok presence for student community engagement'},
            {title:'@JustparkHQ', icon:null, subtitle:'Marketing Internship | Content Strategy', desc:'Developing engaging social content and campaigns for parking technology startup'},
          ].map((card, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-10 transition-all hover:-translate-y-1 hover:border-[#00d4ff]/30 hover:shadow-glow cursor-pointer overflow-hidden">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                {card.title} {card.icon}
              </h3>
              <p className="text-xs text-[#00d4ff] uppercase tracking-wider mb-4">{card.subtitle}</p>
              <p className="text-sm text-neutral-400 leading-6 mb-6">{card.desc}</p>
              <button className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-md text-sm font-medium">
                View Work <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <h2 className="text-center text-[clamp(36px,5vw,48px)] font-bold mb-14 tracking-tight">CONTENT THAT CONVERTS</h2>
        <div className="flex justify-center gap-4 flex-wrap mb-14">
          {['All', 'Personal Brand', 'Durham Student', 'JustPark'].map(filter => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-6 py-2 rounded-full text-sm font-medium border transition-all ${activeFilter===filter ? 'bg-[#00d4ff] border-[#00d4ff] text-black' : 'border-white/10 text-neutral-400 hover:text-white'}`}>
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-7 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
          {filteredVideos.map(video => (
            <button key={video.id} onClick={() => setSelectedVideo(video)} className="text-left bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 transition-transform hover:-translate-y-1">
              <div className="relative aspect-[9/16] bg-neutral-900 grid place-items-center text-5xl">
                {video.thumbnail}
                <div className="absolute inset-0 grid place-items-center">
                  <span className="bg-black/70 rounded-full p-3">
                    <Play size={24} color="#fff" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-base font-semibold mb-1">{video.title}</h4>
                <div className="text-xs text-neutral-400 flex items-center gap-4">
                  {video.platform === 'instagram' ? <Instagram size={14} /> : <span className="text-base">🎵</span>}
                  <span>{video.engagement}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* YouTube Features */}
        <div className="mt-24">
          <h3 className="text-center text-[32px] font-bold mb-10">AS FEATURED ON</h3>
          <div className="grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(500px,1fr))]">
            {youtubeFeatures.map(video => (
              <div key={video.id} className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5">
                <div className="aspect-video bg-neutral-900 grid place-items-center text-6xl">
                  {video.thumbnail}
                </div>
                <div className="p-5">
                  <h4 className="text-base font-semibold mb-1">{video.title}</h4>
                  <div className="text-xs text-neutral-400 flex items-center gap-2">
                    <Youtube size={14} />
                    <span>{video.channel}</span>
                    <span>•</span>
                    <span>{video.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* Testimonial */}
      <section className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <h2 className="text-center text-[clamp(36px,5vw,48px)] font-bold mb-14 tracking-tight">WHAT THEY SAY</h2>
        <div className="bg-[#0a0a0a] p-12 rounded-2xl text-center max-w-3xl mx-auto border border-white/5">
          <div className="text-5xl text-neutral-700 mb-3">"</div>
          <p className="text-xl italic leading-relaxed text-neutral-300 mb-6">
            Preksha brings a unique combination of creative vision and analytical thinking to every project. 
            Her ability to understand brand voice and translate it into engaging content has significantly 
            improved our social media presence and engagement metrics.
          </p>
          <div>
            <div className="flex justify-center gap-1.5 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} className="text-[#00d4ff] fill-[#00d4ff]" />)}
            </div>
            <p className="font-semibold">Sarah Mitchell</p>
            <p className="text-sm text-neutral-400">Marketing Manager, JustPark</p>
          </div>
        </div>
      </section>

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

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-[60] grid place-items-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="bg-[#1a1a1a] rounded-2xl p-8 max-w-3xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-5 right-5 text-white" onClick={() => setSelectedVideo(null)}>
              <X size={24} />
            </button>
            <h3 className="text-xl font-semibold mb-5">{selectedVideo.title}</h3>
            <div className="bg-black aspect-[9/16] max-h-[600px] mx-auto grid place-items-center rounded-xl">
              <Play size={48} color="#fff" />
            </div>
            <p className="mt-5 text-neutral-400">{selectedVideo.engagement}</p>
          </div>
        </div>
      )}
      </div>
  );
};

export default Portfolio;

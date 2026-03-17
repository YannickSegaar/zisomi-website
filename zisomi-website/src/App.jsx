import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Globe, ShieldCheck, Wind, MapPin, CheckCircle2, ChevronRight, Activity, ScanLine, Waves, Shirt, Plane, Package, Box, ChevronLeft, Compass, Building2, Mail, Phone, Users, TrendingUp, Award, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Smooth scroll helper ---
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

// --- Component Fragments ---

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <img src={`${import.meta.env.BASE_URL}assets/ZisomiLogo.jpeg`} alt="Zisomi Logo" className="h-10 w-10 object-cover rounded-full" />
    <span className="font-heading font-bold text-2xl tracking-tight text-dark-text group-hover:text-primary transition-colors">
      Zisomi
    </span>
  </div>
);

const MagneticButton = ({ children, className = '', onClick }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let ctx = gsap.context(() => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.03,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }, buttonRef);
    return () => ctx.revert();
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative overflow-hidden rounded-[2rem] px-8 py-4 font-sans font-medium hover:-translate-y-[1px] transition-all group shadow-lg ${className}`}
    >
      <span className="absolute inset-0 w-full h-full bg-black/10 origin-left -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0"></span>
      <span className="relative z-10 flex text-lg items-center justify-center gap-2">{children}</span>
    </button>
  );
};

// --- Page Sections ---

const TopUtilityBar = () => (
  <div className="w-full bg-breton-stripes text-white py-2 px-6 flex justify-center items-center text-[10px] md:text-xs font-heading font-medium tracking-widest uppercase border-b border-dark/5 relative z-[60]">
    <div className="absolute inset-0 bg-dark/70 backdrop-blur-sm z-0"></div>
    <div className="relative z-10 text-center">
      Launching Q4 2026 — Retail Partnership Applications Now Open
    </div>
  </div>
);

const Navbar = () => {
  return (
    <>
      <TopUtilityBar />
      <nav className="fixed top-[32px] md:top-[32px] left-0 right-0 z-50 px-6 bg-white/95 backdrop-blur-md border-b border-dark/5 pb-4 pt-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center">
              <span className="sr-only">Zisomi</span>
              <img src={`${import.meta.env.BASE_URL}assets/ZisomiLogo.jpeg`} alt="Zisomi" className="h-[28px] object-contain" />
            </div>
            <div className="hidden md:flex items-center gap-8 font-heading text-sm text-dark-text font-medium border-b border-transparent pb-1 tracking-[0.2em] uppercase">
              <a href="#product" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }} className="hover:text-primary transition-colors inline-block tracking-widest">Product</a>
              <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="hover:text-primary transition-colors inline-block tracking-widest">Features</a>
              <a href="#partnership" onClick={(e) => { e.preventDefault(); scrollToSection('partnership'); }} className="hover:text-primary transition-colors inline-block tracking-widest">Partnership</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-primary transition-colors inline-block tracking-widest">Contact</a>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('partnership')}
              className="hidden md:inline-flex items-center gap-2 bg-primary text-white text-xs font-heading font-bold tracking-wider uppercase px-5 py-2.5 rounded-full hover:bg-dark transition-colors"
            >
              Become a Partner
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const suitcaseRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-text-card', {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('.hero-text', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
      });

      gsap.fromTo(suitcaseRef.current,
        { y: 150, opacity: 0, rotation: -5, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power4.out',
          delay: 0.8
        }
      );

      gsap.to(suitcaseRef.current, {
        y: -15,
        rotation: 1,
        duration: 4.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2.3
      });

      gsap.fromTo(card1Ref.current,
        { scale: 0, opacity: 0, rotation: 10 },
        { scale: 1, opacity: 1, rotation: -2, duration: 1, ease: 'back.out(1.5)', delay: 1.2 }
      );
      gsap.to(card1Ref.current, {
        y: -10,
        rotation: 2,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2.2
      });

      gsap.fromTo(card2Ref.current,
        { scale: 0, opacity: 0, rotation: -10 },
        { scale: 1, opacity: 1, rotation: 3, duration: 1, ease: 'back.out(1.5)', delay: 1.5 }
      );
      gsap.to(card2Ref.current, {
        y: 12,
        x: -5,
        rotation: 0,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2.5
      });

    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] w-full flex items-center justify-center pt-24 pb-12 overflow-hidden">

      <div className="hero-stripes-bg absolute inset-0 bg-breton-stripes opacity-90" style={{ backgroundSize: '100px 100px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/10 mix-blend-overlay"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

        <div className="w-full md:w-1/2 flex justify-start pt-8 md:pt-0">
          <div className="hero-text-card bg-sand/95 backdrop-blur-md p-8 md:p-12 lg:p-16 border border-dark/5 shadow-2xl rounded-2xl md:rounded-3xl relative z-20 max-w-[560px]">
            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-primary shadow-sm border-2 border-sand"></div>

            <h1 className="flex flex-col gap-3">
              <span className="hero-text font-heading font-bold text-4xl lg:text-6xl text-primary tracking-tight leading-[1.0] uppercase">
                Europe's First
              </span>
              <span className="hero-text font-heading font-bold text-4xl lg:text-6xl text-dark tracking-tight leading-[1.0] uppercase mt-2">
                Trackable Luggage Brand.
              </span>
              <span className="hero-text font-serif italic text-lg md:text-xl text-dark-text mt-6 border-t border-dark/10 pt-6">
                Premium luggage with integrated GPS tracking — now seeking retail partners across Europe.
              </span>
            </h1>

            <div className="hero-text mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticButton onClick={() => scrollToSection('partnership')} className="bg-primary text-white hover:bg-dark transition-colors duration-300 w-full sm:w-auto shadow-xl shadow-primary/20">
                Partner With Us
              </MagneticButton>
              <MagneticButton onClick={() => scrollToSection('product')} className="bg-transparent text-primary border-2 border-primary hover:bg-primary/5 transition-colors duration-300 w-full sm:w-auto">
                View Collection
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[70vh] flex items-center justify-center mt-12 md:mt-0">

          <div className="relative z-10 w-[80%] max-w-[450px]">
             <div className="absolute inset-0 bg-sand/30 blur-3xl rounded-full scale-110"></div>
             <img
              ref={suitcaseRef}
              src={`${import.meta.env.BASE_URL}assets/20260121_Zisomi_Techpack_3-4_Front_CMF_Teal.png`}
              alt="Zisomi Teal Carry-on Suitcase"
              className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] relative z-10"
            />
          </div>

          <div
            ref={card1Ref}
            className="absolute top-[10%] -right-4 md:-right-8 lg:-right-12 z-20 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl shadow-dark/10 border border-dark/5 flex items-center gap-3 w-max"
          >
            <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary shrink-0">
              <Compass size={20} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-primary">GPS Integrated</span>
              <span className="text-sm font-medium text-dark-text">Trackable Luggage</span>
            </div>
          </div>

          <div
            ref={card2Ref}
            className="absolute bottom-[10%] -left-4 md:-left-8 lg:-left-12 z-20 bg-dark/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl shadow-dark/20 border border-white/5 flex items-center gap-3 w-max"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
              <ShieldCheck size={20} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/50">Guaranteed</span>
              <span className="text-sm font-medium text-white">Lifetime Warranty</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ValueBanner = () => {
  return (
    <div className="w-full bg-sky/20 border-b border-dark/5 py-4 px-6 mb-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 font-heading font-bold text-dark-text text-xs tracking-widest uppercase">
        <div className="flex items-center gap-3">
          <TrendingUp size={18} className="text-primary"/>
          Premium Retail Margins
        </div>
        <div className="flex items-center gap-3">
          <Users size={18} className="text-primary"/>
          Marketing & Sales Support
        </div>
        <div className="flex items-center gap-3">
          <Award size={18} className="text-primary"/>
          Exclusive Territory Rights
        </div>
      </div>
    </div>
  );
};

const Collection = () => {
  const products = [
    { id: 1, name: 'Carry-on luggage', img: `${import.meta.env.BASE_URL}assets/20260121_Zisomi_Techpack_3-4_Front_CMF_Teal.png`, color: 'Teal' },
    { id: 2, name: 'Carry-on luggage', img: `${import.meta.env.BASE_URL}assets/20260121_Zisomi_Techpack_3-4_Front_CMF_Charcoal.png`, color: 'Charcoal' },
    { id: 3, name: 'Carry-on luggage', img: `${import.meta.env.BASE_URL}assets/20260121_Zisomi_Techpack_3-4_Front_CMF_Copper.png`, color: 'Copper' },
    { id: 4, name: 'Carry-on luggage', img: `${import.meta.env.BASE_URL}assets/20260121_Zisomi_Techpack_3-4_Front_CMF_Sand.png`, color: 'Sand' }
  ];

  return (
    <section id="product" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-heading font-bold text-2xl tracking-widest uppercase text-dark-text">The Collection</h2>
          <p className="text-dark-text/60 font-sans text-sm mt-2">Four signature colorways. One innovative platform.</p>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full border border-dark/20 flex items-center justify-center hover:bg-sand transition-colors">
            <ChevronLeft size={20} className="text-dark/50" />
          </button>
          <button className="w-10 h-10 rounded-full border border-dark/20 flex items-center justify-center hover:bg-sand transition-colors">
            <ChevronRight size={20} className="text-dark/50" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative bg-[#F8F7F5] rounded-xl mb-4 aspect-[4/5] flex items-center justify-center p-6 overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              />
            </div>
            <div className="flex justify-between items-start font-sans">
              <div>
                <h3 className="font-semibold text-sm text-dark-text">{product.name}</h3>
                <p className="text-xs text-dark/60 mt-1">{product.color}</p>
              </div>
              <div className="w-4 h-4 rounded-full border shadow-sm border-dark/10" style={{ backgroundColor: product.color === 'Teal' ? '#688c87' : product.color === 'Charcoal' ? '#4a4d5e' : product.color === 'Copper' ? '#a54422' : '#d2d1c1' }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



const FeatureShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Airport Bound", desc: "Always know your bags made the flight.", icon: <Globe className="text-primary" /> },
    { id: 2, title: "Beachside", desc: "Relax. Your luggage is right where it should be.", icon: <Waves className="text-primary" /> },
    { id: 3, title: "Hotel Check-in", desc: "Seamless arrival with peace of mind.", icon: <MapPin className="text-primary" /> },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 w-full flex items-center justify-center">
      {cards.map((card, i) => {
        return (
          <div
            key={card.id}
            className="absolute w-72 h-36 bg-white rounded-[2rem] p-6 shadow-sm border border-dark/5 flex flex-col justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              transform: `translateY(${i * 20 - 20}px) scale(${1 - i * 0.05}) rotate(${i % 2 === 0 ? i * 2 : -i * 2}deg)`,
              zIndex: 10 - i,
              opacity: 1 - i * 0.2,
              boxShadow: i === 0 ? '0 20px 40px -10px rgba(114, 36, 21, 0.1)' : 'none'
            }}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center">
                {card.icon}
              </div>
              <h4 className="font-heading font-bold text-lg text-dark-text">{card.title}</h4>
            </div>
            <p className="text-sm text-dark-text/60 pl-14 font-sans leading-tight pr-2">{card.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

const FeatureTypewriter = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Every product ships with a lifetime warranty. Fewer returns, higher satisfaction, a brand your customers recommend.";

  useEffect(() => {
    let index = 0;
    setIsTyping(true);
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => { index = 0; setText(''); setIsTyping(true); }, 5000);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 bg-sand rounded-[2rem] p-8 shadow-sm flex flex-col relative overflow-hidden border border-dark/5 group">
      <div className="absolute top-0 right-8 w-16 h-4 bg-primary rounded-b-lg opacity-80 transition-transform duration-500 group-hover:translate-y-2"></div>
      <div className="absolute top-0 right-14 w-2 h-8 bg-white opacity-90 transition-transform duration-500 delay-75 group-hover:translate-y-2"></div>

      <div className="flex items-center gap-3 mb-6 relative z-10">
        <ShieldCheck className="text-primary" size={24} />
        <span className="font-heading font-bold text-dark-text tracking-wide">Our Guarantee</span>
      </div>

      <div className="flex-1 relative z-10">
        <p className="text-lg md:text-xl font-heading font-medium text-dark leading-relaxed">
          "{text}<span className={`inline-block w-2 h-5 bg-primary ml-1 ${isTyping ? 'animate-pulse' : 'hidden'}`}></span>"
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-dark/10 pt-4 relative z-10">
        <ShieldCheck className="text-dark/40" size={20} />
        <span className="text-sm font-sans font-medium text-dark/60">Lifetime Guarantee</span>
      </div>
    </div>
  );
};

const FeatureScheduler = () => {
  const items = Array(8).fill(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.set('.laundry-item', { scale: 0, opacity: 0, y: 20 });
      tl.set('.fresh-badge', { scale: 0, rotation: -15 });

      tl.to('.laundry-item', {
        scale: 1,
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: 'back.out(1.5)'
      });

      tl.to('.fresh-badge', {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      }, "+=0.2");

      tl.to('.laundry-item, .fresh-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        stagger: 0.05
      }, "+=2.5");

    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-64 bg-white rounded-[2rem] p-6 shadow-sm border border-dark/5 relative flex flex-col justify-center items-center">
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <Wind className="text-accent" size={20} />
        <span className="font-heading text-sm font-bold text-dark-text">Fresh Always</span>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-4">
        {items.map((_, i) => (
          <div key={i} className="laundry-item w-12 h-12 rounded-xl bg-sand flex items-center justify-center border border-dark/5">
            {i % 3 === 0 ? <Shirt size={20} className="text-primary" /> :
             i % 2 === 0 ? <Wind size={20} className="text-accent" /> :
             <div className="w-4 h-1 bg-dark/20 rounded-full"></div>}
          </div>
        ))}
      </div>

      <div className="fresh-badge absolute bottom-6 flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full font-heading font-bold shadow-lg shadow-primary/20">
        <CheckCircle2 size={16} /> <span>Odor Sealed</span>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="pb-32 pt-16 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark-text text-center">
            Innovation That Sells. <br/>
            <span className="text-primary italic font-serif">Differentiate your shelves.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center md:text-left">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[3rem] border border-border transition-all hover:bg-white/80 hover:shadow-lg">
            <div className="mb-10">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">Trackable Luggage</h3>
              <p className="text-dark-text/70 font-sans leading-relaxed text-sm">Europe's first integrated GPS tracking. A unique selling point no competitor offers.</p>
            </div>
            <FeatureShuffler />
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[3rem] border border-border transition-all hover:bg-white/80 hover:shadow-lg">
            <div className="mb-10">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">Lifetime Warranty</h3>
              <p className="text-dark-text/70 font-sans leading-relaxed text-sm">A lifetime guarantee that builds customer loyalty and reduces returns.</p>
            </div>
            <FeatureTypewriter />
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[3rem] border border-border transition-all hover:bg-white/80 hover:shadow-lg">
            <div className="mb-10">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">Odor-Free Laundry Bag</h3>
              <p className="text-dark-text/70 font-sans leading-relaxed text-sm">A proprietary included accessory that adds perceived value and drives recommendations.</p>
            </div>
            <FeatureScheduler />
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnershipForm = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.partnership-animate', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="partnership" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* Left column */}
        <div className="partnership-animate bg-dark rounded-3xl p-10 md:p-14 flex flex-col justify-center">
          <span className="font-heading font-bold text-[10px] tracking-[0.3em] uppercase text-primary mb-4">Partnership</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
            Grow With Europe's Most Innovative Luggage Brand
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-8">
            Join a select network of retail partners bringing the next generation of trackable luggage to travellers across Europe. We provide everything you need to succeed.
          </p>
          <ul className="space-y-4">
            {[
              'Competitive wholesale pricing with premium margins',
              'Dedicated account management & onboarding',
              'Co-branded marketing materials & display units',
              'Exclusive territory agreements available'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/70 font-sans text-sm">
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column */}
        <div className="partnership-animate bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-dark/5" id="contact">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle2 size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-dark-text mb-3">Thank You</h3>
              <p className="text-dark-text/60 font-sans max-w-sm">
                Your enquiry has been received. We'll be in touch within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-heading font-bold text-xl text-dark-text mb-2">Enquire About Partnership</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-dark-text/60 mb-1.5">Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-background/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-dark-text/60 mb-1.5">Contact Person</label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-background/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-dark-text/60 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-background/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-dark-text/60 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-background/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-dark-text/60 mb-1.5">Business Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-background/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select your business type</option>
                  <option value="retail">Retail Store</option>
                  <option value="online">Online Retailer</option>
                  <option value="department">Department Store</option>
                  <option value="travel">Travel Retail</option>
                  <option value="distributor">Distributor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-dark-text/60 mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-background/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                />
              </div>

              <MagneticButton onClick={undefined} className="bg-primary text-white hover:bg-dark transition-colors duration-300 w-full shadow-xl shadow-primary/20 !py-3.5">
                Submit Enquiry <Send size={18} />
              </MagneticButton>

              <p className="text-xs text-dark-text/40 font-sans text-center">We'll respond within 2 business days.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-12 px-6 text-sand relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <div className="h-[2px] w-6 bg-white"></div>
            </div>
            <span className="font-heading font-bold text-3xl tracking-tight text-white">Zisomi</span>
          </div>
          <p className="text-sand/60 font-sans max-w-sm mb-8">
            Europe's first trackable luggage brand. Launching Q4 2026.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Products</h4>
          <ul className="space-y-4 text-sand/70 font-sans">
            <li><a href="#product" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }} className="hover:text-primary transition-colors">The Carry-On</a></li>
            <li><a href="#product" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }} className="hover:text-primary transition-colors">The Checked</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="hover:text-primary transition-colors">Technology</a></li>
            <li><a href="#product" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }} className="hover:text-primary transition-colors">Colorways</a></li>
          </ul>
        </div>

        <div>
           <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Partnership</h4>
          <ul className="space-y-4 text-sand/70 font-sans">
            <li><a href="#partnership" onClick={(e) => { e.preventDefault(); scrollToSection('partnership'); }} className="hover:text-primary transition-colors">Become a Partner</a></li>
            <li><a href="#partnership" onClick={(e) => { e.preventDefault(); scrollToSection('partnership'); }} className="hover:text-primary transition-colors">Wholesale Enquiries</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Press Kit</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-sand/50 font-sans">
        <p>&copy; {new Date().getFullYear()} Zisomi Ltd. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-sand">Privacy</a>
          <a href="#" className="hover:text-sand">Terms</a>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <Navbar />
      <Hero />
      <ValueBanner />
      <Collection />
      <Features />
      <PartnershipForm />
      <Footer />
    </div>
  );
}

export default App;

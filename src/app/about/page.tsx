"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Target, Eye, Users, Award, Shield, Star, TrendingUp,
  CheckCircle, MapPin, Lightbulb, Heart, Building, Linkedin, Twitter
} from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

const AboutUs = () => {
  const animRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('egv-visible'); observer.unobserve(e.target); } }); },
      { threshold: 0.12 }
    );
    animRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => { if (el && !animRefs.current.includes(el)) animRefs.current.push(el); };

  // Premium palette inspired by the provided logo
  const theme = {
    ink: '#070B18',
    indigo900: '#12163F',
    indigo800: '#1E2360',
    indigo700: '#2C3382',
    purple500: '#6E55E9',
    green700: '#2F7A41',
    green600: '#4A9550',
    lime500: '#C8DD58',
    lime300: '#E5F4A4',
    surface: '#FFFFFF',
    canvas: '#F8F6FF',
    muted: '#667085',
    text: '#111827',
  } as const;

  const coreValues = [
    { id: 1, title: 'Integrity', description: 'Ensuring transparency and trust in every interaction', icon: <Shield className="w-6 h-6" />, gradient: `linear-gradient(135deg,${theme.indigo800},${theme.green700})` },
    { id: 2, title: 'Excellence', description: 'Delivering high-quality solutions and services', icon: <Star className="w-6 h-6" />, gradient: `linear-gradient(135deg,${theme.indigo700},${theme.lime500})` },
    { id: 3, title: 'Client-Centricity', description: 'Tailoring services to unique business needs', icon: <Heart className="w-6 h-6" />, gradient: `linear-gradient(135deg,${theme.green600},${theme.lime500})` },
    { id: 4, title: 'Innovation', description: 'Driving smarter solutions through technology', icon: <Lightbulb className="w-6 h-6" />, gradient: `linear-gradient(135deg,${theme.purple500},${theme.lime500})` },
    { id: 5, title: 'Reliability', description: 'Being a dependable partner for growth', icon: <CheckCircle className="w-6 h-6" />, gradient: `linear-gradient(135deg,${theme.indigo800},${theme.purple500})` },
  ];

  const leadershipTeam = [
    { id: 1, name: 'Bhadoriya Mohini', position: 'Co-Founder', experience: '5+ years experience', role: 'Strategy, Partnerships & Business Growth', initials: 'MB', avatarGradient: `linear-gradient(135deg,${theme.indigo800},${theme.green700})`, social: ['linkedin'], linkedinUrl: 'https://www.linkedin.com/in/mohini-bhadoriya-56605b276?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { id: 2, name: 'Dev Kishan', position: 'CEO', experience: '8+ years experience', role: 'Leadership, Execution & Company Operations', initials: 'DK', avatarGradient: `linear-gradient(135deg,${theme.indigo700},${theme.purple500})`, social: ['linkedin'], linkedinUrl: 'https://www.linkedin.com/in/balkishan-parihar-41771a35a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 3, name: 'Himanshu', position: 'Legal Head', experience: '6+ years experience', role: 'Compliance, Legal Framework & Risk Management', initials: 'H', avatarGradient: `linear-gradient(135deg,${theme.green600},${theme.lime500})`, social: ['linkedin'], linkedinUrl: 'https://www.linkedin.com/in/himanshu-agrawal-961370244?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { id: 4, name: 'Nikita', position: ' HR Head', experience: '4+ years experience', role: 'Talent, Culture & People Management', initials: 'NB', avatarGradient: `linear-gradient(135deg,${theme.purple500},${theme.lime500})`, social: ['linkedin'], linkedinUrl: 'https://www.linkedin.com/in/nikita-bansal-3b8b4b23a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },               
  ];

  const stats = [
    { value: '20,000+', label: 'Businesses Served', icon: <Building className="w-5 h-5" /> },
    { value: '120+ Cr', label: 'Total Funding', icon: <TrendingUp className="w-5 h-5" /> },
    { value: '95%', label: 'Success Rate', icon: <Award className="w-5 h-5" /> },
    { value: '28', label: 'States Covered', icon: <MapPin className="w-5 h-5" /> },
  ];

  // const milestones = [
  //   { year: '2021', event: 'Company Founded — EazyGrow Ventures begins its journey' },
  //   { year: '2022', event: '100+ Clients Served — Rapidly growing client base' },
  //   { year: '2023', event: 'Expanded to 15 States — Pan-India presence established' },
  //   { year: '2024', event: '20,000+ Businesses Funded — A landmark achievement' },
  // ];

  const css = `
    .egv-wrap { font-family: var(--font-source-serif), sans-serif; overflow-x:hidden; }
    .egv-anim       { opacity:0; transform:translateY(32px);  transition:opacity .7s ease,transform .7s ease; }
    .egv-anim-left  { opacity:0; transform:translateX(-32px); transition:opacity .7s ease,transform .7s ease; }
    .egv-anim-right { opacity:0; transform:translateX(32px);  transition:opacity .7s ease,transform .7s ease; }
    .egv-anim.egv-visible,.egv-anim-left.egv-visible,.egv-anim-right.egv-visible { opacity:1; transform:none; }
    @keyframes egvPulse { 0%,100%{opacity:.4;transform:translate(-50%,-50%) scale(1)} 50%{opacity:.9;transform:translate(-50%,-50%) scale(1.12)} }
    @keyframes egvFadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
    .egv-fu-1{animation:egvFadeUp .8s ease both .2s} .egv-fu-2{animation:egvFadeUp .8s ease both .4s}
    .egv-fu-3{animation:egvFadeUp .8s ease both .6s} .egv-fu-4{animation:egvFadeUp .8s ease both .8s}
    .egv-val-card:hover .egv-val-title{color:#fff !important}
    .egv-val-card:hover .egv-val-desc{color:rgba(255,255,255,.6) !important}
    .egv-val-card:hover{background:${theme.indigo800} !important;border-color:rgba(110,85,233,.48) !important;transform:translateY(-10px);box-shadow:0 26px 60px rgba(18,22,63,.24)}
    .egv-mv-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${theme.purple500},${theme.lime500},${theme.green700});transform:scaleX(0);transition:transform .4s ease;transform-origin:left;border-radius:20px 20px 0 0}
    .egv-mv-card:hover::before{transform:scaleX(1)}
    .egv-mv-card:hover{transform:translateY(-8px);box-shadow:0 30px 70px rgba(18,22,63,.14)}
    .egv-team-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${theme.purple500},${theme.lime500});transform:scaleX(0);transition:transform .4s ease;transform-origin:left;border-radius:0 0 20px 20px}
    .egv-team-card:hover::after{transform:scaleX(1)}
    .egv-team-card:hover{transform:translateY(-8px) !important;border-color:rgba(110,85,233,.30) !important;box-shadow:0 24px 60px rgba(18,22,63,.12)}
    .egv-tl-content:hover{background:rgba(110,85,233,.10) !important;border-color:rgba(200,221,88,.48) !important}
    .egv-exp-card:hover{background:rgba(200,221,88,.16) !important;transform:translateY(-4px) scale(1.02)}
    .egv-btn-primary:hover{transform:translateY(-3px);box-shadow:0 18px 44px rgba(110,85,233,.40) !important}
    .egv-btn-outline:hover{background:rgba(255,255,255,.12) !important;border-color:rgba(255,255,255,.6) !important}
    .egv-social:hover{background:${theme.lime300} !important;color:${theme.indigo900} !important}
  `;

  const eyebrow = { fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: theme.indigo700, fontWeight: 600, display: 'block' };
  const sectionTitle = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(26px,3.5vw,40px)', color: theme.text, fontWeight: 700, margin: '8px 0 12px' };

  return (
    <>
      <style>{css}</style>
      <div className="egv-wrap" style={{
        background: `linear-gradient(180deg,${theme.canvas} 0%,#F4F1FF 100%)`,
        minHeight: '100vh',
        '--font-bricolage': bricolage.style.fontFamily,
        '--font-source-serif': sourceSerif.style.fontFamily
      } as React.CSSProperties}>

        {/* HERO */}
        <div style={{ position: 'relative', overflow: 'hidden', background: `linear-gradient(135deg,${theme.indigo900} 0%,${theme.indigo800} 46%,${theme.green700} 100%)`, padding: '90px 40px 130px', textAlign: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(ellipse 80% 60% at 50% 0%,rgba(110,85,233,.24),transparent 70%)` }} />
          <div style={{ position: 'absolute', inset: 0, opacity: .05, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(183,214,58,.9) 1px,transparent 1px),linear-gradient(90deg,rgba(183,214,58,.9) 1px,transparent 1px)`, backgroundSize: '50px 50px' }} />
          <div style={{ position: 'absolute', width: 640, height: 640, borderRadius: '50%', background: `radial-gradient(circle,rgba(200,221,88,.12),transparent 70%)`, top: '50%', left: '50%', animation: 'egvPulse 4s ease-in-out infinite', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
            <div className="egv-fu-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(200,221,88,.42)', background: 'linear-gradient(135deg,rgba(110,85,233,.16),rgba(255,255,255,.04))', backdropFilter: 'blur(8px)', color: theme.lime300, padding: '9px 22px', borderRadius: 100, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500, marginBottom: 28, boxShadow: '0 10px 30px rgba(0,0,0,.12)' }}>
              <Building size={14} /> About EazyGrow Ventures
            </div>
            <h1 className="egv-fu-2" style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(30px,5vw,58px)', color: '#fff', fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>
              We started  <span style={{ color: theme.lime500 }}>EazyGrow</span><br />
              <span style={{ color: theme.lime300 }}>with one mission !</span>
            </h1>
            <p className="egv-fu-3" style={{ fontSize: 16, color: 'rgba(255,255,255,.72)', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.85, fontWeight: 300 }}>
              to help startups not just
              begin, but actually grow, get funded, and succeed in the real market.
            </p>
            <div className="egv-fu-4" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', background: 'linear-gradient(135deg,rgba(255,255,255,.09),rgba(255,255,255,.04))', border: '1px solid rgba(200,221,88,.24)', borderRadius: 18, overflow: 'hidden', backdropFilter: 'blur(10px)', boxShadow: '0 24px 70px rgba(8,10,36,.20)', width: '100%' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ flex: '1 1 140px', padding: '24px 20px', textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid rgba(200,221,88,.14)' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div style={{ color: theme.lime500 }}>
                      {s.icon}
                    </div>
                    <span style={{ fontFamily: 'var(--font-bricolage)', fontSize: 26, fontWeight: 700, color: theme.lime500 }}>{s.value}</span>
                  </div>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,.54)', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4, display: 'block' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
            <svg style={{ width: '100%', height: 70, display: 'block' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={theme.canvas} />
            </svg>
          </div>
        </div>

        {/* MISSION & VISION */}

        <div style={{ background: 'transparent', padding: '80px 40px' }}>
          <div ref={addRef} className="egv-anim" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
            {/* <span style={eyebrow}>Our Foundation</span> */}
            <h2 style={sectionTitle}>Purpose &amp; Direction</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
            <div ref={addRef} className="egv-anim egv-mv-card" style={{ background: 'linear-gradient(180deg,rgba(255,255,255,.96),rgba(248,246,255,.96))', border: '1px solid rgba(47,54,127,.14)', borderRadius: 24, padding: 40, position: 'relative', overflow: 'hidden', transition: 'transform .4s,box-shadow .4s', cursor: 'default', boxShadow: '0 18px 50px rgba(18,22,63,.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg,${theme.indigo800},${theme.green700})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Target size={24} /></div>
                <div>
                  <span style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: theme.indigo700, fontWeight: 600 }}>Our Mission</span>
                  <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 20, color: theme.text, fontWeight: 700, marginTop: 2 }}>Empowering Businesses</h3>
                </div>
              </div>
              <p style={{ color: theme.muted, lineHeight: 1.8, fontSize: 15 }}>Our mission is to empower businesses by simplifying legal, financial, and operational complexities, providing seamless end-to-end solutions that enable entrepreneurs to focus on growth, success, and innovation.</p>
            </div>
            <div ref={addRef} className="egv-anim egv-mv-card" style={{ background: 'linear-gradient(180deg,rgba(255,255,255,.96),rgba(248,246,255,.96))', border: '1px solid rgba(47,54,127,.14)', borderRadius: 24, padding: 40, position: 'relative', overflow: 'hidden', transition: 'transform .4s,box-shadow .4s', cursor: 'default', transitionDelay: '.1s', boxShadow: '0 18px 50px rgba(18,22,63,.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg,${theme.indigo700},${theme.purple500})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Eye size={24} /></div>
                <div>
                  <span style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: theme.indigo700, fontWeight: 600 }}>Our Vision</span>
                  <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 20, color: theme.text, fontWeight: 700, marginTop: 2 }}>Trusted Business Partner</h3>
                </div>
              </div>
              <p style={{ color: theme.muted, lineHeight: 1.8, fontSize: 15 }}>Our vision is to be the most trusted and comprehensive business consultancy firm, providing seamless, end-to-end solutions that drive entrepreneurial success and empower businesses to navigate growth with confidence.</p>
            </div>
          </div>
        </div>

        {/* OUR JOURNEY */}
        <div style={{ background: 'transparent', padding: '0 40px 84px' }}>
          <div ref={addRef} className="egv-anim" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
            {/* <span style={eyebrow}>Our Growth Story</span> */}
            <h2 style={sectionTitle}>Our Journey</h2>
            <p style={{ color: theme.muted, fontSize: 15, lineHeight: 1.7 }}>Transforming visions into successful businesses across India</p>
          </div>

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 24 }}>
            <div ref={addRef} className="egv-anim" style={{ background: 'linear-gradient(135deg,rgba(18,22,63,.96),rgba(44,51,130,.96))', border: '1px solid rgba(200,221,88,.20)', borderRadius: 20, padding: 32, position: 'relative', overflow: 'hidden', boxShadow: '0 20px 60px rgba(18,22,63,.15)', transition: 'transform .4s,box-shadow .4s', cursor: 'default' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `#FFFFFF`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.indigo800 }}>
                  <Target size={24} />
                </div>
                <div style={{ color: '#fff', fontSize: 18, fontWeight: 600, marginLeft: 4 }}>2023</div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 20, color: '#fff', fontWeight: 700, marginBottom: 12 }}>Company Founded</h3>
              <p style={{ color: 'rgba(255,255,255,.68)', fontSize: 14, lineHeight: 1.7 }}>EazyGrow Ventures begins its journey with a mission to empower startups and businesses across India with comprehensive consultancy services.</p>
            </div>

            <div ref={addRef} className="egv-anim" style={{ background: 'linear-gradient(135deg,rgba(18,22,63,.96),rgba(44,51,130,.96))', border: '1px solid rgba(200,221,88,.20)', borderRadius: 20, padding: 32, position: 'relative', overflow: 'hidden', boxShadow: '0 20px 60px rgba(18,22,63,.15)', transition: 'transform .4s,box-shadow .4s', cursor: 'default', transitionDelay: '.1s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `#FFFFFF`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.purple500 }}>
                  <Users size={24} />
                </div>
                <div style={{ color: '#fff', fontSize: 18, fontWeight: 600, marginLeft: 4 }}>2024</div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 20, color: '#fff', fontWeight: 700, marginBottom: 12 }}>100+ Clients Served</h3>
              <p style={{ color: 'rgba(255,255,255,.68)', fontSize: 14, lineHeight: 1.7 }}>Rapidly growing client base with successful registrations, funding facilitation, and compliance management for startups and SMEs.</p>
            </div>

            <div ref={addRef} className="egv-anim" style={{ background: 'linear-gradient(135deg,rgba(18,22,63,.96),rgba(44,51,130,.96))', border: '1px solid rgba(200,221,88,.20)', borderRadius: 20, padding: 32, position: 'relative', overflow: 'hidden', boxShadow: '0 20px 60px rgba(18,22,63,.15)', transition: 'transform .4s,box-shadow .4s', cursor: 'default', transitionDelay: '.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `#FFFFFF`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.lime500 }}>
                  <MapPin size={24} />
                </div>
                <div style={{ color: '#fff', fontSize: 18, fontWeight: 600, marginLeft: 4 }}>2025</div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 20, color: '#fff', fontWeight: 700, marginBottom: 12 }}>Expanded to 15 States</h3>
              <p style={{ color: 'rgba(255,255,255,.68)', fontSize: 14, lineHeight: 1.7 }}>Established pan-India presence with services reaching entrepreneurs and businesses across multiple states, ensuring widespread impact.</p>
            </div>

            <div ref={addRef} className="egv-anim" style={{ background: 'linear-gradient(135deg,rgba(18,22,63,.96),rgba(44,51,130,.96))', border: '1px solid rgba(200,221,88,.20)', borderRadius: 20, padding: 32, position: 'relative', overflow: 'hidden', boxShadow: '0 20px 60px rgba(18,22,63,.15)', transition: 'transform .4s,box-shadow .4s', cursor: 'default', transitionDelay: '.3s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `#FFFFFF`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.green700 }}>
                  <Award size={24} />
                </div>
                <div style={{ color: '#fff', fontSize: 18, fontWeight: 600, marginLeft: 4 }}>2026</div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 20, color: '#fff', fontWeight: 700, marginBottom: 12 }}>20,000+ Businesses Funded</h3>
              <p style={{ color: 'rgba(255,255,255,.68)', fontSize: 14, lineHeight: 1.7 }}>A landmark achievement with over 120+ crores credit facilitated, establishing EazyGrow as a trusted partner for business growth.</p>
            </div>
          </div>
        </div>

        {/* OUR STORY */}
        <div style={{ background: 'linear-gradient(135deg,#262A76 0%,#25296D 50%,#1B1F5A 100%)', padding: 'clamp(40px,8vw,88px) clamp(20px,5vw,40px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 50% 80% at 0% 50%,rgba(217,240,106,.06),transparent)' }} />
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(30px,5vw,60px)', alignItems: 'center', position: 'relative' }}>
            <div ref={addRef} className="egv-anim-left">
              <span style={{ ...eyebrow, color: '#C9DB6B', letterSpacing: 2.6, fontSize: 10 }}>Our Story</span>
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(24px,3.2vw,52px)', color: '#FFFFFF', fontWeight: 700, lineHeight: 1.18, maxWidth: 500, margin: '10px 0 24px' }}>Building <span style={{ color: '#C9DB6B' }}>Business Dreams</span><br />into Reality</h2>
              <p style={{ color: 'rgba(255,255,255,.72)', fontSize: 'clamp(13px,1.5vw,15px)', lineHeight: 2, marginBottom: 18, maxWidth: 510 }}>At EazyGrow Ventures, we provide end-to-end startup and business consultancy services, allowing founders and growing businesses to focus on momentum while we handle funding, legal, and operational complexities.</p>
              <p style={{ color: 'rgba(255,255,255,.72)', fontSize: 'clamp(13px,1.5vw,15px)', lineHeight: 2, marginBottom: 32, maxWidth: 520 }}>Our expert team simplifies incorporation, compliance, taxation, investor readiness, and regulatory filings, ensuring smooth and efficient operations. Whether you&apos;re a startup, small business, or scaling enterprise, we tailor our solutions to your specific needs.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 12 }}>
                {[['4+', 'Years Experience'], ['20,000+', 'Startups Onboarded'], ['50+', 'Services Offered']].map(([n, l]) => (
                  <div key={l} className="egv-exp-card" style={{ background: 'rgba(71,75,157,.28)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12, padding: 'clamp(12px,2vw,18px) clamp(10px,1.5vw,16px)', textAlign: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.04)', backdropFilter: 'blur(6px)', transition: 'background .3s,transform .3s', cursor: 'default' }}>
                    <span style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(24px,3vw,32px)', fontWeight: 700, color: '#C9DB6B', display: 'block', lineHeight: 1 }}>{n}</span>
                    <span style={{ fontSize: 'clamp(8px,1vw,10px)', color: 'rgba(255,255,255,.48)', letterSpacing: 1.1, textTransform: 'uppercase', marginTop: 8, display: 'block' }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div ref={addRef} className="egv-anim-right" style={{ position: 'relative', padding: 'clamp(20px,5vw,100px)' }}>
              <div style={{ background: 'linear-gradient(135deg,rgba(34,51,88,.92),rgba(23,56,82,.88))', border: '1px solid rgba(208,221,255,.12)', borderRadius: 18, textAlign: 'center', minHeight: 'clamp(300px,40vw,500px)', minWidth: 'clamp(280px,80vw,500px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 22px 60px rgba(5,10,35,.20)' }}>
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(180deg,rgba(255,255,255,.03),transparent 32%)' }} />
                <Image src="/proffesional team 2.jpeg" alt="Professional Business Team" width={500} height={500} style={{ borderRadius: 18, position: 'absolute', inset: 0, objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>

        {/* CORE VALUES */}
        <div style={{ background: 'transparent', padding: '84px 40px' }}>
          <div ref={addRef} className="egv-anim" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
            {/* <span style={eyebrow}>Our Foundation</span> */}
            <h2 style={sectionTitle}>Core Values</h2>
            <p style={{ color: theme.muted, fontSize: 15, lineHeight: 1.7 }}>The principles that guide every decision and action we take</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16, maxWidth: 1100, margin: '0 auto' }}>
            {coreValues.map((v, i) => (
              <div key={v.id} ref={addRef} className="egv-anim egv-val-card" style={{ background: 'linear-gradient(180deg,#FFFFFF,#F7F5FF)', border: '1px solid rgba(47,54,127,.10)', borderRadius: 20, padding: '30px 22px', textAlign: 'center', transition: 'all .4s cubic-bezier(0.175,0.885,0.32,1.275)', cursor: 'default', transitionDelay: `${i * 0.08}s`, boxShadow: '0 14px 38px rgba(18,22,63,.06)' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: v.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', margin: '0 auto 16px' }}>{v.icon}</div>
                <div className="egv-val-title" style={{ fontSize: 14, fontWeight: 600, color: theme.text, marginBottom: 8, transition: 'color .4s' }}>{v.title}</div>
                <div className="egv-val-desc" style={{ fontSize: 12, color: theme.muted, lineHeight: 1.6, transition: 'color .4s' }}>{v.description}</div>
              </div>
            ))}
          </div>
        </div>

        

        {/* LEADERSHIP TEAM */}
        <div style={{ background: 'transparent', padding: '0px 20px 54px' }}>
          <div ref={addRef} className="egv-anim" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
            <span style={eyebrow}>Meet Our Leaders</span>
            <h2 style={sectionTitle}>Leadership Team</h2>
            <p style={{ color: theme.muted, fontSize: 15 }}>Meet the experts driving our mission forward with passion and expertise</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, maxWidth: 1100, margin: '0 auto' }}>
            {leadershipTeam.map((m, i) => (
              <div key={m.id} ref={addRef} className="egv-anim egv-team-card" style={{ background: 'linear-gradient(180deg,#FFFFFF,#F8F6FF)', border: '1px solid rgba(47,54,127,.10)', borderRadius: 22, padding: 32, textAlign: 'center', position: 'relative', overflow: 'hidden', transition: 'transform .4s,border-color .4s', cursor: 'default', transitionDelay: `${i * 0.08}s`, boxShadow: '0 16px 45px rgba(18,22,63,.06)' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: m.avatarGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20, fontWeight: 700, margin: '0 auto 16px', border: '3px solid rgba(183,214,58,.26)', fontFamily: 'var(--font-bricolage)' }}>{m.initials}</div>
                <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 16, fontWeight: 700, color: theme.text, marginBottom: 4 }}>{m.name}</h3>
                <div style={{ color: theme.indigo700, fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{m.position}</div>
                <div style={{ color: theme.muted, fontSize: 12, marginBottom: 8 }}>{m.experience}</div>
                <p style={{ color: theme.muted, fontSize: 12, lineHeight: 1.6, marginBottom: 16 }}>{m.role}</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
                  {m.social.includes('linkedin') && <a href={m.linkedinUrl || "https://www.linkedin.com/company/eazygrow-ventures-private-limited/"} target="_blank" rel="noopener noreferrer" className="egv-social" style={{ padding: '5px 30px', borderRadius: 8, background: 'rgba(91,70,214,.10)', color: theme.indigo700, border: '1px solid rgba(91,70,214,.16)', cursor: 'pointer', transition: 'background .3s,color .3s,border-color .3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Linkedin size={20} /></a>}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        MILESTONES
        {/* <div style={{ background: `linear-gradient(135deg,${theme.indigo900} 0%,#171C50 100%)`, padding: '84px 40px' }}>
          <div ref={addRef} className="egv-anim" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 32, color: '#fff', fontWeight: 700 }}>Our Journey</h3>
            <p style={{ color: 'rgba(255,255,255,.45)', marginTop: 8 }}>Milestones that shaped our growth story</p>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom,${theme.lime500},rgba(91,70,214,.10))` }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {milestones.map((ms, i) => (
                <div key={i} ref={addRef} className="egv-anim" style={{ display: 'flex', alignItems: 'center', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse', transitionDelay: `${i * 0.12}s` }}>
                  <div className="egv-tl-content" style={{ flex: 1, [i % 2 === 0 ? 'marginRight' : 'marginLeft']: 32, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(200,221,88,.18)', borderRadius: 16, padding: '22px 24px', transition: 'background .3s,border-color .3s', cursor: 'default', backdropFilter: 'blur(8px)' }}>
                    <p style={{ color: 'rgba(255,255,255,.78)', fontSize: 14, lineHeight: 1.6 }}>{ms.event}</p>
                  </div>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: `linear-gradient(135deg,${theme.purple500},${theme.lime500})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 700, flexShrink: 0, boxShadow: '0 0 0 6px rgba(91,70,214,.14)', zIndex: 1, fontFamily: 'var(--font-bricolage)' }}>{ms.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* CTA */}
        {/* <div ref={addRef} className="egv-anim" style={{ padding: '64px 40px', background: 'transparent' }}>
          <div style={{ background: `linear-gradient(135deg,${theme.indigo900} 0%,${theme.purple500} 48%,${theme.green700} 100%)`, borderRadius: 28, maxWidth: 900, margin: '0 auto', padding: '64px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 28px 80px rgba(18,22,63,.24)' }}>
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 80% at 50% 0%,rgba(200,221,88,.20),transparent)' }} />
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(22px,3.5vw,38px)', color: '#fff', fontWeight: 700, marginBottom: 12, position: 'relative' }}>Ready to Start Your Business Journey?</h2>
            <p style={{ color: 'rgba(255,255,255,.72)', fontSize: 16, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.75, position: 'relative' }}>Join thousands of successful entrepreneurs who trust us with their business needs</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
              <button className="egv-btn-primary" style={{ padding: '14px 32px', background: `linear-gradient(135deg,${theme.lime500},${theme.lime300})`, color: theme.indigo900, border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, letterSpacing: .5, cursor: 'pointer', transition: 'transform .3s,box-shadow .3s' }}>Get Started Now</button>
              <button className="egv-btn-outline" style={{ padding: '14px 32px', background: 'rgba(255,255,255,.05)', color: '#fff', border: '1px solid rgba(255,255,255,.28)', borderRadius: 12, fontSize: 14, fontWeight: 500, cursor: 'pointer', backdropFilter: 'blur(6px)', transition: 'all .3s' }}>Contact Our Team</button>
            </div>
          </div>
        </div> */}

        {/* FOOTER NOTE */}
        <div style={{ padding: '24px 40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: theme.canvas }}>
          <CheckCircle size={16} style={{ color: theme.indigo700 }} />
          <span style={{ color: theme.indigo700, fontSize: 13 }}>Committed to accuracy, efficiency, and transparency</span>
        </div>

      </div>
    </>
  );
};

export default AboutUs;
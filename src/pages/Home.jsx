/**
 * ============================================================
 * THEME CONFIG — LOCKED FOREVER
 * ============================================================
 * Style:        Refined Dark Luxe + Subtle Glassmorphism
 * Inspiration:  Vercel x Stripe x Linear
 *
 * COLOR PALETTE
 *   bg-base:        #050810   near-black deep navy
 *   bg-surface:     #0d1117   card/panel base
 *   bg-elevated:    #161b27   hover states / nav
 *   border:         #1e2535   subtle borders
 *   accent:         #00d9b8   teal-cyan — primary CTA
 *   accent-dim:     #00b89a   hover state
 *   text-primary:   #f0f4ff   near-white cool
 *   text-secondary: #8892a4   muted body
 *   gold:           #f4b942   featured badge
 *
 * TYPOGRAPHY
 *   Display:  Syne           weight 700-800
 *   Body:     DM Sans        weight 300-500
 *   Mono:     JetBrains Mono
 *
 * ANIMATIONS
 *   Entrance: fade + translateY(20px), staggered children
 *   Hover:    scale(1.02), glow pulse
 *   Speed:    300-600ms, cubic-bezier(0.22, 1, 0.36, 1)
 * ============================================================
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight, FiDownload, FiGithub, FiLinkedin,
  FiMail, FiExternalLink, FiCode, FiLayers,
  FiZap, FiStar, FiCheck, FiArrowUpRight,
  FiGlobe, FiCpu, FiDatabase, FiPackage
} from 'react-icons/fi';
import {
  SiReact, SiNodedotjs, SiLaravel, SiMongodb,
  SiPostgresql, SiTailwindcss, SiDocker, SiTypescript,
  SiNextdotjs, SiRedux, SiFirebase, SiGit
} from 'react-icons/si';

/* ─── Font Loader ─────────────────────────────────────────── */
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  return null;
};

/* ─── Animation Helpers ───────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];

const stagger = {
  animate: { transition: { staggerChildren: 0.09 } },
};

const childVariant = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

/* ─── Data ────────────────────────────────────────────────── */
const SKILLS = [
  { icon: SiReact,       name: 'React',       level: 95, color: '#61DAFB' },
  { icon: SiNodedotjs,   name: 'Node.js',     level: 90, color: '#68A063' },
  { icon: SiLaravel,     name: 'Laravel',     level: 88, color: '#FF2D20' },
  { icon: SiTypescript,  name: 'TypeScript',  level: 85, color: '#3178C6' },
  { icon: SiNextdotjs,   name: 'Next.js',     level: 82, color: '#ffffff' },
  { icon: SiMongodb,     name: 'MongoDB',     level: 85, color: '#47A248' },
  { icon: SiPostgresql,  name: 'PostgreSQL',  level: 80, color: '#336791' },
  { icon: SiTailwindcss, name: 'Tailwind',    level: 95, color: '#38BDF8' },
  { icon: SiDocker,      name: 'Docker',      level: 72, color: '#2496ED' },
  { icon: SiRedux,       name: 'Redux',       level: 80, color: '#764ABC' },
  { icon: SiFirebase,    name: 'Firebase',    level: 78, color: '#FFCA28' },
  { icon: SiGit,         name: 'Git',         level: 92, color: '#F05032' },
];

const PROJECTS = [
  {
    id: 1,
    title: 'ScaleOps Platform',
    tag: 'Featured',
    tagColor: '#00d9b8',
    description:
      'Enterprise-grade SaaS dashboard with real-time analytics, multi-tenant auth, and automated infrastructure scaling. Handles 50k+ concurrent sessions with sub-100ms response time.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    accentColor: '#00d9b8',
    metrics: [
      { label: 'Live Sessions', value: '50k+' },
      { label: 'Uptime',        value: '99.9%' },
      { label: 'Latency',       value: '<100ms' },
    ],
    github: '#',
    live: '#',
    icon: FiLayers,
  },
  {
    id: 2,
    title: 'NexCart Commerce',
    tag: 'Full-Stack',
    tagColor: '#f4b942',
    description:
      'Headless e-commerce engine with AI-powered recommendations, inventory management, and Stripe-integrated checkout. Processing $2M+ in monthly transactions.',
    tech: ['React', 'Laravel', 'MySQL', 'Stripe', 'Tailwind'],
    accentColor: '#f4b942',
    metrics: [
      { label: 'Monthly GMV', value: '$2M+' },
      { label: 'Products',    value: '15k' },
      { label: 'Rating',      value: '4.9★' },
    ],
    github: '#',
    live: '#',
    icon: FiGlobe,
  },
  {
    id: 3,
    title: 'FlowChat AI',
    tag: 'AI / ML',
    tagColor: '#a78bfa',
    description:
      'LLM-powered customer support platform with RAG pipeline, intelligent ticket routing, and team inbox. Reduces first-response time by 73% using GPT-4.',
    tech: ['React', 'FastAPI', 'MongoDB', 'OpenAI', 'Socket.io'],
    accentColor: '#a78bfa',
    metrics: [
      { label: 'Faster Response', value: '73%' },
      { label: 'Chats / Day',     value: '10k+' },
      { label: 'Engine',          value: 'GPT-4' },
    ],
    github: '#',
    live: '#',
    icon: FiCpu,
  },
  {
    id: 4,
    title: 'DevPortal CMS',
    tag: 'Open Source',
    tagColor: '#34d399',
    description:
      'Developer-first headless CMS with visual schema builder, GraphQL API, webhooks, and a Notion-like block editor. 800+ GitHub stars and growing community.',
    tech: ['Vue.js', 'Node.js', 'GraphQL', 'SQLite', 'TypeScript'],
    accentColor: '#34d399',
    metrics: [
      { label: 'GitHub Stars', value: '800+' },
      { label: 'License',      value: 'MIT' },
      { label: 'Forks',        value: '120+' },
    ],
    github: '#',
    live: '#',
    icon: FiPackage,
  },
];

const STATS = [
  { value: '3+',  label: 'Years Experience', icon: FiCode },
  { value: '30+', label: 'Projects Shipped',  icon: FiLayers },
  { value: '15+', label: 'Happy Clients',     icon: FiStar },
  { value: '99%', label: 'On-time Delivery',  icon: FiZap },
];

const SERVICES = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    desc: 'Pixel-perfect UIs with React and Next.js, optimized for performance, accessibility and conversion.',
    color: '#00d9b8',
  },
  {
    icon: FiDatabase,
    title: 'Backend & APIs',
    desc: 'Scalable REST/GraphQL APIs with Node.js, Laravel, and cloud-ready production architectures.',
    color: '#f4b942',
  },
  {
    icon: FiLayers,
    title: 'Full-Stack Systems',
    desc: 'End-to-end product development from database schema design to deployed and monitored apps.',
    color: '#a78bfa',
  },
  {
    icon: FiZap,
    title: 'Performance Audits',
    desc: 'Deep-dive optimizations to bring Core Web Vitals and Lighthouse scores to near-perfect 100.',
    color: '#34d399',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Rafay delivered a scalable, production-ready system in record time. His code quality and communication are best-in-class.',
    name: 'Sarah Chen',
    role: 'CTO, ScaleOps Inc.',
    initials: 'SC',
    color: '#00d9b8',
  },
  {
    quote:
      'Working with Rafay was a game-changer. He understood our vision, asked the right questions, and shipped a beautiful product on time.',
    name: 'Ahmed Malik',
    role: 'Founder, NexCart',
    initials: 'AM',
    color: '#f4b942',
  },
  {
    quote:
      'Exceptional full-stack skills, clean architecture, zero drama. I have hired Rafay for three projects and counting.',
    name: 'Lisa Park',
    role: 'Product Lead, FlowChat',
    initials: 'LP',
    color: '#a78bfa',
  },
];

/* ─── Reusable: Gradient Background Orbs ─────────────────── */
const GradientOrbs = () => (
  <div
    style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
    }}
  >
    <motion.div
      animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute', top: '-20%', left: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,217,184,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
    <motion.div
      animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
      transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      style={{
        position: 'absolute', top: '30%', right: '-15%',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }}
    />
    <motion.div
      animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
      transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      style={{
        position: 'absolute', bottom: '-10%', left: '30%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,185,66,0.06) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  </div>
);

/* ─── Available for Work Badge ────────────────────────────── */
const AvailableBadge = () => {
  const [dots, setDots] = useState('');
  useEffect(() => {
    const iv = setInterval(
      () => setDots((d) => (d.length >= 3 ? '' : d + '.')),
      500
    );
    return () => clearInterval(iv);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease, delay: 0.3 }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '6px 16px', borderRadius: 99,
        background: 'rgba(0,217,184,0.08)',
        border: '1px solid rgba(0,217,184,0.25)',
        marginBottom: 24, fontSize: 13,
        fontFamily: "'JetBrains Mono', monospace",
        color: '#00d9b8',
      }}
    >
      <span
        style={{
          width: 7, height: 7, borderRadius: '50%',
          background: '#00d9b8',
          boxShadow: '0 0 8px #00d9b8',
          animation: 'blink 2s infinite',
          display: 'inline-block',
        }}
      />
      Available for work{dots}
    </motion.div>
  );
};

/* ─── Skill Bar ───────────────────────────────────────────── */
const SkillBar = ({ skill, index }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease, delay: index * 0.05 }}
      style={{ marginBottom: 16 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <skill.icon style={{ color: skill.color, fontSize: 15 }} />
          <span style={{
            fontSize: 13, color: '#f0f4ff',
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
          }}>
            {skill.name}
          </span>
        </div>
        <span style={{
          fontSize: 12, color: '#8892a4',
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          {skill.level}%
        </span>
      </div>
      <div style={{
        height: 4, background: 'rgba(255,255,255,0.05)',
        borderRadius: 99, overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.1, ease, delay: 0.3 + index * 0.04 }}
          style={{
            height: '100%', borderRadius: 99,
            background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
            boxShadow: `0 0 8px ${skill.color}50`,
          }}
        />
      </div>
    </motion.div>
  );
};

/* ─── Project Card ────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))'
          : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? project.accentColor + '45' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 20,
        padding: '28px',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 24px 60px ${project.accentColor}18` : 'none',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s ease',
      }} />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div>
          <span style={{
            fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
            color: project.tagColor, background: `${project.tagColor}18`,
            padding: '3px 10px', borderRadius: 99,
            border: `1px solid ${project.tagColor}30`,
            marginBottom: 10, display: 'inline-block',
            textTransform: 'uppercase', letterSpacing: 1,
          }}>
            {project.tag}
          </span>
          <h3 style={{
            fontSize: 20, fontFamily: "'Syne', sans-serif",
            fontWeight: 700, color: '#f0f4ff', margin: 0, marginTop: 8,
          }}>
            {project.title}
          </h3>
        </div>
        <project.icon style={{ fontSize: 22, color: project.accentColor, opacity: 0.7, flexShrink: 0 }} />
      </div>

      {/* Description */}
      <p style={{
        fontSize: 14, color: '#8892a4', lineHeight: 1.75,
        fontFamily: "'DM Sans', sans-serif", marginBottom: 20,
      }}>
        {project.description}
      </p>

      {/* Metrics */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
        {project.metrics.map((m) => (
          <div key={m.label} style={{
            background: `${project.accentColor}0d`,
            border: `1px solid ${project.accentColor}22`,
            borderRadius: 10, padding: '8px 14px', textAlign: 'center',
          }}>
            <div style={{
              fontSize: 16, fontFamily: "'Syne', sans-serif",
              fontWeight: 700, color: project.accentColor,
            }}>
              {m.value}
            </div>
            <div style={{ fontSize: 11, color: '#8892a4', fontFamily: "'DM Sans', sans-serif" }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tech chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {project.tech.map((t) => (
          <span key={t} style={{
            fontSize: 11, padding: '4px 10px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8, color: '#8892a4',
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 16 }}>
        <a
          href={project.github}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            fontSize: 13, color: '#8892a4',
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#f0f4ff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#8892a4'; }}
        >
          <FiGithub style={{ fontSize: 14 }} /> GitHub
        </a>
        <a
          href={project.live}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            fontSize: 13, color: project.accentColor,
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: 'none',
          }}
        >
          <FiExternalLink style={{ fontSize: 14 }} /> Live Demo
          <FiArrowUpRight style={{ fontSize: 12 }} />
        </a>
      </div>
    </motion.div>
  );
};

/* ─── Service Card ────────────────────────────────────────── */
const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? service.color + '40' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 18, padding: '28px 24px',
        transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? `0 16px 50px ${service.color}15` : 'none',
      }}
    >
      <div style={{
        width: 46, height: 46, borderRadius: 14,
        background: `${service.color}15`,
        border: `1px solid ${service.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 18,
      }}>
        <service.icon style={{ fontSize: 20, color: service.color }} />
      </div>
      <h4 style={{
        fontSize: 17, fontFamily: "'Syne', sans-serif",
        fontWeight: 700, color: '#f0f4ff', marginBottom: 10,
      }}>
        {service.title}
      </h4>
      <p style={{
        fontSize: 14, color: '#8892a4', lineHeight: 1.75,
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {service.desc}
      </p>
    </motion.div>
  );
};

/* ─── Testimonial Card ────────────────────────────────────── */
const TestimonialCard = ({ t, index }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay: index * 0.12 }}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 18, padding: '28px 26px',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div style={{ marginBottom: 16, display: 'flex', gap: 3 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <FiStar key={i} style={{ color: '#f4b942', fontSize: 14 }} />
        ))}
      </div>
      <p style={{
        fontSize: 15, color: '#b0bad0', lineHeight: 1.78,
        fontFamily: "'DM Sans', sans-serif",
        fontStyle: 'italic', marginBottom: 22,
      }}>
        "{t.quote}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: `${t.color}25`,
          border: `1px solid ${t.color}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 700, color: t.color,
          fontFamily: "'Syne', sans-serif",
        }}>
          {t.initials}
        </div>
        <div>
          <div style={{
            fontSize: 14, color: '#f0f4ff',
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
          }}>
            {t.name}
          </div>
          <div style={{ fontSize: 12, color: '#8892a4', fontFamily: "'DM Sans', sans-serif" }}>
            {t.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Section Heading ─────────────────────────────────────── */
const SectionHeading = ({ eyebrow, title, subtitle, centered = true }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease }}
      style={{ textAlign: centered ? 'center' : 'left', marginBottom: 56 }}
    >
      {eyebrow && (
        <span style={{
          display: 'inline-block',
          fontSize: 11, letterSpacing: 2.5,
          textTransform: 'uppercase',
          color: '#00d9b8',
          fontFamily: "'JetBrains Mono', monospace",
          marginBottom: 16,
        }}>
          — {eyebrow} —
        </span>
      )}
      <h2 style={{
        fontSize: 'clamp(28px, 4vw, 44px)',
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800, color: '#f0f4ff',
        lineHeight: 1.15, marginBottom: 16,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: 17, color: '#8892a4', lineHeight: 1.7,
          fontFamily: "'DM Sans', sans-serif",
          maxWidth: 560, margin: centered ? '0 auto' : '0',
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN HOME COMPONENT
═══════════════════════════════════════════════════════════ */
const Home = () => {
  /* Shared layout styles */
  const container = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
  };

  const section = {
    padding: '96px 0',
    position: 'relative',
    zIndex: 1,
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050810',
        color: '#f0f4ff',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <FontLoader />

      {/* ── Global keyframes ── */}
      <style>{`
        @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes spin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes rspin  { from{transform:rotate(360deg)} to{transform:rotate(0deg)} }
        *               { box-sizing:border-box; margin:0; padding:0; }
        ::selection     { background:rgba(0,217,184,0.25); color:#f0f4ff; }
        ::-webkit-scrollbar           { width:6px; }
        ::-webkit-scrollbar-track     { background:#050810; }
        ::-webkit-scrollbar-thumb     { background:#1e2535; border-radius:99px; }
        ::-webkit-scrollbar-thumb:hover { background:#00d9b830; }
        a { text-decoration:none; color:inherit; }
      `}</style>

      {/* Background layers */}
      <GradientOrbs />

      {/* Noise texture */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        opacity: 0.022,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section style={{ ...section, paddingTop: 140, paddingBottom: 100 }}>
        <div style={container}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 60,
            alignItems: 'center',
          }}>

            {/* Left — Text */}
            <motion.div variants={stagger} initial="initial" animate="animate" style={{ maxWidth: 580 }}>
              <AvailableBadge />

              <motion.h1
                variants={childVariant}
                style={{
                  fontSize: 'clamp(38px, 5.5vw, 72px)',
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  lineHeight: 1.07,
                  letterSpacing: '-0.03em',
                  marginBottom: 22,
                  color: '#f0f4ff',
                }}
              >
                Hello, I'm{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #00d9b8 0%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Rafay Khalil
                </span>
                .
              </motion.h1>

              <motion.p
                variants={childVariant}
                style={{
                  fontSize: 'clamp(17px, 2.2vw, 22px)',
                  color: '#b0bad0',
                  fontWeight: 400,
                  marginBottom: 10,
                  lineHeight: 1.5,
                }}
              >
                Transforming Ideas into{' '}
                <span style={{ color: '#00d9b8', fontWeight: 500 }}>Robust Code</span>
              </motion.p>

              <motion.p
                variants={childVariant}
                style={{
                  fontSize: 16,
                  color: '#8892a4',
                  lineHeight: 1.85,
                  marginBottom: 36,
                  maxWidth: 500,
                }}
              >
                Based in Pakistan — Full-Stack Developer specializing in React, Node.js, and Laravel.
                Building scalable systems at the University of Technology (UoT), Nowshera.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={childVariant}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 32 }}
              >
                <Link to="/projects">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: '#00d9b8', color: '#050810',
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                      fontSize: 15, padding: '14px 28px',
                      borderRadius: 99,
                      boxShadow: '0 0 32px rgba(0,217,184,0.38)',
                      cursor: 'pointer',
                    }}
                  >
                    Explore Projects
                    <FiArrowRight style={{ fontSize: 16 }} />
                  </motion.div>
                </Link>

                <Link to="/resume">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: '#f0f4ff',
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                      fontSize: 15, padding: '14px 28px',
                      borderRadius: 99, cursor: 'pointer',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <FiDownload style={{ fontSize: 16 }} />
                    View Resume
                  </motion.div>
                </Link>
              </motion.div>

              {/* Social links */}
              <motion.div variants={childVariant} style={{ display: 'flex', gap: 12 }}>
                {[
                  { icon: FiGithub,   href: '#', label: 'GitHub'   },
                  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
                  { icon: FiMail,     href: '#', label: 'Email'    },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ y: -2 }}
                    title={label}
                    style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#8892a4', fontSize: 17,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#00d9b8';
                      e.currentTarget.style.borderColor = 'rgba(0,217,184,0.3)';
                      e.currentTarget.style.background = 'rgba(0,217,184,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#8892a4';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <div style={{ position: 'relative', animation: 'float 6s ease-in-out infinite' }}>

                {/* Outer dashed rotating ring */}
                <div style={{
                  position: 'absolute', inset: -20, borderRadius: '50%',
                  border: '1px dashed rgba(0,217,184,0.2)',
                  animation: 'spin 22s linear infinite',
                }} />

                {/* Inner conic glow ring */}
                <div style={{
                  position: 'absolute', inset: -5, borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #00d9b8, #34d399, rgba(0,217,184,0), #00d9b8)',
                  animation: 'spin 5s linear infinite',
                  filter: 'blur(2px)',
                  opacity: 0.65,
                }} />

                {/* Photo */}
                <div style={{
                  position: 'relative',
                  width: 280, height: 280,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid rgba(0,217,184,0.3)',
                  background: '#0d1117',
                  boxShadow: '0 0 60px rgba(0,217,184,0.2), 0 30px 80px rgba(0,0,0,0.5)',
                }}>
                  <img
                    src="/rafay.png"
                    alt="Rafay Khalil"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                </div>

                {/* Float badge — experience */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  style={{
                    position: 'absolute', top: 16, right: -36,
                    background: 'rgba(5,8,16,0.92)',
                    border: '1px solid rgba(0,217,184,0.28)',
                    borderRadius: 14, padding: '10px 16px',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.45)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: 24, fontFamily: "'Syne', sans-serif",
                    fontWeight: 800, color: '#00d9b8', lineHeight: 1,
                  }}>3+</div>
                  <div style={{
                    fontSize: 11, color: '#8892a4',
                    fontFamily: "'DM Sans', sans-serif",
                    whiteSpace: 'nowrap', marginTop: 3,
                  }}>Years Exp</div>
                </motion.div>

                {/* Float badge — projects */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                  style={{
                    position: 'absolute', bottom: 16, left: -36,
                    background: 'rgba(5,8,16,0.92)',
                    border: '1px solid rgba(244,185,66,0.28)',
                    borderRadius: 14, padding: '10px 16px',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.45)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: 24, fontFamily: "'Syne', sans-serif",
                    fontWeight: 800, color: '#f4b942', lineHeight: 1,
                  }}>30+</div>
                  <div style={{
                    fontSize: 11, color: '#8892a4',
                    fontFamily: "'DM Sans', sans-serif",
                    whiteSpace: 'nowrap', marginTop: 3,
                  }}>Projects</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: 80 }}>
        <div style={container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20,
              overflow: 'hidden',
              backdropFilter: 'blur(12px)',
            }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: '28px 20px',
                  textAlign: 'center',
                  borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                <stat.icon style={{ fontSize: 20, color: '#00d9b8', marginBottom: 10 }} />
                <div style={{
                  fontSize: 'clamp(26px, 3vw, 38px)',
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800, color: '#f0f4ff', lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 13, color: '#8892a4',
                  fontFamily: "'DM Sans', sans-serif", marginTop: 6,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════ */}
      <section style={section}>
        <div style={container}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 60, alignItems: 'center',
          }}>
            {/* Left prose */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease }}
            >
              <span style={{
                fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase',
                color: '#00d9b8', fontFamily: "'JetBrains Mono', monospace",
                display: 'block', marginBottom: 16,
              }}>
                — About Me —
              </span>
              <h2 style={{
                fontSize: 'clamp(24px, 3.2vw, 38px)',
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800, lineHeight: 1.15,
                color: '#f0f4ff', marginBottom: 20,
              }}>
                Crafting digital products that{' '}
                <span style={{ color: '#00d9b8' }}>actually scale</span>
              </h2>
              <p style={{
                fontSize: 15, color: '#8892a4', lineHeight: 1.85,
                fontFamily: "'DM Sans', sans-serif", marginBottom: 16,
              }}>
                I'm a full-stack developer based in Pakistan with 3+ years of hands-on
                experience shipping production applications used by thousands of real users.
              </p>
              <p style={{
                fontSize: 15, color: '#8892a4', lineHeight: 1.85,
                fontFamily: "'DM Sans', sans-serif", marginBottom: 28,
              }}>
                Currently focusing on building robust, maintainable systems at the University
                of Technology (UoT), Nowshera — while taking on select freelance and consulting
                work globally.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Clean, documented, production-ready code',
                  'Agile delivery — always on time, on budget',
                  'Deep focus on performance and security',
                  'Open-source contributor and active learner',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <FiCheck style={{ color: '#00d9b8', fontSize: 14, flexShrink: 0 }} />
                    <span style={{
                      fontSize: 14, color: '#b0bad0',
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right terminal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease, delay: 0.15 }}
            >
              <div style={{
                background: '#0a0e1a',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 18, overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
              }}>
                {/* Top bar */}
                <div style={{
                  background: '#10151f',
                  padding: '12px 18px',
                  display: 'flex', alignItems: 'center', gap: 8,
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                  ))}
                  <span style={{
                    marginLeft: 10, fontSize: 12, color: '#8892a4',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    rafay@dev ~ portfolio
                  </span>
                </div>
                {/* Body */}
                <div style={{ padding: '22px', fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>
                  {[
                    { prompt: '$ ', cmd: 'whoami',       out: 'Rafay Khalil — Full-Stack Dev' },
                    { prompt: '$ ', cmd: 'location',     out: 'Pakistan  |  Remote-Friendly' },
                    { prompt: '$ ', cmd: 'stack --list', out: null },
                    { prompt: null, cmd: null,            out: '  React  Node.js  Laravel  Next.js' },
                    { prompt: null, cmd: null,            out: '  TypeScript  PostgreSQL  Docker' },
                    { prompt: '$ ', cmd: 'status',       out: 'Available for new projects' },
                    { prompt: '$ ', cmd: 'coffee --get', out: 'Fuelled by 3am commits' },
                    { prompt: '$ ', cmd: '_',            out: null, cursor: true },
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      style={{ marginBottom: 8, lineHeight: 1.6 }}
                    >
                      {line.prompt && (
                        <div>
                          <span style={{ color: '#00d9b8' }}>{line.prompt}</span>
                          <span style={{ color: '#f0f4ff' }}>{line.cmd}</span>
                          {line.cursor && (
                            <motion.span
                              animate={{ opacity: [1, 0] }}
                              transition={{ duration: 0.75, repeat: Infinity }}
                              style={{ color: '#00d9b8', marginLeft: 2 }}
                            >
                              ▋
                            </motion.span>
                          )}
                        </div>
                      )}
                      {line.out && (
                        <div style={{
                          color: '#8892a4',
                          paddingLeft: line.prompt ? 0 : 16,
                        }}>
                          {line.out}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SKILLS
      ══════════════════════════════════════════════ */}
      <section style={section}>
        <div style={container}>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Skills & Technologies"
            subtitle="A curated toolkit built through years of real-world production experience — not just tutorials."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 32, marginBottom: 48,
          }}>
            <div>{SKILLS.slice(0, 6).map((s, i) => <SkillBar key={s.name} skill={s} index={i} />)}</div>
            <div>{SKILLS.slice(6).map((s, i)  => <SkillBar key={s.name} skill={s} index={i} />)}</div>
          </div>

          {/* Icon grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            style={{
              display: 'flex', flexWrap: 'wrap', gap: 12,
              justifyContent: 'center',
              padding: '32px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 20,
            }}
          >
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.045, duration: 0.38 }}
                whileHover={{ scale: 1.14, y: -4 }}
                title={skill.name}
                style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${skill.color}12`,
                  border: `1px solid ${skill.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'default', transition: 'box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 22px ${skill.color}35`; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <skill.icon style={{ fontSize: 22, color: skill.color }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════ */}
      <section style={section}>
        <div style={container}>
          <SectionHeading
            eyebrow="What I Do"
            title="Services I Offer"
            subtitle="From idea to deployment — I handle the full lifecycle of digital products."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: 20,
          }}>
            {SERVICES.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════════════ */}
      <section style={section}>
        <div style={container}>
          <SectionHeading
            eyebrow="My Work"
            title="Featured Projects"
            subtitle="Hand-picked projects that showcase my range — from AI-powered platforms to open-source tools."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}>
            {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            style={{ textAlign: 'center', marginTop: 48 }}
          >
            <Link to="/projects">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#f0f4ff',
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                  fontSize: 15, padding: '14px 28px', borderRadius: 99,
                  cursor: 'pointer', backdropFilter: 'blur(10px)',
                }}
              >
                View All Projects
                <FiArrowRight style={{ fontSize: 16 }} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section style={section}>
        <div style={container}>
          <SectionHeading
            eyebrow="Social Proof"
            title="What Clients Say"
            subtitle="Real feedback from real people I've worked with across the globe."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {TESTIMONIALS.map((t, i) => <TestimonialCard key={t.name} t={t} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT CTA
      ══════════════════════════════════════════════ */}
      <section style={{ ...section, paddingBottom: 120 }}>
        <div style={container}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            style={{
              background: 'linear-gradient(135deg, rgba(0,217,184,0.07), rgba(52,211,153,0.03))',
              border: '1px solid rgba(0,217,184,0.18)',
              borderRadius: 28,
              padding: 'clamp(40px, 6vw, 80px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow center */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400, height: 400, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,217,184,0.09) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <span style={{
              fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase',
              color: '#00d9b8', fontFamily: "'JetBrains Mono', monospace",
              display: 'block', marginBottom: 20,
            }}>
              — Let's Work Together —
            </span>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 50px)',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800, color: '#f0f4ff',
              lineHeight: 1.1, marginBottom: 18,
            }}>
              Have a project in mind?
              <br />
              <span style={{ color: '#00d9b8' }}>Let's build it together.</span>
            </h2>

            <p style={{
              fontSize: 17, color: '#8892a4', lineHeight: 1.75,
              fontFamily: "'DM Sans', sans-serif",
              maxWidth: 500, margin: '0 auto 36px',
            }}>
              I'm currently open to freelance work and full-time opportunities.
              Send me a message and I'll get back within 24 hours.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 14 }}>
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#00d9b8', color: '#050810',
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                    fontSize: 15, padding: '15px 32px', borderRadius: 99,
                    boxShadow: '0 0 40px rgba(0,217,184,0.4)',
                    cursor: 'pointer',
                  }}
                >
                  <FiMail style={{ fontSize: 16 }} />
                  Start a Conversation
                  <FiArrowRight style={{ fontSize: 16 }} />
                </motion.div>
              </Link>

              <a href="mailto:rafay@example.com">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#f0f4ff',
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                    fontSize: 15, padding: '15px 28px', borderRadius: 99,
                    cursor: 'pointer', backdropFilter: 'blur(10px)',
                  }}
                >
                  rafay@example.com
                </motion.div>
              </a>
            </div>

            <div style={{ marginTop: 44, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10 }}>
              {['React', 'Next.js', 'Node.js', 'Laravel', 'TypeScript', 'Docker', 'PostgreSQL'].map((t) => (
                <span key={t} style={{
                  fontSize: 12, padding: '5px 14px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 99, color: '#8892a4',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer style={{
        position: 'relative', zIndex: 1,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '30px 24px',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}>
          <span style={{
            fontSize: 13, color: '#4a5568',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            © 2024 Rafay Khalil. Built with React &amp; ❤️
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: 'Home',     to: '/'        },
              { label: 'Projects', to: '/projects' },
              { label: 'Resume',   to: '/resume'   },
              { label: 'Contact',  to: '/contact'  },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                style={{
                  fontSize: 13, color: '#4a5568',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#00d9b8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#4a5568'; }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
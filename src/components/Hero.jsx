import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Brain, Link as LinkIcon, Download } from 'lucide-react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const [dpr, setDpr] = useState(1);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, moved: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      setDpr(ratio);
      canvas.width = Math.max(1, Math.floor(rect.width * ratio));
      canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    };

    const createParticles = (count) => {
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: 1 + Math.random() * 1.5,
        });
      }
      particlesRef.current = arr;
    };

    const connectAndMove = () => {
      const particles = particlesRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // subtle gradient background glow
      const g = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        Math.max(canvas.width, canvas.height) * 0.6
      );
      g.addColorStop(0, 'rgba(56,189,248,0.06)');
      g.addColorStop(1, 'rgba(2,6,23,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // attraction/repulsion
        if (mouse.moved) {
          const dx = p.x - mouse.x * dpr;
          const dy = p.y - mouse.y * dpr;
          const dist2 = dx * dx + dy * dy;
          const influence = 80 * dpr;
          if (dist2 < influence * influence) {
            const force = -0.6 / Math.sqrt(dist2 + 0.0001);
            p.vx += force * (dx / (Math.sqrt(dist2) + 0.0001));
            p.vy += force * (dy / (Math.sqrt(dist2) + 0.0001));
          }
        }

        // wander
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;

        // friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        // bounds
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(125, 211, 252, 0.9)';
        ctx.fill();
      }

      // draw neural connections
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90 * dpr) {
            const alpha = 1 - dist / (90 * dpr);
            ctx.strokeStyle = `rgba(59,130,246,${alpha * 0.4})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(connectAndMove);
    };

    resize();
    createParticles(120);
    connectAndMove();

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.moved = true;
    };

    const onResize = () => {
      resize();
      createParticles(120);
    };

    canvas.addEventListener('mousemove', onMove);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      canvas.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
    };
  }, [dpr]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-80"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Background visuals */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <ParticleCanvas />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/80" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-24 md:px-10 md:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200 backdrop-blur">
          <Shield size={14} /> AI & Cybersecurity Enthusiast
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Nathan Dava Arkananta
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Bridging AI, Cybersecurity, and IT GRC with business strategy. I design
          solution architectures that turn complex systems into tangible business outcomes.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#innovation"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            <Brain size={16} /> Explore Innovation Portfolio
          </a>
          <a
            href="/Nathan_Dava_Arkananta_CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Download size={16} /> Download CV
          </a>
          <a
            href="#connect"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur transition hover:bg-cyan-400/20"
          >
            <LinkIcon size={16} /> Connect & Collaborate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

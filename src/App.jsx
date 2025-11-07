import React from 'react';
import Hero from './components/Hero';
import Innovation from './components/Innovation';
import GrowthJourney from './components/GrowthJourney';
import AboutContact from './components/AboutContact';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Simple glass nav */}
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
        <a href="#top" className="text-sm font-semibold tracking-tight text-white/90">NDA • AI x Cyber</a>
        <nav className="hidden gap-4 text-sm text-slate-200 sm:flex">
          <a href="#innovation" className="hover:text-white">Portfolio</a>
          <a href="#journey" className="hover:text-white">Journey</a>
          <a href="#connect" className="hover:text-white">Connect</a>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <Innovation />
        <section id="journey">
          <GrowthJourney />
        </section>
        <AboutContact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60 py-10 text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p>
            © {new Date().getFullYear()} Nathan Dava Arkananta — Building future-forward solutions at the intersection of AI, Cybersecurity, and GRC.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

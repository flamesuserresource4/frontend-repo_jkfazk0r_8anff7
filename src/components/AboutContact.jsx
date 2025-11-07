import React from 'react';
import { Mail, User, Linkedin, Github, FileDown } from 'lucide-react';

const AboutContact = () => {
  return (
    <section id="connect" className="relative z-10 w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2 text-cyan-300">
              <User size={18} />
              <h2 className="text-xl font-semibold">About</h2>
            </div>
            <p className="text-slate-300">
              I operate at the intersection of AI, cybersecurity, and IT GRC, with a presales mindset
              focused on value narratives, risk translation, and solution design. I love turning
              complexity into confidence for decision-makers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/Nathan_Dava_Arkananta_CV.pdf" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
                <FileDown size={16} /> Download CV
              </a>
            </div>
          </div>
          <div>
            <div className="mb-6 flex items-center gap-2 text-cyan-300">
              <Mail size={18} />
              <h2 className="text-xl font-semibold">Connect & Collaborate</h2>
            </div>
            <div className="space-y-3">
              <a href="mailto:nathan@example.com" className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-200 transition hover:bg-white/10">
                <span>Email</span>
                <span className="opacity-70">nathan@example.com</span>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-200 transition hover:bg-white/10">
                <span className="inline-flex items-center gap-2"><Linkedin size={16} /> LinkedIn</span>
                <span className="opacity-70">Open Profile</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-200 transition hover:bg-white/10">
                <span className="inline-flex items-center gap-2"><Github size={16} /> GitHub</span>
                <span className="opacity-70">View Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;

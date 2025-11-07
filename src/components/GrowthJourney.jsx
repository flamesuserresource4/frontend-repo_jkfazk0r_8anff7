import React from 'react';
import { BookOpenCheck, GraduationCap, Trophy } from 'lucide-react';

const Item = ({ title, org, year, details }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h4 className="text-base font-semibold text-white">{title}</h4>
      <span className="text-xs text-cyan-200/80">{year}</span>
    </div>
    <p className="mt-1 text-sm text-slate-300">{org}</p>
    {details && <p className="mt-2 text-sm text-slate-400">{details}</p>}
  </div>
);

const GrowthJourney = () => {
  return (
    <section className="relative z-10 w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-8 flex items-center gap-2 text-cyan-300">
          <BookOpenCheck size={18} />
          <h2 className="text-xl font-semibold">Growth Journey</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Item title="MITRE ATT&CK Defender (MAD) Training" org="MITRE Engenuity" year="2024" details="Hands-on adversary emulation, detection mapping, and CTI workflows." />
          <Item title="DeepLearning.AI Courses" org="Andrew Ng / DeepLearning.AI" year="2023–2024" details="LLMs, GenAI applications, vector databases, and responsible AI." />
          <Item title="Google Cybersecurity Professional" org="Google" year="2023" details="Security foundations, SIEM, SOAR, and incident response playbooks." />
          <Item title="CompTIA Security+ (in progress)" org="CompTIA" year="2025" details="Core security architecture, risk management, and governance alignment." />
        </div>
      </div>
    </section>
  );
};

export default GrowthJourney;

import React from 'react';
import { Award, ShieldCheck, FileText, ExternalLink, Brain } from 'lucide-react';

const Card = ({ title, subtitle, points, tags, links }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 blur-xl transition group-hover:opacity-100" />
    <div className="relative z-10">
      <div className="mb-3 flex items-center gap-2 text-cyan-300">
        <Brain size={16} /> <span className="text-xs font-medium uppercase tracking-wider">Solution</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-cyan-400" />{p}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span key={i} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-100">{t}</span>
        ))}
      </div>
      {links && links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:bg-white/10">
              {l.icon}{l.label} <ExternalLink size={14} className="opacity-70" />
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Innovation = () => {
  return (
    <section id="innovation" className="relative z-10 w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-8 flex items-center gap-2 text-cyan-300">
          <ShieldCheck size={18} />
          <h2 className="text-xl font-semibold">Innovation Portfolio</h2>
        </div>
        <p className="max-w-3xl text-slate-300">
          A solutions-focused showcase aligning AI and cybersecurity with market realities. Each concept blends
          technical rigor with presales clarity to drive business outcomes.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card
            title="AWANG-AI: Financial Crime Intelligence Framework"
            subtitle="National award-winning approach to proactive AML/CFT anomaly detection across fintech rails."
            points={[
              'Graph-based entity resolution and neural anomaly scoring for transaction flows',
              'Risk-tiering with explainable model insights for auditors and regulators',
              'Stream processing design for near real-time alerts and triage dashboards',
            ]}
            tags={["AML/CFT", "Graph AI", "XAI", "Stream Processing"]}
            links={[
              { label: 'Business Case Deck', href: 'https://example.com/awangai-deck', icon: <Award size={14} /> },
              { label: 'Technical Paper', href: 'https://example.com/awangai-paper', icon: <FileText size={14} /> },
            ]}
          />
          <Card
            title="CarbonChain AI: RegTech for ESG & Scope-3 Risk"
            subtitle="SaaS concept to automate emissions assurance and policy compliance across supply chains."
            points={[
              'Multi-source data ingestion with trust scoring and anomaly flags',
              'LLM-backed policy copilots for evidence mapping and gap analysis',
              'Board-ready dashboards translating technical metrics to risk language',
            ]}
            tags={["RegTech", "ESG", "LLM", "GRC"]}
            links={[
              { label: 'Business Brief', href: 'https://example.com/carbonchain-brief', icon: <FileText size={14} /> },
            ]}
          />
          <Card
            title="Sales Intelligence CoPilot"
            subtitle="Signal-driven GTM prioritization with AI-assisted account research and objection handling."
            points={[
              'Unified intent + firmographic graph for opportunity scoring',
              'RAG workflows to craft persona-ready outreach with governance guardrails',
              'Metrics that tie enablement to pipeline and win-rate impact',
            ]}
            tags={["RevOps", "RAG", "Knowledge Graph", "Enablement"]}
            links={[
              { label: 'Product Concept', href: 'https://example.com/sales-intel', icon: <FileText size={14} /> },
            ]}
          />
          <Card
            title="Threat-Informed Architecture"
            subtitle="A blueprinting method that fuses MITRE ATT&CK with cloud-native controls and AI detections."
            points={[
              'Control mapping from ATT&CK TTPs to cloud services and IaC modules',
              'Detection-as-code patterns with testable hypotheses',
              'Executive narratives that connect spend to reduced risk exposure',
            ]}
            tags={["Cybersecurity", "Cloud", "ATT&CK", "IaC"]}
            links={[]}
          />
        </div>
      </div>
    </section>
  );
};

export default Innovation;

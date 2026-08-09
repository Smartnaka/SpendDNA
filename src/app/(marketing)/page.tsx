import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  FileText,
  Lock,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Upload,
  WalletCards,
} from "lucide-react";

const features = [
  [TrendingUp, "Income Analytics", "Track salary, transfers, deposits, and recurring inflows with clean monthly trend lines."],
  [BarChart3, "Spending Analytics", "Understand categories, merchants, recipients, weekday patterns, and cash-flow leakage."],
  [Brain, "AI Insights", "Get readable summaries that explain what changed and which habits matter most."],
  [FileText, "Financial Reports", "Generate shareable, boardroom-ready summaries from any normalized statement."],
  [WalletCards, "Annual Summary", "Turn a year of transactions into an elegant card for personal reflection or sharing."],
  [Lock, "Privacy First", "Designed around encrypted uploads, exportable data, and account-level controls."],
];

const stats = [
  ["₦4.2M", "Income detected"],
  ["₦1.7M", "Expenses mapped"],
  ["86", "Financial score"],
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(45,212,191,0.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.18),transparent_30%)]" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a className="flex items-center gap-3" href="/">
          <span className="grid size-10 place-items-center rounded-2xl bg-teal-300 text-slate-950 shadow-lg shadow-teal-500/20">
            <Sparkles size={19} />
          </span>
          <span className="text-lg font-black tracking-tight">SpendDNA</span>
        </a>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur">
          <Button href="/login" variant="ghost" size="sm">Login</Button>
          <Button href="/dashboard/uploads" size="sm">Analyze Statement</Button>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-14 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:pt-24">
        <div>
          <Badge>Discover the story behind every transaction</Badge>
          <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
            Your money tells a story. SpendDNA helps you read it.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Upload your bank statement and instantly discover spending habits, income trends, biggest transactions,
            financial health, and personalized insights.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/dashboard/uploads" size="lg">
              Analyze Statement <ArrowRight size={18} />
            </Button>
            <Button href="/dashboard" variant="secondary" size="lg">View Demo</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
            {[
              "CSV and PDF ready",
              "Bank parser architecture",
              "Exportable reports",
            ].map((item) => (
              <span className="flex items-center gap-2" key={item}>
                <CheckCircle2 className="text-teal-300" size={16} /> {item}
              </span>
            ))}
          </div>
        </div>

        <Card className="relative overflow-hidden p-0">
          <div className="border-b border-white/10 bg-white/[0.04] px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Live dashboard preview</p>
                <h2 className="text-xl font-bold">August cash flow</h2>
              </div>
              <Upload className="text-teal-300" />
            </div>
          </div>
          <div className="p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div className="rounded-3xl border border-white/10 bg-slate-950/45 p-4" key={label}>
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 h-64 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(45,212,191,0.28),rgba(59,130,246,0.04)),repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_72px)] p-5">
              <div className="flex h-full items-end gap-3">
                {[42, 68, 36, 81, 54, 92, 73, 88].map((height, index) => (
                  <div className="flex-1 rounded-t-2xl bg-gradient-to-t from-teal-400/30 to-white/80" key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <Badge>Platform</Badge>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-5xl">
            Clean analytics for messy financial data.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map(([Icon, title, description]) => (
            <Card className="group transition hover:-translate-y-1 hover:bg-white/[0.075]" key={String(title)}>
              <Icon className="text-teal-300 transition group-hover:scale-110" size={28} />
              <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Card className="grid gap-8 p-8 md:grid-cols-4">
          {[
            "Upload Statement",
            "Normalize transactions",
            "Explore analytics",
            "Download report",
          ].map((step, index) => (
            <div key={step}>
              <span className="grid size-10 place-items-center rounded-full bg-white text-sm font-black text-slate-950">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{step}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                A focused workflow that moves from raw statement to actionable financial narrative.
              </p>
            </div>
          ))}
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-2">
          {["Privacy", "Security", "Supported banks", "Supported file formats"].map((question) => (
            <Card key={question}>
              <ShieldCheck className="text-teal-300" />
              <h3 className="mt-5 text-xl font-bold text-white">{question}</h3>
              <p className="mt-3 leading-7 text-slate-400">
                SpendDNA is structured for encrypted uploads, normalized CSV/PDF parsing, and bank-specific parser modules.
              </p>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-500">
        © 2026 SpendDNA. Built for premium financial clarity.
      </footer>
    </main>
  );
}

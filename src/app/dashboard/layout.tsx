import { Button } from "@/components/ui/button";
import { BarChart3, Bell, FileText, Lightbulb, Search, Settings, Upload } from "lucide-react";
import Link from "next/link";

const nav = [
  [BarChart3, "Dashboard", "/dashboard"],
  [FileText, "Reports", "/dashboard/reports"],
  [Upload, "Uploads", "/dashboard/uploads"],
  [Lightbulb, "Insights", "/dashboard/insights"],
  [Settings, "Settings", "/dashboard/settings"],
] as const;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-y-0 left-0 hidden w-72 border-r border-white/10 bg-slate-950/80 p-5 backdrop-blur-xl lg:block">
        <Link className="flex items-center gap-3 rounded-3xl px-3 py-2" href="/">
          <span className="grid size-10 place-items-center rounded-2xl bg-teal-300 font-black text-slate-950">S</span>
          <span>
            <span className="block text-lg font-black tracking-tight">SpendDNA</span>
            <span className="text-xs text-slate-500">Financial OS</span>
          </span>
        </Link>
        <nav className="mt-8 grid gap-1">
          {nav.map(([Icon, label, href]) => (
            <Link
              className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/[0.07] hover:text-white"
              href={href}
              key={href}
            >
              <Icon className="transition group-hover:text-teal-300" size={18} />
              {label}
            </Link>
          ))}
        </nav>
        <div className="absolute inset-x-5 bottom-5 rounded-[1.75rem] border border-teal-300/15 bg-teal-300/10 p-4">
          <p className="text-sm font-semibold text-white">Ready for a new report?</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">Upload a statement and refresh every metric.</p>
          <Button className="mt-4 w-full" href="/dashboard/uploads" size="sm">Upload</Button>
        </div>
      </div>

      <main className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 px-4 py-4 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="hidden min-w-0 flex-1 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-500 md:flex">
              <Search size={17} />
              <span>Search transactions, recipients, banks...</span>
            </div>
            <div className="flex flex-1 items-center justify-between gap-3 md:flex-none">
              <Link className="font-black lg:hidden" href="/">SpendDNA</Link>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" aria-label="Notifications"><Bell size={18} /></Button>
                <Button variant="secondary" size="sm">Theme</Button>
                <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-teal-200 to-blue-200 text-sm font-black text-slate-950">JD</span>
              </div>
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}

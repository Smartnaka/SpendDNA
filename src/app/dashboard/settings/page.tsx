import { Card } from "@/components/ui/card";

export default function Settings() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Settings</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">Workspace preferences</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {["Profile", "Theme", "Export Data", "Privacy Settings", "Delete Account"].map((item) => (
          <Card className="transition hover:-translate-y-1 hover:bg-white/[0.075]" key={item}>
            <h2 className="text-xl font-bold text-white">{item}</h2>
            <p className="mt-2 leading-7 text-slate-400">Manage your SpendDNA workspace preferences with clean, account-level controls.</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

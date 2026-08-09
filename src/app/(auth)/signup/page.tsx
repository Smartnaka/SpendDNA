import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Signup() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-12">
      <Card className="w-full max-w-md p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">SpendDNA</p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-white">Create your account</h1>
        <p className="mt-2 text-slate-400">Start turning statements into clean financial narratives.</p>
        <div className="mt-8 grid gap-3">
          <input className="focus-ring rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-slate-500" placeholder="Name" />
          <input className="focus-ring rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-slate-500" placeholder="Email" />
          <input className="focus-ring rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-slate-500" placeholder="Password" type="password" />
          <Button>Sign Up</Button>
          <Button variant="secondary">Continue with Google</Button>
          <Button href="/login" variant="ghost">Already have an account?</Button>
        </div>
      </Card>
    </main>
  );
}

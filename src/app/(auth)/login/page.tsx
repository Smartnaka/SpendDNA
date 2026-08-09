import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function Login() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-12">
      <Card className="w-full max-w-md p-8">
        <div className="grid size-12 place-items-center rounded-2xl bg-teal-300 text-slate-950">
          <Sparkles size={20} />
        </div>
        <h1 className="mt-6 text-3xl font-black tracking-tight text-white">Welcome back</h1>
        <p className="mt-2 text-slate-400">Log in to view your statement analytics and reports.</p>
        <div className="mt-8 grid gap-3">
          <input className="focus-ring rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-slate-500" placeholder="Email" />
          <input className="focus-ring rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-slate-500" placeholder="Password" type="password" />
          <Button>Login</Button>
          <Button variant="secondary">Continue with Google</Button>
          <div className="flex justify-between text-sm">
            <Button href="/forgot-password" variant="ghost" size="sm">Forgot password?</Button>
            <Button href="/signup" variant="ghost" size="sm">Create account</Button>
          </div>
        </div>
      </Card>
    </main>
  );
}

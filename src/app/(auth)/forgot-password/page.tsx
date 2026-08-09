import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ForgotPassword() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-12">
      <Card className="w-full max-w-md p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Account recovery</p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-white">Reset password</h1>
        <p className="mt-2 text-slate-400">Enter your email and we will send recovery instructions.</p>
        <input className="focus-ring mt-8 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-slate-500" placeholder="Email" />
        <Button className="mt-4 w-full">Send reset link</Button>
        <Button className="mt-2 w-full" href="/login" variant="ghost">Back to login</Button>
      </Card>
    </main>
  );
}

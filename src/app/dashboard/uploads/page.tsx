import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function Uploads() {
  return (
    <div className="mx-auto max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Uploads</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">Upload statement</h1>
      <p className="mt-4 max-w-2xl leading-7 text-slate-400">
        Drag and drop CSV or PDF statements. SpendDNA detects the bank where possible and normalizes transactions into a shared schema.
      </p>
      <Card className="mt-8 text-center">
        <div className="rounded-[2rem] border border-dashed border-teal-300/35 bg-teal-300/[0.06] p-12 sm:p-20">
          <Upload className="mx-auto text-teal-300" size={46} />
          <h2 className="mt-5 text-2xl font-bold text-white">Drop files here</h2>
          <p className="mt-2 text-slate-400">or click to browse CSV/PDF statements up to your workspace limit.</p>
        </div>
      </Card>
    </div>
  );
}

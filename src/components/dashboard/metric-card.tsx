import { Card } from "@/components/ui/card";
import { currency } from "@/lib/utils";

function formatMetric(label: string, value: number) {
  if (label.includes("Rate") || label.includes("Growth")) return `${value.toFixed(1)}%`;
  if (label.includes("Count") || label.includes("Unique")) return value.toLocaleString();
  return currency.format(value);
}

export function MetricCard({ label, value, trend }: { label: string; value: number; trend?: number }) {
  return (
    <Card className="group p-5 transition hover:-translate-y-1 hover:bg-white/[0.075]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-400">{label}</p>
        <span className="size-2 rounded-full bg-teal-300 opacity-60 transition group-hover:opacity-100" />
      </div>
      <p className="mt-4 text-2xl font-black tracking-tight text-white">{formatMetric(label, value)}</p>
      <p className="mt-3 text-xs text-slate-500">
        {trend !== undefined ? `${trend.toFixed(1)}% vs previous period` : "Updated from latest statement"}
      </p>
    </Card>
  );
}

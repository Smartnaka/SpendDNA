import { Card } from "@/components/ui/card";
import { generateInsights } from "@/lib/analytics/engine";
import { transactions } from "@/lib/sample-data";

export default function Insights() {
  const insights = generateInsights(transactions);

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">AI Insights</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">Signals worth acting on</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {insights.map((insight) => (
          <Card className="p-7" key={insight.title}>
            <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              {insight.tone}
            </span>
            <h2 className="mt-5 text-2xl font-bold text-white">{insight.title}</h2>
            <p className="mt-3 leading-7 text-slate-400">{insight.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

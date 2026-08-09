import { Card } from "@/components/ui/card";
import { analyzeTransactions } from "@/lib/analytics/engine";
import { transactions } from "@/lib/sample-data";

export default function Reports() {
  const analytics = analyzeTransactions(transactions);

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Reports</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">Financial report</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="bg-gradient-to-br from-teal-300/20 to-blue-500/10 p-8">
          <p className="text-sm text-teal-100">Financial Score</p>
          <h2 className="mt-4 text-8xl font-black text-white">86</h2>
          <p className="mt-4 leading-7 text-slate-300">Strong positive cash flow, diversified income, and controlled recurring spending.</p>
        </Card>
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-white">Share Card</h2>
          <div className="mt-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
            <p className="text-sm font-semibold text-teal-300">SpendDNA</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Income", analytics.totalIncome],
                ["Expenses", analytics.totalExpenses],
                ["Net Cash Flow", analytics.netCashFlow],
                ["Largest Credit", analytics.largestCredit],
              ].map(([label, value]) => (
                <div key={String(label)}>
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="text-2xl font-black text-white">₦{Number(value).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

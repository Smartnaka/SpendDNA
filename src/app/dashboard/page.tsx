import { Card } from "@/components/ui/card";
import { CashFlowChart, CategoryChart } from "@/components/dashboard/charts";
import { MetricCard } from "@/components/dashboard/metric-card";
import { analyzeTransactions } from "@/lib/analytics/engine";
import { transactions } from "@/lib/sample-data";

const metricLabels = [
  "Total Income",
  "Total Expenses",
  "Net Cash Flow",
  "Average Transaction",
  "Largest Credit",
  "Largest Debit",
  "Transactions Count",
  "Unique Senders",
  "Unique Recipients",
  "Savings Rate",
  "Income Growth",
  "Expense Growth",
];

export default function Dashboard() {
  const analytics = analyzeTransactions(transactions);
  const values = [
    analytics.totalIncome,
    analytics.totalExpenses,
    analytics.netCashFlow,
    analytics.averageTransaction,
    analytics.largestCredit,
    analytics.largestDebit,
    analytics.transactionsCount,
    analytics.uniqueSenders,
    analytics.uniqueRecipients,
    analytics.savingsRate,
    analytics.incomeGrowth,
    analytics.expenseGrowth,
  ];

  return (
    <div>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Dashboard</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">Financial command center</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            A calm, data-rich overview of normalized statement activity, monthly movement, and AI-ready spending signals.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-right">
          <p className="text-sm text-slate-400">Financial Score</p>
          <p className="text-4xl font-black text-teal-200">86</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metricLabels.map((label, index) => (
          <MetricCard key={label} label={label} value={values[index]} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Monthly trend</p>
              <h2 className="text-2xl font-bold text-white">Income vs Expenses</h2>
            </div>
            <span className="rounded-full bg-teal-300/10 px-3 py-1 text-xs font-semibold text-teal-200">Live demo</span>
          </div>
          <CashFlowChart data={analytics.months} />
        </Card>
        <Card>
          <div className="mb-6">
            <p className="text-sm text-slate-500">Distribution</p>
            <h2 className="text-2xl font-bold text-white">Top Categories</h2>
          </div>
          <CategoryChart data={analytics.categories} />
        </Card>
      </div>

      <Card className="mt-8 overflow-hidden p-0">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-sm text-slate-500">Recent activity</p>
            <h2 className="text-xl font-bold text-white">Transactions</h2>
          </div>
          <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">Export CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left text-sm">
            <thead className="bg-white/[0.03] text-xs uppercase tracking-[0.16em] text-slate-500">
              <tr>
                {["Date", "Description", "Type", "Amount", "Balance", "Category", "Sender", "Recipient", "Bank"].map((heading) => (
                  <th className="px-5 py-4 font-semibold" key={heading}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.slice(0, 12).map((transaction) => (
                <tr className="border-t border-white/10 text-slate-300 transition hover:bg-white/[0.03]" key={transaction.id}>
                  <td className="px-5 py-4">{transaction.date.toLocaleDateString()}</td>
                  <td className="px-5 py-4 text-white">{transaction.description}</td>
                  <td className={transaction.type === "credit" ? "px-5 py-4 text-teal-300" : "px-5 py-4 text-rose-300"}>
                    {transaction.type}
                  </td>
                  <td className="px-5 py-4">₦{transaction.amount.toLocaleString()}</td>
                  <td className="px-5 py-4">₦{transaction.balance.toLocaleString()}</td>
                  <td className="px-5 py-4">{transaction.category}</td>
                  <td className="px-5 py-4">{transaction.sender}</td>
                  <td className="px-5 py-4">{transaction.recipient}</td>
                  <td className="px-5 py-4">{transaction.bank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

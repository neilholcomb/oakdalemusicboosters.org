import { SalesChart } from './components/SalesChart';
import { salesData } from './data/salesData';

export default function FireworkStatsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 font-sans antialiased w-full">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 w-full m-0">
        Fireworks Sales Summary
      </h1>

      <div className="w-full max-w-6xl mx-auto p-4 flex flex-col gap-8">
        <SalesChart
          data={salesData}
          title="Net Sales Comparison"
          yearlyTotalsTitle="Yearly Totals (Net Sales)"
          dataKey="netSales"
          isDollar
        />

        <SalesChart
          data={salesData}
          title="Transaction Count Comparison"
          yearlyTotalsTitle="Yearly Totals (Transaction Count)"
          dataKey="totalCount"
          isDollar={false}
        />
      </div>
    </div>
  );
}

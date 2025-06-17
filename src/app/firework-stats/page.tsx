'use client';

import { SalesChart } from './components/SalesChart';
import { useSalesData } from './hooks/useSalesData';

export default function FireworkStatsPage() {
  const { data: salesData, error, isLoading } = useSalesData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 font-sans antialiased w-full flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading sales data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 font-sans antialiased w-full flex items-center justify-center">
        <div className="text-xl text-red-600">
          Error loading sales data: {error.message}
        </div>
      </div>
    );
  }

  if (!salesData) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 font-sans antialiased w-full flex items-center justify-center">
        <div className="text-xl text-gray-600">No sales data available</div>
      </div>
    );
  }

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

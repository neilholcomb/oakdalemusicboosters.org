'use client';

import { SalesChart } from './SalesChart';
import { useSalesData } from '../hooks/useSalesData';

export const ChartsContent = () => {
    const { data: salesData, error, isLoading } = useSalesData();

    if (isLoading) {
        return (
            <div className="w-full max-w-6xl mx-auto p-4 flex items-center justify-center min-h-96">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
                    <div className="text-xl text-gray-600">
                        Loading sales data...
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full max-w-6xl mx-auto p-4 flex items-center justify-center min-h-96">
                <div className="text-center">
                    <div className="text-xl text-red-600 mb-4">
                        Error loading sales data
                    </div>
                    <div className="text-gray-600 mb-4">
                        {error.message || 'Something went wrong'}
                    </div>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => window.location.reload()}
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (!salesData) {
        return (
            <div className="w-full max-w-6xl mx-auto p-4 flex items-center justify-center min-h-96">
                <div className="text-xl text-gray-600">
                    No sales data available
                </div>
            </div>
        );
    }

    return (
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
    );
};

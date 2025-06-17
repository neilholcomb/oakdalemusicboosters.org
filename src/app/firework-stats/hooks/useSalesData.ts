import type { YearlySales } from '../data/salesData';
import { useQuery } from '@tanstack/react-query';

interface SalesDataResponse {
    data: YearlySales[];
    success: boolean;
}

const fetchSalesData = async (): Promise<YearlySales[]> => {
    const response = await fetch('/api/sales-data');

    if (!response.ok) {
        throw new Error('Failed to fetch sales data');
    }

    const result: SalesDataResponse = await response.json();

    if (!result.success) {
        throw new Error('API returned error');
    }

    return result.data;
};

export const useSalesData = () => {
    return useQuery({
        queryFn: fetchSalesData,
        queryKey: ['sales-data'],
    });
};

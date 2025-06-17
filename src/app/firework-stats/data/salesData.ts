export interface DailySales {
  date: string;
  netSales: number;
  totalCount: number;
}

export interface YearlySales {
  year: number;
  dailySales: DailySales[];
}

export const salesData: YearlySales[] = [
  {
    year: 2023,
    dailySales: [
      { date: '6/28', netSales: 0, totalCount: 0 },
      { date: '6/29', netSales: 5162.35, totalCount: 39 },
      { date: '6/30', netSales: 6906.7, totalCount: 51 },
      { date: '7/1', netSales: 13812.09, totalCount: 98 },
      { date: '7/2', netSales: 15885.06, totalCount: 119 },
      { date: '7/3', netSales: 29686.74, totalCount: 225 },
      { date: '7/4', netSales: 33030.25, totalCount: 309 },
    ],
  },
  {
    year: 2024,
    dailySales: [
      { date: '6/28', netSales: 0, totalCount: 0 },
      { date: '6/29', netSales: 6037.81, totalCount: 42 },
      { date: '6/30', netSales: 5377.58, totalCount: 34 },
      { date: '7/1', netSales: 9746.04, totalCount: 63 },
      { date: '7/2', netSales: 11852.53, totalCount: 79 },
      { date: '7/3', netSales: 28673.53, totalCount: 201 },
      { date: '7/4', netSales: 40607.85, totalCount: 374 },
    ],
  },
  {
    year: 2025,
    dailySales: [
      { date: '6/28', netSales: 0, totalCount: 0 },
      { date: '6/29', netSales: 0, totalCount: 0 },
      { date: '6/30', netSales: 0, totalCount: 0 },
      { date: '7/1', netSales: 0, totalCount: 0 },
      { date: '7/2', netSales: 0, totalCount: 0 },
      { date: '7/3', netSales: 0, totalCount: 0 },
      { date: '7/4', netSales: 0, totalCount: 0 },
    ],
  },
];

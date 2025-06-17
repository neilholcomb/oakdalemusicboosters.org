'use client';

import {
  Bar,
  BarChart,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { DailySales, YearlySales } from '../data/salesData';

interface ChartDataPoint {
  date: string;
  [key: string]: string | number;
}

interface CustomLabelProps {
  isDollar?: boolean;
  value?: string | number;
  width?: string | number;
  x?: string | number;
  y?: string | number;
}

interface YearlyTotalsProps {
  colors: string[];
  data: YearlySales[];
  isDollar?: boolean;
  title: string;
  totals: { total: number; year: number }[];
}

interface SalesChartProps {
  data: YearlySales[];
  dataKey: keyof DailySales;
  isDollar?: boolean;
  title: string;
  yearlyTotalsTitle: string;
}

const CustomLabel = (props: CustomLabelProps) => {
  const { x, y, width, value, isDollar } = props;
  if (
    !value ||
    0 === Number(value) ||
    x === undefined ||
    y === undefined ||
    width === undefined
  ) {
    return null;
  }

  const displayValue = isDollar
    ? `$${Number(value).toLocaleString()}`
    : Number(value).toLocaleString();

  return (
    <text
      x={Number(x) + Number(width) / 2}
      y={Number(y) - 5}
      fill="#6b7280"
      textAnchor="start"
      fontSize="10"
      fontWeight="bold"
      transform={`rotate(-90, ${Number(x) + Number(width) / 2}, ${Number(y) - 5})`}
    >
      {displayValue}
    </text>
  );
};

const YearlyTotals = ({
  totals,
  title,
  isDollar = false,
  colors,
  data,
}: YearlyTotalsProps) => {
  const isCount = !isDollar;
  const has2025 = totals.some(item => 2025 === item.year);
  const currentYear2025 = totals.find(item => 2025 === item.year);
  const previousYears = totals.filter(item => 2025 > item.year);
  const nonCurrentYears = totals.filter(item => 2025 !== item.year);

  const getYearColor = (year: number) => {
    const yearIndex = data.findIndex(yearData => yearData.year === year);
    return -1 !== yearIndex ? colors[yearIndex % colors.length] : '#6b7280';
  };

  return (
    <div className="w-56 flex-shrink-0 bg-white rounded-lg shadow-md p-4 border border-gray-200 text-sm">
      <div className="font-bold mb-2 text-gray-900">{title}</div>

      {/* Show non-2025 years normally */}
      {nonCurrentYears.map(({ year, total }) => (
        <div key={year} className="flex justify-between mb-1 text-gray-700">
          <span style={{ color: getYearColor(year) }} className="font-bold">
            {year}:
          </span>
          <span className="font-medium">
            {isCount
              ? total.toLocaleString()
              : isDollar
                ? `$${total.toLocaleString()}`
                : total.toLocaleString()}
          </span>
        </div>
      ))}

      {/* Show 2025 with comparisons if it exists */}
      {has2025 && currentYear2025 && (
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between mb-2 text-gray-700">
            <span style={{ color: getYearColor(2025) }} className="font-bold">
              2025:
            </span>
            <span className="font-medium">
              {isCount
                ? currentYear2025.total.toLocaleString()
                : isDollar
                  ? `$${currentYear2025.total.toLocaleString()}`
                  : currentYear2025.total.toLocaleString()}
            </span>
          </div>

          {/* Comparisons with previous years */}
          {previousYears.map(({ year, total }) => {
            const difference = currentYear2025.total - total;
            const isAhead = 0 <= difference;
            const displayValue = isCount
              ? Math.abs(difference).toLocaleString()
              : isDollar
                ? `$${Math.abs(difference).toLocaleString()}`
                : Math.abs(difference).toLocaleString();

            return (
              <div
                key={`compare-${year}`}
                className="flex justify-between items-center mb-1 text-xs"
              >
                <span className="text-gray-600">vs {year}:</span>
                <span
                  className={`font-medium ${isAhead ? 'text-green-600' : 'text-red-600'}`}
                >
                  {isAhead ? '+' : '-'}
                  {displayValue}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const SalesChart = ({
  data,
  title,
  yearlyTotalsTitle,
  dataKey,
  isDollar = false,
}: SalesChartProps) => {
  // Create chart data grouped by date
  const dates = data[0]?.dailySales.map(day => day.date) || [];

  const chartData: ChartDataPoint[] = dates.map(date => {
    const dataPoint: ChartDataPoint = { date };
    data.forEach(yearData => {
      const dayData = yearData.dailySales.find(day => day.date === date);
      dataPoint[`${yearData.year}`] = (dayData?.[dataKey] as number) || 0;
    });
    return dataPoint;
  });

  const yearlyTotals = data.map(yearData => {
    const total = yearData.dailySales.reduce(
      (sum, day) => sum + (day[dataKey] as number),
      0
    );
    return { total, year: yearData.year };
  });

  // Using Tailwind's default color palette
  //                blue-500,  emerald-500,  amber-500,   red-500,     violet-500
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="flex flex-row items-start gap-4 overflow-x-auto">
      <div className="flex-1 min-w-0">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{title}</h2>
        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            data={chartData}
            margin={{ bottom: 5, left: 20, right: 30, top: 60 }}
          >
            <XAxis dataKey="date" />
            <YAxis
              tickFormatter={value =>
                isDollar ? `$${value.toLocaleString()}` : value.toLocaleString()
              }
            />
            <Tooltip
              formatter={value =>
                isDollar
                  ? `$${Number(value).toLocaleString()}`
                  : Number(value).toLocaleString()
              }
            />
            <Legend />
            {data.map((yearData, index) => (
              <Bar
                key={yearData.year}
                dataKey={`${yearData.year}`}
                fill={colors[index % colors.length]}
              >
                <LabelList
                  content={props => (
                    <CustomLabel {...props} isDollar={isDollar} />
                  )}
                />
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <YearlyTotals
        totals={yearlyTotals}
        title={yearlyTotalsTitle}
        isDollar={isDollar}
        colors={colors}
        data={data}
      />
    </div>
  );
};

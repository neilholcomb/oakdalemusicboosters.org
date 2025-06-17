import { NextResponse } from 'next/server';
import { salesData } from '../../firework-stats/data/salesData';

export const GET = async () => {
  try {
    return NextResponse.json({
      data: salesData,
      success: true,
    });
  } catch (error) {
    console.error('Error fetching sales data:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch sales data',
        success: false,
      },
      { status: 500 }
    );
  }
};

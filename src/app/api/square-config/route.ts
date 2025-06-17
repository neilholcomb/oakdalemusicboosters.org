import { NextResponse } from 'next/server';
import { config } from '../../../lib/config';

export const GET = async () => {
  try {
    return NextResponse.json({
      data: {
        accessToken: config.square.accessToken,
        applicationId: config.square.applicationId,
        environment: config.square.environment,
      },
      success: true,
    });
  } catch (error) {
    console.error('Error fetching Square config:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch Square config',
        success: false,
      },
      { status: 500 }
    );
  }
};

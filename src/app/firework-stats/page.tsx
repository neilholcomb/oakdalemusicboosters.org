'use client';

import { ChartsContent } from './components/ChartsContent';

export default function FireworkStatsPage() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 font-sans antialiased w-full">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 w-full m-0">
                Fireworks Sales Summary
            </h1>

            <ChartsContent />
        </div>
    );
}

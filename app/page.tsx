// app/page.tsx
import AnalyticsCard from '../components/AnalyticsCard'; 
import React from 'react';
import { useBlockHeight } from '../hooks/useMonadData'; 

export default function Dashboard() {
  const currentBlockHeight = useBlockHeight(); 

  return (
    <div className="min-h-screen bg-gray-900 p-8">

      <header className="text-center max-w-4xl mx-auto mb-16 pt-8">
        <h1 className="text-4xl font-extrabold text-indigo-400 mb-2">Monad Analytics</h1>
        <p className="text-lg text-gray-400">
          Real-time insights and comprehensive analytics for the Monad ecosystem.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg">
            View Dashboard
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
            Network Status
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <AnalyticsCard title="TRANSACTIONS PER SECOND" value="845" trend="+15.3% from yesterday"/>
          <AnalyticsCard title="ACTIVE VALIDATORS" value="131" trend="+2 new validators"/>
          <AnalyticsCard title="TOTAL VALUE LOCKED" value="$162.4M" trend="+9.7% this week"/>

          <AnalyticsCard 
            title="CURRENT BLOCK HEIGHT" 
            value={currentBlockHeight} 
            trend="Live" 
            color="text-indigo-400"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800 p-6 rounded-xl border border-gray-700 h-96">
             <h3 className="text-xl font-semibold text-white">Network Overview</h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 h-96">
            <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
// components/AnalyticsCard.tsx
import React from 'react';

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  trend?: string;
  color?: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value, trend, color = 'text-green-400' }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 transition duration-300 hover:border-indigo-500">
      <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{title}</p>
      <h2 className="text-4xl font-extrabold text-white mt-2 leading-none">{value}</h2>
      {trend && (
        <p className={`text-sm mt-2 ${color} font-semibold`}>
          {trend}
        </p>
      )}
    </div>
  );
};

export default AnalyticsCard;
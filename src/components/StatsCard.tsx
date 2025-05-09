import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  subtext: string;
  chartType: 'line' | 'bar';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtext, chartType }) => {
  return (
    <div className="card">
      <h3 className="stat-label font-medium">{title}</h3>
      <div className="mt-2">
        <p className="stat-value">{value}</p>
        <p className="stat-label mt-1">{subtext}</p>
      </div>
      <div className="mt-6 h-24">
        {chartType === 'line' ? (
          <div className="relative h-full">
            <div className="absolute inset-0 flex items-end">
              <div className="w-full h-px bg-gray-200"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 mb-2"></div>
                <span className="text-xs text-gray-400">8 AM</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 mb-2"></div>
                <span className="text-xs text-gray-400">12 PM</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 mb-2"></div>
                <span className="text-xs text-gray-400">4 PM</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative h-full">
            <div className="absolute inset-0 flex items-end">
              <div className="w-full h-px bg-gray-200"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-2">
              {[20, 40, 60, 80, 100].map((height, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-4 bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600" 
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-gray-400 mt-2">
                    {['Mon', '12', '4', 'Apr', 'Sat'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard; 
import React, { useState, useEffect } from 'react';

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        // Reset to 0 when reaching 100
        if (prev >= 100) return 0;
        // Random increment between 5 and 15
        const increment = Math.floor(Math.random() * 10) + 5;
        // Cap at 100
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 z-50">
      <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gray-900 dark:bg-gray-100 transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loading; 
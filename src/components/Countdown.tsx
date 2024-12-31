import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { calculateTimeLeft } from '../utils/timeCalculations';
import TimeBlock from './TimeBlock';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setShowSparkles(prev => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="relative">
      {showSparkles && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <Sparkles className="w-12 h-12 text-yellow-400 animate-bounce" />
        </div>
      )}
      <div className="flex gap-8">
        {timeBlocks.map(({ label, value }) => (
          <TimeBlock
            key={label}
            label={label}
            value={value}
            showSparkles={showSparkles}
          />
        ))}
      </div>
    </div>
  );
};

export default Countdown;
import React from 'react';
import { Sparkles } from 'lucide-react';

interface TimeBlockProps {
  label: string;
  value: number;
  showSparkles: boolean;
}

const TimeBlock: React.FC<TimeBlockProps> = ({ label, value, showSparkles }) => (
  <div className="relative group">
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl p-6 shadow-xl backdrop-blur-lg border border-white/20 transform transition-all duration-300 hover:scale-110">
        <span className="text-6xl font-bold text-white tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="mt-4 text-xl font-medium text-white uppercase tracking-wider">
        {label}
      </span>
    </div>
    {showSparkles && (
      <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" />
    )}
  </div>
);

export default TimeBlock;
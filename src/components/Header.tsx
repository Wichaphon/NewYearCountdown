import React from 'react';
import { PartyPopper } from 'lucide-react';

const Header: React.FC = () => {
  const nextYear = new Date().getFullYear() + 1;
  
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <PartyPopper className="w-12 h-12 text-yellow-400 animate-bounce" />
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
        New Year {nextYear}
      </h1>
      <PartyPopper className="w-12 h-12 text-yellow-400 animate-bounce" />
    </div>
  );
};

export default Header;
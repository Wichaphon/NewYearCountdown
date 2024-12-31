import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const UserCounter: React.FC = () => {
  const [userCount, setUserCount] = useState(1);

  useEffect(() => {
    // Simulate random user count changes
    const interval = setInterval(() => {
      setUserCount(prev => Math.max(1, prev + Math.floor(Math.random() * 3) - 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 flex items-center gap-2">
      <Users className="w-5 h-5 text-white/90" />
      <span className="text-white/90 font-medium">
        {userCount} {userCount === 1 ? 'user' : 'users'} online
      </span>
    </div>
  );
};

export default UserCounter;
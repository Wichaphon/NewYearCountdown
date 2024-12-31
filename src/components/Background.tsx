import React from 'react';

const Background: React.FC = () => (
  <>
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
    <div className="absolute inset-0 bg-black/50" />
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/30 rounded-full filter blur-3xl animate-pulse delay-1000" />
  </>
);

export default Background;
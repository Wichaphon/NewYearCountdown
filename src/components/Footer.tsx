import React from 'react';
import { Copyright } from 'lucide-react';

const Footer: React.FC = () => (
  <div className="absolute bottom-4 left-0 right-0 text-center text-white/80">
    <div className="flex items-center justify-center gap-1">
      <Copyright className="w-4 h-4" />
      <span>{new Date().getFullYear()} Created by Wichaphon Buathong</span>
    </div>
  </div>
);

export default Footer;
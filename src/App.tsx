import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import UserCounter from './components/UserCounter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center relative overflow-hidden">
      <Background />
      <UserCounter />
      
      <div className="relative z-10 text-center">
        <Header />
        <Countdown />

        <p className="mt-12 text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Get ready to welcome the new year with joy, hope, and endless possibilities! 
          Join us in counting down to an amazing {new Date().getFullYear() + 1}!
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
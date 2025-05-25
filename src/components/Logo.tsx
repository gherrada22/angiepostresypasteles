import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className || ''}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <g>
          <path d="M25,35 h50 v40 a10,10 0 0 1 -10,10 h-30 a10,10 0 0 1 -10,-10 z" fill="#F8E6B6" stroke="#723607" strokeWidth="4"/>
          <path d="M30,35 v-15 a10,10 0 0 1 10,-10 h20 a10,10 0 0 1 10,10 v15" fill="#F8E6B6" stroke="#723607" strokeWidth="4"/>
          <circle cx="50" cy="10" r="8" fill="#F44236" stroke="#723607" strokeWidth="2"/>
          <path d="M40,45 h20 M38,55 h24" stroke="#723607" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="40" cy="30" r="2" fill="#723607"/>
          <circle cx="60" cy="30" r="2" fill="#723607"/>
        </g>
      </svg>
      <div className="mt-1">
        <h1 className="font-bold text-xl leading-none">ANGIE</h1>
        <p className="text-xs font-medium tracking-wider">TORTAS Y POSTRES</p>
      </div>
    </div>
  );
};

export default Logo;
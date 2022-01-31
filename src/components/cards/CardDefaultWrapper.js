import React from 'react';

export default function CardDefaultWrapper({ title, children }) {
  return (
    <div className="bg-white rounded-sm shadow-md px-4 py-6">
      <div className="flex-col items-start">
        <p className="font-bold text-xl">{title}</p>
        <div className="md:flex items-end py-2 space-x-2 space-y-2 md:space-y-0">
          {children}
        </div>
      </div>
    </div>
  );
}

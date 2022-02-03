import React from 'react';

export default function SectionTitle({ title, subTitle }) {
  return (
    <div className="py-12 flex flex-col items-center text-center">
      <h3 className="text-4xl font-bold py-2 text-gray-700">{title}</h3>
      <span className="md:w-2/4">
        <p className="font-normal text-gray-500">{subTitle}</p>
      </span>
    </div>
  );
}

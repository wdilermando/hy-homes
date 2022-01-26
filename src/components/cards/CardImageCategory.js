import Image from 'next/image';
import React from 'react';

export default function CardImageCategory({
  imgSrc,
  title,
  estateCount,
  hasGrow = false,
  byRegion = false,
}) {
  return (
    <div
      className={`relative h-96 bg-gradient-to-b from-transparent to-gray-600 bg-opacity-50 max-w-full rounded-md overflow-hidden fix-ov group ${
        hasGrow && 'md:col-span-2'
      }`}
    >
      <Image
        src={imgSrc}
        layout="fill"
        objectFit="cover"
        alt="apartamentos"
        className="mix-blend-multiply cursor-pointer group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      {byRegion ? (
        <span className="flex flex-col items-start justify-between ml-4 py-4 absolute h-full text-white">
          <h3 className=" text-xl font-semibold">{title}</h3>
          <p className="">{estateCount} Imoveis</p>
        </span>
      ) : (
        <span className="flex flex-col items-center absolute bottom-14 w-full z-20">
          <h3 className="text-white text-2xl font-semibold">{title}</h3>
          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
            {estateCount} Imoveis
          </span>
        </span>
      )}
    </div>
  );
}

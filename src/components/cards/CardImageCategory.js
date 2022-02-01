import React from 'react';
import Image from 'next/image';

export default function CardImageCategory({
  imgSrc,
  title,
  hasGrow = false,
  byRegion = false,
}) {
  return (
    <div
      className={`relative h-96 bg-gradient-to-b from-transparent to-gray-600 bg-opacity-50 max-w-full rounded-md overflow-hidden fix-ov group`}
    >
      <Image
        src={imgSrc}
        layout="fill"
        objectFit="cover"
        alt={title}
        className="mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      {byRegion ? (
        <span className="flex flex-col items-start justify-between ml-4 py-4 absolute h-full text-white">
          <h3 className=" text-xl font-semibold">{title}</h3>
        </span>
      ) : (
        <span className="flex flex-col items-center absolute bottom-14 w-full z-20">
          <h3 className="text-white text-2xl font-semibold">{title}</h3>
        </span>
      )}
    </div>
  );
}

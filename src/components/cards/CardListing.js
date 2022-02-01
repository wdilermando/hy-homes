/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FiCamera } from 'react-icons/fi';
import Link from 'next/link';
import { StructuredText } from 'react-datocms';

export default function CardListing({
  imagemDestaque,
  destaque,
  isNew = false,
  finalidade,
  logradouro,
  galeriaCount,
  tituloDoAnuncio,
  descricao,
  amenities = [],
  id,
}) {
  const mapAmenitiesIcons = {
    bath: <img src="/icons/bathtub_black_24dp.svg" alt="" className="mr-2" />,
    bedroom: <img src="/icons/bed_black_24dp.svg" alt="" className="mr-2" />,
    expand: <img src="/icons/expanded.svg" alt="" className="mr-2" />,
  };

  return (
    <Link href={`/imoveis/${id}`}>
      <a>
        <div className="flex justify-center rounded-md fix-ov h-full">
          <div className=" bg-white group cursor-pointer">
            <div className="relative">
              <Image
                className="rounded-t-md h-4 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                src={imagemDestaque.url}
                alt={tituloDoAnuncio}
                layout="responsive"
                width={'200px'}
                height={'120px'}
                objectFit="cover"
              />
              <span className="absolute top-4 w-full px-5 flex justify-between">
                {destaque && (
                  <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-400 text-white rounded-sm bg-opacity-60">
                    Destaque
                  </span>
                )}
                <div className="space-x-3">
                  <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-400 text-white rounded-sm bg-opacity-60">
                    {finalidade}
                  </span>
                  {isNew && (
                    <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-400 text-white rounded-sm bg-opacity-60">
                      Novo
                    </span>
                  )}
                </div>
              </span>
              <div className="absolute bottom-2 w-full px-5 flex justify-between text-white">
                <div className="flex items-center w-2/3">
                  <span>
                    <MdLocationOn />
                  </span>
                  <p className="text-xs ml-2 truncate">{logradouro}</p>
                </div>
                <span className="flex items-center">
                  <FiCamera />
                  <p className="text-xs ml-2">{galeriaCount}</p>
                </span>
              </div>
            </div>
            <div className="p-4 w-full bg-white">
              <p className="text-gray-700 group-hover:text-blue-400 transition-colors duration-500 ease-in-out font-bold text-lg mb-2 line-clamp-2 ">
                {tituloDoAnuncio}
              </p>
              <span className="text-gray-400 text-sm mb-4 line-clamp-3">
                <StructuredText data={descricao?.value} />
              </span>
            </div>
            <div className="px-4 pb-4 flex items-center justify-start text-gray-600 text-sm">
              {amenities?.map((item, index) => (
                <span className="flex items-center mr-3" key={index}>
                  {mapAmenitiesIcons[item.label]}
                  {item.qtd}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { MdLocationOn } from '@react-icons/all-files/md/MdLocationOn';
import { FiCamera } from '@react-icons/all-files/fi/FiCamera';

export default function CardListing() {
  return (
    <div className="flex justify-center rounded-md fix-ov">
      <div className=" bg-white group cursor-pointer">
        <div className="relative">
          <Image
            className="rounded-t-md h-4 group-hover:scale-125 transition-transform duration-500 ease-in-out"
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
            layout="responsive"
            width={'200px'}
            height={'120px'}
            objectFit="cover"
          />
          <div className="absolute top-4 w-full px-5 flex justify-between">
            <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-400 text-white rounded-sm bg-opacity-60">
              Destaque
            </span>
            <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-400 text-white rounded-sm bg-opacity-60">
              Vender
            </span>
          </div>
          <div className="absolute bottom-2 w-full px-5 flex justify-between text-white">
            <span className="flex items-center w-2/3">
              <MdLocationOn />
              <p className="text-sm ml-2 truncate">
                Av. Boa Viagem, 365 adsasda ds ads ads adad asd dsadadasdad
              </p>
            </span>
            <span className="flex items-center">
              <FiCamera />
              <p className="text-sm ml-2">6</p>
            </span>
          </div>
        </div>
        <div className="p-4 w-full">
          <p className="text-gray-700 group-hover:text-blue-400 transition-colors duration-500 ease-in-out font-semibold text-lg mb-2 line-clamp-2 ">
            Espaço comercial à venda em Centro de Queija asdasdas asdsada dasd
            asda a as sadasd
          </p>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content.
          </p>
        </div>
        <div className="px-4 pb-4 flex items-center justify-start text-gray-600 text-sm">
          <span className="flex items-center mr-3">
            <img src="/icons/bed_black_24dp.svg" alt="" className="mr-2" />2
          </span>
          <span className="flex items-center mr-3">
            <img src="/icons/bathtub_black_24dp.svg" alt="" className="mr-2" />2
          </span>
          <span className="flex items-center mr-3">
            <img src="/icons/expanded.svg" alt="" className="mr-2" />2
          </span>
        </div>
      </div>
    </div>
  );
}

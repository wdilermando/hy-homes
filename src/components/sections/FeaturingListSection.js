import React from 'react';
import CardListing from '../cards/CardListing';

export default function FeaturingListSection() {
  return (
    <div className="bg-[#f8f8f8] w-full">
      <div className="px-6 md:px-24 xl:px-48 py-8">
        <div className="py-12 flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold py-2 text-gray-700">
            Imóveis em Destaque
          </h3>
          <p className="font-normal text-gray-500">
            Confira abaixo algumas oportunidades disponíveis! Veja o que nossos
            hóspedes <br /> têm a dizer sobre nós, nossas localizações e nossos
            serviços.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
        </div>
        <div className="flex justify-center my-12">
          <button className="btn w-80 py-4">Ver mais imoveis</button>
        </div>
      </div>
    </div>
  );
}

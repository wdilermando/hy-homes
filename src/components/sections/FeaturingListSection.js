import React from 'react';
import CardListing from '../cards/CardListing';
import Link from 'next/link';

export default function FeaturingListSection({ listings }) {
  const filterByFeatured = (listing) => listing.destaque;
  return (
    <section className="bg-[#f8f8f8] w-full">
      <div className="px-6 md:px-24 xl:px-48 py-8">
        <div className="py-12 flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold py-2 text-gray-700">
            Imóveis em Destaque
          </h3>
          <p className="font-normal text-gray-500">
            Confira abaixo algumas oportunidades disponíveis!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {listings
            .filter(filterByFeatured)
            .map((item) => <CardListing {...item} key={item.id} />)
            .slice(0, 4)}
        </div>
        <div className="flex justify-center my-12">
          <Link href="/imoveis">
            <a className="btn w-80 py-4 text-center">Ver mais imóveis</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

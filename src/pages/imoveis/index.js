import React, { useState } from 'react';
import CardListing from '../../components/cards/CardListing';
import FilterControl from '../../components/elements/FilterControl';
import SearchControl from '../../components/elements/SearchControl';
import { allListings } from '../../utils/queries';

function SearchPage({ listings }) {
  const [filteredListing, setFilteredListing] = useState(listings);

  if (filteredListing == undefined) {
    return 'loading';
  }
  const listingFiltered = listings.filter((o) => {
    return (
      o.finalidade.includes(filteredListing?.finalidade) &&
      o.tipoDeImovel.includes(filteredListing?.tipoDeImovel) &&
      o.cidade.includes(filteredListing?.cidade)
    );
  });

  const filteredValues = (values) => {
    setFilteredListing(values);
  };

  const hasResults = listingFiltered.length > 0;

  return (
    <section className="w-full min-h-screen bg-[#f8f8f8] ">
      <div className="w-full h-auto pt-16 bg-[#f2f2f2]">
        <div className="px-6 md:px-24 xl:px-48 py-8">
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-4xl font-bold py-2 text-gray-700 font-sans antialiased">
              Busca imóveis
            </h3>
          </div>
          <SearchControl />
        </div>
      </div>
      <div className="px-6 md:px-24 xl:px-48 py-8">
        <h3 className="font-bold">Filtre o resultado da sua busca:</h3>
        <FilterControl
          filterSelection={filteredValues}
          valuesToFilter={listings}
        />
        {hasResults ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {listingFiltered.map((item) => (
              <CardListing {...item} key={item.id} />
            ))}
          </div>
        ) : (
          <span className="w-full text-center">
            <h1>
              Não foram encontrados resultados com os critérios de busca
              estabelecidos :(
            </h1>
          </span>
        )}
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const results = await allListings({ ...query });

  return {
    props: { listings: results },
  };
}

export default SearchPage;

import React from 'react';
import CardImageCategory from '../cards/CardImageCategory';
import SearchControl from '../elements/SearchControl';

export default function PortfolioSection() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="px-6 md:px-24 xl:px-48 py-8">
        <SearchControl />
        <div className="py-12 flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold py-2 text-gray-700">
            Nosso Portfólio
          </h3>
          <p className="font-normal text-gray-500">
            Conceitos com base na inovação e design excepcionais, mobilidade e
            tecnologia
            <br /> em qualidade de vida urbana.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <CardImageCategory
            imgSrc={
              'https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/real_estate_building-1-980x623.jpg'
            }
            title={'Apartamentos'}
            estateCount={5}
          />
          <CardImageCategory
            imgSrc={
              'https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/house.jpg'
            }
            title={'Casas'}
            estateCount={7}
            hasGrow
          />
          <CardImageCategory
            imgSrc={
              'https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/06/brown-980x777.jpg'
            }
            title={'Duplex'}
            estateCount={2}
            hasGrow
          />
          <CardImageCategory
            imgSrc={
              'https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/office-980x777.jpg'
            }
            title={'Escritorios'}
            estateCount={5}
          />
        </div>
      </div>
    </section>
  );
}

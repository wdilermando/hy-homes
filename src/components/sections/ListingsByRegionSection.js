import React from 'react';
import CardImageCategory from '../cards/CardImageCategory';
import SectionTitle from '../elements/SectionTitle';

export default function ListingsByRegionSection() {
  return (
    <div className="w-full bg-[#f8f8f8]">
      <div className="px-6 md:px-24 xl:px-48 py-8">
        <SectionTitle
          title={'Imóveis por Região'}
          subTitle={
            'Os melhores imóveis selecionados nos principais bairros. Veja o que nossos hóspedes têm a dizer sobre nós, nossas localizações e nossos serviços.'
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <CardImageCategory
            imgSrc={
              'https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/view-of-city-street-258447-1-1-980x777-1.jpg'
            }
            title={'Boa Viagem'}
            estateCount={3}
            byRegion
          />
          <CardImageCategory
            imgSrc={
              'https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/view-of-city-street-258447-1-1-980x777-1.jpg'
            }
            title={'Boa Viagem'}
            estateCount={3}
            byRegion
          />
          <CardImageCategory
            imgSrc={
              'https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/view-of-city-street-258447-1-1-980x777-1.jpg'
            }
            title={'Boa Viagem'}
            estateCount={3}
            byRegion
          />
          <CardImageCategory
            imgSrc={
              'https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/view-of-city-street-258447-1-1-980x777-1.jpg'
            }
            title={'Boa Viagem'}
            estateCount={3}
            byRegion
          />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import SectionTitle from '../components/elements/SectionTitle';

export default function AboutPage() {
  return (
    <section className="w-full min-h-max bg-[#f8f8f8] ">
      <div className="px-6 md:px-24 xl:px-48 py-8 pt-16 bg-[#f2f2f2]">
        <SectionTitle
          title={'Imobiliária em Recife'}
          subTitle={
            'Sempre mantendo o profissionalismo, a Imobiliária Portugal segue em busca de novos desafios e permanece de portas abertas para novos clientes, novos amigos e a realização de muitos sonhos!'
          }
        />
      </div>
      <div className="px-6 md:px-24 xl:px-48 py-8"></div>
    </section>
  );
}

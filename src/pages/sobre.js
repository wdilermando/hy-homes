import React from 'react';
import SectionTitle from '../components/elements/SectionTitle';

const TextInfoComponent = ({ title, description }) => {
  return (
    <div className="py-12 flex flex-col items-start text-left">
      <h5 className="text-2xl font-bold py-2 text-gray-700">{title}</h5>
      <p className="font-normal text-gray-500">{description}</p>
    </div>
  );
};

export default function AboutPage() {
  const infoText = [
    {
      title: 'Compre um Imóvel com a gente',
      description:
        'Conte com Nossa Equipe de Profissionais Consultores Prime e Nossa Plataforma para: • Encontrar • Comparar • Visitar Virtualmente • Curtir e Compartilhar com Sua Esposa ou Esposo • Salvar Pesquisas',
    },
    {
      title: 'Venda Seu Imóvel com a gente',
      description:
        'Utilizamos o que há de mais avançado em localização de futuros interessados em imóveis e investidores imobiliários e junto com nossa equipe de Consultores. Assim oferecemos a você maior visibilidade.',
    },
    {
      title: 'Imóveis para Investimento',
      description:
        'Em nossa equipe temos especialistas em imóveis que são oportunidades imobiliárias voltada para investidores do mercado imobiliário. Imobiliária HY oferecendo uma rentabilidade com imóvel acima da média.',
    },
    {
      title: 'Nós buscamos para você',
      description:
        'Conte com Nossa Equipe de Profissionais Consultores Prime e Nossa Plataforma para: • Encontrar • Comparar • Visitar Virtualmente • Curtir e Compartilhar com Sua Esposa ou Esposo • Salvar Pesquisas',
    },
  ];
  return (
    <section className="w-full min-h-screen bg-[#f8f8f8] ">
      <div className="px-6 md:px-24 xl:px-48 py-8 pt-16 bg-[#f2f2f2]">
        <SectionTitle
          title={'Imobiliária em Recife'}
          subTitle={`Sempre mantendo o profissionalismo, a HY segue em busca de novos\ndesafios e permanece de portas abertas para novos clientes, novos amigos e a realização de muitos sonhos!`}
        />
      </div>
      <div className="px-6 md:px-24 xl:px-48 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {infoText.map((info, index) => (
            <TextInfoComponent key={index} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
}

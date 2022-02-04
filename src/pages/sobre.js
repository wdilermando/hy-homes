import React from 'react';
import Accordion from '../components/elements/Accordion';
import SectionTitle from '../components/elements/SectionTitle';

const TextInfoComponent = ({ title, description }) => {
  return (
    <div className="py-12 flex flex-col items-center text-center md:px-24">
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

  const saqInfo = [
    {
      id: 1,
      title: 'Quem Paga A Comissão Da Imobiliária?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      id: 2,
      title: 'Como Financiar Um Imóvel?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      id: 3,
      title: 'É Possível Financiar Imóveis Ainda Em Construção?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      id: 4,
      title: 'O Que É O Habite-Se?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      id: 5,
      title: 'Qual É O Percentual Para Registrar Um Imóvel?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      id: 6,
      title: 'O Que É Uma Escritura?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
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
      <div className="px-6 md:px-24 xl:px-48 py-8 pt-2 bg-[#f2f2f2]">
        <SectionTitle
          title={'Perguntas Frequentes'}
          subTitle={`Selecionamos algumas das perguntas mais frequentes nas transações imobiliárias, para que você possa esclarecê-las aqui no site`}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <div className="flex-col space-y-3">
            {saqInfo.slice(0, 3).map((item) => (
              <Accordion {...item} key={item.id} />
            ))}
          </div>
          <div className="flex-col space-y-3">
            {saqInfo.slice(3).map((item) => (
              <Accordion {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

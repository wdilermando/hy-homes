import React from 'react';

import { BiBed, BiBath, BiExpand, BiCalendar, BiPhone } from 'react-icons/bi';
import { MdOutlineGarage, MdLocationOn } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import CardDefaultWrapper from '../../components/cards/CardDefaultWrapper';
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import SwiperThumb from '../../components/elements/SwiperThumb';
import { allListings, listingById } from '../../utils/queries';

export default function ListingDetail({ listing }) {
  const iconsProps = { size: 24, className: 'md:w-full' };
  const mappingListingItems = {
    bedroom: <BiBed {...iconsProps} />,
    bathroom: <BiBath {...iconsProps} />,
    garage: <MdOutlineGarage {...iconsProps} />,
    area: <BiExpand {...iconsProps} />,
    since: <BiCalendar {...iconsProps} />,
  };

  const listingItems = [
    { alias: 'bedroom', desc: '2 Quartos' },
    { alias: 'bathroom', desc: '1 Banheiro' },
    { alias: 'garage', desc: '1 Garagem' },
    { alias: 'area', desc: '54m²' },
    { alias: 'since', desc: 'Construção 2019' },
  ];

  const addressInfo = [
    { label: 'Endereco', value: 'Av. Antonio Cabral de Souza' },
    { label: 'Cidade', value: 'Paulista' },
    { label: 'Area', value: 'Regiao Metropolitana' },
    { label: 'Estado', value: 'Pernambuco' },
    { label: 'CEP', value: '53403-610' },
  ];

  const detailsInfo = [
    { label: 'Banheiros', value: 1 },
    { label: 'Garagens', value: 1 },
    { label: 'Tipo de estrutura', value: 'Alvenaria' },
    { label: 'Suites', value: 1 },
    { label: 'Classe Energetica', value: 'B' },
    { label: 'Tamanho da garagem', value: '2 carros' },
    { label: 'Quartos', value: 2 },
    { label: 'Ano', value: '2019' },
  ];

  return (
    <section className="w-full min-h-full bg-[#f8f8f8]">
      <div className="md:flex items-end justify-between px-6 md:px-24 xl:px-48 pt-20 md:pt-32 md:space-x-4 space-y-3">
        <div className="">
          <h1 className="text-4xl font-bold py-2 text-gray-700">
            {listing?.tituloDoAnuncio}
          </h1>
          <p className="font-normal text-gray-500 flex items-center">
            <MdLocationOn />
            {listing?.endereco}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p>Compartilhe:</p>
          <FacebookShareButton url={'#'}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <WhatsappShareButton url="#">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>
      <div className="px-6 md:px-24 xl:px-48 mt-4 pb-12">
        <div className="md:flex items-start md:space-x-4 space-y-3 md:space-y-0">
          <article className="w-full md:w-3/4 space-y-6">
            <SwiperThumb />
            <CardDefaultWrapper title={'Visão geral'}>
              <div className="w-40">
                <p className="font-bold">Atualizado em:</p>
                13 de Julho 2022
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 w-full">
                {listingItems.map((item, index) => (
                  <span
                    className="flex-col items-center md:text-center"
                    key={index}
                  >
                    {mappingListingItems[item.alias]}
                    <p>{item.desc}</p>
                  </span>
                ))}
              </div>
            </CardDefaultWrapper>
            <CardDefaultWrapper title={'Descrição Geral'}>
              <div className="">
                <p className="text-gray-500 text-md">
                  Apartamento totalmente renovado localizado no Bairro dos
                  Ingleses, em Arroios. Possui uma varanda de 6,5 m² orientada a
                  sul, o que permite receber bastante luz o dia todo e durante o
                  ano inteiro. Possui um amplo quarto principal com um closet
                  que pode ser convertido em escritório, pois possui uma entrada
                  independente de acesso pelo corredor do edifício. A sala, com
                  grandes portas de vidro duplo e voltadas para a varanda,
                  permitem bastante entrada de luz no interior do apartamento.
                  Cozinha e casa de banho com excelentes acabamentos. Excelente
                  opção para habitação própria ou investimento para
                  rentabilização. Junto a todo o tipo de transportes, comércio
                  local, escolas e outros serviços. Este é um bairro
                  maioritariamente residencial e de comércio. As casas mantêm a
                  arquitetura original, tendo na sua maioria uma boa dimensão.
                  Aqui moram essencialmente famílias, num bairro onde se
                  concentra o comércio tradicional – lojas de mobiliário, cafés,
                  restaurantes – mas igualmente reflete as novas tendências. É
                  um bairro muito interessante para viver, dada a sua
                  centralidade, facilidade de acessos, rede de transportes
                  públicos, e existência de equipamentos sociais como hospitais,
                  escolas e polícia.
                </p>
              </div>
            </CardDefaultWrapper>
            <CardDefaultWrapper title={'Endereço'}>
              <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3">
                  {addressInfo.map((item, index) => (
                    <span
                      key={index}
                      className={`${item.label === 'Endereco' && 'col-span-2'}`}
                    >
                      <strong>{item.label}: </strong>
                      {item.value}
                    </span>
                  ))}
                </div>
              </div>
            </CardDefaultWrapper>
            <CardDefaultWrapper title={'Detalhes'}>
              <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3">
                  {detailsInfo.map((item, index) => (
                    <span key={index}>
                      <strong>{item.label}: </strong>
                      {item.value}
                    </span>
                  ))}
                </div>
              </div>
            </CardDefaultWrapper>
          </article>
          <div className="w-full">
            <CardDefaultWrapper title={'Tem interesse?'}>
              <div className="flex-col space-y-3">
                <form className="grid grid-cols-1 gap-2 pt-4">
                  <input
                    type={'text'}
                    placeholder="Seu nome"
                    className="input-hy-form"
                  />
                  <input
                    type={'email'}
                    placeholder="Email"
                    className="input-hy-form"
                  />
                  <input
                    type={'tel'}
                    placeholder="Seu telefone"
                    className="input-hy-form"
                  />
                  <textarea
                    placeholder="Digite sua mensagem"
                    className="input-hy-form"
                  />
                  <button className="btn">Enviar E-mail</button>
                </form>
                <div className="flex items-center justify-between space-x-2">
                  <button className="btn w-full flex items-center justify-center">
                    <BiPhone className="mr-2" /> Ligar
                  </button>
                  <button className="btn bg-transparent border border-blue-700 text-blue-700 hover:text-white w-full flex items-center justify-center">
                    <FaWhatsapp />
                    WhatsApp
                  </button>
                </div>
              </div>
            </CardDefaultWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  const listings = await allListings();
  const paths = listings.map((listing) => ({
    params: { id: listing.id },
  }));
  console.log(paths);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const listing = await listingById(context.params.id.toString());
  return {
    props: { listing }, // will be passed to the page component as props
  };
}

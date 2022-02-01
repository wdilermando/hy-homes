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
import { StructuredText } from 'react-datocms';

export default function ListingDetail({ listing }) {
  const listingUrl = '#';
  const iconsProps = { size: 24, className: 'md:w-full' };
  const mappingListingItems = {
    bedroom: <BiBed {...iconsProps} />,
    bathroom: <BiBath {...iconsProps} />,
    garage: <MdOutlineGarage {...iconsProps} />,
    area: <BiExpand {...iconsProps} />,
    since: <BiCalendar {...iconsProps} />,
  };

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
            {listing?.logradouro}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p>Compartilhe:</p>
          <FacebookShareButton url={listingUrl}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <WhatsappShareButton url={listingUrl}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>
      <div className="px-6 md:px-24 xl:px-48 mt-4 pb-12">
        <div className="md:flex items-start md:space-x-4 space-y-3 md:space-y-0">
          <article className="w-full md:w-3/4 space-y-6">
            <SwiperThumb
              featureImg={listing?.imagemDestaque}
              gallery={listing?.galeria}
            />
            <CardDefaultWrapper title={'Visão geral'}>
              <div className="w-40">
                <p className="font-bold">Atualizado em:</p>
                {listing?._updatedAt}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 w-full">
                {listing?.listingItems?.map((item, index) => (
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
                  <StructuredText data={listing?.descricao?.value} />
                </p>
              </div>
            </CardDefaultWrapper>
            <CardDefaultWrapper title={'Endereço'}>
              <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3">
                  {listing?.addressInfo?.map((item, index) => (
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
              <div className="flex-col space-y-3 w-full">
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

import React from 'react';
import CardImageCategory from '../cards/CardImageCategory';

export default function PortfolioSection() {
  return (
    <div className="w-full bg-white text-gray-900">
      <div className="px-6 md:px-24 xl:px-48 py-8">
        <div className="px-8 py-8 md:py-8 border border-gray-100 shadow-lg rounded-sm">
          <form className="grid md:grid-cols-4 gap-2">
            <select
              className="form-select input-hy bg-white bg-clip-padding bg-no-repeat m-0 focus:border-0"
              aria-label="Default select example"
            >
              <option value="" selected>
                Cidade
              </option>
              <option>Recife</option>
              <option>Ipojuca</option>
              <option>Jaboatão dos Guararapes</option>
            </select>
            <select
              className="form-select input-hy bg-white bg-clip-padding bg-no-repeat m-0"
              aria-label="Default select example"
            >
              <option value="" selected>
                Tipo de Imóvel
              </option>
              <option>Apartamentos</option>
              <option>Duplex</option>
              <option>Casa</option>
              <option>Escritório</option>
              <option>Studio</option>
            </select>
            <select
              className="form-select input-hy bg-white bg-clip-padding bg-no-repeat m-0"
              aria-label="Default select example"
            >
              <option value="" selected>
                Finalidade
              </option>
              <option>Vender</option>
              <option>Alugar</option>
            </select>
            <button className="btn flex items-center justify-center py-2">
              Pesquisar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                />
              </svg>
            </button>
          </form>
        </div>
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
    </div>
  );
}

import React from 'react';
import Navbar from '../Navbar';

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen text-white bg-hero-pattern bg-cover">
      <Navbar />
      {/* <div className="w-full bg-gradient-to-t from-black to-transparent md:absolute opacity-50 bottom-0 z-0"></div> */}

      <div className="md:flex md:mt-12 items-center justify-between px-6 md:px-24 xl:px-48 py-8 z-20 md:absolute position-hero">
        <div className="max-w-xl">
          <h1 className="text-6xl font-semibold tracking-tighter">
            HY homes,
            <br />
            Especialista em venda de imóveis
          </h1>
          <p className="font-semibold text-xl my-5">
            Quando o assunto é imóvel, a HY tem a solução
          </p>
          <div className="flex md:flex-col items-start my-5 gap-2">
            <span className="flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <p className="font-semibold ml-2">Casas</p>
            </span>
            <span className="flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <p className="font-semibold ml-2">Apartamentos</p>
            </span>
            <span className="flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="font-semibold ml-2">Comercial</p>
            </span>
          </div>
        </div>
        <div className="max-w-sm">
          <div className="bg-white text-gray-700 rounded-sm w-full px-8 py-8 md:py-12 shadow-lg">
            <h3 className="font-bold text-lg">
              Nos conte como quer o seu imóvel e nós encontraremos para você.
            </h3>
            <form className="grid grid-cols-1 gap-4 pt-4">
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
              <button className="btn">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="transform rotate-180 -bottom-1 left-0 overflow-hidden absolute w-full z-0"
        data-negative="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            d="M738,99l262-93V0H0v5.6L738,99z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

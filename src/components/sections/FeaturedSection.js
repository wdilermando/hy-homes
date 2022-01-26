/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function FeaturedSection() {
  return (
    <div className="w-full min-h-full overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="bg-[url('https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/decor2-1110x623.jpg')] bg-cover h-auto flex items-end justify-center w-full image-feature-transition">
          <div className="bg-white px-4 w-80 md:w-2/5 py-6 mt-48 rounded-t-sm pb-4 cursor-pointer">
            <h2 className="text-3xl font-bold ">
              Apartamento T4 a venda em Monte Estoril
            </h2>
            <div className="flex items-center py-2">
              <span className="flex items-center mr-3">
                <img src="/icons/bed_black_24dp.svg" alt="" className="mr-2" />2
              </span>
              <span className="flex items-center mr-3">
                <img
                  src="/icons/bathtub_black_24dp.svg"
                  alt=""
                  className="mr-2"
                />
                2
              </span>
              <span className="flex items-center mr-3">
                <img src="/icons/expanded.svg" alt="" className="mr-2" />2
              </span>
            </div>
            <p className="text-gray-400 text-sm line-clamp-3 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ullamcorper porta ex, eu maximus turpis lobortis in.
              Cras eleifend vehicula turpis quis bibendum. Vestibulum cursus
              eros interdum lorem tincidunt auctor. Mauris ornare leo id nibh
              placerat tristique. Aliquam a consequat urna, quis tempus urna.
              Sed ultricies mauris vitae quam tincidunt finibus. Cras mollis
              erat sit amet consequat dapibus. Etiam bibendum, nisl vel vehicula
              pharetra, elit purus maximus nibh, sit amet pharetra urna magna
              vitae dolor. Ut quis libero vitae erat ultrices consectetur. Nulla
              non ornare sapien. Cras suscipit malesuada neque, id tincidunt
              urna varius nec. Nulla mauris ligula, accumsan sit amet nisi quis,
              porttitor imperdiet ex. Praesent scelerisque nec velit quis
              luctus.
            </p>
            <a
              href="#"
              className="flex items-center text-gray-900 text-sm hover:text-blue-400 transition-colors duration-300 ease-in-out"
            >
              descubra mais
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2">
          <div className="bg-[url('https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/decor_grey-835x467.jpg')] bg-cover image-feature-transition"></div>
          <div className="bg-[url('https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/decor_nice-835x467.jpg')] bg-cover image-feature-transition"></div>
          <div className="bg-[url('https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/decortions-835x467.jpg')] bg-cover image-feature-transition"></div>
          <div className="bg-[url('https://pt-wpresidence.b-cdn.net/wp-content/uploads/2014/05/designer2-835x467.jpeg')] bg-cover image-feature-transition"></div>
        </div>
      </div>
    </div>
  );
}

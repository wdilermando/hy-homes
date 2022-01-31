import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function SearchControl() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    const qs = new URLSearchParams(data);
    router.push(`/search-page?${qs}`);
  };
  return (
    <section className="px-8 py-8 md:py-8 border border-gray-100 shadow-sm rounded-md bg-white">
      <form
        className="grid md:grid-cols-4 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <select
          className="form-select input-hy bg-white bg-clip-padding bg-no-repeat m-0 focus:border-0"
          {...register('cidade')}
        >
          <option defaultValue={''}>Cidade</option>
          <option value="Recife">Recife</option>
          <option value="Ipojuca">Ipojuca</option>
          <option value="Paulista">Paulista</option>
          <option value="Jaboatão dos Guararapes">
            Jaboatão dos Guararapes
          </option>
        </select>
        <select
          className="form-select input-hy bg-white bg-clip-padding bg-no-repeat m-0"
          {...register('tipoDeImovel')}
        >
          <option value="" defaultValue={''}>
            Tipo de Imóvel
          </option>
          <option value={'Apartamento'}>Apartamento</option>
          <option value={'Duplex'}>Duplex</option>
          <option value={'Casa'}>Casa</option>
          <option value={'Escritório'}>Escritório</option>
          <option value={'Studio'}>Studio</option>
        </select>
        <select
          className="form-select input-hy bg-white bg-clip-padding bg-no-repeat m-0"
          {...register('finalidade')}
        >
          <option value="" defaultValue={''}>
            Finalidade
          </option>
          <option value={'Vender'}>Vender</option>
          <option value={'Alugar'}>Alugar</option>
        </select>
        <button
          type="submit"
          className="btn flex items-center justify-center py-2"
        >
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
    </section>
  );
}

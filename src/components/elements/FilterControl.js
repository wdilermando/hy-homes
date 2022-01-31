import React, { useEffect, useState } from 'react';

export default function FilterControl({ filterSelection, valuesToFilter }) {
  const initialValues = {
    finalidade: '',
    tipoDeImovel: '',
    cidade: '',
  };
  const [filteredValues, setFilteredValues] = useState(initialValues);

  const changeValues = (e) => {
    setFilteredValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    filterSelection(filteredValues);
  }, [filterSelection, filteredValues]);

  const finalidades = [
    ...new Set(valuesToFilter.map((item) => item.finalidade)),
  ];
  const tiposImovel = [
    ...new Set(valuesToFilter.map((item) => item.tipoDeImovel)),
  ];
  const cidades = [...new Set(valuesToFilter.map((item) => item.cidade))];

  return (
    <form className="mt-6 mb-12 md:flex items-end bg-white rounded-md h-auto shadow-sm px-6 py-4 md:space-x-3 space-y-2">
      <div className="flex-col w-full">
        <label htmlFor="goal">Finalidade:</label>
        <select
          className="form-select input-hy bg-white bg-clip-padding bg-no-repeat m-0"
          name="finalidade"
          onChange={changeValues}
          id="goal"
        >
          <option value={''}>Selecione</option>
          {finalidades.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-col w-full">
        <label htmlFor="type">Tipo de Imóvel:</label>
        <select
          className="form-select input-hy bg-white bg-clip-padding bg-no-repeat m-0"
          name="tipoDeImovel"
          id="type"
          onChange={changeValues}
        >
          <option value={''}>Selecione</option>
          {tiposImovel.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-col w-full">
        <label htmlFor="type">Cidade:</label>
        <select
          className="form-select input-hy bg-white bg-clip-padding bg-no-repeat m-0 focus:border-0"
          name="cidade"
          onChange={changeValues}
        >
          <option value={''} defaultValue={''}>
            Selecione
          </option>
          {cidades.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <button
        className="btn w-full md:w-1/2"
        onClick={() => {
          setFilteredValues(initialValues);
        }}
        type="reset"
      >
        Limpar Filtros
      </button>
    </form>
  );
}

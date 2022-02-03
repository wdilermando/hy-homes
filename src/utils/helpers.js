export const formatDate = (value) => {
  const dateInput = new Date(value);
  return dateInput.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
};

export const capitalizeString = (value) => {
  const firstLetter = value.charAt(0).toUpperCase();
  return `${firstLetter}${value.slice(1)}`;
};

export const transformFilterParams = (valuesToSearch) => {
  if (
    Object.keys(valuesToSearch).length === 0 &&
    valuesToSearch.constructor === Object
  ) {
    return {};
  }
  const transformParams = Object.entries(valuesToSearch).map(
    ([key, value]) => ({ [key]: { eq: value } })
  );
  const filtered = transformParams.filter(
    (item) => Object.entries(item)[0][1].eq != ''
  );

  return filtered.length === 0 ? {} : Object.assign({}, ...filtered);
};

const filterObject = (arrayToFilter, objectData) => {
  return Object.keys(objectData)
    .filter((key) => arrayToFilter.includes(key))
    .reduce((obj, key) => {
      obj[key] = objectData[key];
      return obj;
    }, {});
};

const transformObjectToArray = (objectFiltered) => {
  return Object.entries(objectFiltered).map(([key, value]) => ({
    label: capitalizeString(key),
    value: value,
  }));
};

export const getAddresInfo = (data) => {
  const addressInfo = [
    'logradouro',
    'bairro',
    'cidade',
    'area',
    'estado',
    'cep',
  ];
  return transformObjectToArray(filterObject(addressInfo, data));
};

export const getListingDetailsInfo = (data) => {
  const addressInfo = [
    'garagens',
    'tipoDeEstrutura',
    'suites',
    'classeEnergetica',
    'tamanhoDaGaragem',
    'quartos',
    'anoDeConstrucao',
  ];
  return transformObjectToArray(filterObject(addressInfo, data));
};

import apiClient from './api';
import { capitalizeString, formatDate, transformFilterParams } from './helpers';

const ALL_LISTINGS = `
query($filter:ListingModelFilter={}) {
  allListings(filter:$filter) {
      garagens
      id
      estado
      classeEnergetica
      cidade
      cep
      banheiros
      bairro
      area
      anoDeConstrucao
      logradouro
      quartos
      suites
      tamanho
      tamanhoDaGaragem
      tipoDeEstrutura
      tituloDoAnuncio
      imagemDestaque {
        filename
        url
        title
      }
      galeria {
        filename
        url
      }
      descricao {
        blocks
        links
        value
      }
      destaque
      finalidade
      tipoDeImovel
  }
}
`;

const LISTING_BY_ID = `
query ($filter: ListingModelFilter) {
  listing(filter: $filter) {
    garagens
    id
    estado
    classeEnergetica
    cidade
    cep
    banheiros
    bairro
    area
    anoDeConstrucao
    logradouro
    quartos
    suites
    tamanho
    tamanhoDaGaragem
    tipoDeEstrutura
    tituloDoAnuncio
    imagemDestaque {
      filename
      url
      title
    }
    galeria {
      filename
      url
    }
    descricao {
      blocks
      links
      value
    }
    destaque
    finalidade
    tipoDeImovel
    _updatedAt
  }
}
`;

const allListings = async (consulta = {}) => {
  const result = await apiClient({
    query: ALL_LISTINGS,
    variables: { filter: transformFilterParams(consulta) },
  });
  return result.allListings.map((listing) => ({
    ...listing,
    galeriaCount: listing.galeria.length,
    amenities: [
      { label: 'bath', qtd: listing.banheiros },
      { label: 'bedroom', qtd: listing.quartos },
      { label: 'expand', qtd: listing.tamanho },
    ],
  }));
};

const listingById = async (id) => {
  const { listing } = await apiClient({
    query: LISTING_BY_ID,
    variables: {
      filter: {
        id: {
          eq: id,
        },
      },
    },
  });

  return {
    ...listing,
    _updatedAt: formatDate(listing._updatedAt),
    listingItems: [
      {
        alias: 'bedroom',
        desc: `${listing.quartos} Quarto${listing.quartos > 1 && 's'}`,
      },
      {
        alias: 'bathroom',
        desc: `${listing.banheiros} Banheiro${listing.banheiros > 1 && 's'}`,
      },
      {
        alias: 'garage',
        desc: `${listing.garagens} Garagen${listing.garagens > 1 && 's'}`,
      },
      { alias: 'area', desc: `${listing.tamanho}m²` },
    ],
    addressInfo: getAddresInfo(listing),
  };
};

function getAddresInfo(data) {
  const addressInfo = [
    'logradouro',
    'bairro',
    'cidade',
    'area',
    'estado',
    'cep',
  ];
  const convert = Object.keys(data)
    .filter((key) => addressInfo.includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});
  return Object.entries(convert).map(([key, value]) => ({
    label: capitalizeString(key),
    value: value,
  }));
}

export { allListings, listingById };

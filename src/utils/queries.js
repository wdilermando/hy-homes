import apiClient from './api';

const ALL_LISTINGS = `
query {
  allListings {
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
    area
    id
    tituloDoAnuncio
    tipoDeImovel
    tamanho
    suites
    quartos
    logradouro
    garagens
    finalidade
    estado
    destaque
    cidade
    banheiros
    bairro
    anoDeConstrucao
  }
}
`;

const allListings = async (consulta) => {
  const result = await apiClient({
    query: ALL_LISTINGS,
  });
  return result.allListings
    .map((listing) => ({
      ...listing,
      galeriaCount: listing.galeria.length,
      amenities: [
        { label: 'bath', qtd: listing.banheiros },
        { label: 'bedroom', qtd: listing.quartos },
        { label: 'expand', qtd: listing.tamanho },
      ],
    }))
    .filter(
      (item) =>
        item.cidade.includes(consulta?.cidade) &&
        item.tipoDeImovel.includes(consulta?.tipoDeImovel) &&
        item.finalidade.includes(consulta?.finalidade)
    );
};

const listingById = async (id) => {
  const result = await apiClient({
    query: LISTING_BY_ID,
    variables: {
      filter: {
        id: {
          eq: id,
        },
      },
    },
  });
  return result.listing;
};

export { allListings, listingById };

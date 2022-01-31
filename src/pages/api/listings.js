export default function handler(req, res) {
  const listings = [
    {
      id: 1,
      imgSrc: 'https://mdbootstrap.com/img/new/standard/nature/184.jpg',
      isFeatured: false,
      isNew: true,
      typeNegotiation: 'Vender',
      address: 'Av. Boa Viagem, 365 adsasda ds ads ads adad asd dsadadasdad',
      city: 'Recife',
      listingType: 'Apartamento',
      goal: 'Vender',
      numberOfPhotos: 3,
      title:
        'Espaço comercial à venda em Centro de Queija asdasdas asdsada dasd asda a as sadasd',
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content.',
      amenities: [{ label: 'bath', qtd: 1 }],
    },
    {
      id: 2,
      imgSrc:
        'https://hy4u-server.s3.amazonaws.com/content/uploads/2020/07/13132405/hy-beach-flats-recife-030.jpg',
      isFeatured: true,
      isNew: false,
      typeNegotiation: 'Alugar',
      address: 'Av. Antonio Cabral de Souza',
      city: 'Paulista',
      listingType: 'Casa',
      numberOfPhotos: 8,
      title: 'Linda casa com passaros cantando',
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content.',
      amenities: [
        { label: 'bath', qtd: 1 },
        { label: 'bedroom', qtd: 3 },
        { label: 'expand', qtd: 87 },
      ],
    },
    {
      id: 3,
      imgSrc:
        'https://hy4u-server.s3.amazonaws.com/content/uploads/2020/07/13132405/hy-beach-flats-recife-030.jpg',
      isFeatured: true,
      isNew: true,
      typeNegotiation: 'Vender',
      address: 'Av. Antonio Cabral de Souza',
      city: 'Ipojuca',
      listingType: 'Duplex',
      numberOfPhotos: 4,
      title: 'Duplex com piso de madeira',
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content.',
      amenities: [
        { label: 'bath', qtd: 1 },
        { label: 'bedroom', qtd: 3 },
        { label: 'expand', qtd: 87 },
      ],
    },
    {
      id: 4,
      imgSrc:
        'https://hy4u-server.s3.amazonaws.com/content/uploads/2020/07/13132405/hy-beach-flats-recife-030.jpg',
      isFeatured: true,
      isNew: false,
      typeNegotiation: 'Alugar',
      address: 'Av. Antonio Cabral de Souza',
      city: 'Paulista',
      listingType: 'Casa',
      numberOfPhotos: 8,
      title: 'Linda casa com passaros cantando',
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content.',
      amenities: [
        { label: 'bath', qtd: 1 },
        { label: 'bedroom', qtd: 3 },
        { label: 'expand', qtd: 87 },
      ],
    },
    {
      id: 5,
      imgSrc:
        'https://hy4u-server.s3.amazonaws.com/content/uploads/2020/07/13132405/hy-beach-flats-recife-030.jpg',
      isFeatured: true,
      isNew: false,
      typeNegotiation: 'Alugar',
      address: 'Av. Antonio Cabral de Souza',
      city: 'Paulista',
      listingType: 'Casa',
      numberOfPhotos: 8,
      title: 'Linda casa com passaros cantando',
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content.',
      amenities: [
        { label: 'bath', qtd: 1 },
        { label: 'bedroom', qtd: 3 },
        { label: 'expand', qtd: 87 },
      ],
    },
    {
      id: 6,
      imgSrc:
        'https://hy4u-server.s3.amazonaws.com/content/uploads/2020/07/13132405/hy-beach-flats-recife-030.jpg',
      isFeatured: true,
      isNew: false,
      typeNegotiation: 'Alugar',
      address: 'Av. Antonio Cabral de Souza',
      city: 'Paulista',
      listingType: 'Casa',
      numberOfPhotos: 8,
      title: 'Linda casa com passaros cantando',
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content.',
      amenities: [
        { label: 'bath', qtd: 1 },
        { label: 'bedroom', qtd: 3 },
        { label: 'expand', qtd: 87 },
      ],
    },
    {
      id: 7,
      imgSrc:
        'https://hy4u-server.s3.amazonaws.com/content/uploads/2020/07/13132405/hy-beach-flats-recife-030.jpg',
      isFeatured: false,
      isNew: false,
      typeNegotiation: 'Alugar',
      address: 'Av. Antonio Cabral de Souza',
      city: 'Paulista',
      listingType: 'Casa',
      numberOfPhotos: 8,
      title: 'Linda casa com passaros cantando',
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content.',
      amenities: [
        { label: 'bath', qtd: 1 },
        { label: 'bedroom', qtd: 3 },
        { label: 'expand', qtd: 87 },
      ],
    },
  ];

  if (req.method === 'GET') {
    if (
      Object.keys(req.query).length === 0 &&
      req.query.constructor === Object
    ) {
      return res.status(200).json(listings);
    }

    const { city, listingType, typeNegotiation } = req.query;
    const listingsData = listings.filter(
      (item) =>
        item.city === city ||
        item.listingType === listingType ||
        item.typeNegotiation === typeNegotiation
    );
    res.status(200).json(listingsData);
  } else {
    res.status(500).json({ message: 'Acao nao permitida' }); // Handle any other HTTP method
  }
}

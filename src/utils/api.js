import { GraphQLClient } from 'graphql-request';
const API_TOKEN = '92f29d60d407f9298dc5b1bee2415a';

const apiClient = async ({ query, variables }) => {
  const endpoint = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
    },
  });

  return client.request(query, variables);
};

export default apiClient;

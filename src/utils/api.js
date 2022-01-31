import { GraphQLClient } from 'graphql-request';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

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

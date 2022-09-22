import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import './index.scss';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetIngredientsAndRecipies {
        ingredients {
          id
          name
          type
          foodGroup
          image
        }
      }
    `
  })
  .then(result => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
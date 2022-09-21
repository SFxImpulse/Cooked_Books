import { useQuery, gql } from '@apollo/client';


function App() {

  const GET_INGREDIENTS = gql`
    query GetIngredients {
      ingredients {
        id
        name
        type
        foodGroup
        image
      }
    }
  `;
  
  function DisplayIngredients() {
    const { error, loading, data } = useQuery(GET_INGREDIENTS);
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :( </p>
  
    return data.ingredients.map(({ id, name, type, foodGroup, image }) => (
      <div key={id}>
        <h3>{name}</h3>
        <img width="400" height="250" alt="location-reference" src={`${image}`} />
        <br />
        <b>About this Ingredient:</b>
        <p>{foodGroup}</p>
        <br />
      </div>
    ));
  }

  return (
    <div>
      <h2>Ingredients List:</h2>
      <br />
      <DisplayIngredients />
    </div>
  );
}

export default App;

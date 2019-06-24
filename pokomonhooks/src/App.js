import React, {useState}  from 'react';
import ErrorBoundary from  './ErrorBoundary';
import {createCache, createResource} from "react-cache";
import {List as PokemonList,  ListItem as PokemonListItem, Detail as PokemonDetail, ListFallback as PokemonListFallback, ListError as PokemonListError} from './pokemon';



function App() {
  const [selectedPokemonId, setSelectedPokemonId ] = useState(1)

  return (
      <div>
          <h1>
            <span role='img' aria-label="React Holiday">
            🎄✌
              </span>
              Pokedex!!!!!
            </h1>
          
         

              <ErrorBoundary fallback={<PokemonListError />} >
                  <React.Suspense
                  maxDuration={300} 
                  fallback={<PokemonListFallback/>}>
             
                    <PokemonList renderItem={pokemon =>
                       (
                      <PokemonListItem key={pokemon.id} 
                       onClick={()=> setSelectedPokemonId(pokemon.id)}>
                       {pokemon.name}
                       </PokemonListItem>)} />
                  </React.Suspense>
              </ErrorBoundary> 
       </div>

  );
}

export default App;

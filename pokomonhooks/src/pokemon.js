import React from 'react';
import {createCache, createResource} from "react-cache";



// let cache = createCache();
// let Resource  = createResource(id => fetch(`https://pokeapi.co/api/v2/pokemon/`).then(res => res.json()));

// export function Detail({ pokemonId: id}){
//     let pokemon = Resource.read(id);
//     return <article>{pokemon.name} </article>
// }



let CollectionResource  = createResource(() => fetch('https://pokeapi.co/api/v2/pokemon/?limit=802').then(res => res.json()));


export function ListItem({className, component: Component = "li", ...props}){
  return <Component className={["pokemon-list-item", className].join(" ")}
  {...props} />
}

export function List({renderItem}){
  return (
    <ul>
    {CollectionResource.read().results.map(pokemon => renderItem({id:pokemon.url.split("/")[6], ...pokemon}))}
     </ul>
  )
}

export function ListError(){
    return (
        <h3>:/ Critcal System overload <span role='img' aria-label='scary-fox'>😼</span> </h3>
    )
}

export function ListFallback(){
    return(
        <span>Looking for pokemon</span>
    )
}
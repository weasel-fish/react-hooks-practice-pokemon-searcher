import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonCollection, setCollection] = useState([])
  const [listedPokemon, setListed] = useState([])
  
  function filterPokemon(string) {
    const filteredPokes = [...pokemonCollection].filter(pokemon => {
      const name = pokemon.name.toLowerCase()
      const search = string.toLowerCase()
      return name.includes(search)
    })

    setListed(filteredPokes)
  }

  //useEffect fetches pokemon from db on load, only on load (dependency = [])
  //sets state to that array
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(data => {
      setListed(data)
      setCollection(data)
    })
  } , [])

  //function posts new pokemon to db, does new fetch to set state? this may not be

  function addNewPokemon(formData) {
    const newPoke = {
      ...formData,
      hp: parseInt(formData.hp)
    }
  
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPoke)
    })
    .then(resp => resp.json())
    .then(fetch('http://localhost:3001/pokemon')
          .then(resp => resp.json())
          .then(data => {
            setCollection(data)
            setListed(data)
          }))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={addNewPokemon}/>
      <br />
      <Search filterPokemon={filterPokemon}/>
      <br />
      <PokemonCollection collection={listedPokemon}/>
    </Container>
  );
}

export default PokemonPage;

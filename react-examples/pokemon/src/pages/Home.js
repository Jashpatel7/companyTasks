import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonInfo from "../components/PokemonInfo";
import Squad from "./Squad";
import AutoComplete from "../components/AutoComplete";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [select, setSelect] = useState([]);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(false);
  const [btnmsg, setBtnmsg] = useState("Select Pokemon");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    axios.get(url).then((response) => {
      setPokemons(response.data.results);
    });
  }, []);

  function fetchPokemon(event, pokemon) {
    axios.get(pokemon.url).then((response) => {
      setPokemonInfo(response.data);
      setActive(true);
    });
  }
  function selectPokemon(event) {
    setSelect([...select, pokemonInfo]);
    if (select.length > 3) {
      setDisable(!disable);
      setBtnmsg("Squad Is Full");
    } else {
      setBtnmsg(btnmsg);
      setDisable(disable);
    }
  }
  // Manipulate Data from Child to Parent
  const homeToSquad = (unique, data) => {
    const arr = data.filter((item) => item !== unique);
    setSelect(arr);
    if (select.length > 3) {
      setDisable(false);
      setBtnmsg("Select Pokemon");
    }
  };
  let showNames = (
    <ul className="pokemon-list" extradata={value}>
      {pokemons.map((pokemon, index) => (
        <li key={index}>
          <button onClick={(event) => fetchPokemon(event, pokemon)}>
            {pokemon.name}
          </button>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <div className="container">
        <h1 className="fc-blue center">Select Pokemon</h1>
        <div className="pokemon-wrapper">
          <AutoComplete />
          {showNames}
          {active && (
            <>
              <div className="about-pokemon">
                <PokemonInfo
                  imgPath={pokemonInfo.sprites.front_default}
                  name={pokemonInfo.species.name.toUpperCase()}
                  hp={pokemonInfo.stats[0].base_stat}
                  attack={pokemonInfo.stats[1].base_stat}
                  defense={pokemonInfo.stats[2].base_stat}
                  specialAttack={pokemonInfo.stats[3].base_stat}
                  specialDefense={pokemonInfo.stats[4].base_stat}
                  speed={pokemonInfo.stats[5].base_stat}
                />
                <button
                  name="select-pokemon"
                  disabled={disable}
                  onClick={(event) => selectPokemon(event)}
                >
                  {btnmsg}
                </button>
              </div>
              <Squad data={select} homeToSquad={homeToSquad} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Home;

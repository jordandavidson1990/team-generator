import { useEffect, useState } from "react";
import MixedTeams from "../components/MixedTeams";
import TeamMembersList from "../components/TeamMembersList";

const MainContainer = () => {
  const [members, setmembers] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setmembers([]);
    const valuesArray = Object.values(e.target).map(object => object.value);
    valuesArray.forEach(value => {
      if (value) {
        setmembers(prev => [...prev, value]);
      }
    });
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=251&offset=0")
      .then(response => response.json())
      .then(data => {
        const names = data.results.map(result => result.name);
        setPokemonNames(names);
      });
  }, []);

  return (
    <div className="ch-container">
      <h1 className="ch-mt--3 ch-mb--5">Definitive 5s</h1>
      <div className="ch-display--flex">
        <TeamMembersList handleSubmit={handleSubmit} />
        {members.length > 0 && pokemonNames.length > 0 && (
          <MixedTeams members={members} pokemonNames={pokemonNames} />
        )}
      </div>
    </div>
  );
};

export default MainContainer;

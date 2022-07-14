import { useEffect, useState } from "react";
import ListOfLads from "../components/ListOfLads";
import MixedTeams from "../components/MixedTeams";
import TeamMembersList from "../components/TeamMembersList";

const MainContainer = () => {
  const [members, setMembers] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);
  const [clickedLads, setClickedLads] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setMembers([]);
    const valuesArray = Object.values(e.target).map(object => object.value);
    valuesArray.forEach(value => {
      if (value) {
        setMembers(prev => [...prev, value]);
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

  const handleClickLad = lad => {
    if (!members.includes(lad)) {
      setClickedLads(prevLads => [...prevLads, lad]);
    }
  };

  const removeLad = lad => {
    const filteredLads = clickedLads.filter(clickedLad => clickedLad !== lad);
    setClickedLads(filteredLads);
  };

  return (
    <div className="ch-container ch-bg--grey-3">
      <h1 className="ch-mt--3 ch-mb--5">Definitive 5s</h1>
      {clickedLads.length < 10 && (
        <ListOfLads handleClick={handleClickLad} clickedLads={clickedLads} />
      )}
      {clickedLads.length > 0 && (
        <div className="ch-display--flex ch-mb--3">
          <TeamMembersList
            handleSubmit={handleSubmit}
            clickedLads={clickedLads}
            removeLad={removeLad}
          />
          {members.length === 10 &&
            pokemonNames.length > 0 &&
            clickedLads.length === 10 && (
              <MixedTeams members={members} pokemonNames={pokemonNames} />
            )}
        </div>
      )}
    </div>
  );
};

export default MainContainer;

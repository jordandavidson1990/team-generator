import { capitalizeFirstLetter, shuffle } from "../helpers";

const MixedTeams = ({ members, pokemonNames }) => {
  const shuffledPokemon = shuffle(pokemonNames);
  const mixedTeams = shuffle(members);
  const firstTeam = mixedTeams.slice(0, 5);
  const lastTeam = mixedTeams.slice(5, 10);

  return (
    <div className="ch-width--6 ch-mh--3">
      <div className="ch-card ch-pa--3">
        <h2 className="ch-color--ac-blue">
          {capitalizeFirstLetter(shuffledPokemon[0])}
        </h2>
        {firstTeam.map(member => (
          <h5 className="ch-fs--4">{capitalizeFirstLetter(member)}</h5>
        ))}
      </div>
      <hr className="ch-mv--4 ch-bg--ac-green ch-bb--3 ch-bc--ac-green" />
      <div className="ch-card ch-pa--3">
        {" "}
        <h2 className="ch-color--ac-violet">
          {capitalizeFirstLetter(shuffledPokemon[1])}
        </h2>
        {lastTeam.map(member => (
          <h5 className="ch-fs--4">{capitalizeFirstLetter(member)}</h5>
        ))}
      </div>
    </div>
  );
};

export default MixedTeams;

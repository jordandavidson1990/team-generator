import { capitalizeFirstLetter, shuffle } from "../helpers";
import Team from "./Team";

const MixedTeams = ({ firstTeamBibs, members, pokemonNames }) => {
  const shuffledPokemon = shuffle(pokemonNames);
  const mixedTeams = shuffle(members);
  const totalMembersLength = members.length;
  const halfWayLength = totalMembersLength / 2;
  const firstTeam = mixedTeams.slice(0, halfWayLength);
  const lastTeam = mixedTeams.slice(halfWayLength, totalMembersLength);

  return (
    <div className="ch-width--6 ch-mh--3">
      <Team
        name={capitalizeFirstLetter(shuffledPokemon[0])}
        isBibs={firstTeamBibs}
        members={firstTeam}
        colour="blue"
      />
      <hr className="ch-mv--4 ch-bg--ac-green ch-bb--3 ch-bc--ac-green" />
      <Team
        name={capitalizeFirstLetter(shuffledPokemon[1])}
        isBibs={!firstTeamBibs}
        members={lastTeam}
        colour="violet"
      />
    </div>
  );
};

export default MixedTeams;

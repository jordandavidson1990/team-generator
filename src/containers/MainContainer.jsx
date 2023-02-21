import ListOfLads from "../components/ListOfLads";
import MixedTeams from "../components/MixedTeams";
import TeamMembersList from "../components/TeamMembersList";
import { useMainContainer } from "./useMainContainer";

const MainContainer = () => {
    const {
        handleNumbersClick,
        isNumbersFives,
        maxLength,
        clickedLads,
        handleClickLad,
        handleSubmit,
        removeLad,
        members,
        pokemonNames,
        firstTeamBibs,
    } = useMainContainer();
  return (
    <div className="ch-container ch-bg--grey-3">
      <h1 className="ch-mt--3 ch-mb--5 ch-ba--3 ch-bc--ac-green ch-rounded">
        Definitive {isNumbersFives ? "5" : "7"}s
      </h1>
      {clickedLads.length < maxLength && (
        <>
          <button
            className="ch-btn ch-btn--success ch-mb--3"
            onClick={handleNumbersClick}
          >
            Change team size
          </button>
          <ListOfLads handleClick={handleClickLad} clickedLads={clickedLads} />
        </>
      )}
      {clickedLads.length > 0 && (
        <div className="ch-display--flex ch-mb--3">
          <TeamMembersList
            handleSubmit={handleSubmit}
            clickedLads={clickedLads}
            removeLad={removeLad}
            maxLength={maxLength}
          />
          {members.length === maxLength &&
            pokemonNames.length > 0 &&
            clickedLads.length === maxLength && (
              <MixedTeams members={members} pokemonNames={pokemonNames} />
            )}
        </div>
    );
};

export default MainContainer;

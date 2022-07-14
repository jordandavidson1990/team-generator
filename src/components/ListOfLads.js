import LadsSeeds from "../data/ladsSeeds.json";
import LadListItem from "./LadListItem";

const ListOfLads = ({ handleClick, clickedLads }) => {
  const lads = sessionStorage.getItem("lads")
    ? sessionStorage.getItem("lads")
    : LadsSeeds.lads;

  return (
    <div className="ch-mb--3">
      {lads
        .filter(lad => !clickedLads.includes(lad))
        .map(lad => (
          <LadListItem lad={lad} handleClick={handleClick} key={lad} />
        ))}
    </div>
  );
};

export default ListOfLads;

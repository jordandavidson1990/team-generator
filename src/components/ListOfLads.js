import LadsSeeds from "../data/ladsSeeds.json";
import LadListItem from "./LadListItem";

const ListOfLads = ({ handleClick, clickedLads }) => {
  const lads = sessionStorage.getItem("lads")
    ? sessionStorage.getItem("lads")
    : LadsSeeds.lads;

  return (
    <div className="ch-mb--3">
      {lads
        .filter((lad) => !clickedLads.includes(lad))
        .map((lad, i) => (
          <LadListItem
            lad={lad}
            handleClick={handleClick}
            key={lad + "-" + i}
          />
        ))}
    </div>
  );
};

export default ListOfLads;

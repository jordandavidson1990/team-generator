import { useEffect, useState } from "react";

export const useMainContainer = () => {
  const [isNumbersFives, setIsNumbersFives] = useState(true);
  const [members, setMembers] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);
  const [clickedLads, setClickedLads] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMembers([]);
    const valuesArray = Object.values(e.target).map((object) => object.value);
    valuesArray.forEach((value) => {
      if (value) {
        setMembers((prev) => [...prev, value]);
      }
    });
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=251&offset=0")
      .then((response) => response.json())
      .then((data) => {
        const names = data.results.map((result) => result.name);
        setPokemonNames(names);
      });
  }, []);

  const handleClickLad = (lad) => {
    if (!members.includes(lad)) {
      setClickedLads((prevLads) => [...prevLads, lad]);
    }
  };

  const removeLad = (lad) => {
    const filteredLads = clickedLads.filter((clickedLad) => clickedLad !== lad);
    setClickedLads(filteredLads);
  };
  const maxLength = isNumbersFives ? 10 : 14;

  const handleNumbersClick = () => setIsNumbersFives(!isNumbersFives);

  return {
    handleNumbersClick,
    isNumbersFives,
    maxLength,
    clickedLads,
    handleClickLad,
    handleSubmit,
    removeLad,
    members,
    pokemonNames,
  };
};

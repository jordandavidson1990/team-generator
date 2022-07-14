import { useState } from "react";

const Input = ({ i, lad }) => {
  const [input, setInput] = useState(lad === "Newbee" ? "" : lad);
  return (
    <input
      key={lad}
      className="ch-mv--1 ch-form__control"
      value={input}
      onChange={e => setInput(e.target.value)}
      required
    />
  );
};

export default Input;

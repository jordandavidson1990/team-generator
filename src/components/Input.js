import { useState } from "react";

const Input = ({ i }) => {
  const [input, setInput] = useState("");
  return (
    <input
      key={i}
      className="ch-mv--1 ch-form__control"
      value={input}
      onChange={e => setInput(e.target.value)}
      required
    />
  );
};

export default Input;

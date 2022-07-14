const LadListItem = ({ lad, handleClick }) => {
  return (
    <button
      className="ch-btn ch-btn--primary ch-ma--1"
      onClick={() => handleClick(lad)}
      style={{ width: "100px" }}
    >
      {lad}
    </button>
  );
};

export default LadListItem;

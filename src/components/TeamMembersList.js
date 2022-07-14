import Input from "./Input";

const TeamMembersList = ({ handleSubmit }) => {
  const arrayOf10 = Array(10).fill(0);
  return (
    <form onSubmit={handleSubmit} className="ch-width--5">
      <div className="ch-card">
        <div className="ch-card__content">
          <div className="ch-display--flex ch-form__group ch-flex-flow--column-wrap ch-mb--3">
            {arrayOf10.map((x, i) => (
              <Input i={i} key={i} />
            ))}
          </div>
          <button className="ch-btn ch-btn--success ch-width--12" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default TeamMembersList;

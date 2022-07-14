import Input from "./Input";

const TeamMembersList = ({ handleSubmit, clickedLads, removeLad }) => {
  return (
    <form onSubmit={handleSubmit} className="ch-width--5">
      <div className="ch-card">
        <div className="ch-card__content">
          <div className="ch-display--flex ch-form__group ch-flex-flow--column-wrap ch-mb--3">
            {clickedLads.map((lad, i) => (
              <div className="ch-display--flex" key={lad}>
                <Input i={lad} lad={lad} />
                <p
                  className="ch-fs--2 ch-color--ac-red ch-text--bold ch-mt--auto ch-mb--auto ch-ml--1"
                  onClick={() => removeLad(lad)}
                >
                  X
                </p>
              </div>
            ))}
          </div>
          {clickedLads.length === 10 && (
            <button
              className="ch-btn ch-btn--success ch-width--12"
              type="submit"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default TeamMembersList;

import { capitalizeFirstLetter } from "../helpers";

const Team = ({ name, isBibs, members, colour }) =>
(
    <div className="ch-card ch-pa--3">
        <h2 className={`ch-color--ac-${colour}`}>
            {name}
            {isBibs ? " - Bibs" : ''}
        </h2>
        {members.map((member, i) => (
            <h5 className="ch-fs--4" key={member + "-" + i}>
                {capitalizeFirstLetter(member)}
            </h5>
        ))}
    </div>
);

export default Team;

/* -----------------Components--------------- */
import TeamLeaders from "./TeamLeaders";
import TeamMembers from "./TeamMembers";

type Props = {
	children?: React.ReactNode;
};

const Team = ({ children }: Props) => {
	return (
		<section id="team" className="bg-white">
			{children}
		</section>
	);
};

Team.Leaders = TeamLeaders;
Team.Members = TeamMembers;

export { Team };

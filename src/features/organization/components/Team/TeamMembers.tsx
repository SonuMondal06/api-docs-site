/* -----------------Types--------------- */
import type { Person, TeamProps } from "../../types";

import { Content } from "@/components/Content";
/* -----------------Components--------------- */
import Image from "next/image";
import FunFact from "./FunFact";

const Member = ({ person }: { person: Person }) => {
	return (
		<FunFact funFact={person?.funFact}>
			<li>
				<Image
					className="mx-auto h-24 w-24 rounded-full"
					src={person.imageUrl}
					alt={person.name}
					width={1024}
					height={1024}
				/>
				<h3 className="mt-6 object-cover font-semibold text-base text-gray-900 leading-7 tracking-tight">
					{person.name}
				</h3>
				<p className="text-gray-600 text-sm leading-6">{person.role}</p>
			</li>
		</FunFact>
	);
};

const TeamMembers = ({
	title = "Our team",
	description,
	people,
}: TeamProps) => {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<Content>
					<Content.Title>{title}</Content.Title>
					<Content.AdaptiveText textContent={description} />
				</Content>
				<ul className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
					{people.map((person) => (
						<Member key={person.name} person={person} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default TeamMembers;

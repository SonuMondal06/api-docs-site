/* -----------------Globals--------------- */
import Image from "next/image";

import { Content } from "@/components/Content";
/* -----------------Types--------------- */
import type { Person, TeamProps } from "../../types";

const Leader = ({ person }: { person: Person }) => {
	return (
		<li className="flex items-start justify-start">
			<Image
				className="mx-auto size-24 rounded-full"
				src={person.imageUrl}
				alt={person.name}
				width={1024}
				height={1024}
			/>
			<div className="mx-auto flex flex-col">
				<h3 className="mt-6 object-cover font-semibold text-base text-gray-900 leading-7 tracking-tight">
					{person.name}
				</h3>
				<p className="text-gray-600 text-sm leading-6">{person.role}</p>
			</div>
		</li>
	);
};

const TeamLeaders = ({
	title = "Meet our leadership",
	description,
	people,
}: TeamProps) => {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
				<Content>
					<Content.Title>{title}</Content.Title>
					<Content.AdaptiveText textContent={description} />
				</Content>

				<ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
					{people.map((person) => (
						<Leader key={person.name} person={person} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default TeamLeaders;

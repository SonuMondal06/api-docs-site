import type { BsIconName } from "@/components/Icon";
import type {
	BenefitsProps,
	Organization,
	Person,
	TeamProps,
	ValuesProps,
	VisionProps,
} from "../types";

export const teamTitle = "Our Team";

export const orgPeople = [
	{
		name: "Dr. Yermie Cohen, MD",
		role: "Founder & CEO",
		href: "#",
		imageUrl: "https://ca.slack-edge.com/T03QU4JKC-U04C1NAMG-847e89e4eb97-192",
	},
	{
		name: "EV Nora",
		role: "Business Development Associate",
		href: "#",
		imageUrl:
			"https://ca.slack-edge.com/T03QU4JKC-U05P1FHB3B9-7d50525c0207-512",
	},
	{
		name: "Vivek Kumar",
		role: "Lead Frontend Software Engineer",
		href: "#",
		imageUrl: "https://ca.slack-edge.com/T03QU4JKC-UEJFZKE3V-e38c8510730c-192",
	},
	{
		name: "Jefree Sujit",
		role: "Lead Software Engineer",
		href: "#",
		imageUrl: "https://ca.slack-edge.com/T03QU4JKC-ULZGH2KGC-36c922607f2e-192",
	},
	{
		name: "Bhanu K",
		role: "Lead AI Engineer",
		href: "#",
		imageUrl:
			"https://ca.slack-edge.com/T03QU4JKC-U01SS17BNP4-ca689849a77f-512",
	},
	{
		name: "Sharooq",
		role: "Senior Software Engineer",
		href: "#",
		imageUrl: "https://ca.slack-edge.com/T03QU4JKC-UJB6K0CTS-5daebe8e57a2-512",
	},
	{
		name: "Vishalakshmi S",
		role: "QA",
		href: "#",
		imageUrl:
			"https://ca.slack-edge.com/T03QU4JKC-U02NSV5RUS3-72a5195c0a3b-512",
	},
];

export const orgTeam = {
	founder: orgPeople[0],
	leaders: {
		title: "Meet our leadership",
		description:
			"We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",

		people: [orgPeople[0]],
	},
	members: {
		title: "Our members",
		description:
			"We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",
		people: orgPeople.slice(1),
	},
};

export const logo =
	"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTMuMTY3IDE0OCkiPjxnPjxkZWZzPjxwYXRoIGQ9Ik0gMzYzLjUgMCBDIDQ5OC45NDYgLTAgNzI2LjkzNSA0MjkuMzQ2IDcyNyA1MTMuNTkgQyA3MjcuMDY1IDU5Ny44MzUgNDkzLjg1IDMzNi45NzcgMzcxLjIyMSAzMzYuOTc3IEMgMjQ4LjU5MiAzMzYuOTc3IDAuMDY1IDYwOS4wNjEgMCA1MjQuODE2IEMgLTAuMDY1IDQ0MC41NzIgMjI4LjA1NCAwIDM2My41IDAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkzIDkzKSByb3RhdGUoOTAgMzYzLjUgMjcwLjUpIiBpZD0iYTEwMDB6Ij48L3BhdGg+PGZpbHRlciBpZD0iYTEwMDJ6IiB4PSItMC43JSIgeT0iLTEuMyUiIHdpZHRoPSIxMDEuNCUiIGhlaWdodD0iMTAyLjYlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuNSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImExMDA0eiI+PC9mZUdhdXNzaWFuQmx1cj48ZmVPZmZzZXQgZHg9IjAiIGR5PSIyIiBpbj0iYTEwMDR6IiByZXN1bHQ9ImExMDA1eiI+PC9mZU9mZnNldD48ZmVDb21wb3NpdGUgaW49ImExMDA1eiIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiIHJlc3VsdD0iYTEwMDZ6Ij48L2ZlQ29tcG9zaXRlPjxmZUNvbG9yTWF0cml4IGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMjUgMCIgdHlwZT0ibWF0cml4IiBpbj0iYTEwMDZ6IiByZXN1bHQ9ImExMDA3eiI+PC9mZUNvbG9yTWF0cml4PjwvZmlsdGVyPjwvZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhMTAwMHoiIGZpbGw9InJnYmEoMzQsIDE3MCwgMTUzLCAwLjE1KSIgY2xpcC1wYXRoPSJ1cmwoI2ExMDAxeikiPjwvdXNlPjx1c2UgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMSIgZmlsdGVyPSJ1cmwoI2ExMDAyeikiIHhsaW5rOmhyZWY9IiNhMTAwMHoiPjwvdXNlPjwvZz48Zz48ZGVmcz48cGF0aCBkPSJNIDM2My41IDAgQyA0OTguOTQ2IC0wIDcyNi45MzUgNDI5LjM0NiA3MjcgNTEzLjU5IEMgNzI3LjA2NSA1OTcuODM1IDQ5My44NSAzMzYuOTc3IDM3MS4yMjEgMzM2Ljk3NyBDIDI0OC41OTIgMzM2Ljk3NyAwLjA2NSA2MDkuMDYxIDAgNTI0LjgxNiBDIC0wLjA2NSA0NDAuNTcyIDIyOC4wNTQgMCAzNjMuNSAwIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00My4xNjYgOTQpIHJvdGF0ZSg5MCAzNjMuNSAyNzAuNSkiIGlkPSJhMTAwOHoiPjwvcGF0aD48ZmlsdGVyIGlkPSJhMTAxMHoiIHg9Ii0wLjclIiB5PSItMS4zJSIgd2lkdGg9IjEwMS40JSIgaGVpZ2h0PSIxMDIuNiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMi41IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iYTEwMTJ6Ij48L2ZlR2F1c3NpYW5CbHVyPjxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJhMTAxMnoiIHJlc3VsdD0iYTEwMTN6Ij48L2ZlT2Zmc2V0PjxmZUNvbXBvc2l0ZSBpbj0iYTEwMTN6IiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIgcmVzdWx0PSJhMTAxNHoiPjwvZmVDb21wb3NpdGU+PGZlQ29sb3JNYXRyaXggY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJhMTAxNHoiIHJlc3VsdD0iYTEwMTV6Ij48L2ZlQ29sb3JNYXRyaXg+PC9maWx0ZXI+PC9kZWZzPjx1c2UgeGxpbms6aHJlZj0iI2ExMDA4eiIgZmlsbD0icmdiYSgzNCwgMTcwLCAxNTMsIDAuNCkiIGNsaXAtcGF0aD0idXJsKCNhMTAwOXopIj48L3VzZT48dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNhMTAxMHopIiB4bGluazpocmVmPSIjYTEwMDh6Ij48L3VzZT48L2c+PGc+PGRlZnM+PHBhdGggZD0iTSAzNjMuNSAwIEMgNDk4Ljk0NiAtMCA3MjYuOTM1IDQyOS4zNDYgNzI3IDUxMy41OSBDIDcyNy4wNjUgNTk3LjgzNSA0OTMuODUgMzM2Ljk3NyAzNzEuMjIxIDMzNi45NzcgQyAyNDguNTkyIDMzNi45NzcgMC4wNjUgNjA5LjA2MSAwIDUyNC44MTYgQyAtMC4wNjUgNDQwLjU3MiAyMjguMDU0IDAgMzYzLjUgMCBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjgzMyA5NCkgcm90YXRlKDkwIDM2My41IDI3MC41KSIgaWQ9ImExMDE2eiI+PC9wYXRoPjxmaWx0ZXIgaWQ9ImExMDE4eiIgeD0iLTAuNyUiIHk9Ii0xLjMlIiB3aWR0aD0iMTAxLjQlIiBoZWlnaHQ9IjEwMi42JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyLjUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJhMTAyMHoiPjwvZmVHYXVzc2lhbkJsdXI+PGZlT2Zmc2V0IGR4PSIwIiBkeT0iMiIgaW49ImExMDIweiIgcmVzdWx0PSJhMTAyMXoiPjwvZmVPZmZzZXQ+PGZlQ29tcG9zaXRlIGluPSJhMTAyMXoiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIiByZXN1bHQ9ImExMDIyeiI+PC9mZUNvbXBvc2l0ZT48ZmVDb2xvck1hdHJpeCBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjI1IDAiIHR5cGU9Im1hdHJpeCIgaW49ImExMDIyeiIgcmVzdWx0PSJhMTAyM3oiPjwvZmVDb2xvck1hdHJpeD48L2ZpbHRlcj48L2RlZnM+PHVzZSB4bGluazpocmVmPSIjYTEwMTZ6IiBmaWxsPSIjMjJBQTk5IiBjbGlwLXBhdGg9InVybCgjYTEwMTd6KSI+PC91c2U+PHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjYTEwMTh6KSIgeGxpbms6aHJlZj0iI2ExMDE2eiI+PC91c2U+PC9nPjxwYXRoIGQ9Ik0gNTY3LjA0MSAzNjMuNTE3IEMgNTY3LjA0MSAzOTkuMTczIDUzOC4xNDEgNDI4LjA3NyA1MDIuNDkyIDQyOC4wNzcgQyA0NjYuODQyIDQyOC4wNzcgNDM3Ljk0MiAzOTkuMTczIDQzNy45NDIgMzYzLjUxNyBDIDQzNy45NDIgMzI3Ljg2MiA0NjYuODQyIDI5OC45NTggNTAyLjQ5MiAyOTguOTU4IEMgNTM4LjE0MSAyOTguOTU4IDU2Ny4wNDEgMzI3Ljg2MiA1NjcuMDQxIDM2My41MTcgWiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlPSIjRkZGRkZGIj48L3BhdGg+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjE4Ljk3NCAyNzMpIHJvdGF0ZSg5MCAxODUuNTIzIDk3Ljk5NCkiPjxnPjxwYXRoIGQ9Ik0gNDIuMTA0IDExMS43OTQgQyA2NS4zNTggMTExLjc5NCA4NC4yMDggMTMwLjY0MSA4NC4yMDggMTUzLjg5MSBDIDg0LjIwOCAxNzcuMTQxIDY1LjM1OCAxOTUuOTg5IDQyLjEwNCAxOTUuOTg5IEMgMTguODUxIDE5NS45ODkgMCAxNzcuMTQxIDAgMTUzLjg5MSBDIDAgMTMwLjY0MSAxOC44NTEgMTExLjc5NCA0Mi4xMDQgMTExLjc5NCBaIiBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2U9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBkPSJNIDAgMCBDIDM1LjY1NSAwIDY0LjU2IDI4LjkgNjQuNTYgNjQuNTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3LjkxIDgzLjEzKSByb3RhdGUoLTIgMzIuMjggMzIuMjc1KSIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZT0iI0ZGRkZGRiI+PC9wYXRoPjxwYXRoIGQ9Ik0gOTEuMDQ2IDEwMyBMIDE4Ni4wNDYgMCIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZT0iI0ZGRkZGRiI+PC9wYXRoPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4NiAwKSI+PHBhdGggZD0iTSAxNDIuOTQyIDExMS43OTQgQyAxMTkuNjg5IDExMS43OTQgMTAwLjgzOCAxMzAuNjQxIDEwMC44MzggMTUzLjg5MSBDIDEwMC44MzggMTc3LjE0MSAxMTkuNjg5IDE5NS45ODkgMTQyLjk0MiAxOTUuOTg5IEMgMTY2LjE5NiAxOTUuOTg5IDE4NS4wNDYgMTc3LjE0MSAxODUuMDQ2IDE1My44OTEgQyAxODUuMDQ2IDEzMC42NDEgMTY2LjE5NiAxMTEuNzk0IDE0Mi45NDIgMTExLjc5NCBaIiBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2U9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBkPSJNIDY4LjkwNSAwLjE2IEMgMzMuMzM3IC0yLjMyNyAyLjQ4NyAyNC40ODYgMCA2MC4wNDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcxLjQwMSA4NS4zKSByb3RhdGUoLTIgMzQuNDUzIDMwLjAyNCkiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjE1IiBzdHJva2U9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBkPSJNIDk1IDEwMyBMIDAgMCIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZT0iI0ZGRkZGRiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=";

export const orgVision = {
	heading: "Vision",
	title: "Memorang is building the “AI tech stack for education.”",
	description:
		"With over a million new education businesses expected to launch online in the next decade and the increasing pressure of large organizations to adopt AI, Memorang is poised to become the EdTech platform layer for the internet.",
} satisfies VisionProps;

export const orgBenefits = {
	heading: "Benefits",
	title: "What we have for you",
	description:
		"At Memorang, we don't just work; we innovate, learn, and grow together. Our vibrant culture and supportive community empower you to achieve your best. Here’s how we take care of our team",
	benefits: [
		{
			name: "Competitive Salary",
			description: "Attractive compensation package",
			icon: "Wallet",
		},
		{
			name: "Comprehensive Insurance",
			description: "Health coverage for you and your family.",
			icon: "ShieldPlus",
		},
		{
			name: "Home Office Setup",
			description: "Support for a productive remote work environment.",
			icon: "MonitorSmartphone",
		},
		{
			name: "Health & Wellness",
			description: "Gym membership and wellness allowances.",
			icon: "HandHeart",
		},
		{
			name: "Flexible Work Arrangements",
			description: "Options for flexible hours.",
			icon: "CalendarClock",
		},
		{
			name: "Professional Growth",
			description: "Continuous learning and career advancement opportunities.",
			icon: "ArrowUpNarrowWide",
		},
	],
} satisfies BenefitsProps;

export const orgValues = {
	heading: "Values",
	title: "What we believe in",
	description: "These are the core values that we uphold in our organization.",
	values: [
		{
			name: "Customer-Centric",
			description: "We prioritize the needs of customers and end-users.",
			icon: "Headset",
		},
		{
			name: "Hustle",
			description: "We are proactive about getting things done quickly.",
			icon: "Zap",
		},
		{
			name: "Teamwork",
			description: "We support one another through collaboration.",
			icon: "Users",
		},
		{
			name: "Growth Mindset",
			description:
				"We make ourselves better through continuous learning, optimization, and upskilling.",
			icon: "Sprout",
		},
		{
			name: "Ownership",
			description:
				"We take responsibility for the problems we are solving and don’t hesitate to take on new challenges or accept responsibility for mistakes.",
			icon: "Key",
		},
		{
			name: "Excellence",
			description:
				"Our work product reflects who we are, so we take pride in solving problems the right way.",
			icon: "Ribbon",
		},
		{
			name: "Positivity",
			description: "We encourage and help each other to be their best.",
			icon: "ThumbsUp",
		},
		{
			name: "Creativity",
			description:
				"Every person has the capacity to shape the direction of the company and product, and we understand that good ideas can come from anyone.",
			icon: "Palette",
		},
	],
} satisfies ValuesProps;

export const organization: Organization = {
	name: "Memorang",
	alias: "memorang",
	website: "/",
	logo: {
		src: "/logos/memorang/icon.svg",
		alt: "Memorang",
		organization: {
			light: {
				src: "/logos/memorang/organization/light.svg",
				alt: "Memorang",
			},
			dark: {
				src: "/logos/memorang/organization/dark.svg",
				alt: "Memorang",
			},
		},
		poweredBy: {
			light: {
				src: "/logos/memorang/poweredBy/light.svg",
				alt: "Powered by Memorang",
			},
			dark: {
				src: "/logos/memorang/poweredBy/dark.svg",
				alt: "Powered by Memorang",
			},
		},
	},
	info: {
		moto: "Leveling the playing field in higher education",
		mission:
			"Memorang is the AI stack for education. We provide organizations with an integrated suite of tools to build, launch, and scale AI-powered education solutions.",
		insight:
			"Coming from MIT I thought medical school would be a cakewalk—I was wrong. After being overwhelmed with thousands of things to learn every week, I found that existing learning tools were either too simple to be effective or too expensive to afford on a student's budget. My frustration ultimately inspired me to create a better way to study.\nIn creating Memorang, our mission is to level the playing field in education by making advanced learning accessible to any type of student (regardless of aptitude or financial circumstance) and to empower educators to deliver world-class learning experiences. The core of our platform takes the best elements from scientific breakthroughs in cognition, behavioral science, pedagogy, and artificial intelligence and integrates them into the ultimate learning tool.",
		vision: orgVision,
		benefits: orgBenefits,
		values: orgValues,
	},
	team: orgTeam as {
		founder: Person;
		leaders: TeamProps;
		members: TeamProps;
	},
	social: {
		linkedin: {
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/memorang",
			external: true,
			icon: "BsLinkedin" as BsIconName,
		},
		twitter: {
			name: "X",
			href: "https://x.com/memorangai",
			external: true,
			icon: "BsTwitterX" as BsIconName,
		},
	},
};

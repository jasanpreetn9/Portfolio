import {
	codexPreview,
	flixPreview,
	breakoutPreview,
	gradeCheckerPreview,
	musicPlayerPreview,
	spaceShooterPreview
} from '$lib/images';

export const description = [
	`Hello! I'm Jasanpreet Nagra, a passionate software developer who started coding at the age of 13. I have a strong foundation in both front-end and back-end development and am eager to apply my skills professionally. `,
	`I've also I collaborated with other developers on a variety of projects on GitHub, to improve their functionality and usability. In addition to my coding pursuits, I am enrolled in dual credit and AP courses, further expanding my knowledge and preparing for future academic challenges. `,
	`When I'm not coding, I enjoy playing first-person shooter games, getting enough rest, and focusing on my studies. Despite being a high school senior, I'm dedicated to making a meaningful impact.
			`
];
export const skills = [
	{
		category: 'Programming Languages',
		list: ['HTML_CSS', 'Javascript', 'Typescript', 'NodeJs', 'Java', 'Python', 'Flutter']
	},
	{
		category: 'Databases',
		list: ['Postgres', 'SQlite', 'SQL']
	},
	{
		category: 'WebFrameworks',
		list: ['Svelte', 'Sveltekit', 'Express']
	},
	{
		category: 'Tools',
		list: ['VSCode', 'NeoVim', 'Figma', 'Git_Github', 'Docker']
	}
];

export const projects = [
	{
		name: 'Codex',
		order: 1,
		tags: ['Sveltekit', 'Redis', 'Cheerio'],
		description:
			'The open-source anime streaming service made with SvelteKit. It lets you search, watch animes without any ads with a beautiful UI. It can be self hosted or deployed online.',
		github_repo: 'https://github.com/jasanpreetn9/Codex',
		image: codexPreview
	},
	{
		name: 'Flix',
		order: 2,
		tags: ['Sveltekit', 'Cheerio', 'Web Scraping'],
		description:
			'Flix is an online web application that allows users to search for movies and TV shows, and watch trailers and reviews.',
		github_repo: 'https://github.com/jasanpreetn9/Flix',
		image: flixPreview
	},
	{
		name: 'Breakout',
		order: 3,
		tags: ['Java', 'Game Development'],
		description:
			'The Grade Checker app in Python lets users to predict their final grades by inputting their desired scores on assignments, quizzes, and tests. It provides instant feedback, allowing users to visualize the impact of their performance on their overall grade.',
		github_repo: 'https://github.com/jasanpreetn9/Breakout',
		image: breakoutPreview
	},
	{
		name: 'Grade Checker',
		order: 4,
		tags: ['Python', 'PyQt6', 'GUI'],
		description:
			'The Grade Checker app in Python lets users to predict their final grades by inputting their desired scores on assignments, quizzes, and tests. It provides instant feedback, allowing users to visualize the impact of their performance on their overall grade.',
		github_repo: 'https://github.com/jasanpreetn9/grade-checker',
		image: gradeCheckerPreview
	},
	{
		name: 'Music Player',
		order: 5,
		tags: ['Python', 'PyQt6', 'GUI', 'PyGame'],
		description:
			'Python music player app is a versatile and user-friendly audio playback application that allows you to manage and enjoy your music collection.',
		github_repo: 'https://github.com/jasanpreetn9/music-player',
		image: musicPlayerPreview
	},
	{
		name: 'Space Shooter',
		order: 6,
		tags: ['Python', 'PyQt6', 'GUI', 'PyGame'],
		description:
			'Python Space Shooter app, you and a friend can engage in intense space battles. It tracks scores and declares a clear winner after each match, adding a competitive edge to your interstellar adventures.',
		github_repo: 'https://github.com/jasanpreetn9/space-shooter',
		image: spaceShooterPreview
	}
];

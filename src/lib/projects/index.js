import codexPreview from '$lib/projects/previews/codex.png';
import flixPreview from '$lib/projects/previews/flix.png';
import breakoutPreview from '$lib/projects/previews/breakout.png';
import gradeCheckerPreview from '$lib/projects/previews/grade-checker.png';
import musicPlayerPreview from '$lib/projects/previews/music-player.png';
import spaceShooterPreview from '$lib/projects/previews/space-shooter.png';

export const projectList = [
	{
		name: 'Codex',
		order: 1,
		tags: ['Sveltekit', 'Redis', 'Cheerio'],
		description:
			'The open-source anime streaming service made with SvelteKit. It lets you search, watch animes without any ads with a beautiful UI. It can be self hosted or deployed online.',
		github_repo: 'https://github.com/jasanpreetn9/Codex',
        image: codexPreview,
	},
	{
		name: 'Flix',
		order: 2,
		tags: ['Sveltekit', 'Cheerio', 'Web Scraping'],
		description:
			'Flix is an online web application that allows users to search for movies and TV shows, and watch trailers and reviews.',
		github_repo: 'https://github.com/jasanpreetn9/Flix',
        image: flixPreview,
	},
	{
		name: 'Breakout',
		order: 3,
		tags: ['Java', 'Game Development'],
		description:
			'The Grade Checker app in Python lets users to predict their final grades by inputting their desired scores on assignments, quizzes, and tests. It provides instant feedback, allowing users to visualize the impact of their performance on their overall grade.',
		github_repo: 'https://github.com/jasanpreetn9/Breakout',
        image: breakoutPreview,
	},
	{
		name: 'Grade Checker',
		order: 4,
		tags: ['Python', 'PyQt6', 'GUI'],
		description:
			'The Grade Checker app in Python lets users to predict their final grades by inputting their desired scores on assignments, quizzes, and tests. It provides instant feedback, allowing users to visualize the impact of their performance on their overall grade.',
		github_repo: 'https://github.com/jasanpreetn9/grade-checker',
        image: gradeCheckerPreview,
	},
	{
		name: 'Music Player',
		order: 5,
		tags: ['Python', 'PyQt6', 'GUI', 'PyGame'],
		description:
			'Python music player app is a versatile and user-friendly audio playback application that allows you to manage and enjoy your music collection.',
		github_repo: 'https://github.com/jasanpreetn9/music-player',
        image: musicPlayerPreview,
	},
	{
		name: 'Space Shooter',
		order: 6,
		tags: ['Python', 'PyQt6', 'GUI', 'PyGame'],
		description:
			'Python Space Shooter app, you and a friend can engage in intense space battles. It tracks scores and declares a clear winner after each match, adding a competitive edge to your interstellar adventures.',
		github_repo: 'https://github.com/jasanpreetn9/space-shooter',
        image: spaceShooterPreview,
	}
];

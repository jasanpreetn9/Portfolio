import { Octokit } from 'octokit';
import { GITHUB_API_TOKEN } from '$env/static/private';
export async function load({ fetch }) {
	const octokit = new Octokit({
		auth: GITHUB_API_TOKEN
	});

	const { data } = await octokit.request('GET /users/{username}/repos', {
		username: 'Jasanpreetn9',
		headers: {
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});
	return {
		repositories: data
	};
}

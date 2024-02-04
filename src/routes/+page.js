export async function load({ fetch }) {

	const data = await fetch("https://raw.githubusercontent.com/jasanpreetn9/portfolio-projects/main/projects.json");
	const {projects} = await data.json();
	return {
		projects
	};
}

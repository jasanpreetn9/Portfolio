export async function load({ fetch }) {
	const data = await fetch(
		'https://raw.githubusercontent.com/jasanpreetn9/portfolio-projects/main/projects.json'
	);
	const respData = await data.json();
	const projects = respData.projects.sort((a, b) => a.order - b.order);
	return {
		projects
	};
}

<script>
	export let projects;
</script>

<section class="projects">
	<div class="projects__header">
		<h2 class="h2">Projects</h2>
		<a class="projects__link" href="/projects">View all</a>
	</div>

	<div class="project-list">
		{#each projects as repo}
			<div class="project">
				<img
					alt={repo.name}
					src={`${repo.html_url}/raw/main/static/Preview.png?raw=true`}
					class="project__image"
					onerror={`this.onerror=null; this.src='${repo.html_url}/blob/master/static/Preview.png?raw=true'`}
				/>

				<ul class="project__techs">
					{#each repo.topics as topic}
						<li class="project__tech">{topic}</li>
					{/each}
				</ul>

				<div class="project__content">
					<div class="project__name">{repo.name.replace('-', ' ')}</div>
					<div class="project__description">{repo.description}</div>
					<div class="project__links">
						<a href={repo.html_url} class="button">Github</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	div,
	h2,
	a,
	img,
	ul,
	li,
	section {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	ul {
		list-style: none;
	}

	img {
		max-width: 100%;
		display: block;
	}

	.button {
		display: inline-block;
		padding: 8px 16px;
		border: 1px solid var(--primary);
		font-weight: 500;
	}
	.button:hover {
		background-color: var(--primary-op);
	}

	.h2 {
		font-size: 32px;
		font-weight: 500;
		position: relative;
		float: none;
		clear: both;
		display: inline-block;
	}
	.h2::before {
		content: '#';
		color: var(--primary);
	}
	.h2::after {
		content: '';
		display: block;
		width: 10vw;
		height: 1px;
		background-color: var(--primary);
		position: absolute;
		transform: translate(100%, -50%);
		right: -16px;
		top: 50%;
	}

	.projects__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 48px;
	}

	.projects__link {
		text-decoration: underline;
	}
	.projects__link:hover {
		color: var(--primary);
	}

	.project {
		border: 1px solid var(--gray);
	}
	.project__links {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.project__image {
		border-bottom: 1px solid var(--gray);
		aspect-ratio: 16/9;
	}
	.project__content {
		padding: 16px;
	}
	.project__name {
		font-size: 24px;
		font-weight: 500;
		text-transform: capitalize;
	}
	.project__description {
		color: var(--gray);
		margin: 16px 0;
	}
	.project__techs {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 16px;
		color: var(--gray);
		padding: 8px;
		border-bottom: 1px solid var(--gray);
	}
	.project__tech {
		text-transform: capitalize;
	}
	.project-list {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		align-items: start;
		margin-top: 48px;
	}
	@media (max-width: 1024px) {
		.project-list {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}
</style>

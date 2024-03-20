<script>
	export let projects;
</script>

<div class="project-list">
	{#each projects as project}
		<div class="project">
			<img
				alt={project.name}
				src={project.image ?? ""}
				class="project__image"
			/>

			<ul class="project__techs">
				{#each project.tags as tag}
					<li class="project__tech">{tag}</li>
				{/each}
			</ul>

			<div class="project__content">
				<div class="project__name">{project.name}</div>
				<div class="project__description">{project.description}</div>
				<div class="project__links">
					<a href={project.github_repo} class="button">Github</a>
					{#if project.live_url}
						<a href={project.live_url} class="button">Live</a>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	div,
	a,
	img,
	ul,
	li {
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
		margin-top: auto;
	}
	.button:hover {
		background-color: var(--primary-op);
	}

	.project {
		border: 1px solid var(--gray);
		height: 100%;
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
	}
	@media (max-width: 1024px) {
		.project-list {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}
</style>

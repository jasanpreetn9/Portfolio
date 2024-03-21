<script>
	import { ProjectsGrid } from '$lib/Components';
	import { projects } from '$lib';
</script>

<div class="container content">
	<div class="path">
		<h1 class="h1 path__name">projects</h1>
		<p class="path__description">All of my projects</p>
	</div>

	<ProjectsGrid {projects} />
</div>

<style>
	div,
	h1 {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	.path {
		width: 100%;
	}
	.path__name {
		font-size: 32px;
		font-weight: 600;
	}
	.path__name::before {
		content: '/';
		color: var(--primary);
	}
	.path__description {
		color: var(--gray);
		margin-top: 16px;
	}

	.container {
		max-width: 1024px;
		margin: 0 auto;
		position: relative;
	}
	@media (max-width: 1024px) {
		.container {
			padding: 16px;
		}
	}

	.content {
		margin-top: 112px;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 112px;
	}
</style>

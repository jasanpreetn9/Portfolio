<script>
	import { projects, description } from '$lib';
	import { ProjectsGrid, Skills, Contact } from '$lib/Components';
</script>

<div class="container content">
	<section class="hero">
		<div class="hero__content">
			<h1 class="hero__title">
				Hello! I'm <span>Jasanpreet</span> <span>Nagra</span>
			</h1>
			<div class="hero__description">
				UTSA freshmen, web developer, and aspiring innovator. Let's build something awesome
				together!
			</div>
			<a class="button button__primary" href="#contacts">Contact Me</a>
		</div>
	</section>

	<figure class="quote">
		<blockquote class="quote__text">
			Life is like riding a bicycle. To keep your balance, you must keep moving.
		</blockquote>
		<figcaption class="quote__author">- Albert Einstein</figcaption>
	</figure>
	<section class="projects">
		<div class="projects__header">
			<h2 class="h2">Projects</h2>
			<a class="projects__link" href="/projects">View all -&gt;</a>
		</div>

		<ProjectsGrid projects={projects.slice(0, 3)} />
	</section>

	<Skills />

	<section class="about">
		<div class="about__content">
			<h2 class="h2">About</h2>
			<div class="about__text">
				<p class="about__description">
					{description[0]}
				</p>
			</div>

			<a href="/about" class="button">View all -&gt;</a>
		</div>
	</section>

	<Contact />
</div>

<style>
	div,
	span,
	h1,
	h2,
	p,
	a,
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

	.button {
		display: inline-block;
		padding: 8px 16px;
		border: 1px solid var(--primary);
		font-weight: 500;
	}
	.button:hover {
		background-color: var(--primary-op);
	}
	.quote {
		border: 1px solid var(--gray);
		position: relative;
		margin: 0;
	}
	.quote__text {
		padding: 32px;
		font-size: 20px;
		font-weight: 500;
		background-color: var(--background);
	}
	.quote__author {
		position: absolute;
		color: var(--gray);
		border: 1px solid var(--gray);
		padding: 8px;
		right: -1px;
		font-size: 16px;
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

	a {
		text-decoration: none;
		color: inherit;
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

	.about {
		display: flex;
		gap: 32px;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
	.about__content {
		flex: 1 1 0;
		min-width: 300px;
	}
	.about__text {
		margin-bottom: 32px;
		margin-top: 48px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.about__description {
		color: var(--gray);
	}

	.hero {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 32px;
		flex-wrap: wrap;
	}

	.hero__title {
		min-width: 300px;
		font-size: 32px;
		font-weight: 600;
	}
	.hero__title span {
		color: var(--primary);
	}
	.hero__description {
		color: var(--gray);
		margin-top: 32px;
		margin-bottom: 32px;
	}
</style>

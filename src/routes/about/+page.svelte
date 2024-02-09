<script>
	import { Skills } from '$lib/Components';
</script>

<div class="container content">
	<div class="path">
		<h1 class="h1 path__name">about-me</h1>
		<p class="path__description">Who am i</p>
	</div>

	<section class="about">
		<div class="about__text">
			<p class="about__description">
				Hello there! I'm Jasanpreet Nagra, a passionate and dynamic individual who is currently
				navigating the exciting realms of both high school and the ever-evolving world of
				technology. As a senior in high school, I'm on the cusp of a new chapter in my life, eagerly
				anticipating the challenges and adventures that lie ahead.
			</p>

			<p class="about__description">
				One of my greatest passions is coding, and I proudly identify as a full-stack developer.
				Whether it's crafting seamless front-end user experiences or delving into the intricacies of
				back-end development, I thrive on the creative problem-solving that coding demands. My
				journey in the world of programming began as a curious exploration and has evolved into a
				deeply ingrained love for building digital solutions that make a real impact.
			</p>


			<p class="about__description">
				I am always open to collaboration, learning from others, and sharing my knowledge with those
				who are equally passionate about technology. Whether you're interested in discussing the
				latest tech trends, collaborating on a project, or simply connecting over shared interests,
				feel free to reach out—I'm excited to connect with like-minded individuals and explore the
				limitless possibilities that the world of technology has to offer!
			</p>
		</div>
	</section>
	<Skills />
</div>

<style>
	div,
	h1,
	p,
	section {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	.path {
		align-self: start;
		display: block;
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

	.about {
		display: flex;
		justify-content: space-between;
		gap: 48px;
		align-items: center;
		flex-wrap: wrap;
	}
	.about__text {
		flex: 3 1 0;
		color: var(--gray);
		min-width: 300px;
	}
	.about__description {
		margin-bottom: 16px;
	}
</style>

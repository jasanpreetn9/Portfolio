<script>
	import { Skills } from '$lib/Components';
	import { aboutMe } from '$lib/images';
	import { isMenuOpen } from '$lib/stores';
</script>

<div class="container content">
	<div class="path">
		<h1 class="h1 path__name">about-me</h1>
		<p class="path__description">Who am i</p>
	</div>

	<section class="about">
		<div class="about__illustrations">
			<img src={aboutMe} alt="" class="about__image" />
		</div>
		<div class="about__text">
			<p class="about__description">
				I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
				websites from scratch and raise them into modern user-friendly web experiences.
			</p>

			<p class="about__description">
				Transforming my creativity and knowledge into a websites has been my passion for over a
				year. I have been helping various clients to establish their presence online.
			</p>

			<p class="about__description">
				I always strive to learn about the newest technologies and frameworks.
			</p>
		</div>
	</section>
	<Skills />
</div>

<style>
	div,
	h1,
	p,
	img,
	section {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	img {
		max-width: 100%;
		display: block;
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
	.about__illustrations {
		flex: 1 1 0;
		min-width: 300px;
	}
	.about__image {
		border-bottom: 1px solid var(--primary);
	}
</style>

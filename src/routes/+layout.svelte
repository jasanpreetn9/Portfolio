<script>
	import '$lib/global.css';
	import { page } from '$app/stores';
	import { email, github, logo } from '$lib/images/icons';
	import { banner } from '$lib/images';
	let isMobileMenuOpen = false;

</script>

<svelte:head>
	<title>Jnagra</title>
	<meta property="og:image" content={banner} />
	<meta name="theme-color" content="#C778DD" />
	<meta property="og:title" content="Jnagra — Full Stack web developer" />
	<meta property="og:description" content="High school senior, web developer, and aspiring innovator. Let's build something awesome together!"/>
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en" />
	<meta property="og:site_name" content="Jnagra" />
	<link rel="icon" href={logo} />

</svelte:head>
<header class="header">
	<input bind:checked={isMobileMenuOpen} class="hamburger" type="checkbox" aria-label="Menu" />


	<div class="media-header">
		<span class="media-header__line"></span>
		<div class="media-header__links">
			<a href="https://github.com/Jasanpreetn9" class="media">
				<img src={github} alt="github" class="media__icon" />
			</a>
			<a href="mailto:Jasanpreet@jnagra.com" class="media">
				<img src={email} alt="email" class="media__icon" />
			</a>
		</div>
	</div>

	<div class="container">
		<div class="header__inner">
			<a class="logo" href="/">
				<img class="logo__img" src={logo} alt="Jnagra logo" />
				<span class="logo__name">Jnagra</span>
			</a>
			<div class="header__links">
				<a
				on:click={() => isMobileMenuOpen = false}
					href="/"
					class={`header__link ${$page.url.pathname === '/' ? 'header__link_active' : ''}`}
				>
					home
				</a>

				<a
				on:click={() => isMobileMenuOpen = false}
					href="/projects"
					class={`header__link ${$page.url.pathname === '/projects' ? 'header__link_active' : ''}`}
				>
					projects
				</a>
				<a
				on:click={() => isMobileMenuOpen = false}
					href="/about"
					class={`header__link ${$page.url.pathname === '/about' ? 'header__link_active' : ''}`}
				>
					about
				</a>
			</div>
		</div>
	</div>
</header>

<main>
	<slot />
</main>
<footer class="footer">
	<div class="container">
		<div class="footer__inner">
			<div class="footer__info">
				<div class="footer__header">
					<div class="logo">
						<img src={logo} alt="logo" class="logo__img" />
						<div class="logo__name">Jnagra</div>
					</div>
					<!-- <a class="footer__email" href="mailto:Jasanpreet@jnagra.com"> Jasanpreet@jnagra.com </a> -->
				</div>

				<p class="footer__description">Web designer and full stack web developer.</p>
			</div>
		</div>
		<div class="footer__copyright">© Copyright {new Date().getFullYear()}. Made by Jnagra</div>
	</div>
</footer>

<style>
	div,
	span,
	p,
	a,
	img,
	header {
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

	img {
		max-width: 100%;
		display: block;
	}

	input {
		font: inherit;
	}

	.media-header {
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		left: 16px;
		gap: 8px;
		top: 0px;
	}
	@media (max-width: 1024px) {
		.media-header {
			display: none;
		}
	}
	.media-header__links {
		display: grid;
		grid-auto-columns: 1fr;
	}
	.media-header__line {
		width: 1px;
		height: 33vh;
		background-color: var(--gray);
		display: block;
	}

	.hamburger {
		width: 32px;
		margin: 0;
		aspect-ratio: 1;
		display: none;
		appearance: none;
		position: absolute;
		cursor: pointer;
		right: 8px;
		top: 32px;
		z-index: 9999;
	}
	.hamburger::before,
	.hamburger::after {
		content: '';
		width: 100%;
		height: 2px;
		position: absolute;
		top: 30%;
		background-color: var(--gray);
		transition: all 0.2s ease;
	}
	.hamburger::after {
		width: 75%;
		top: 70%;
		right: 0;
	}
	@media (max-width: 1024px) {
		.hamburger {
			display: block;
		}
		.hamburger:checked::after {
			transform: translateY(-50%) rotateZ(45deg);
			width: 100%;
			top: 50%;
		}
		.hamburger:checked::before {
			transform: translateY(-50%) rotateZ(-45deg);
			top: 50%;
		}
		.hamburger:checked ~ .media-header {
			display: flex;
			top: calc(100% - 16px);
			left: 50%;
			transform: translate(-50%, -100%);
			z-index: 9999;
		}
		.hamburger:checked ~ .media-header .media {
			width: 48px;
		}
		.hamburger:checked ~ .media-header .media-header__links {
			display: flex;
			gap: 16px;
		}
		.hamburger:checked ~ .media-header .media-header__line {
			display: none;
		}
		.hamburger:checked ~ .container {
			width: 100vw;
			height: 100vh;
		}

		.hamburger:checked ~ .container .header__inner {
			align-items: start;
		}
		.hamburger:checked ~ .container .header__links {
			display: flex;
			position: absolute;
			flex-direction: column;
			bottom: -32px;
			transform: translateY(100%);
			font-size: 24px;
		}
	}

	.header {
		padding-top: 32px;
		padding-bottom: 8px;
		background-color: var(--background);
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
	}
	.header__inner {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		position: relative;
	}
	.header__links {
		margin-left: auto;
		display: flex;
		align-items: flex-start;
		gap: 32px;
	}
	.header__link {
		color: var(--gray);
	}
	.header__link_active {
		font-weight: 600;
		color: var(--white);
	}
	.header__link::before {
		content: '#';
		color: var(--primary);
		font-weight: normal;
	}
	.header__link:hover {
		color: var(--white);
	}
	@media (max-width: 1024px) {
		.header {
			padding-top: 16px;
		}
		.header__links {
			display: none;
		}
	}

	.footer {
		max-width: inherit;
		width: 100%;
		border-top: 1px solid var(--gray);
		padding-top: 32px;
		margin-bottom: 16px;
		margin-top: 40px;
	}
	.footer__copyright {
		color: var(--gray);
		text-align: center;
	}
	.footer__header {
		display: flex;
		gap: 32px;
	}
	.footer__email {
		color: var(--gray);
	}
	.footer__email:hover {
		color: var(--white);
	}
	.footer__description {
		margin-top: 16px;
	}
	.footer__inner {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 32px;
		margin-bottom: 48px;
	}

	.media {
		width: 32px;
		aspect-ratio: 1;
	}
	.media__icon {
		width: 100%;
		aspect-ratio: 1;
	}
	.media__icon:hover {
		filter: brightness(0) invert(1);
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

	.logo {
		display: flex;
		gap: 8px;
	}
	.logo__img {
		aspect-ratio: 1;
		width: 16px;
	}
	.logo__name {
		font-weight: 700;
	}
</style>

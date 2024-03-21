<script>
	import { skills } from '$lib';
</script>

<sections class="skills">
	<div class="skills__header">
		<h2 class="h2">Skills</h2>
	</div>
	<div class="skills__content">
		<div class="skills__list">
			{#each skills as skill}
				<div class="skill-block">
					<div class="skill-block__name">{skill.category}</div>
					<ul class="skill-block__list">
						{#each skill.list as item}
							<li class="skill-block__skill">{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</sections>

<style>
	div,
	h2,
	ul,
	li {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	ul {
		list-style: none;
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

	.skills__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 48px;
	}

	.skills {
		width: 100%;
	}
	.skills__content {
		display: flex;
		gap: 32px;
		flex-wrap: wrap;
	}
	.skills .skill-block {
		margin-bottom: 16px;
	}
	.skills__list {
		column-gap: 16px;
		columns: 4;
	}
	@media (max-width: 768px) {
		.skills__list {
			columns: 2;
		}
	}
	@media (max-width: 500px) {
		.skills__list {
			columns: 1;
		}
	}

	.skills__list {
		flex: 1 1 0;
	}

	.skill-block {
		border: 1px solid var(--gray);
		display: inline-block;
		max-width: 300px;
		min-width: 200px;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
	}
	.skill-block__name {
		font-weight: 600;
		padding: 8px;
		border-bottom: 1px solid var(--gray);
	}
	.skill-block__list {
		padding: 8px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		justify-content: start;
		align-items: start;
		color: var(--gray);
	}
</style>

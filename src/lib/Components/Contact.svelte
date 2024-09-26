<script>
	import { email } from '$lib/images/icons';
</script>

<sections class="contacts" id="contacts">
	<h2 class="h2">Contact</h2>
	<div class="contacts__content">
		<div class="contact-info">
			<p class="contacts__description">
				I’m interested in freelance opportunities. However, if you have other request or question,
				don’t hesitate to contact me
			</p>
			<div class="contacts__media">
				<h3 class="contacts__title">Contact Info</h3>
				<div class="contacts__list">
					<a class="contact" href="mailto:Jasanpreet@jnagra.com">
						<img src={email} alt="" />
						<div class="contact__name">Jasanpreet@jnagra.com</div>
					</a>
				</div>
			</div>

		</div>
		<div class="contacts__media">
			<h3 class="contacts__title">Message me here</h3>
			<div class="contacts__list">
				<form action="">
					<div class="input">
						<label for="name">Name</label>
						<input type="text" name="name" placeholder="John Doe" class="form-input" />
					</div>
					<div class="input">
						<label for="email">Email</label>
						<input type="email" name="email" placeholder="you@example.com" class="form-input" />
					</div>
					<div class="input">
						<label for="message">Message</label>
						<textarea
							name="message"
							id="message"
							cols="30"
							rows="10"
							placeholder="Your message"
							class="form-input"
							style="resize: none;"							
						/>
					</div>
					<button class="send-message">Send</button>
				</form>
			</div>
		</div>
	</div>
</sections>

<style>
	div,
	h2,
	h3,
	p,
	form,
	label {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
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

	.contacts {
		width: 100%;
	}
	.contacts__content {
		display: flex;
		/* flex-direction: column; */
		flex-direction: row;
		justify-content: space-between;
		align-items: start;
		flex-wrap: wrap;
		gap: 32px;
		margin-top: 48px;
	}
	.contacts__title {
		font-weight: 600;
		margin-bottom: 20px;
	}

	.contacts__media {
		border: 1px solid var(--gray);
		padding: 16px;
	}
	.contacts__description {
		color: var(--gray);
		max-width: 500px;
		margin-bottom: 30px;
	}
	.contact {
		display: flex;
		gap: 8px;
		color: var(--gray);
		align-items: center;
		margin-top: 8px;
	}
	.contacts__media form {
		max-width: 600px;
	}
	.contacts__media form label {
		font-size: 13px;
		margin-bottom: 0.25rem;
	}
	input {
		font: inherit;
		height: 40px;
	}
	.contacts__media form .form-input {
		background-color: transparent;
		color: var(--gray);
		width: 100%;
		border: 1px solid var(--gray);
		margin-bottom: 20px;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 13px;
		font-family: inherit;
	}
	.send-message {
		border: 1px solid var(--gray);
		width: 100%;
		color: var(--gray);
		height: 40px;
		background-color: transparent;
		cursor: pointer;
		font-size: 15px;
		font-weight: 600;
	}
	.send-message:hover {
		color: var(--primary);
	}
</style>

<script setup></script>

<template>
	<footer class="footer">
		<article class="contact-us">
			<h2 class="contact-us__title">Contáctame</h2>
			<div class="contact-us__links">
				<a
					href="https://instagram.com/wickedness__delirium"
					class="contact-us__link"
					target="_blank"
					>Instagram</a
				>
				<a
					href="mailto:sam.alejandro.bustos@gmail.com"
					class="contact-us__link"
					target="_blank"
					>Correo</a
				>
				<a
					href="https://github.com/zero10903"
					class="contact-us__link"
					target="_blank"
					>GitHub</a
				>
			</div>
		</article>
	</footer>
</template>

<style lang="scss">
@use '../assets/sass/layout';
@use '../assets/sass/effect';
@import '../assets/sass/settings';

.footer {
	margin: 1em;
	padding: 1em;
	box-shadow: $box-shadow;
	border-radius: $box-radius;
	@include effect.glass($color-light-transparent);
	display: flex;
	justify-content: flex-start;
}
.contact-us {
	padding: 0.5em;
	&__title {
		font-size: $title-2;
		font-weight: bold;
	}
	&__links {
		padding-top: 0.5em;
	}
	&__link {
		&:not(:last-child) {
			padding-bottom: 0.5em;
		}

		transition: $transition-time all ease-in-out;
		&:hover {
			color: black;
			text-decoration: underline;
		}
	}
}
</style>

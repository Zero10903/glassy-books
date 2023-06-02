<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
	<div class="menu">
		<section class="menu__controls">
			<p class="menu__logo">Glassy Books</p>

			<button
				class="menu__btn"
				:class="{ 'menu__btn--hide': isMenuOpen === false }"
				@click="toggleMenu()"
			>
				<i class="menu__icon bx bx-x"></i>
			</button>
			<button
				class="menu__btn"
				:class="{ 'menu__btn--hide': isMenuOpen }"
				@click="toggleMenu()"
			>
				<i class="menu__icon bx bx-menu"></i>
			</button>
		</section>
		<nav class="menu__navbar" :class="{ 'menu__navbar--open': isMenuOpen }">
			<router-link to="/" class="menu__link">Inicio</router-link>
			<router-link to="/recommendations" class="menu__link"
				>Recomendaciones</router-link
			>
		</nav>
	</div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/layout';
@use '../assets/sass/effect';
@use '../assets/sass/text';
@import '../assets/sass/settings';
.menu {
	margin: 1em;
	padding: 1em;
	position: sticky;
	top: 1em;
	z-index: 100;

	box-shadow: $box-shadow;
	border-radius: $box-radius;

	@include effect.glass($color-light-transparent);
	&__controls {
		display: grid;
		grid-template-columns: repeat(2, max-content);
		justify-content: space-between;
		align-items: center;
	}
	&__logo {
		font-size: 1.4em;
		font-weight: bold;
		text-shadow: 0 0 0.4em $color-dark-transparent;
	}
	&__btn {
		@include layout.square(2em);
		grid-column: 2/3;
		grid-row: 1/2;

		transition: $transition-time transform ease-in-out;
		&--hide {
			transform: scale(0);
		}
	}
	&__icon {
		font-size: 2em;
	}
	&__navbar {
		max-height: 0em;
		padding: 0em 0em 0em;
		@include layout.flex(column, nowrap, center, center, 0.5em);
		overflow: hidden;

		transition: $transition-time all ease-in-out;
		&--open {
			max-height: 50em;
			padding: 1em 0em 0.5em;
		}
	}
	&__link {
		transition: $transition-time all ease-in-out;
		&:hover {
			color: black;
			text-decoration: underline;
		}
	}
}
</style>

<script setup></script>
<template>
	<main class="home">
		<img src="../assets/images/logo.png" alt="logo" class="home__img" />
		<section class="home__content">
			<h1 class="home__title">¡Bienvenido a Glassy Books!</h1>
			<p class="home__text">
				En este pequeño rincón de internet, podrás encontrar diversas
				recomendaciones de libros que me he leído durante este último tiempo.
				Las mismas son totalmente subjetivas, pues dependen pura y
				exclusivamente de mis gustos.
			</p>
			<p class="home__text">
				Si tienes alguna recomendación que hacer, te invito a enviarmela por
				correo
			</p>
		</section>
	</main>
</template>
<style lang="scss" scoped>
@use '../assets/sass/text';
@use '../assets/sass/layout';
@import '../assets/sass/settings';

.home {
	min-height: 80vh;
	padding: 1em;
	text-align: center;
	@include layout.flex(column, nowrap, center, center);

	&__title {
		padding-bottom: 1em;
		font-size: $title-1;
		font-weight: bold;

		@include text.gradient($color-light, $color-dark);
	}
	&__img {
		max-width: 400px;
	}
}
</style>

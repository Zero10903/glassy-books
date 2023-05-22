<script setup></script>
<template>
	<main class="home">
		<h1 class="home__title">¡Bienvenido!</h1>
		<p class="home__text">
			En este pequeño rincón de internet, podrás encontrar diversas
			recomendaciones de libros que me he leído durante este último tiempo. Las
			mismas son totalmente subjetivas, pues dependen pura y exclusivamente de
			mis gustos.
		</p>
		<p class="home__text">
			Si tienes alguna recomendación que hacer, te invito a enviarmela por
			correo
		</p>
	</main>
</template>
<style lang="scss" scoped>
@use '../assets/sass/layout';
@import '../assets/sass/settings';

.home {
	height: 80vh;
	padding: 1em;
	text-align: center;
	@include layout.flex(column, nowrap, center, center);

	&__title {
		padding-bottom: 1em;
		font-size: $title-1;
	}
}
</style>

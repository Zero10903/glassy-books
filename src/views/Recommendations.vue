<script setup>
import { bookData } from '../data/books';
</script>
<template>
	<section class="recommendations">
		<h2 class="recommendations__title">Recomendaciones de libros</h2>
		<article class="book" v-for="(book, index) in bookData" :key="index">
			<img :src="book.url" alt="portada del libro" class="book__image" />
			<div class="book__content">
				<h3 class="book__title">{{ book.title }}</h3>
				<p class="bood__text">
					{{ book.description }}
				</p>
			</div>
		</article>
	</section>
</template>
<style lang="scss">
@use '../assets/sass/layout';
@import '../assets/sass/settings';

.recommendations {
	padding: 0.5em;
	@include layout.flex(column, nowrap, center, center, 1em);
	&__title {
		text-align: center;
		font-weight: bold;
		font-size: $title-2;
	}
}
.book {
	padding: 1em;

	text-align: center;
	border-radius: $box-radius;
	@include layout.flex-center(column);

	&__image {
		border-radius: $box-radius;
	}
	&__title {
		margin: 1em 0em;
		font-weight: bold;
		font-size: $title-3;
	}
}
</style>

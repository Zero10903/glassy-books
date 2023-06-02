<script setup>
import { bookData } from '../data/books';
</script>

<template>
	<section class="recommendations">
		<h2 class="recommendations__title">Recomendaciones de libros</h2>
		<div class="books">
			<article class="book" v-for="(book, index) in bookData" :key="index">
				<div class="book__overlay"></div>
				<img
					:src="book.url"
					alt="portada del libro"
					draggable="false"
					class="book__image"
				/>
				<div class="book__content">
					<h3 class="book__title">{{ book.title }}</h3>
					<div class="book__separator"></div>
					<p class="book__text">
						{{ book.description }}
					</p>
				</div>
			</article>
		</div>
	</section>
</template>

<style lang="scss">
@use '../assets/sass/layout';
@use '../assets/sass/effect';
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
.books {
	@include layout.grid(1);
	gap: 1em;
}
.book {
	margin: 0.5em;
	padding: 1em;
	position: relative;

	text-align: center;

	box-shadow: $box-shadow;
	border-radius: $box-radius;

	@include layout.flex-center(column);

	&__overlay {
		position: absolute;
		inset: 0;
		z-index: -1;
		@include effect.glass($color-light-transparent);
	}
	&__image {
		border-radius: $box-radius;
	}
	&__content {
		@include layout.flex-center(column);
	}
	&__title {
		margin: 1em 0em;
		font-weight: bold;
		font-size: $title-3;
	}
	&__separator {
		width: 90%;
		height: 2px;
		margin-bottom: 1em;
		background: radial-gradient($color-dark, $color-light, $color-light);
	}
}
@media (min-width: 768px) {
	.books {
		@include layout.grid(2);
	}
	.book {
		&__text {
			max-height: 200px;
			padding-inline: 0.5em;
			overflow: auto;
			scrollbar-width: thin;

			&::-webkit-scrollbar {
				width: 3px;
			}
			&::-webkit-scrollbar-thumb {
				background-color: $color-dark;
				border-radius: 1em;
			}
		}
	}
}
@media (min-width: 1024px) {
	.books {
		@include layout.grid(4);
	}
}
</style>

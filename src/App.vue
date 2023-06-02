<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
	<div>
		<Header />
		<router-view> </router-view>
		<Footer />
	</div>
</template>

<style lang="scss">
@use './assets/sass/utilities';
@import './assets/sass/reset';
body {
	color: white;
	background: url('./assets/images/background.svg');
	@include utilities.bg-fit;
}
#app {
	padding: 0.5em 0em;
}
</style>

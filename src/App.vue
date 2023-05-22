<script setup>
import Header from './components/Header.vue';
</script>
<template>
	<div>
		<Header />
		<router-view> </router-view>
	</div>
</template>
<style lang="scss">
@import './assets/sass/reset';
</style>

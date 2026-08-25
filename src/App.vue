<script setup lang="ts">
const savedTheme = localStorage.getItem('theme')

if (savedTheme === 'dark' || savedTheme === 'light') {
	document
		.getElementById('tiny-theme')
		?.setAttribute('href', `/tiny/${savedTheme}.css`)
}

const setTheme = (theme: 'light' | 'dark') => {
	document
		.getElementById('tiny-theme')
		?.setAttribute('href', `/tiny/${theme}.css`)

	localStorage.setItem('theme', theme)
}
</script>

<template>
	<div class="flex flex-col items-center gap-y-4">
		<h1>hello world</h1>
		<button @click="setTheme('light')">light</button>
		<button @click="setTheme('dark')">dark</button>
	</div>
</template>

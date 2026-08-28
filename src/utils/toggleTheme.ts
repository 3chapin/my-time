export const toggleTheme = () => {
	const currentTheme =
		localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
	const newTheme = currentTheme === 'light' ? 'dark' : 'light'
	const link = document.getElementById('tiny-theme')
	if (link) {
		link.setAttribute('href', `/tiny/${newTheme}.css`)
	}

	try {
		localStorage.setItem('theme', newTheme)
	} catch {
		// ignore storage failures
	}
}

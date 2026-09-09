document.addEventListener('DOMContentLoaded', () => {
	const currentPage = document.body.dataset.page;
	const pageNames = { home: 'Home', televisions: 'Televisions', about: 'About Us' };

	document.querySelectorAll('.nav-link').forEach((link) => {
		if (link.dataset.page === currentPage) link.setAttribute('aria-current', 'page');
	});

	const feedback = document.querySelector('.js-feedback');
	if (feedback) feedback.textContent = `You are viewing ${pageNames[currentPage]}.`;
});

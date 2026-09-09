document.addEventListener('DOMContentLoaded', () => {
	const currentPage = document.body.dataset.page;
	const pageNames = { home: 'Home', televisions: 'Televisions', about: 'About Us' };

	document.querySelectorAll('.nav-link').forEach((link) => {
		const isCurrent = link.dataset.page === currentPage;
		link.setAttribute('aria-current', isCurrent ? 'page' : 'false');
		link.addEventListener('mouseenter', () => {
			const feedback = document.querySelector('.js-feedback');
			if (feedback) feedback.textContent = `Open ${link.textContent.trim()} page`;
		});
		link.addEventListener('mouseleave', () => {
			const feedback = document.querySelector('.js-feedback');
			if (feedback) feedback.textContent = `You are viewing ${pageNames[currentPage]}.`;
		});
	});

	const feedback = document.querySelector('.js-feedback');
	if (feedback) feedback.textContent = `You are viewing ${pageNames[currentPage]}.`;
});

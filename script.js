const currentPage = document.body.dataset.page;
const currentLink = document.querySelector(`[data-page="${currentPage}"]`);

if (currentLink) {
  currentLink.setAttribute("aria-current", "page");
}

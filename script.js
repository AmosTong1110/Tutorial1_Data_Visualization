// Grab every nav link (including the logo, which also acts as "Home")
const navLinks = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");

// Show one page, hide the rest, and mark the matching nav link as current
function showPage(pageId) {
  pages.forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });

  navLinks.forEach((link) => {
    if (link.dataset.page === pageId) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  // Keep the URL hash in sync so refresh/back-button still works
  window.location.hash = pageId;
}

// Intercept clicks on nav links so JavaScript controls the page swap
// instead of the browser doing a normal navigation.
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(link.dataset.page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// On first load, show the page in the URL hash, or default to "home"
const startPage = window.location.hash.replace("#", "") || "home";
showPage(document.getElementById(startPage) ? startPage : "home");

function swapPage(event) {
  event.preventDefault();
  window.location.href = event.currentTarget.href;
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", swapPage);
});
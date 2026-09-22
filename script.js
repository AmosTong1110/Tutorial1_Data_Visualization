
function swapPage(event) {
  // Stop the browser's default link action so JavaScript controls the navigation.
  event.preventDefault();
  // Send the browser to the address stored in the link that was clicked.
  window.location.href = event.currentTarget.href;
}

  // Find every navigation link on the current page.
document.querySelectorAll(".nav-link").forEach((link) => {
  // Connect the swapPage function to each link's click event.
  link.addEventListener("click", swapPage);
});
const body = document.body;
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-book-nav]");

function setMenu(open) {
  body.classList.toggle("nav-open", open);
  if (menuButton) menuButton.setAttribute("aria-expanded", String(open));
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => setMenu(!body.classList.contains("nav-open")));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
}

const normalizedPath = window.location.pathname.replace(/index\.html$/, "").replace(/\/$/, "") || "/";
document.querySelectorAll("[data-nav-link]").forEach((link) => {
  const linkPath = new URL(link.href, window.location.href).pathname.replace(/index\.html$/, "").replace(/\/$/, "") || "/";
  if (linkPath === normalizedPath) link.setAttribute("aria-current", "page");
});

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});


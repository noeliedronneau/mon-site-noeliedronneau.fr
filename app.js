// Active le lien courant dans la nav en fonction de l’URL
(function () {
  const here = location.pathname.replace(/\/+$/, "");
  document.querySelectorAll(".site-nav a").forEach(a => {
    const href = new URL(a.getAttribute("href"), location.origin).pathname.replace(/\/+$/, "");
    if (href === here) a.classList.add("active");
  });
})();

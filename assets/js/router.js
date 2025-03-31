const main = document.getElementById("main");
const cssElement = document.getElementById("page-style");

function loadPage(page) {
  fetch(`pages/${page}.php`)
    .then((res) => {
      if (!res.ok) throw new Error("Page not found");
      return res.text();
    })
    .then((html) => {
      main.innerHTML = html;
      loadCSS(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    })
    .catch(() => {
      main.innerHTML = "<h2 style='padding: 2rem;'>Page not found.</h2>";
    });
}

function loadCSS(page) {
  if (cssElement) {
    cssElement.setAttribute("href", `assets/css/${page}.css`);
  }
}

// ✅ DELEGATED CLICK LISTENER (fixes buttons inside dynamic content)
document.addEventListener("click", function (e) {
  const target = e.target.closest("[data-page]");
  if (target) {
    e.preventDefault();
    const page = target.getAttribute("data-page");
    loadPage(page);
  }
});

// ✅ LOAD DEFAULT PAGE
window.addEventListener("DOMContentLoaded", () => {
  loadPage("home");
});

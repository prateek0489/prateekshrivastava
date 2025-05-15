document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  const stored = localStorage.getItem("theme");
  if (stored) {
    document.documentElement.setAttribute("data-theme", stored);
  }
});
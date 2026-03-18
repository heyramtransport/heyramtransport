document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // 🔹 HAMBURGER MENU
  // =========================
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // =========================
  // 🔹 HEADER SCROLL EFFECT
  // =========================
  const header = document.querySelector("header");

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  } // ✅ CLOSED PROPERLY

  // =========================
  // 🔹 DARK MODE TOGGLE
  // =========================
  const toggle = document.getElementById("themeToggle");

  function updateThemeIcon() {
    if (document.body.classList.contains("dark-mode")) {
      toggle.textContent = "☀️";
    } else {
      toggle.textContent = "🌙";
    }
  }

  if (toggle) {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }

    updateThemeIcon();

    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }

      updateThemeIcon();
    });
  }

});
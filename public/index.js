// opens the hamburger menu
document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const menu = document.getElementById("hamburger-nav-links");
    menu.classList.toggle("open");
  });

document.getElementById("toggle-dark-light").addEventListener("click", () => {
  // Check local storage and apply the theme on page load
  document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
});

document.getElementById("toggle-dark-light").addEventListener("click", () => {
  // Check local storage and apply the theme on page load
  document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
});

document
  .getElementById("toggle-dark-light")
  .addEventListener("click", function () {
    // Toggle the dark mode class on the body
    document.body.classList.toggle("dark-mode");

    const logoImages = document.getElementById("website-logo");
    const linkedin = document.getElementById("linkedinIcon");
    const github = document.getElementById("githubIcon");
    const githubproject = document.querySelectorAll("#projectGithubIcon");
    const hamburger = document.getElementById("hamburger-icon-img");

    const darklightimg = document.getElementById("toggle-dark-light-img");

    if (document.body.classList.contains("dark-mode")) {
      logoImages.src = "assets/header/DudleyLogo-dark-mode.png";
      linkedin.src = "assets/profile/linkedin-dark-mode.png";
      github.src = "assets/profile/github-dark-mode.png";
      hamburger.src = "./assets/header/Hamburger-icon-dark-mode.png";
      darklightimg.src = "assets/header/sun.png";
      githubproject.forEach((githubLogo) => {
        githubLogo.src = "./assets/projects/github-dark-mode.png";
      });
    } else {
      logoImages.src = "assets/header/DudleyLogo-light-mode.png";
      linkedin.src = "assets/profile/linkedin-light-mode.png";
      github.src = "assets/profile/github-light-mode.png";
      hamburger.src = "assets/header/Hamburger-icon-light-mode.png";
      darklightimg.src = "assets/header/moon.png";
      githubproject.forEach((githubLogo) => {
        githubLogo.src = "./assets/projects/github-light-mode.png";
      });
    }
  });

window.onload = function () {
  // Reset the form fields when the page loads
  document.getElementById("contact-form").reset();
});

function toggleFlip(card) {
  card.classList.toggle("flipped");
}

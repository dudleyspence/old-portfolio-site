// opens the hamburger menu
document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const menu = document.getElementById("hamburger-nav-links");
    menu.classList.toggle("open");
  });

// closes the menu when a nav link is pressed
function menuClick() {
  const menu = document.getElementById("hamburger-nav-links");
  menu.classList.remove("open");
}

//changes the theme of the images for lots of the components
document
  .getElementById("toggle-dark-light")
  .addEventListener("click", function () {
    // Toggle the dark mode class on the body
    document.body.classList.toggle("dark-mode");

    const logoImages = document.querySelectorAll(".website-logo");
    const linkedin = document.getElementById("linkedinIcon");
    const github = document.getElementById("githubIcon");
    const githubproject = document.querySelectorAll("#projectGithubIcon");
    const hamburger = document.getElementById("hamburger-icon-img");

    const darklightimg = document.getElementById("toggle-dark-light-img");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      logoImages[0].src = "assets/header/DudleyLogo-dark-mode.png";
      // logoImages[1].src = "assets/header/DudleyLogo-dark-mode.png";
      linkedin.src = "assets/profile/linkedin-dark-mode.png";
      github.src = "assets/profile/github-dark-mode.png";
      hamburger.src = "./assets/header/Hamburger-icon-dark-mode.png";
      darklightimg.src = "assets/header/sun.png";
      githubproject.forEach((githubLogo) => {
        githubLogo.src = "./assets/projects/github-dark-mode.png";
      });
    } else {
      localStorage.setItem("theme", "light");
      logoImages[0].src = "assets/header/DudleyLogo-light-mode.png";
      // logoImages[1].src = "assets/header/DudleyLogo-light-mode.png";
      linkedin.src = "assets/profile/linkedin-light-mode.png";
      github.src = "assets/profile/github-light-mode.png";
      hamburger.src = "assets/header/Hamburger-icon-light-mode.png";
      darklightimg.src = "assets/header/moon.png";
      githubproject.forEach((githubLogo) => {
        githubLogo.src = "./assets/projects/github-light-mode.png";
      });
    }
  });

//checks theme on page load and resets the contact form
document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  document.getElementById("contact-form").reset();
});

function toggleFlip(card) {
  card.classList.toggle("flipped");
}

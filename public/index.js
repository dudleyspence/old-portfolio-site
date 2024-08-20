function menuClick() {
  const menu = document.getElementById("hamburger-nav-links");
  menu.classList.remove("open");
}

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

document
  .getElementById("toggle-dark-light")
  .addEventListener("click", function () {
    // Toggle the dark mode class on the body
    document.body.classList.toggle("dark-mode");

    const logoImages = document.getElementById("website-logo");
    const linkedin = document.getElementById("linkedinIcon");
    const linkedinFooter = document.getElementById("linkedinIconFooter");
    const github = document.getElementById("githubIcon");
    const githubFooter = document.getElementById("githubIconFooter");
    const instagram = document.getElementById("instagramIcon");
    const email = document.getElementById("emailIcon");
    const githubproject = document.querySelectorAll("#projectGithubIcon");
    const hamburger = document.getElementById("hamburger-icon-img");

    const darklightimg = document.getElementById("toggle-dark-light-img");

    if (document.body.classList.contains("dark-mode")) {
      logoImages.src = "assets/header/DudleyLogo-dark-mode.png";
      linkedin.src = "assets/profile/linkedin-dark-mode.png";
      linkedinFooter.src = "assets/profile/linkedin-dark-mode.png";
      github.src = "assets/profile/github-dark-mode.png";
      githubFooter.src = "assets/profile/github-dark-mode.png";
      instagram.src = "assets/footer/instagram-dark-mode.png";
      email.src = "assets/footer/email-dark-mode.png";
      hamburger.src = "./assets/header/Hamburger-icon-dark-mode.png";
      darklightimg.src = "assets/header/sun.png";
      githubproject.forEach((githubLogo) => {
        githubLogo.src = "./assets/projects/github-dark-mode.png";
      });
    } else {
      logoImages.src = "assets/header/DudleyLogo-light-mode.png";
      linkedin.src = "assets/profile/linkedin-light-mode.png";
      linkedinFooter.src = "assets/profile/linkedin-light-mode.png";
      github.src = "assets/profile/github-light-mode.png";
      githubFooter.src = "assets/profile/github-light-mode.png";
      instagram.src = "assets/footer/instagram-light-mode.png";
      email.src = "assets/footer/email-light-mode.png";
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
};

function toggleFlip(card) {
  card.classList.toggle("flipped");
}

function displayIconName(id) {
  const selectedIcon = document.getElementById(id);

  // Check selected icon name is already visible
  if (selectedIcon.classList.contains("selectedIcon")) {
    // If visible, hide it by removing the 'selectedIcon' class
    selectedIcon.classList.remove("selectedIcon");
  } else {
    // If not visible, hide all other icon names
    const iconNames = document.querySelectorAll(".icon-name");
    iconNames.forEach((icon) => {
      icon.classList.remove("selectedIcon");
    });

    // show selected icon name
    selectedIcon.classList.add("selectedIcon");
  }
}

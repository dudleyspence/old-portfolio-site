document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const menu = document.getElementById("hamburger-nav-links");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    menu.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
    console.log("open");
  });

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
      logoImages[0].src = "assets/header/DudleyLogo-dark-mode.png";
      // logoImages[1].src = "assets/header/DudleyLogo-dark-mode.png";
      linkedin.src = "assets/profile/linkedin-dark-mode.png";
      github.src = "assets/profile/github-dark-mode.png";
      hamburger.src = "assets/header/hamburger-icon-dark-mode.svg";
      darklightimg.src = "assets/header/sun.png";
      githubproject.forEach((githubLogo) => {
        githubLogo.src = "./assets/projects/github-dark-mode.png";
      });
    } else {
      logoImages[0].src = "assets/header/DudleyLogo-light-mode.png";
      // logoImages[1].src = "assets/header/DudleyLogo-light-mode.png";
      linkedin.src = "assets/profile/linkedin-light-mode.png";
      github.src = "assets/profile/github-light-mode.png";
      hamburger.src = "assets/header/hamburger-icon-light-mode.svg";
      darklightimg.src = "assets/header/moon.png";
      githubproject.forEach((githubLogo) => {
        githubLogo.src = "./assets/projects/github-light-mode.png";
      });
    }
  });

// CAROUSEL

// document.addEventListener("DOMContentLoaded", () => {
//   const cardList = document.querySelector(".card-list");

//   const images = [
//     { filename: "axios-plain.svg", alt: "Axios" },
//     { filename: "css3-original.svg", alt: "CSS" },
//     { filename: "express-original.svg", alt: "Express" },
//     { filename: "github-original.svg", alt: "GitHub" },
//     { filename: "html5-original.svg", alt: "HTML5" },
//     { filename: "javascript-original.svg", alt: "JavaScript" },
//     { filename: "jest-plain.svg", alt: "Jest" },
//     { filename: "mysql-original-wordmark.svg", alt: "MySQL" },
//     { filename: "nodejs-original.svg", alt: "Node.js" },
//     { filename: "npm-original-wordmark.svg", alt: "NPM" },
//     { filename: "numpy-original.svg", alt: "NumPy" },
//     { filename: "postgresql-original.svg", alt: "PostgreSQL" },
//     { filename: "python-original.svg", alt: "Python" },
//     { filename: "react-original.svg", alt: "React" },
//     { filename: "tensorflow-original.svg", alt: "TensorFlow" },
//     { filename: "tensorflow.png", alt: "TensorFlow" },
//     { filename: "vitejs-original.svg", alt: "ViteJS" },
//   ];

//   images.forEach((image) => {
//     const skillCard = document.createElement("div");
//     skillCard.className = "skill-card swiper-slide";

//     const imgElement = document.createElement("img");
//     imgElement.className = "skill-image";
//     imgElement.src = `./assets/dev-tools-icons/${image.filename}`;
//     imgElement.alt = `${image.alt} logo`;

//     const titleElement = document.createElement("h2");
//     titleElement.className = "card-name";
//     titleElement.textContent = image.alt;

//     skillCard.appendChild(imgElement);
//     skillCard.appendChild(titleElement);

//     cardList.appendChild(skillCard);
//   });
// });

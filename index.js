document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const menu = document.getElementById("hamburger-nav-links");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    menu.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
    console.log("open");
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

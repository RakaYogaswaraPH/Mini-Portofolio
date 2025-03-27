document.getElementById("year").textContent = new Date().getFullYear();

// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");
const design = document.getElementById("design");
const designBtn = document.getElementById("design-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "flex";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  portfolio.style.display = "none";
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
});

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const githubLogo = document.querySelector('img[alt="github logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const whatsappLogo = document.querySelector('img[alt="whatsapp logo"]');

  const allLogos = [themeIcon, githubLogo, linkedinLogo, whatsappLogo];
  let isTransitioning = false;

  const lightLogos = {
    github: "assets/icon/github_light.png",
    linkedin: "assets/icon/linkedin_light.png",
    email: "assets/icon/whatsapp_light.png",
    theme: "assets/icon/theme_light.png",
  };

  const darkLogos = {
    github: "assets/icon/github_dark.png",
    linkedin: "assets/icon/linkedin_dark.png",
    email: "assets/icon/whatsapp_dark.png",
    theme: "assets/icon/theme_dark.png",
  };

  function setTheme(isDark) {
    if (isTransitioning) return;
    isTransitioning = true;

    // Start fade out transition
    allLogos.forEach(logo => {
      logo.style.opacity = "0";
      logo.style.transform = "scale(0.9)";
    });

    // After fade out completes, change sources and fade back in
    setTimeout(() => {
      githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
      linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
      whatsappLogo.src = isDark ? darkLogos.email : lightLogos.email;
      themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;

      // Fade back in
      allLogos.forEach(logo => {
        logo.style.opacity = "1";
        logo.style.transform = "scale(1)";
      });

      // Reset transition flag after animation completes
      setTimeout(() => {
        isTransitioning = false;
      }, 300);
    }, 250); // Half of the transition time
  }

  toggleThemeButton.addEventListener("click", () => {
    // Toggle class first so CSS transitions start immediately
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);

    // Then handle the image transitions
    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);

    // Set initial logo states without animation
    githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
    linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
    whatsappLogo.src = isDark ? darkLogos.email : lightLogos.email;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;

    // Ensure all logos are visible
    allLogos.forEach(logo => {
      logo.style.opacity = "1";
      logo.style.transform = "scale(1)";
    });
  };

  // Load saved theme from local storage or default to light theme
  loadTheme();
});

const jobTitles = ["Junior Frontend Developer", "Fiber Optic Technician", "IT Support", "UI/UX Designer"];
let currentIndex = 0;
const jobTitle = document.querySelector(".hero-info h2");

function changeJobTitle() {
  jobTitle.classList.add("animate");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % jobTitles.length;
    const nextIndex = (currentIndex + 1) % jobTitles.length;

    jobTitle.textContent = jobTitles[currentIndex];
    jobTitle.setAttribute("data-alt", jobTitles[nextIndex]);

    setTimeout(() => {
      jobTitle.classList.remove("animate");
    }, 50);
  }, 500);
}

jobTitle.textContent = jobTitles[0];
jobTitle.setAttribute("data-alt", jobTitles[1]);

setInterval(changeJobTitle, 5000);
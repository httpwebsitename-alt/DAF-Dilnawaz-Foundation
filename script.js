
document.addEventListener("DOMContentLoaded", () => {

  /* ======================================
     1. FIRST VISIT INTRO ANIMATION
  ====================================== */

  const intro = document.getElementById("introScreen");
  const website = document.getElementById("mainWebsite");
  const skipButton = document.getElementById("skipIntro");

  const INTRO_KEY = "dafIntroCompleted";

  function createBubbles() {
    const container = document.getElementById("bubbleContainer");

    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 35; i++) {
      const bubble = document.createElement("span");

      bubble.className = "bubble";

      bubble.style.setProperty("--left", Math.random() * 100 + "%");
      bubble.style.setProperty("--size", (8 + Math.random() * 35) + "px");
      bubble.style.setProperty("--duration", (7 + Math.random() * 9) + "s");
      bubble.style.setProperty("--delay", (-Math.random() * 12) + "s");
      bubble.style.setProperty("--drift", (Math.random() * 150 - 75) + "px");

      container.appendChild(bubble);
    }
  }

  function createFloatingLetters() {
    const container = document.getElementById("floatingLetters");

    if (!container) return;

    container.innerHTML = "";

    const letters = ["D", "A", "F"];

    letters.forEach((letter, index) => {
      const element = document.createElement("span");

      element.className = "floating-letter";
      element.textContent = letter;

      const positions = [
        ["-250px", "-180px"],
        ["0px", "250px"],
        ["250px", "-180px"]
      ];

      element.style.setProperty("--start-x", positions[index][0]);
      element.style.setProperty("--start-y", positions[index][1]);
      element.style.animationDelay = (index * 0.35) + "s";

      container.appendChild(element);
    });
  }

  function showWebsite() {
    if (!intro || !website) return;

    intro.classList.add("hide");

    website.style.display = "block";

    requestAnimationFrame(() => {
      website.classList.add("visible");
    });

    localStorage.setItem(INTRO_KEY, "true");

    setTimeout(() => {
      intro.style.display = "none";
    }, 1100);
  }

  function initializeIntro() {
    if (!intro || !website) return;

    const alreadyVisited = localStorage.getItem(INTRO_KEY);

    if (alreadyVisited) {
      intro.style.display = "none";
      website.style.display = "block";
      website.classList.add("visible");
      return;
    }

    createBubbles();
    createFloatingLetters();

    setTimeout(showWebsite, 6500);
  }

  if (skipButton) {
    skipButton.addEventListener("click", showWebsite);
  }

  initializeIntro();


  /* ======================================
     2. MOBILE NAVIGATION
  ====================================== */

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.querySelector(".main-nav");

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {
      navigation.classList.toggle("active");

      const isOpen = navigation.classList.contains("active");

      menuToggle.textContent = isOpen ? "✕" : "☰";
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

  }


  /* ======================================
     3. SIX THEME SYSTEM
  ====================================== */

  const themes = {
    margalla: {
      primary: "#173f35",
      primaryDark: "#0d2c25",
      secondary: "#c5a36b",
      background: "#f8f7f2",
      surface: "#ffffff",
      text: "#202b27",
      muted: "#758078"
    },

    blue: {
      primary: "#173d65",
      primaryDark: "#102b49",
      secondary: "#77a8cf",
      background: "#f3f7fb",
      surface: "#ffffff",
      text: "#243448",
      muted: "#718094"
    },

    ivory: {
      primary: "#544331",
      primaryDark: "#332719",
      secondary: "#b18b55",
      background: "#faf6ed",
      surface: "#ffffff",
      text: "#352f27",
      muted: "#877d6e"
    },

    sage: {
      primary: "#48634f",
      primaryDark: "#293d30",
      secondary: "#c1a77c",
      background: "#f2f5ed",
      surface: "#ffffff",
      text: "#2d3930",
      muted: "#7b887b"
    },

    indigo: {
      primary: "#38345e",
      primaryDark: "#211e3e",
      secondary: "#b6a3df",
      background: "#f4f2fa",
      surface: "#ffffff",
      text: "#302d42",
      muted: "#7c7890"
    },

    graphite: {
      primary: "#343c40",
      primaryDark: "#1c2428",
      secondary: "#b9a47c",
      background: "#f2f3f2",
      surface: "#ffffff",
      text: "#242c30",
      muted: "#788186"
    }
  };

  function applyTheme(themeName) {
    const selected = themes[themeName];

    if (!selected) return;

    const root = document.documentElement;

    root.style.setProperty("--primary", selected.primary);
    root.style.setProperty("--primary-dark", selected.primaryDark);
    root.style.setProperty("--secondary", selected.secondary);
    root.style.setProperty("--background", selected.background);
    root.style.setProperty("--surface", selected.surface);
    root.style.setProperty("--text", selected.text);
    root.style.setProperty("--muted", selected.muted);

    localStorage.setItem("dafTheme", themeName);
  }

  const savedTheme = localStorage.getItem("dafTheme") || "margalla";

  applyTheme(savedTheme);


  /* ======================================
     4. SCROLL REVEAL ANIMATIONS
  ====================================== */

  const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .project-card, .impact-card, .gallery-item, .contact-card, .donate-content"
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, obs) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }

      });

    }, {
      threshold: 0.12
    });

    revealElements.forEach(element => observer.observe(element));

  } else {
    revealElements.forEach(element => element.classList.add("active"));
  }


  /* ======================================
     5. IMPACT COUNTERS
  ====================================== */

  function animateCounter(element) {
    if (element.dataset.animated === "true") return;

    element.dataset.animated = "true";

    const target = Number(element.dataset.count);

    if (!Number.isFinite(target)) return;

    const duration = 1800;
    const startTime = performance.now();

    function updateCounter(currentTime) {

      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      element.textContent = Math.floor(target * easedProgress).toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString();
      }

    }

    requestAnimationFrame(updateCounter);
  }

  const counterElements = document.querySelectorAll("[data-count]");

  if ("IntersectionObserver" in window) {

    const counterObserver = new IntersectionObserver((entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }

      });

    }, {
      threshold: 0.5
    });

    counterElements.forEach(counter => counterObserver.observe(counter));

  } else {
    counterElements.forEach(animateCounter);
  }


  /* ======================================
     6. HERO SLIDER ENGINE
     Ready for multiple slides
  ====================================== */

  const slides = document.querySelectorAll(".slide");
  const nextButton = document.getElementById("nextSlide");
  const previousButton = document.getElementById("previousSlide");

  let currentSlide = 0;
  let sliderTimer;

  function showSlide(index) {

    if (!slides.length) return;

    slides.forEach(slide => {
      slide.classList.remove("active");
      slide.setAttribute("aria-hidden", "true");
    });

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    slides[currentSlide].setAttribute("aria-hidden", "false");
  }

  function startSlider() {
    if (slides.length < 2) return;

    clearInterval(sliderTimer);

    sliderTimer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }

  if (slides.length) {
    showSlide(0);
    startSlider();
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      showSlide(currentSlide + 1);
      startSlider();
    });
  }

  if (previousButton) {
    previousButton.addEventListener("click", () => {
      showSlide(currentSlide - 1);
      startSlider();
    });
  }


  /* ======================================
     7. AUTOMATIC CURRENT YEAR
  ====================================== */

  document.querySelectorAll(".current-year").forEach(element => {
    element.textContent = new Date().getFullYear();
  });


  /* ======================================
     8. ACTIVE NAVIGATION HIGHLIGHT
  ====================================== */

  const navLinks = document.querySelectorAll(".main-nav a");

  const sections = document.querySelectorAll("main section[id]");

  if ("IntersectionObserver" in window && sections.length) {

    const sectionObserver = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navLinks.forEach(link => {
            link.classList.toggle(
              "nav-active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });

        }

      });

    }, {
      rootMargin: "-30% 0px -60% 0px"
    });

    sections.forEach(section => sectionObserver.observe(section));

  }


  console.log("DAF Website Successfully Initialized");

});

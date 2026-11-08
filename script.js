
/* =====================================================
   DILNAWAZ AHMED FOUNDATION
   MAIN JAVASCRIPT
   File: script.js
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ================================================
       1. INTRO SCREEN ELEMENTS
    ================================================= */

    const intro = document.getElementById("introScreen");
    const website = document.getElementById("mainWebsite");
    const skipButton = document.getElementById("skipIntro");

    const INTRO_DURATION = 7000;

    const alreadyVisited =
        localStorage.getItem("dafIntroCompleted") === "true";

    let introTimer;


    /* ================================================
       2. CREATE FLOATING WATER BUBBLES
    ================================================= */

    function createBubbles() {

        const container =
            document.getElementById("bubbleContainer") ||
            document.querySelector(".bubble-container") ||
            document.querySelector(".bubbles");

        if (!container) return;

        container.innerHTML = "";

        for (let i = 0; i < 25; i++) {

            const bubble = document.createElement("div");

            bubble.classList.add("bubble");

            const size = Math.random() * 65 + 15;
            const left = Math.random() * 100;
            const duration = Math.random() * 12 + 8;
            const delay = Math.random() * 10;

            bubble.style.setProperty("--size", size + "px");
            bubble.style.setProperty("--left", left + "%");
            bubble.style.setProperty("--duration", duration + "s");
            bubble.style.setProperty("--delay", delay + "s");

            container.appendChild(bubble);

        }

    }


    /* ================================================
       3. FLOATING ALPHABETS
    ================================================= */

    function createFloatingLetters() {

        const container =
            document.getElementById("floatingLetters");

        if (!container) return;

        container.innerHTML = "";

        const letters = ["D", "I", "L", "N", "A", "W", "A", "Z"];

        letters.forEach(function (letter, index) {

            const element = document.createElement("span");

            element.textContent = letter;

            element.classList.add("floating-letter");

            const positions = [
                { left: "12%", top: "20%" },
                { left: "28%", top: "70%" },
                { left: "40%", top: "12%" },
                { right: "15%", top: "25%" },
                { right: "28%", bottom: "20%" },
                { right: "42%", top: "75%" },
                { left: "8%", bottom: "25%" },
                { right: "8%", top: "65%" }
            ];

            Object.assign(element.style, positions[index]);

            const directions = [
                ["-250px", "-180px"],
                ["250px", "150px"],
                ["-150px", "220px"],
                ["220px", "-200px"],
                ["-220px", "180px"],
                ["180px", "200px"],
                ["-200px", "-150px"],
                ["200px", "-150px"]
            ];

            element.style.setProperty(
                "--start-x",
                directions[index][0]
            );

            element.style.setProperty(
                "--start-y",
                directions[index][1]
            );

            element.style.animationDelay = (index * 0.22) + "s";

            container.appendChild(element);

        });

    }


    /* ================================================
       4. SHOW MAIN WEBSITE
    ================================================= */

    function showWebsite() {

        clearTimeout(introTimer);

        if (intro) {

            intro.classList.add("hide");

            setTimeout(function () {

                intro.style.display = "none";

            }, 1000);

        }

        if (website) {

            website.style.display = "block";

            requestAnimationFrame(function () {

                website.classList.add("visible");

            });

        }

        document.body.classList.remove("intro-active");

        localStorage.setItem("dafIntroCompleted", "true");

        initializeScrollAnimations();

    }


    /* ================================================
       5. INTRO INITIALIZATION
    ================================================= */

    function initializeIntro() {

        if (!intro || !website) return;

        if (alreadyVisited) {

            intro.style.display = "none";

            website.style.display = "block";
            website.classList.add("visible");

            document.body.classList.remove("intro-active");

            initializeScrollAnimations();

            return;

        }

        createBubbles();
        createFloatingLetters();

        website.style.display = "none";

        introTimer = setTimeout(function () {

            showWebsite();

        }, INTRO_DURATION);

    }


    /* ================================================
       6. SKIP INTRO BUTTON
    ================================================= */

    if (skipButton) {

        skipButton.addEventListener("click", function () {

            showWebsite();

        });

    }


    /* ================================================
       7. MOBILE NAVIGATION
    ================================================= */

    const menuToggle = document.getElementById("menuToggle");

    const nav = document.querySelector(".main-nav") ||
                document.querySelector(".nav-links");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("active");
            nav.classList.toggle("open");

        });

    }


    /* Close menu after clicking a navigation link */

    document.querySelectorAll(".main-nav a, .nav-links a")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                if (nav) {

                    nav.classList.remove("active");
                    nav.classList.remove("open");

                }

            });

        });


    /* ================================================
       8. THEME SWITCHER
    ================================================= */

    const themeButtons = document.querySelectorAll(".theme-option");

    const savedTheme = localStorage.getItem("dafTheme") || "margalla";

    document.documentElement.setAttribute("data-theme", savedTheme);

    function activateTheme(theme) {

        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem("dafTheme", theme);

        themeButtons.forEach(function (button) {

            button.classList.toggle(
                "active",
                button.dataset.theme === theme
            );

        });

    }

    themeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const theme = button.dataset.theme;

            if (theme) {

                activateTheme(theme);

            }

        });

    });

    activateTheme(savedTheme);


    /* ================================================
       9. SCROLL REVEAL ANIMATIONS
    ================================================= */

    function initializeScrollAnimations() {

        const revealElements = document.querySelectorAll(".reveal");

        if (!("IntersectionObserver" in window)) {

            revealElements.forEach(function (element) {

                element.classList.add("active");

            });

            return;

        }

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    }


    /* ================================================
       10. ANIMATED COUNTERS
    ================================================= */

    function animateCounters() {

        const counters = document.querySelectorAll("[data-count]");

        if (!("IntersectionObserver" in window)) return;

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target = Number(counter.dataset.count);

                if (!Number.isFinite(target)) return;

                const duration = 1800;
                const startTime = performance.now();

                function updateCounter(currentTime) {

                    const progress = Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                    const eased = 1 - Math.pow(1 - progress, 3);

                    counter.textContent =
                        Math.floor(target * eased).toLocaleString();

                    if (progress < 1) {

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target.toLocaleString();

                    }

                }

                requestAnimationFrame(updateCounter);

                observer.unobserve(counter);

            });

        }, {
            threshold: 0.5
        });

        counters.forEach(function (counter) {

            observer.observe(counter);

        });

    }


    /* ================================================
       11. HERO SLIDER
    ================================================= */

    function initializeSlider() {

        const slides = document.querySelectorAll(".slide");

        if (slides.length === 0) return;

        let currentSlide = 0;

        const next = document.getElementById("nextSlide");
        const previous = document.getElementById("previousSlide");

        function displaySlide(index) {

            slides.forEach(function (slide) {

                slide.classList.remove("active");

            });

            currentSlide = (index + slides.length) % slides.length;

            slides[currentSlide].classList.add("active");

        }

        if (next) {

            next.addEventListener("click", function () {

                displaySlide(currentSlide + 1);

            });

        }

        if (previous) {

            previous.addEventListener("click", function () {

                displaySlide(currentSlide - 1);

            });

        }

        displaySlide(0);

        setInterval(function () {

            displaySlide(currentSlide + 1);

        }, 5000);

    }


    /* ================================================
       12. INITIALIZE ALL FEATURES
    ================================================= */

    initializeIntro();

    animateCounters();

    initializeSlider();


    /* ================================================
       13. CURRENT YEAR
    ================================================= */

    document.querySelectorAll(".current-year").forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });


    console.log("DAF Website Initialized Successfully!");

});

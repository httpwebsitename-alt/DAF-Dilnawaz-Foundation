
/* =========================================================
   DAF - DILNAWAZ AHMED FOUNDATION
   Complete Website JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";


    /* =====================================================
       1. ELEMENT REFERENCES
    ===================================================== */

    const introScreen = document.getElementById("introScreen");
    const mainWebsite = document.getElementById("mainWebsite");
    const skipIntro = document.getElementById("skipIntro");

    const bubbleContainer = document.getElementById("bubbleContainer");
    const floatingLetters = document.getElementById("floatingLetters");

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    const themePicker = document.getElementById("themePicker");
    const themeOptions = document.getElementById("themeOptions");
    const themeButtons = document.querySelectorAll(".theme-option");

    const slides = document.querySelectorAll(".slide");
    const nextSlide = document.getElementById("nextSlide");
    const previousSlide = document.getElementById("previousSlide");

    let currentSlide = 0;
    let sliderInterval = null;
    let introTimer = null;


    /* =====================================================
       2. SIX WEBSITE THEMES
    ===================================================== */

    const themes = {

        margalla: {
            primary: "#173f35",
            primaryDark: "#0d2c25",
            secondary: "#c5a36b",
            background: "#f8f7f2",
            surface: "#ffffff",
            text: "#202b27",
            muted: "#758078",
            border: "rgba(23, 63, 53, 0.13)"
        },

        blue: {
            primary: "#173d65",
            primaryDark: "#0c2948",
            secondary: "#c49a58",
            background: "#f3f6fa",
            surface: "#ffffff",
            text: "#202c3a",
            muted: "#738092",
            border: "rgba(23, 61, 101, 0.13)"
        },

        ivory: {
            primary: "#544331",
            primaryDark: "#352a20",
            secondary: "#b28b54",
            background: "#f5f0e7",
            surface: "#fffdf8",
            text: "#342c24",
            muted: "#807568",
            border: "rgba(84, 67, 49, 0.14)"
        },

        sage: {
            primary: "#48634f",
            primaryDark: "#304936",
            secondary: "#b39a69",
            background: "#f2f5ef",
            surface: "#ffffff",
            text: "#29382c",
            muted: "#778578",
            border: "rgba(72, 99, 79, 0.14)"
        },

        indigo: {
            primary: "#38345e",
            primaryDark: "#252344",
            secondary: "#b5a0d2",
            background: "#f3f2f8",
            surface: "#ffffff",
            text: "#2e2a42",
            muted: "#7c7890",
            border: "rgba(56, 52, 94, 0.14)"
        },

        graphite: {
            primary: "#343c40",
            primaryDark: "#20282c",
            secondary: "#c09b6b",
            background: "#f2f3f3",
            surface: "#ffffff",
            text: "#242b2e",
            muted: "#788186",
            border: "rgba(52, 60, 64, 0.14)"
        }

    };


    /* =====================================================
       3. APPLY SELECTED THEME
    ===================================================== */

    function applyTheme(themeName) {

        const selectedTheme = themes[themeName];

        if (!selectedTheme) {
            return;
        }

        const root = document.documentElement;

        root.style.setProperty("--primary", selectedTheme.primary);
        root.style.setProperty("--primary-dark", selectedTheme.primaryDark);
        root.style.setProperty("--secondary", selectedTheme.secondary);

        root.style.setProperty("--background", selectedTheme.background);
        root.style.setProperty("--surface", selectedTheme.surface);

        root.style.setProperty("--text", selectedTheme.text);
        root.style.setProperty("--muted", selectedTheme.muted);
        root.style.setProperty("--border", selectedTheme.border);

        try {
            localStorage.setItem("dafTheme", themeName);
        } catch (error) {
            console.warn("Theme preference could not be saved.");
        }

        updateSelectedTheme(themeName);

    }


    /* =====================================================
       4. UPDATE SELECTED THEME INDICATOR
    ===================================================== */

    function updateSelectedTheme(themeName) {

        themeButtons.forEach(function (button) {

            const selected = button.dataset.theme === themeName;

            button.classList.toggle("selected", selected);

            button.setAttribute(
                "aria-pressed",
                String(selected)
            );

        });

    }


    /* =====================================================
       5. THEME BUTTON EVENTS
    ===================================================== */

    themeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedTheme = button.dataset.theme;

            applyTheme(selectedTheme);

        });

    });


    /* Load previously selected theme */

    let savedTheme = "margalla";

    try {

        savedTheme = localStorage.getItem("dafTheme") || "margalla";

    } catch (error) {

        savedTheme = "margalla";

    }

    if (!themes[savedTheme]) {
        savedTheme = "margalla";
    }

    applyTheme(savedTheme);


    /* =====================================================
       6. INTRO BUBBLE ANIMATION
    ===================================================== */

    function createBubbles() {

        if (!bubbleContainer) {
            return;
        }

        bubbleContainer.innerHTML = "";

        for (let i = 0; i < 35; i++) {

            const bubble = document.createElement("div");

            bubble.className = "bubble";

            const size = Math.random() * 35 + 8;
            const left = Math.random() * 100;
            const duration = Math.random() * 8 + 7;
            const delay = Math.random() * 8;
            const drift = (Math.random() - 0.5) * 150;

            bubble.style.setProperty("--size", size + "px");
            bubble.style.setProperty("--left", left + "%");
            bubble.style.setProperty("--duration", duration + "s");
            bubble.style.setProperty("--delay", delay + "s");
            bubble.style.setProperty("--drift", drift + "px");

            bubbleContainer.appendChild(bubble);

        }

    }


    /* =====================================================
       7. INTRO FLOATING LETTERS
    ===================================================== */

    function createFloatingLetters() {

        if (!floatingLetters) {
            return;
        }

        floatingLetters.innerHTML = "";

        const letters = ["D", "A", "F"];

        letters.forEach(function (letter, index) {

            const element = document.createElement("span");

            element.className = "floating-letter";
            element.textContent = letter;

            const startX = (Math.random() - 0.5) * 900;
            const startY = (Math.random() - 0.5) * 600;

            element.style.setProperty("--start-x", startX + "px");
            element.style.setProperty("--start-y", startY + "px");

            element.style.animationDelay = (index * 0.3) + "s";

            floatingLetters.appendChild(element);

        });

    }


    /* =====================================================
       8. SHOW MAIN WEBSITE
    ===================================================== */

    function showWebsite() {

        if (!mainWebsite) {
            return;
        }

        if (introTimer) {

            clearTimeout(introTimer);
            introTimer = null;

        }

        if (introScreen) {

            introScreen.classList.add("hide");

        }

        mainWebsite.style.display = "block";

        requestAnimationFrame(function () {

            mainWebsite.classList.add("visible");

        });

        try {

            localStorage.setItem("dafIntroCompleted", "true");

        } catch (error) {

            console.warn("Intro preference could not be saved.");

        }

        if (introScreen) {

            setTimeout(function () {

                introScreen.style.display = "none";

            }, 1100);

        }

    }


    /* =====================================================
       9. INITIALIZE INTRO
    ===================================================== */

    function initializeIntro() {

        if (!mainWebsite) {
            return;
        }

        let alreadyVisited = false;

        try {

            alreadyVisited =
                localStorage.getItem("dafIntroCompleted") === "true";

        } catch (error) {

            alreadyVisited = false;

        }

        if (alreadyVisited) {

            if (introScreen) {
                introScreen.style.display = "none";
            }

            mainWebsite.style.display = "block";
            mainWebsite.classList.add("visible");

            return;

        }

        createBubbles();
        createFloatingLetters();

        introTimer = setTimeout(function () {

            showWebsite();

        }, 7000);

    }


    if (skipIntro) {

        skipIntro.addEventListener("click", function () {

            showWebsite();

        });

    }


    /* =====================================================
       10. MOBILE NAVIGATION
    ===================================================== */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });


        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.textContent = "☰";

            });

        });


        document.addEventListener("click", function (event) {

            if (
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                mainNav.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.textContent = "☰";

            }

        });

    }


    /* =====================================================
       11. HERO IMAGE SLIDER
    ===================================================== */

    function displaySlide(index) {

        if (!slides.length) {
            return;
        }

        currentSlide = (index + slides.length) % slides.length;

        slides.forEach(function (slide, slideIndex) {

            const isActive = slideIndex === currentSlide;

            slide.classList.toggle("active", isActive);

            slide.setAttribute(
                "aria-hidden",
                String(!isActive)
            );

        });

    }


    function stopSlider() {

        if (sliderInterval) {

            clearInterval(sliderInterval);
            sliderInterval = null;

        }

    }


    function startSlider() {

        if (slides.length <= 1) {
            return;
        }

        stopSlider();

        sliderInterval = setInterval(function () {

            displaySlide(currentSlide + 1);

        }, 5000);

    }


    function restartSlider() {

        stopSlider();
        startSlider();

    }


    if (nextSlide) {

        nextSlide.addEventListener("click", function () {

            displaySlide(currentSlide + 1);

            restartSlider();

        });

    }


    if (previousSlide) {

        previousSlide.addEventListener("click", function () {

            displaySlide(currentSlide - 1);

            restartSlider();

        });

    }


    if (slides.length) {

        displaySlide(0);

        startSlider();

    }


    /* Pause automatic slider when browser tab is hidden */

    document.addEventListener("visibilitychange", function () {

        if (document.hidden) {

            stopSlider();

        } else {

            startSlider();

        }

    });


    /* =====================================================
       12. IMPACT NUMBER COUNTERS
    ===================================================== */

    const counterElements = document.querySelectorAll("[data-count]");


    function animateCounter(element) {

        if (element.dataset.animated === "true") {
            return;
        }

        element.dataset.animated = "true";

        const target = Number(element.dataset.count);

        if (!Number.isFinite(target)) {
            return;
        }

        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;

            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = 1 - Math.pow(1 - progress, 3);

            const currentValue = Math.floor(
                easedProgress * target
            );

            element.textContent = currentValue.toLocaleString("en-US");

            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                element.textContent = target.toLocaleString("en-US");

            }

        }

        requestAnimationFrame(updateCounter);

    }


    if ("IntersectionObserver" in window) {

        const counterObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        animateCounter(entry.target);

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.4
            }
        );


        counterElements.forEach(function (counter) {

            counterObserver.observe(counter);

        });

    } else {

        counterElements.forEach(function (counter) {

            animateCounter(counter);

        });

    }


    /* =====================================================
       13. SCROLL REVEAL ANIMATIONS
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".project-card, " +
        ".project-detail-card, " +
        ".impact-card, " +
        ".gallery-item, " +
        ".contact-card, " +
        ".donate-content"
    );


    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

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

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("active");

        });

    }


    /* =====================================================
       14. ACTIVE NAVIGATION ON SCROLL
    ===================================================== */

    const pageSections = document.querySelectorAll("main section[id]");


    if ("IntersectionObserver" in window && mainNav) {

        const navigationObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const sectionId = entry.target.id;

                        mainNav.querySelectorAll("a").forEach(
                            function (link) {

                                const isActive =
                                    link.getAttribute("href") === "#" + sectionId;

                                link.classList.toggle(
                                    "nav-active",
                                    isActive
                                );

                            }
                        );

                    }

                });

            },
            {
                rootMargin: "-30% 0px -60% 0px"
            }
        );


        pageSections.forEach(function (section) {

            navigationObserver.observe(section);

        });

    }


    /* =====================================================
       15. AUTOMATIC FOOTER YEAR
    ===================================================== */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });


    /* =====================================================
       16. INITIALIZE WEBSITE
    ===================================================== */

    initializeIntro();


    console.log("DAF Website Initialized Successfully!");

});

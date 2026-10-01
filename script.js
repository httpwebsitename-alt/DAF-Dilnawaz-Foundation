/* =========================================================
   DILNAWAZ FOUNDATION
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================
   MOBILE MENU
   ========================= */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


if (menuToggle && nav) {

    menuToggle.addEventListener(
        "click",
        function () {

            nav.classList.toggle("open");

            menuToggle.classList.toggle("active");

        }
    );


    const navLinks =
        nav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                nav.classList.remove("open");

                menuToggle.classList.remove("active");

            }
        );

    });

}


/* =========================
   CURRENT YEAR
   ========================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================
   BACK TO TOP
   ========================= */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================
   FILTER SYSTEM
   PROJECTS + GALLERY
   ========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const filter =
                this.getAttribute("data-filter");


            const parent =
                this.closest(".section");


            if (!parent) return;


            const items =
                parent.querySelectorAll(
                    ".project-item, .gallery-item"
                );


            const buttons =
                parent.querySelectorAll(
                    ".filter-btn"
                );


            buttons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            this.classList.add("active");


            items.forEach(function (item) {

                const category =
                    item.getAttribute(
                        "data-category"
                    );


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.style.display = "";

                    setTimeout(function () {

                        item.style.opacity = "1";

                    }, 10);

                } else {

                    item.style.display = "none";

                }

            });

        }
    );

});


/* =========================
   GALLERY LIGHTBOX
   ========================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );

const lightbox =
    document.getElementById(
        "lightbox"
    );

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );


galleryItems.forEach(function (item) {

    item.addEventListener(
        "click",
        function () {

            const image =
                item.querySelector("img");


            if (!image || !lightbox) return;


            lightboxImage.src =
                image.src;


            lightboxImage.alt =
                image.alt;


            lightbox.classList.add(
                "show"
            );


            document.body.style.overflow =
                "hidden";

        }
    );

});


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


function closeLightbox() {

    if (!lightbox) return;


    lightbox.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


/* =========================
   ESCAPE KEY
   ========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }

    }
);


/* =========================
   COPY DONATION DETAILS
   ========================= */

const copyButtons =
    document.querySelectorAll(
        ".copy-btn"
    );


copyButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        async function () {

            const value =
                this.getAttribute(
                    "data-copy"
                );


            if (!value) return;


            try {

                await navigator.clipboard.writeText(
                    value
                );


                const original =
                    this.innerHTML;


                this.innerHTML =
                    '<i class="fa-solid fa-check"></i> Copied';


                setTimeout(function () {

                    button.innerHTML =
                        original;

                }, 1800);


            } catch (error) {

                alert(
                    "Please copy manually: " +
                    value
                );

            }

        }
    );

});


/* =========================
   CONTACT FORM
   ========================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const subject =
                document.getElementById(
                    "subject"
                ).value;


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            /*
             * IMPORTANT:
             * Replace this email address
             * with the official DAF email.
             */

            const foundationEmail =
                "info@yourfoundation.org";


            const emailSubject =
                encodeURIComponent(
                    "DAF Website Inquiry - " +
                    subject
                );


            const emailBody =
                encodeURIComponent(

                    "Name: " +
                    name +

                    "\nEmail: " +
                    email +

                    "\n\nMessage:\n" +
                    message

                );


            window.location.href =
                "mailto:" +
                foundationEmail +
                "?subject=" +
                emailSubject +
                "&body=" +
                emailBody;

        }
    );

}


/* =========================
   SCROLL REVEAL
   ========================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, " +
        ".project-card, " +
        ".mission-card, " +
        ".value-item, " +
        ".step-card, " +
        ".donation-card, " +
        ".contact-item"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.6s ease, " +
                "transform 0.6s ease";

            observer.observe(element);

        }
    );

}


/* =========================
   HEADER SHADOW
   ========================= */

const header =
    document.getElementById("header");


if (header) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 20) {

                header.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.06)";

            } else {

                header.style.boxShadow =
                    "none";

            }

        }
    );

}

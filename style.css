
/* =========================================
   DILNAWAZ AHMED FOUNDATION
   PREMIUM WEBSITE DESIGN
========================================= */

:root {
    --bg: #faf8f6;
    --paper: #ffffff;
    --pink: #dfb8bf;
    --pink-light: #f5e8e9;
    --teal: #176f69;
    --dark: #202321;
    --muted: #777c78;
    --line: #e9e3df;
    --serif: "Playfair Display", serif;
    --sans: "DM Sans", sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--sans);
    background: var(--bg);
    color: var(--dark);
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}

/* =========================================
   INTRO SCREEN
========================================= */

.intro-screen {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    min-height: 550px;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background:
        radial-gradient(circle at 20% 20%, #f9e8e9 0%, transparent 35%),
        radial-gradient(circle at 80% 75%, #dcece9 0%, transparent 35%),
        #faf8f6;
}

.intro-background {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,.4),
            rgba(230,199,204,.15)
        );
}

/* Water Bubbles */

.bubble-container {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
}

.bubble {
    position: absolute;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 30% 25%,
            rgba(255,255,255,.95),
            rgba(255,255,255,.1) 35%,
            rgba(143,195,191,.15) 70%,
            rgba(255,255,255,.35)
        );

    border: 1px solid rgba(255,255,255,.65);

    box-shadow:
        inset -4px -5px 15px rgba(80,140,140,.10),
        0 8px 30px rgba(70,120,110,.08);

    backdrop-filter: blur(4px);

    animation: bubbleFloat 12s infinite ease-in-out;
}

.bubble-1 {
    width: 100px;
    height: 100px;
    left: 10%;
    top: 15%;
    animation-delay: 0s;
}

.bubble-2 {
    width: 55px;
    height: 55px;
    left: 25%;
    bottom: 15%;
    animation-delay: 2s;
}

.bubble-3 {
    width: 150px;
    height: 150px;
    right: 12%;
    top: 12%;
    animation-delay: 3s;
}

.bubble-4 {
    width: 75px;
    height: 75px;
    right: 25%;
    bottom: 20%;
    animation-delay: 1s;
}

.bubble-5 {
    width: 40px;
    height: 40px;
    left: 48%;
    top: 10%;
    animation-delay: 4s;
}

.bubble-6 {
    width: 120px;
    height: 120px;
    left: 5%;
    bottom: 10%;
    animation-delay: 5s;
}

.bubble-7 {
    width: 65px;
    height: 65px;
    right: 5%;
    bottom: 35%;
    animation-delay: 2s;
}

.bubble-8 {
    width: 35px;
    height: 35px;
    left: 70%;
    top: 70%;
    animation-delay: 3s;
}

@keyframes bubbleFloat {
    0%, 100% {
        transform: translate(0, 0) scale(1);
    }

    25% {
        transform: translate(35px, -45px) scale(1.08);
    }

    50% {
        transform: translate(-25px, -85px) scale(.95);
    }

    75% {
        transform: translate(20px, -35px) scale(1.05);
    }
}

/* Floating Letters */

.floating-letters span {
    position: absolute;
    font-family: var(--serif);
    font-size: clamp(22px, 3vw, 42px);
    color: rgba(23,111,105,.38);
    font-weight: 500;
    animation: letterFloat 9s infinite ease-in-out;
}

.floating-letters span:nth-child(1) {
    left: 12%;
    top: 35%;
}

.floating-letters span:nth-child(2) {
    left: 25%;
    top: 65%;
    animation-delay: 1s;
}

.floating-letters span:nth-child(3) {
    left: 38%;
    top: 15%;
    animation-delay: 2s;
}

.floating-letters span:nth-child(4) {
    right: 15%;
    top: 30%;
    animation-delay: 3s;
}

.floating-letters span:nth-child(5) {
    right: 25%;
    bottom: 15%;
    animation-delay: 1.5s;
}

.floating-letters span:nth-child(6) {
    right: 40%;
    top: 75%;
    animation-delay: 2.5s;
}

.floating-letters span:nth-child(7) {
    left: 8%;
    bottom: 35%;
    animation-delay: 3.5s;
}

.floating-letters span:nth-child(8) {
    right: 8%;
    top: 65%;
    animation-delay: 4s;
}

@keyframes letterFloat {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
        opacity: .3;
    }

    50% {
        transform: translateY(-55px) rotate(15deg);
        opacity: .9;
    }
}

/* Intro Logo */

.intro-content {
    position: relative;
    z-index: 5;
    text-align: center;
    animation: revealContent 2s ease forwards;
}

@keyframes revealContent {
    from {
        opacity: 0;
        transform: translateY(35px) scale(.95);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.intro-logo {
    opacity: 0;
    animation: logoReveal 2s 1s forwards;
}

@keyframes logoReveal {
    to {
        opacity: 1;
    }
}

.logo-symbol {
    font-family: var(--serif);
    font-size: clamp(95px, 15vw, 165px);
    font-weight: 400;
    line-height: 1;
    letter-spacing: -15px;
    color: #171817;
    position: relative;
    display: inline-block;
    padding-right: 12px;
}

.logo-d,
.logo-a,
.logo-f {
    display: inline-block;
}

.logo-d {
    font-style: italic;
}

.logo-a {
    font-style: italic;
    color: var(--teal);
}

.logo-f {
    font-style: italic;
}

.logo-line {
    width: 100%;
    max-width: 400px;
    height: 1px;
    margin: 5px auto 15px;
    background: linear-gradient(
        to right,
        transparent,
        #222,
        transparent
    );
    transform: scaleX(0);
    animation: lineReveal 1.5s 2s forwards;
}

@keyframes lineReveal {
    to {
        transform: scaleX(1);
    }
}

.logo-name {
    font-size: 15px;
    letter-spacing: 7px;
    font-weight: 500;
    line-height: 1.9;
}

.logo-name span {
    display: block;
    font-size: 11px;
    letter-spacing: 9px;
}

.intro-tagline {
    margin-top: 35px;
    font-size: 10px;
    letter-spacing: 4px;
    color: var(--muted);
    opacity: 0;
    animation: fadeIn 1.5s 2.7s forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

/* Intro Loader */

.intro-loader {
    width: 100px;
    height: 2px;
    background: rgba(0,0,0,.08);
    margin: 35px auto 0;
    overflow: hidden;
    opacity: 0;
    animation: fadeIn 1s 3s forwards;
}

.intro-loader span {
    display: block;
    width: 40%;
    height: 100%;
    background: var(--teal);
    animation: loading 3s infinite ease-in-out;
}

@keyframes loading {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(250%);
    }
}

/* Skip Button */

.skip-intro {
    position: absolute;
    right: 45px;
    bottom: 40px;
    border: 1px solid rgba(0,0,0,.15);
    padding: 12px 20px;
    background: rgba(255,255,255,.35);
    backdrop-filter: blur(10px);
    border-radius: 30px;
    font-size: 10px;
    letter-spacing: 2px;
    cursor: pointer;
    transition: .3s;
}

.skip-intro:hover {
    background: var(--dark);
    color: white;
}

.skip-intro span {
    margin-left: 10px;
}

.intro-footer {
    position: absolute;
    bottom: 45px;
    left: 45px;
    font-size: 9px;
    letter-spacing: 2px;
    color: var(--muted);
}

/* =========================================
   MAIN WEBSITE
========================================= */

.main-website {
    display: none;
    opacity: 0;
    animation: websiteReveal 1s forwards;
}

.main-website.visible {
    display: block;
}

@keyframes websiteReveal {
    to {
        opacity: 1;
    }
}

/* Navigation */

.main-header {
    width: 100%;
    min-height: 90px;
    padding: 15px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(250,248,246,.92);
    border-bottom: 1px solid var(--line);
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(15px);
}

.brand-logo {
    display: flex;
    align-items: center;
    gap: 13px;
}

.brand-symbol {
    font-family: var(--serif);
    font-size: 43px;
    font-style: italic;
    color: var(--teal);
}

.brand-name {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
}

.brand-name small {
    display: block;
    font-size: 9px;
    letter-spacing: 4px;
    margin-top: 4px;
}

.main-nav {
    display: flex;
    align-items: center;
    gap: 30px;
}

.main-nav a {
    font-size: 12px;
    font-weight: 500;
    transition: .3s;
}

.main-nav a:hover {
    color: var(--teal);
}

.donate-button {
    background: var(--dark);
    color: white !important;
    padding: 14px 22px;
    border-radius: 30px;
}

.donate-button:hover {
    background: var(--teal);
}

.menu-toggle {
    display: none;
    border: 0;
    background: transparent;
    font-size: 25px;
    cursor: pointer;
}

/* =========================================
   HERO SECTION
========================================= */

.hero-section {
    min-height: 650px;
    padding: 100px 8%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 70px;
    overflow: hidden;
}

.section-label {
    display: inline-block;
    color: var(--teal);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: 25px;
}

.hero-text h1 {
    font-family: var(--serif);
    font-size: clamp(45px, 5.5vw, 78px);
    font-weight: 400;
    line-height: 1.13;
    letter-spacing: -2px;
}

.hero-text h1 em {
    color: var(--teal);
    font-weight: 400;
}

.hero-text p {
    margin-top: 30px;
    max-width: 480px;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.9;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    margin-top: 35px;
    flex-wrap: wrap;
}

.primary-button,
.secondary-button {
    display: inline-block;
    padding: 16px 25px;
    border-radius: 35px;
    font-size: 12px;
    font-weight: 600;
    transition: .3s;
}

.primary-button {
    background: var(--teal);
    color: white;
}

.primary-button:hover {
    background: var(--dark);
    transform: translateY(-3px);
}

.secondary-button {
    border: 1px solid var(--line);
    background: white;
}

.secondary-button:hover {
    border-color: var(--teal);
    color: var(--teal);
}

/* Hero Image Placeholder */

.hero-visual {
    position: relative;
}

.hero-image-placeholder {
    height: 450px;
    border-radius: 220px 220px 20px 20px;
    background:
        linear-gradient(
            145deg,
            rgba(23,111,105,.12),
            rgba(223,184,191,.5)
        );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.hero-image-placeholder::before,
.hero-image-placeholder::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,.6);
}

.hero-image-placeholder::before {
    width: 300px;
    height: 300px;
}

.hero-image-placeholder::after {
    width: 420px;
    height: 420px;
}

.hero-image-placeholder span {
    font-family: var(--serif);
    font-size: 110px;
    font-style: italic;
    color: rgba(23,111,105,.7);
    z-index: 1;
}

.hero-image-placeholder p {
    font-size: 11px;
    letter-spacing: 3px;
    z-index: 1;
}

/* =========================================
   PROJECTS SECTION
========================================= */

.projects-section {
    padding: 100px 8%;
    background: var(--paper);
    text-align: center;
}

.projects-section h2 {
    font-family: var(--serif);
    font-size: clamp(38px, 5vw, 58px);
    font-weight: 400;
}

.projects-section > p {
    color: var(--muted);
    margin-top: 15px;
    font-size: 14px;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 60px;
    text-align: left;
}

.project-card {
    min-height: 220px;
    padding: 30px;
    border: 1px solid var(--line);
    border-radius: 15px;
    background: var(--bg);
    transition: .4s;
    position: relative;
    overflow: hidden;
}

.project-card:hover {
    transform: translateY(-8px);
    background: var(--pink-light);
    border-color: var(--pink);
    box-shadow: 0 15px 40px rgba(0,0,0,.05);
}

.project-card > span {
    font-family: var(--serif);
    font-size: 14px;
    color: var(--teal);
}

.project-card h3 {
    font-family: var(--serif);
    font-size: 23px;
    font-weight: 500;
    margin-top: 40px;
}

.project-card p {
    color: var(--muted);
    font-size: 12px;
    margin-top: 12px;
    line-height: 1.7;
}

/* =========================================
   FOOTER
========================================= */

.main-footer {
    padding: 65px 8%;
    background: var(--dark);
    color: white;
    text-align: center;
}

.footer-brand {
    font-size: 12px;
    letter-spacing: 4px;
}

.main-footer p {
    margin-top: 18px;
    font-family: var(--serif);
    font-size: 20px;
    color: #d6c5c5;
}

.main-footer > span {
    display: block;
    margin-top: 35px;
    color: #999;
    font-size: 11px;
}

/* =========================================
   RESPONSIVE DESIGN
========================================= */

@media (max-width: 1000px) {

    .main-nav {
        gap: 15px;
    }

    .hero-section {
        gap: 35px;
        padding: 80px 6%;
    }

    .project-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 700px) {

    .main-header {
        min-height: 75px;
        padding: 12px 5%;
    }

    .menu-toggle {
        display: block;
    }

    .main-nav {
        display: none;
        position: absolute;
        top: 75px;
        left: 0;
        width: 100%;
        padding: 25px;
        background: var(--paper);
        border-bottom: 1px solid var(--line);
        flex-direction: column;
        align-items: flex-start;
        gap: 23px;
    }

    .main-nav.active {
        display: flex;
    }

    .hero-section {
        grid-template-columns: 1fr;
        padding: 75px 7%;
        gap: 50px;
    }

    .hero-text h1 {
        font-size: 49px;
    }

    .hero-image-placeholder {
        height: 350px;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }

    .projects-section {
        padding: 75px 7%;
    }

    .intro-tagline {
        font-size: 8px;
        letter-spacing: 2px;
    }

    .logo-name {
        font-size: 12px;
        letter-spacing: 5px;
    }

    .logo-name span {
        letter-spacing: 7px;
    }

    .intro-footer {
        left: 15px;
        bottom: 20px;
        font-size: 8px;
    }

    .skip-intro {
        right: 15px;
        bottom: 15px;
        padding: 10px 14px;
    }

}

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
    }

}

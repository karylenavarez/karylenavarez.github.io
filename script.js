/*=========================================
KARYLE NAVAREZ PORTFOLIO
script.js
=========================================*/

// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// Scroll Progress Bar
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

});

// Back To Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// Smooth Anchor Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Reveal on Scroll
const revealElements = document.querySelectorAll(

".service-card, .hire-card, .timeline-content, .development-card, .education-card, .skill-card, .project-card, .contact-left, .contact-right, .gallery-grid img, .certificate-grid img"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = "all .7s ease";

    observer.observe(item);

});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Animate Skill Bars
const skillBars = document.querySelectorAll(".skill-fill");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const width = entry.target.style.width;

            entry.target.style.width = "0";

            setTimeout(() => {

                entry.target.style.width = width;

            }, 150);

        }

    });

}, {

    threshold: 0.5

});

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});

// Current Year (optional)
const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}
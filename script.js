/* ================= THEME ================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {

    document.documentElement.setAttribute(
        "data-theme",
        "light"
    );

    themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
}


themeBtn.addEventListener("click", () => {

    const isLight =
        document.documentElement
            .getAttribute("data-theme") === "light";


    if (isLight) {

        document.documentElement
            .removeAttribute("data-theme");

        localStorage.setItem(
            "portfolioTheme",
            "dark"
        );

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    } else {

        document.documentElement
            .setAttribute(
                "data-theme",
                "light"
            );

        localStorage.setItem(
            "portfolioTheme",
            "light"
        );

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';
    }

});



/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });



/* ================= TYPING EFFECT ================= */

const typing =
    document.getElementById("typing");


const words = [
    "clean websites.",
    "Java applications.",
    "REST APIs.",
    "useful products."
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const word = words[wordIndex];


    if (!deleting) {

        typing.textContent =
            word.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === word.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;
        }

    } else {

        typing.textContent =
            word.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;
        }
    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );
}


typeEffect();



/* ================= SKILLS SLIDER ================= */

const track =
    document.getElementById("skillsTrack");

const cards =
    document.querySelectorAll(".skill-card");

const nextSkill =
    document.getElementById("nextSkill");

const prevSkill =
    document.getElementById("prevSkill");

const dots =
    document.getElementById("skillDots");


let currentSlide = 0;


function visibleCards() {

    if (window.innerWidth <= 450)
        return 1;

    if (window.innerWidth <= 700)
        return 2;

    if (window.innerWidth <= 900)
        return 3;

    return 4;
}


function totalSlides() {

    return Math.max(
        1,
        cards.length - visibleCards() + 1
    );
}


function createDots() {

    dots.innerHTML = "";

    for (
        let i = 0;
        i < totalSlides();
        i++
    ) {

        const dot =
            document.createElement("span");

        if (i === currentSlide) {

            dot.classList.add("active");
        }

        dot.addEventListener(
            "click",
            () => {

                currentSlide = i;

                updateSlider();

            }
        );

        dots.appendChild(dot);
    }
}


function updateSlider() {

    const cardWidth =
        cards[0].offsetWidth;

    const gap = 10;

    track.style.transform =
        `translateX(-${currentSlide *
        (cardWidth + gap)}px)`;


    document
        .querySelectorAll(".slider-dots span")
        .forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        });
}


nextSkill.addEventListener("click", () => {

    currentSlide++;

    if (
        currentSlide >= totalSlides()
    ) {

        currentSlide = 0;
    }

    updateSlider();
});


prevSkill.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            totalSlides() - 1;
    }

    updateSlider();
});


createDots();


window.addEventListener("resize", () => {

    if (
        currentSlide >= totalSlides()
    ) {

        currentSlide =
            totalSlides() - 1;
    }

    createDots();

    updateSlider();
});


/* Automatic movement */

setInterval(() => {

    currentSlide++;

    if (
        currentSlide >= totalSlides()
    ) {

        currentSlide = 0;
    }

    updateSlider();

}, 3500);



/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;


        if (
            window.scrollY >= sectionTop
        ) {

            current = section.id;
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");
        }

    });

});



/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const subject =
            document.getElementById("subject").value;

        const message =
            document.getElementById("message").value;


        const body =
            `Name: ${name}\n\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`;


        const mailto =
            `mailto:aanchalkatariya05@gmail.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;


        document.getElementById(
            "formStatus"
        ).textContent =
            "Opening your email app...";


        window.location.href = mailto;

    }
);



/* ================= YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* ================= TOP BUTTON ================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");
    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const themeBtn =
    document.getElementById("themeBtn");


const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "light") {

    document.documentElement
        .setAttribute(
            "data-theme",
            "light"
        );

    themeBtn.textContent = "☀";

}


themeBtn.addEventListener("click", () => {

    const current =
        document.documentElement
            .getAttribute("data-theme");


    if (current === "light") {

        document.documentElement
            .removeAttribute("data-theme");

        themeBtn.textContent = "☾";

        localStorage.setItem(
            "portfolioTheme",
            "dark"
        );

    } else {

        document.documentElement
            .setAttribute(
                "data-theme",
                "light"
            );

        themeBtn.textContent = "☀";

        localStorage.setItem(
            "portfolioTheme",
            "light"
        );

    }

});



// ================= MOBILE MENU =================

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

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "open"
                );

            }
        );

    });



// ================= TYPING EFFECT =================

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

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typing.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 50 : 85

    );

}


typeEffect();



// ================= SKILLS SLIDER =================

const track =
    document.getElementById(
        "skillsTrack"
    );


const nextBtn =
    document.getElementById(
        "nextSkill"
    );


const prevBtn =
    document.getElementById(
        "prevSkill"
    );


const dotsContainer =
    document.getElementById(
        "skillDots"
    );


const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );


let currentSlide = 0;


function getVisibleCards() {

    if (window.innerWidth <= 450) {

        return 1;

    }

    if (window.innerWidth <= 700) {

        return 2;

    }

    if (window.innerWidth <= 900) {

        return 3;

    }

    return 4;

}


function getTotalSlides() {

    return Math.max(

        1,

        skillCards.length -
        getVisibleCards() +
        1

    );

}


function createDots() {

    dotsContainer.innerHTML = "";


    const total =
        getTotalSlides();


    for (
        let i = 0;
        i < total;
        i++
    ) {

        const dot =
            document.createElement(
                "span"
            );


        if (i === currentSlide) {

            dot.classList.add(
                "active"
            );

        }


        dot.addEventListener(
            "click",
            () => {

                currentSlide = i;

                updateSlider();

            }
        );


        dotsContainer.appendChild(
            dot
        );

    }

}


function updateSlider() {

    const visible =
        getVisibleCards();


    const cardWidth =
        skillCards[0].offsetWidth;


    const gap = 12;


    track.style.transform =
        `translateX(-${currentSlide *
        (cardWidth + gap)}px)`;


    document
        .querySelectorAll(
            ".slider-dots span"
        )
        .forEach(
            (dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === currentSlide
                );

            }
        );

}


nextBtn.addEventListener(
    "click",
    () => {

        const total =
            getTotalSlides();


        currentSlide++;

        if (
            currentSlide >= total
        ) {

            currentSlide = 0;

        }


        updateSlider();

    }
);


prevBtn.addEventListener(
    "click",
    () => {

        const total =
            getTotalSlides();


        currentSlide--;

        if (currentSlide < 0) {

            currentSlide =
                total - 1;

        }


        updateSlider();

    }
);


createDots();


window.addEventListener(
    "resize",
    () => {

        const total =
            getTotalSlides();


        if (
            currentSlide >= total
        ) {

            currentSlide =
                total - 1;

        }


        createDots();

        updateSlider();

    }
);


// Automatic skills movement

setInterval(() => {

    const total =
        getTotalSlides();


    currentSlide++;


    if (
        currentSlide >= total
    ) {

        currentSlide = 0;

    }


    updateSlider();

}, 3000);



// ================= ACTIVE NAV =================

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                const top =
                    section.offsetTop -
                    150;


                if (
                    window.scrollY >= top
                ) {

                    current =
                        section.id;

                }

            }
        );


        navItems.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${current}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



// ================= CONTACT FORM =================

const form =
    document.getElementById(
        "contactForm"
    );


form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;


        const email =
            document.getElementById(
                "email"
            ).value;


        const subject =
            document.getElementById(
                "subject"
            ).value;


        const message =
            document.getElementById(
                "message"
            ).value;


        const body =

            `Name: ${name}

Email: ${email}

Message:

${message}`;


        const mailto =

            `mailto:aanchalkatariya05@gmail.com` +

            `?subject=${encodeURIComponent(
                subject
            )}` +

            `&body=${encodeURIComponent(
                body
            )}`;


        document.getElementById(
            "formStatus"
        ).textContent =
            "Opening your email app...";


        window.location.href =
            mailto;

    }
);



// ================= YEAR =================

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();



// ================= TOP BUTTON =================

const topBtn =
    document.getElementById(
        "topBtn"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            topBtn.classList.add(
                "show"
            );

        } else {

            topBtn.classList.remove(
                "show"
            );

        }

    }
);


topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);

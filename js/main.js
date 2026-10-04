/* =====================================================
   CADers Official Website
   Main JavaScript
   ===================================================== */


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =====================================================
   ACHIEVEMENT SLIDER
   ===================================================== */

const achievementTrack =
    document.getElementById("achievementTrack");

const achievementPrev =
    document.getElementById("achievementPrev");

const achievementNext =
    document.getElementById("achievementNext");


let achievementPosition = 0;


function updateAchievementSlider() {

    if (!achievementTrack) return;

    const cards =
        achievementTrack.querySelectorAll(
            ".achievement-card"
        );

    if (cards.length === 0) return;

    const cardWidth =
        cards[0].offsetWidth + 20;

    achievementTrack.style.transform =
        `translateX(-${achievementPosition * cardWidth}px)`;

}


/* Previous */

if (achievementPrev) {

    achievementPrev.addEventListener(
        "click",
        () => {

            if (achievementPosition > 0) {

                achievementPosition--;

                updateAchievementSlider();

            }

        }
    );

}


/* Next */

if (achievementNext) {

    achievementNext.addEventListener(
        "click",
        () => {

            const cards =
                achievementTrack.querySelectorAll(
                    ".achievement-card"
                );

            const visibleCards =
                window.innerWidth <= 800 ? 1 : 3;

            const maxPosition =
                Math.max(
                    0,
                    cards.length - visibleCards
                );

            if (
                achievementPosition <
                maxPosition
            ) {

                achievementPosition++;

                updateAchievementSlider();

            }

        }
    );

}


/* =====================================================
   ACHIEVEMENT AUTO SLIDESHOW
   ===================================================== */

let achievementAutoSlide =
    setInterval(() => {

        const cards =
            achievementTrack?.querySelectorAll(
                ".achievement-card"
            );

        if (!cards || cards.length === 0)
            return;

        const visibleCards =
            window.innerWidth <= 800 ? 1 : 3;

        const maxPosition =
            Math.max(
                0,
                cards.length - visibleCards
            );

        if (
            achievementPosition >=
            maxPosition
        ) {

            achievementPosition = 0;

        } else {

            achievementPosition++;

        }

        updateAchievementSlider();

    }, 4000);


/* =====================================================
   VOICE SLIDER
   ===================================================== */

const voiceText =
    document.getElementById("voiceText");

const voiceName =
    document.getElementById("voiceName");

const voiceRole =
    document.getElementById("voiceRole");

const voicePrev =
    document.getElementById("voicePrev");

const voiceNext =
    document.getElementById("voiceNext");


const voices = [

    {
        text:
            "CADers is a platform where students can learn, create and grow together through engineering and innovation.",

        name:
            "Faculty Advisor",

        role:
            "Faculty Advisor, CADers"
    },

    {
        text:
            "Our goal is to help students develop practical design skills and gain confidence through hands-on learning.",

        name:
            "Moderator",

        role:
            "Moderator, CADers"
    },

    {
        text:
            "Every great engineering idea starts with curiosity, creativity and the willingness to learn.",

        name:
            "CADers Team",

        role:
            "CADers, KUET"
    }

];


let voiceIndex = 0;


function showVoice(index) {

    if (!voiceText) return;

    const voice =
        voices[index];

    voiceText.textContent =
        voice.text;

    voiceName.textContent =
        voice.name;

    voiceRole.textContent =
        voice.role;

}


if (voiceNext) {

    voiceNext.addEventListener(
        "click",
        () => {

            voiceIndex++;

            if (
                voiceIndex >=
                voices.length
            ) {

                voiceIndex = 0;

            }

            showVoice(voiceIndex);

        }
    );

}


if (voicePrev) {

    voicePrev.addEventListener(
        "click",
        () => {

            voiceIndex--;

            if (
                voiceIndex < 0
            ) {

                voiceIndex =
                    voices.length - 1;

            }

            showVoice(voiceIndex);

        }
    );

}


/* =====================================================
   VOICE AUTO SLIDESHOW
   ===================================================== */

setInterval(() => {

    if (!voiceText) return;

    voiceIndex++;

    if (
        voiceIndex >=
        voices.length
    ) {

        voiceIndex = 0;

    }

    showVoice(voiceIndex);

}, 6000);


/* =====================================================
   NAVBAR SCROLL EFFECT
   ===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(4, 12, 22, 0.95)";

        } else {

            navbar.style.background =
                "rgba(7, 17, 31, 0.75)";

        }

    }
);


/* =====================================================
   SCROLL REVEAL ANIMATION
   ===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-text, .about-card, .achievement-card, .event-card, .voice-slider, .feedback-box, .contact-item, .map-box"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal"
    );

    revealObserver.observe(
        element
    );

});


/* =====================================================
   UPDATE SLIDER ON WINDOW RESIZE
   ===================================================== */

window.addEventListener(
    "resize",
    () => {

        achievementPosition = 0;

        updateAchievementSlider();

    }
);


/* =====================================================
   CONSOLE MESSAGE
   ===================================================== */

console.log(
    "CADers Official Website Loaded Successfully."
);
// ===============================
// LOVEQUEST — MAIN SCRIPT
// ===============================


// Change screen
function nextScreen(screenNumber) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const next = document.getElementById("screen" + screenNumber);

    if (next) {
        next.classList.add("active");
    }
}


// Start the mission
function startMission() {
    nextScreen(2);
}


// ===============================
// MISSION 02 — FIND THE CLUE
// ===============================

function findClue() {

    const message = document.getElementById("clue-message");

    message.innerHTML = `
        🔓 CLUE FOUND!<br><br>
        "Sometimes the smallest choice
        leads to the biggest surprise."
        <br><br>
        <button onclick="nextScreen(4)">
            CONTINUE →
        </button>
    `;
}


// ===============================
// MISSION 03 — MYSTERY BOX
// ===============================

function openBox() {

    const box = document.querySelector(".mystery-box");
    const message = document.getElementById("box-message");

    box.style.transform = "scale(0.8) rotate(10deg)";
    box.style.opacity = "0";

    setTimeout(() => {

        box.innerHTML = "💌";
        box.style.opacity = "1";
        box.style.transform = "scale(1)";

        message.innerHTML = `
            There's actually one last mission... 👀
            <br><br>
            <button onclick="nextScreen(5)">
                UNLOCK FINAL MISSION 🔐
            </button>
        `;

    }, 500);
}


// ===============================
// FINAL QUESTION
// ===============================

function sayYes() {

    const message = document.getElementById("final-message");

    message.innerHTML = `
        🥹❤️<br><br>
        You just made this mission
        completely worth it.
        <br><br>
        <strong>Mission Status: SUCCESS ✅</strong>
    `;

    createHearts();
}


// "Let me think" button
function sayNo() {

    const message = document.getElementById("final-message");

    message.innerHTML = `
        Haha... take your time 🙈
        <br><br>
        No pressure. ❤️
    `;
}


// ===============================
// HEART ANIMATION
// ===============================

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration = 2000 + Math.random() * 2500;

        heart.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-${window.innerHeight + 100}px)
                         rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, duration);
    }
}

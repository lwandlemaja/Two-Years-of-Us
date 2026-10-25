// JavaScript source code
function enterStory() {
    const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", async function () {
    if (music.paused) {
        try {
            await music.play();
            musicButton.textContent = "♡ Pause our song";
        } catch (error) {
            musicButton.textContent = "♡ Tap to try again";
        }
    } else {
        music.pause();
        musicButton.textContent = "♡ Play our song";
    }
});
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
    
const revealButton = document.getElementById("reveal-letter-button");
const letterPaper = document.getElementById("letter-paper");

if (revealButton && letterPaper) {
    revealButton.addEventListener("click", function () {
        const isHidden = letterPaper.hidden;

        // Show or hide the letter
        letterPaper.hidden = !isHidden;

        // Update the button to match
        revealButton.textContent = isHidden
            ? "Close your letter ♡"
            : "Open your letter ♡";

        // Let assistive technology know its current state
        revealButton.setAttribute("aria-expanded", String(isHidden));

        // Bring the revealed letter into view
        if (isHidden) {
            letterPaper.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
}

}
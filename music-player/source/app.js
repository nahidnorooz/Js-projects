
const music = document.querySelector("audio");
const playBtns = document.querySelectorAll(".play-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const toggleBtnImg = document.querySelector(".play-img");

function toggle() {
        if (toggleBtn.className.includes("paused")) {
        toggleBtnImg.setAttribute("src", "/music-player/image/paused.png");
        toggleBtn.classList.remove("paused");
        music.pause();
    } else {
        toggleBtnImg.setAttribute("src", "/music-player/image/playing.png");
        toggleBtn.classList.add("paused");
        music.play();
    }
}

playBtns.forEach(function (playBtn) {

        playBtn.addEventListener("click", function() {            
            const mainSrc = playBtn.dataset.src;
            music.setAttribute("src", mainSrc);
            if (playBtn.className.includes("paused")) {
                playBtn.lastChild.setAttribute("src", "/music-player/image/playing.png");
                playBtn.classList.remove("paused");
                music.play();
            } else {
                playBtn.lastChild.setAttribute("src", "/music-player/image/paused.png");
                playBtn.classList.add("paused");
                music.pause();
            }
        });
    });

toggleBtn.addEventListener("click", toggle);
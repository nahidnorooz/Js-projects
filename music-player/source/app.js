
const music = document.querySelector("audio");
const playBtns = document.querySelectorAll(".play-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const toggleBtnImg = document.querySelector(".play-img");

function toggle() {
    if (toggleBtn.className.includes("pause")) {
        toggleBtnImg.setAttribute("src", "/music-player/imgae/paused.png");
        toggleBtn.classList.remove("pause");
    } else {
        toggleBtnImg.setAttribute("src", "/music-player/imgae/playing.png");
        toggleBtn.classList.add("pause");
    }
}

toggleBtn.addEventListener("click", toggle);
playBtns.forEach(function (playBtn) {

        playBtn.addEventListener("click", function(event) {            
            const mainSrc = playBtn.dataset.src;
            music.setAttribute("src", mainSrc);
            music.play();
            if (playBtn.className.includes("pause")) {
                playBtn.lastChild.setAttribute("src", "/music-player/imgae/paused.png");
                playBtn.classList.remove("pause");
            } else {
                playBtn.lastChild.setAttribute("src", "/music-player/imgae/playing.png");
                playBtn.classList.add("pause");
                music.pause();
            }
        });
    });

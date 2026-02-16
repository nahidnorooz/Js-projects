
const music = document.querySelector("audio");
const playBtns = document.querySelectorAll(".play-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const toggleBtnImg = document.querySelector(".play-img");
const musicBar = document.querySelector(".music-bar");


function toggle() {
        if (toggleBtn.className.includes("paused")) {
        toggleBtnImg.setAttribute("src", "../image/paused.png");
        toggleBtn.classList.remove("paused");
        music.pause();
    } else {
        toggleBtnImg.setAttribute("src", "../image/playing.png");
        toggleBtn.classList.add("paused");
        music.play();
    }
}
function resetButton() {
    playBtns.forEach(function(btn) {
        btn.classList.remove("playing");
        btn.lastChild.setAttribute("src", "../image/paused.png");
    });
      if (toggleBtn.className.includes("paused")) {
        toggleBtnImg.setAttribute("src", "../image/paused.png");
        toggleBtn.classList.remove("paused");
        music.pause();
    } else {
        toggleBtnImg.setAttribute("src", "../image/playing.png");
        toggleBtn.classList.add("paused");
        music.play();
    }
}

playBtns.forEach(function (playBtn) {

        playBtn.addEventListener("click", function() {            
            const mainSrc = playBtn.dataset.src;
            music.setAttribute("src", mainSrc);
            if (playBtn.className.includes("paused")) {
                playBtn.lastChild.setAttribute("src", "../image/playing.png");
                playBtn.classList.remove("paused");
                toggleBtnImg.setAttribute("src", "../image/playing.png");
                music.play();
            } else {
                playBtn.lastChild.setAttribute("src", "../image/paused.png");
                playBtn.classList.add("paused");
                toggleBtnImg.setAttribute("src", "../image/paused.png");
                music.pause();
            }
        });
    });
    

music.addEventListener("timeupdate", function() {
    const progress = (music.currentTime / music.duration) * 100;
    musicBar.value = progress;
});
musicBar.addEventListener("input", function() {
    const seekTime = (musicBar.value / 100) * music.duration;
    music.currentTime = seekTime;
});

toggleBtn.addEventListener("click", toggle);
music.addEventListener("ended", resetButton);
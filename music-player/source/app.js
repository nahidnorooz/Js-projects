
const music = document.querySelector("audio");
const playBtns = document.querySelectorAll(".play-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const toggleBtnImg = document.querySelector(".play-img");
const musicBar = document.querySelector(".music-bar");
const volumeBar = document.querySelector(".volume");
const likeBtn = document.querySelector(".like-btn");
const likeBtnImg = document.querySelector(".like-btn-img");
const songName = document.querySelector(".music-name");
const artistName = document.querySelector(".artist");



function toggle() {

    const isPaused = toggleBtn.className.includes("paused");
    if (isPaused) {
        music.play();
        toggleBtnImg.setAttribute("src", "../image/playing.png");
        toggleBtn.classList.remove("paused");

        playBtns.forEach(function(btn) {
        btn.lastElementChild.setAttribute("src", "../image/playing.png");
        btn.classList.add("paused");
    });
    } else {
        music.pause();
        toggleBtnImg.setAttribute("src", "../image/paused.png");
        toggleBtn.classList.add("paused");

        playBtns.forEach(function(btn) {
            btn.lastElementChild.setAttribute("src", "../image/paused.png");
            btn.classList.remove("paused");
        });
    }
}
function resetButton() {
    toggleBtnImg.setAttribute("src", "../image/paused.png");
    toggleBtn.classList.remove("paused");
    
    playBtns.forEach(function(btn) {
        btn.classList.remove("paused");
        btn.lastChild.setAttribute("src", "../image/paused.png")
    });
}
let currentActiveBtn = null;

playBtns.forEach(function (playBtn) {
    
        playBtn.addEventListener("click", function() {            
            const mainSrc = playBtn.dataset.src;
            const musicName = playBtn.dataset.name;
            const artist = playBtn.dataset.artist;

            if (currentActiveBtn !== playBtn) {
                music.setAttribute("src", mainSrc);
                songName.innerHTML = musicName;
                artistName.innerHTML = artist;
                currentActiveBtn = playBtn;

            music.play();
            }
            else {
                if (music.paused) {
                    music.play();
                } else {
                    music.pause();
                }
            }
            
        });
    });
    

function updateVolumeBar() {
    const value = volumeBar.value;
    volumeBar.style.background = 
    `linear-gradient(to right,
    white 0%,
    white ${value}%,
    #2c2929 ${value}%,
    #2c2929 100%)`;
}
volumeBar.addEventListener("input", function () {
    music.volume = volumeBar.value / 100;
    updateVolumeBar();
});
updateVolumeBar();

likeBtn.addEventListener("click", function() {
    if (likeBtn.className.includes("unliked")) {
        likeBtnImg.setAttribute("src", "../image/heart-filled.png");
        likeBtn.classList.remove("unliked");
        likeBtn.classList.add("liked");

    } else {
        likeBtnImg.setAttribute("src", "../image/heart.png");
        likeBtn.classList.remove("liked");
        likeBtn.classList.add("unliked");
    }
});

music.addEventListener("timeupdate", function() {

        if (!music.duration) return;

    const percent = (music.currentTime / music.duration) * 100;
    musicBar.value = percent;
    updateMusicBar(percent);
});
musicBar.addEventListener("input", function() {
    const percent = musicBar.value;
    music.currentTime = (percent / 100) * music.duration;
    updateMusicBar(percent);
});

function updateMusicBar(percent) {
    musicBar.style.background = 
    `linear-gradient(to right, white ${percent}%, #2c2929 ${percent}%)`;
}

music.addEventListener("pause", function() {
    if (!music.duration) return;
    const percent = (music.currentTime / music.duration) * 100;
    musicBar.value = percent;

});

toggleBtn.addEventListener("click", toggle);
music.addEventListener("ended", resetButton);
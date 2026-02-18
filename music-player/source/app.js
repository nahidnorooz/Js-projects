
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
            const musicName = playBtn.dataset.name;
            const artist = playBtn.dataset.artist;

            music.setAttribute("src", mainSrc);
            songName.innerHTML = musicName;
            artistName.innerHTML = artist;
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
    const percent = (music.currentTime / music.duration) * 100;
    musicBar.value = percent;
    updateMusicBar(percent);
});

function updateMusicBar(percent) {
    musicBar.style.background = 
    `linear-gradient(to right, white ${percent}%, #2c2929 ${percent}%)`;

}


toggleBtn.addEventListener("click", toggle);
music.addEventListener("ended", resetButton);
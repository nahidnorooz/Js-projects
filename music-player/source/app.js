
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

const songs = [...playBtns].map(function(btn) {
    return {
        src: btn.dataset.src,
        title: btn.dataset.name,
        artist: btn.dataset.artist
    };
});


function updateButtons() {

    const isPaused = toggleBtn.className.includes("paused");
    if (isPaused) {
        music.play().catch(function(){});
        toggleBtnImg.setAttribute("src", "../image/playing.png");
        toggleBtn.classList.remove("paused");

        if (currentActiveBtn) {
            currentActiveBtn.querySelector("img").src = "../image/playing.png";
        } else {
            music.pause();
            toggleBtnImg.src = "../image/paused.png";
            toggleBtn.classList.add("paused");
            if (currentActiveBtn) {
                currentActiveBtn.querySelector("img").src = "../image/paused.png";
            }
        }
}}
function resetButton() {
            
    toggleBtnImg.setAttribute("src", "../image/paused.png");
    toggleBtn.classList.remove("paused");
    
    playBtns.forEach(function(btn) {
        const btnImg = btn.querySelector("img");

        btn.classList.remove("paused");
        btnImg.setAttribute("src", "../image/paused.png")
    });
}
function loadSong(index) {

    currentSongIndex = index;
    const song = songs[index];

    music.src = song.src;
    songName.innerHTML = song.title;
    artistName.innerHTML = song.artist;
    currentActiveBtn = playBtns[index];
    music.play().catch(function() {});
    updateButtons();
}
function nextSong() {
    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
}
function previousSong() {
    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(currentSongIndex);
}

let currentSongIndex = 0;
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
            updateButtons();
            }
            else {
                if (music.paused) {
                    music.play();
                    updateButtons();
                    
                } else {
                    music.pause();
                    updateButtons();

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
music.addEventListener("play", function () {
    toggleBtnImg.setAttribute("src", "../image/playing.png");

    playBtns.forEach(function(btn) {
        const btnImg = btn.querySelector("img");
        btnImg.setAttribute("src", "../image/paused.png");
    });
    if (currentActiveBtn) {
        currentActiveBtn.querySelector("img").src = "../image/playing.png";
    }
});
music.addEventListener("pause", function() {
    toggleBtnImg.setAttribute("src", "../image/paused.png");
    playBtns.forEach(function(btn) {
        const btnImg = btn.querySelector("img");
        btnImg.setAttribute("src", "../image/paused.png");
    });
});
toggleBtn.addEventListener("click", updateButtons);
nextBtn.addEventListener("click", nextSong);
previousBtn.addEventListener("click", previousSong);
music.addEventListener("ended", resetButton);
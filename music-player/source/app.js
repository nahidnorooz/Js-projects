
const music = document.querySelector("audio");

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnImg = document.querySelector(".play-img");
const musicCover = document.querySelector(".cover-img");
const musicTitle = document.querySelector(".music-title");
const singerName = document.querySelector(".singer-name");
const themeToggleBtn = document.querySelector(".theme-toggle-btn");
const themeToggleImg = document.querySelector(".theme-toggle-img");




const musics = [
{id: 1, src: "/music-player/audios/Little Nightmares II (Main Theme)   Tobias Lilja.m4a", cover: "/music-player/imgaes/little nightmares.jpg", title: "Little Nightmares II (Main Theme)", singer: "Tobias Lilja"},
{id: 2, src: "/music-player/audios/Samorost-3-Soundtrack-08-Prenatal-Hunters-Floex-Revision-Flo.m4a", cover: "/music-player/imgaes/samorost3.jpeg", title: "Samorost 3 soundtrack", singer: "Floex"},
{id: 3, src: "/music-player/audios/rises the moon   liana flores.mp3", cover: "/music-player/imgaes/rises-the-moon.jpeg", title: "Rises the moon", singer: "Liana Flores"}
]

let mainMusicIndex = 0;

function toggle() {
    if (toggleBtn.className.includes("pause")) {
        music.play();
        toggleBtnImg.setAttribute("src", "/music-player/imgaes/pause.png");
        toggleBtn.classList.remove("pause");
    } else {
        music.pause();
        toggleBtnImg.setAttribute("src", "/music-player/imgaes/play.png");
        toggleBtn.classList.add("pause");
    }
}



toggleBtn.addEventListener("click", toggle);
music.addEventListener("ended", toggle);


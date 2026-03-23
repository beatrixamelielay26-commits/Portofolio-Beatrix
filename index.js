const videos = ["images/angry.mp4", "images/sleepy.mp4", "images/smile.mp4"];
let index = 0;
const player = document.getElementById("gifPreview").querySelector("source");

setInterval(() => {
    index = (index + 1) % videos.length;
    player.src = videos[index];
    document.getElementById("gifPreview").load();
}, 2000);
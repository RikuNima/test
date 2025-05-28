const laguFavorit = [
  ["Alive", "Ichinose LUPO", "7.8M", "908k", "Alive.jpg", "song (0).mp3","vocals : Kagamine Rin"],
  ["Hello, Sekai", "Deco*27", "11M", "5.9M", "Hello, Sekai.jpg", "song (1).mp3","vocals : Hatsune Miku"],
  ["Tell Your World", "Livetune", "4.8M", "1.5M", "Tell_YOur_World.jpg", "song (2).mp3","vocals : Hatsune Miku"],
];



const konten = document.getElementById("container");
let audioTerputar = null;

function togglePlay(i) {
  const audio = document.getElementById(`audio-${i}`);
  const btn = document.getElementById(`btn-${i}`);

  if (audio.paused) {
    // Pause audio lain dulu
    if (audioTerputar && audioTerputar !== audio) {
      audioTerputar.pause();
      audioTerputar.currentTime = 0;
      const prevBtn = document.getElementById(`btn-${audioTerputar.dataset.idx}`);
      if (prevBtn) prevBtn.textContent = "▶ Play";
    }

    audio.play();
    btn.textContent = "⏸ Pause";
    audioTerputar = audio;
  } else {
    audio.pause();
    btn.textContent = "▶ Play";
    audioTerputar = null;
  }
}

for (let i = 0; i < laguFavorit.length; i++) {
  const judul = laguFavorit[i][0];
  const penyanyi = laguFavorit[i][1];
  const view = laguFavorit[i][2];
  const like = laguFavorit[i][3];
  const gambar = laguFavorit[i][4];
  const audioFile = laguFavorit[i][5];
    const vocals = laguFavorit[i][6];

  const element = `
    <div class="lagu">
      <h2>${judul}</h2>
      <small class="blow">
        <i>Oleh ${penyanyi}</i><br>
        <i>${vocals}</i>
      </small>
      <img src="image/${gambar}" alt="${judul}">
      <audio id="audio-${i}" data-idx="${i}" src="audio/${audioFile}"></audio>
      <div class="controls">
        <button onclick="togglePlay(${i})" id="btn-${i}">▶ Play</button>
      </div>
      <div class="bawah">
        <div id="left"><i class="ph ph-play"></i>${view}</div>
        <div id="right"><i class="ph ph-heart"></i>${like}</div>
      </div>
    </div>
  `;

  konten.innerHTML += element;
}
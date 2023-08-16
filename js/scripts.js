// Associe os URLs dos vídeos aos quadros correspondentes
const videoURLs = {
  quadro1: 'videos/velha.mp4',
  quadro2: 'videos/filme.mp4',
  quadro3: 'videos/video3.mp4',
  // ... outros URLs ...
};

document.addEventListener('DOMContentLoaded', () => {
  const quadros = document.querySelectorAll('.quadro');

  quadros.forEach(quadro => {
    quadro.addEventListener('click', () => {
      const quadroID = quadro.classList[1];

      if (videoURLs[quadroID]) {
        const videoElement = document.createElement('video');
        videoElement.src = videoURLs[quadroID];
        videoElement.controls = true;
        videoElement.width = '100%';

        quadro.innerHTML = '';
        quadro.appendChild(videoElement);
      }
    });
  });
});

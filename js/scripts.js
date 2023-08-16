  const videos = [
    {
      title: "Somos Todos Iguais",
      src: "https://i.imgur.com/6k74YUm.mp4",
      thumbnail: "images/SomosTodosIguias.jpg"
    },
    {
      title: "Caça as Bruxas",
      src: "https://www.example.com/video2.mp4",
      thumbnail: "images/cacaBruxas.jpg"
    },
    {
      title: "Sem Limites",
      src: "https://www.example.com/video3.mp4",
      thumbnail: "images/semLimites.jpg"
    },
    {
      title: "Vídeo 4",
      src: "https://www.example.com/video4.mp4",
      thumbnail: "images/missao-impossivel-poste.jpg" // Substitua pela imagem do vídeo 4
    },
    {
      title: "Vídeo 5",
      src: "https://www.example.com/video5.mp4",
      thumbnail: "images/medio.jpg" // Substitua pela imagem do vídeo 5
    },
    {
      title: "Vídeo 6",
      src: "https://www.example.com/video6.mp4",
      thumbnail: "images/dungeons-e-dragons.jpg" // Substitua pela imagem do vídeo 6
    }
  ];

const gridContainer = document.querySelector('.grid-container');

videos.forEach(videoInfo => {
  const videoItem = document.createElement('div');
  videoItem.classList.add('grid-item');

  const thumbnail = document.createElement('img');
  thumbnail.src = videoInfo.thumbnail;
  thumbnail.classList.add('video-thumbnail');

  const titleElement = document.createElement('div');
  titleElement.classList.add('video-title');
  titleElement.textContent = videoInfo.title;

  const watchButton = document.createElement('button');
  watchButton.textContent = 'Assistir';
  watchButton.addEventListener('click', () => {
    videoItem.removeChild(thumbnail);
    videoItem.removeChild(titleElement);
    videoItem.removeChild(watchButton);

    const video = document.createElement('video');
    video.controls = true;
    video.classList.add('video-item');
    const source = document.createElement('source');
    source.src = videoInfo.src;
    source.type = 'video/mp4';
    video.appendChild(source);

    videoItem.appendChild(video);
    video.play();
  });

  videoItem.appendChild(thumbnail);
  videoItem.appendChild(titleElement);
  videoItem.appendChild(watchButton);
  gridContainer.appendChild(videoItem);
});
//////////////////////////////////////////////////////////////////////////////
//Tela de inicio

function validateAndLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert(`Email: ${email}\nSenha: ${password}`);
    window.location.href = "teste.html"; // Redireciona para a página index.html
  }
}

function register() {
  // Lógica de registro aqui
  window.location.href = "registro.html"; // Redireciona para a página de registro
}

const showPasswordCheckbox = document.getElementById("showPassword");
const passwordInput = document.getElementById("password");

showPasswordCheckbox.addEventListener("change", function () {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

/////////////////////////////////////////////////////////////////////////////

// Tela de registro

function validateAndRedirect() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const agreeTermsCheckbox = document.getElementById("agreeTerms");

  if (fullName === "" || email === "" || password === "" || !agreeTermsCheckbox.checked) {
    alert("Por favor, preencha todos os campos e aceite os termos.");
  } else {
    alert(`Nome Completo: ${fullName}\nEmail: ${email}\nSenha: ${password}`);
    window.location.href = "IndexInicio.html"; // Redireciona para a página IndexInicio.html
  }
}

//////////////////////////////////////////////////////////////////////////////

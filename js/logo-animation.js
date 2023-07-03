const words = ["LEINAD", "DANIEL"];
let currentWordIndex = 0;

function animateLogo() {
  const logo = document.querySelector(".logo");
  const currentWord = words[currentWordIndex];

  for (let i = 0; i < currentWord.length; i++) {
    setTimeout(() => {
      logo.textContent = currentWord.slice(0, i + 1);
    }, i * 199);
  }

  setTimeout(() => {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    animateLogo();
  }, currentWord.length * 100 + 1000);
}

animateLogo();

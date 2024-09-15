document.addEventListener("DOMContentLoaded", (event) => {
  const addButton = document.querySelector('button[type="submit"]');
  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.6 },
      duration: 7000,
    });
    setTimeout(() => {
      event.target.closest("form").submit();
    }, 500);
  });
});

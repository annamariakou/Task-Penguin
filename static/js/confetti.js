document.addEventListener("DOMContentLoaded", (event) => {
  const addButton = document.querySelector('button[type="submit"]');
  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      duration: 5000,
    });
    setTimeout(() => {
      event.target.closest("form").submit();
    }, 500);
  });
});

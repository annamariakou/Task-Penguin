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

  function addNumber() {
    console.log("addNumber function called");
    const numberContainer = document.getElementById("numberContainer");
    let currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;
    currentNumber += 1;
    numberContainer.textContent = currentNumber;

    localStorage.setItem("currentNumber", currentNumber);
  }

  function loadNumber() {
    const numberContainer = document.getElementById("numberContainer");
    let currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;
    numberContainer.textContent = currentNumber;
  }

  function addCheckboxListeners() {
    const checkboxes = document.querySelectorAll(".task-checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (event) => {
        event.preventDefault(); // Prevent the default form submission
        if (event.target.checked) {
          addNumber();
          setTimeout(() => {
            event.target.closest("form").submit(); // Submit the form after a short delay
          }, 100);
        }
      });
    });
  }

  loadNumber();

  addCheckboxListeners();

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      setTimeout(addCheckboxListeners, 100); // Delay to ensure checkboxes are rendered
    });
  });
});

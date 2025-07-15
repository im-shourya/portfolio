document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const popup = document.getElementById('popup');
  const okButton = document.getElementById('popup-ok');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    popup.classList.remove('hidden'); // Show popup
    form.reset(); // Optional: clear form fields
  });

  okButton.addEventListener('click', function () {
    popup.classList.add('hidden'); // Hide popup when OK clicked
  });
});
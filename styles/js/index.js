function updateCountdown() {
  const countdownEl = document.getElementById('countdown');
  const now = new Date();

  // Next Sunday 10:00 AM CST
  let nextSunday = new Date();
  nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
  nextSunday.setHours(10, 0, 0, 0); // 10:00 AM

  const diff = nextSunday - now;

  if (diff <= 0) {
    countdownEl.textContent = "Live now!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

 /* =========================
   HERO IMAGE CAROUSEL
========================= */

const slides = document.querySelectorAll('.slide');

if (slides.length > 0) {
  let currentIndex = 0;

  // Ensure first slide is visible
  slides[currentIndex].classList.add('active');

  function showNextSlide() {
    slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add('active');
  }

  setInterval(showNextSlide, 4000);
} else {
  console.warn("No hero slides found.");
}

  /* =========================
     OPTIONAL COUNTDOWN (SAFE)
     (won’t crash if missing)
  ========================= */
  const countdownEl = document.getElementById("countdown");

  if (countdownEl) {
    function updateCountdown() {
      const now = new Date();
      countdownEl.textContent = now.toLocaleTimeString(); // example
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

});

console.log('JS File is running')
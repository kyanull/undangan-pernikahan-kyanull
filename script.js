/* ===== COUNTDOWN TIMER ===== */
const weddingDate = new Date('2026-12-20T09:00:00+07:00').getTime();

const daysEl    = document.getElementById('days');
const hoursEl   = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
  const now      = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    daysEl.textContent    = '0';
    hoursEl.textContent   = '0';
    minutesEl.textContent = '0';
    secondsEl.textContent = '0';
    return;
  }

  const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent    = days;
  hoursEl.textContent   = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ===== RSVP FORM HANDLER ===== */
const rsvpForm = document.getElementById('rsvpForm');

rsvpForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const nama      = rsvpForm.nama.value.trim();
  const kehadiran = rsvpForm.kehadiran.value;
  const jumlah    = rsvpForm.jumlah.value || '-';
  const pesan     = rsvpForm.pesan.value.trim();

  if (!nama || !kehadiran) {
    alert('Mohon lengkapi nama dan konfirmasi kehadiran.');
    return;
  }

  // Simulasi kirim data
  console.log('RSVP Data:', { nama, kehadiran, jumlah, pesan });

  alert(`Terima kasih, ${nama}!\n\nKonfirmasi Anda: ${kehadiran}\nJumlah Tamu: ${jumlah}\n\nUcapan: ${pesan || '-'}`);

  // Reset form
  rsvpForm.reset();
});

/* ===== SCROLL ANIMATION (OPSIONAL) ===== */
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section, .event-card, .gift-card, .gallery img').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});
// JOBスライダー
document.querySelectorAll(".job_slider").forEach((slider) => {
  new Splide(slider, {
    autoplay: false,
    type: "loop",
    pauseOnHover: false,
    pauseOnFocus: false,
    interval: 2000,
    speed: 1000,
    perPage: 3,
    destroy: true,
    gap: 16,
    breakpoints: {
      640: {
        perPage: 1,
        padding: "10%",
        gap: 16,
      },
      1023: {
        perPage: 2,
        destroy: false,
        gap: 24,
      },
    },
  }).mount();
});

// 下からふわっと表示
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // 一度だけ発火
      }
    });
  }, {
    threshold: 0.2, // 少し見えた時点で発火
  });

  elements.forEach(el => observer.observe(el));
});

  // 追従ボタン
document.addEventListener('DOMContentLoaded', () => {
  const fixedButton = document.getElementById('fixedCv');
  
  const showButtonAt = window.innerHeight * 3;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > showButtonAt) {
      fixedButton.classList.remove('hidden');
    } else {
      fixedButton.classList.add('hidden');
    }
  });
});
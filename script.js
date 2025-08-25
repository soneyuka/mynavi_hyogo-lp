// JOBスライダー
document.querySelectorAll(".job_slider").forEach((slider) => {
  new Splide(slider, {
    autoplay: false,
    type: "slide",
    pauseOnHover: false,
    pauseOnFocus: false,
    interval: 2000,
    speed: 800,
    perPage: 3,
    destroy: true,
    gap: 8,
    breakpoints: {
      640: {
        perPage: 1,
        fixedWidth: '95%',
        padding: {
          right: '5%',
        },
      },
      1023: {
        perPage: 2,
        destroy: false,
        fixedWidth: '50%',
        padding: {
          right: '10%',
        },
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

    // スクロール量が基準を超えたら、opacityとpointer-eventsを変更
    if (scrollPosition > showButtonAt) {
      fixedButton.style.opacity = '1';
      fixedButton.style.pointerEvents = 'auto';
    } else {
      fixedButton.style.opacity = '0';
      fixedButton.style.pointerEvents = 'none';
    }
  });
});
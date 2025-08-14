$(function () {
  const banner = document.querySelector('.banner-wrapper');
  let current = 0;

  setInterval(() => {
    current = (current + 1) % 2;
    banner.style.transform = `translateX(-${current * 50}%)`;
    banner.style.transition = 'transform 0.5s';
  }, 3000);
});

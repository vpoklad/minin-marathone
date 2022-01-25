const butnUp = document.querySelector('.up-button');
const butnDown = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlider = document.querySelector('.main-slide');
const container = document.querySelector('.container');

const count = mainSlider.querySelectorAll('div').length;

sidebar.style.top = `-${(count - 1) * 100}vh`;
let activeSlideIndex = 0;

butnUp.addEventListener('click', () => {
  scrollSlide('up');
});
butnDown.addEventListener('click', () => {
  scrollSlide('down');
});

function scrollSlide(dir) {
  if (dir === 'up') {
    activeSlideIndex += 1;
    if (activeSlideIndex === count) {
      activeSlideIndex = 0;
    }
  } else if (dir === 'down') {
    activeSlideIndex -= 1;
    if (activeSlideIndex < 0) {
      activeSlideIndex = count - 1;
    }
  }
  const height = container.clientHeight;
  mainSlider.style.transform = `translateY(-${height * activeSlideIndex}px)`;
  sidebar.style.transform = `translateY(${height * activeSlideIndex}px)`;
}

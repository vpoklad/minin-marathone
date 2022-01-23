const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearClass(slides);
    slide.classList.add('active');
  });
}

function clearClass(slides) {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
}

/* Индекс слайда по умолчанию */

let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/* Основная функция слайдера */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('item');
  let dots = document.getElementsByClassName('slider-dots_item');
  let value = sel.options[sel.selectedIndex].value;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    // if (value === 'binco' && n > 0 && n <= 3) {
    //   slides[i].style.display = 'none';
    // } else if (value === 'westfield' && n > 3 && n <= 6) {
    //   slides[i].style.display = 'none';
    // } else if (value === 'grove' && n > 6 && n <= 9) {
    //   slides[i].style.display = 'none';
    // } else if (value === 'college' && n > 9 && n <= 12) {
    //   slides[i].style.display = 'none';
    // } else if (value === 'medical' && n > 12 && n <= 13) {
    //   slides[i].style.display = 'none';
    // } else if (value === 'lounge' && n > 13 && n <= 16) {
    //   slides[i].style.display = 'none';
    // }
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

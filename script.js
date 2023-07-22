const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselInner = document.querySelector('.carousel-inner');
const plus = document.querySelectorAll('.plus')
const minus = document.querySelectorAll('.minus')
const active = document.querySelectorAll('.active')


document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const name = document.getElementById("ФИО").value;
  const email = document.getElementById("номер").value;
  const message = document.getElementById("количество").value;

  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert("Заполните пожалуйства все поля для отправки данных!");
    return;
  }

  this.submit();
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-inner img');
console.log(slides.length);

function showSlide() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function clickPlus(index) {
  plus[index].style.display = 'none'
  minus[index].style.display = 'block'
  active[index].style.display = 'block'
}

function clickClose(index) {
  plus[index].style.display = 'block'
  minus[index].style.display = 'none'
  active[index].style.display = 'none'
}

plus.forEach((item, index) => {
  item.addEventListener('click', () => clickPlus(index))
})
minus.forEach((item, index) => {
  item.addEventListener('click', () => clickClose(index))
})
showSlide();

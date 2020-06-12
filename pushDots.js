let leftArrow = document.querySelector(".prev"),
   rightArrow = document.querySelector(".next"),
   dotsContener = document.querySelector(".slider-contener-dots"),
   sliderItem = document.querySelector('.slider-item'),
   sliderImg = document.querySelector('.slider-img'),
   sliderIndex = 1,
   sliderArr = [],
   x = sliderArr.length;
sliderArr.push('https://avatars.mds.yandex.net/get-pdb/1895087/0089c01d-ca15-4988-be55-0431946f7a91/s1200?webp=false')
sliderArr.push('https://chance2.ru/photo/img/egipetskii-mau-koshka-foto-i-tsena-14.jpg')
sliderArr.push('https://www.my-sfinks.ru/photo/img/leopardovyi-sfinks-foto-36.jpg')
sliderArr.push('https://i2.zoo-bazar.com/imax/215896cf2fa50ad05bf4d9e09363a270.jpg')
sliderArr.push('https://f.vividscreen.info/soft/6878118f123a17b790b92be87aa00039/Cats-Look-480x320.jpg')
sliderArr.push('https://chance2.ru/photo/img/nevskaia-karnavalnaia-koshka-foto-13.jpg')
sliderArr.push('https://namobilu.com/u/img/ib/153/064/64153-1.jpg')

//c 15-22 создаю точки под слайдером и нахожу их в DOM
for (; x < sliderArr.length; x++) {
   let z = document.createElement('div');
   z.classList.add('dots');
   dotsContener.prepend(z); // вставить в начало <div class="slider-contener-dots"> 
}
let dots = document.querySelectorAll('.dots');

//задаем первую отображаемую картинку
sliderImg.src = sliderArr[sliderIndex];

leftArrow.addEventListener('click', () => nextSlider(-1));
rightArrow.addEventListener('click', () => nextSlider(1));
//проверяем что в точке нажатия должен быть класс dots и круг цикла должен совпадать с порядковым номером точки
dotsContener.addEventListener('click', (event) => {
   for (let i = 0; i < dots.length; i++) {
      if (event.target.classList.contains('dots') && event.target == dots[i]) {
         currentSlider(i);
      }
   }
})

// переключение слайдера
function nextSlider(n) {
   showSliderItem(sliderIndex += n);  
}
//выбор слайдера по точке
function currentSlider(n) {
   showSliderItem(sliderIndex = n);
}
//функция получяет индекс массива откуда в src вставляем картинки, если индекс меньше 0, то задаем его размером массива-1. И если больше...
function showSliderItem(n) {   
   if (sliderIndex > sliderArr.length - 1) {
      sliderIndex = 0;
   } else if (sliderIndex < 0) {
      sliderIndex = sliderArr.length - 1;
   }
   
   sliderItem.classList.add('show');         // добавление и удаление класса для проигрывания анимации CSS
   setTimeout(() => {
      sliderItem.classList.remove('show');
   }, 500); 

   sliderImg.src = sliderArr[sliderIndex];   
   dots.forEach((elem) => elem.classList.remove('dotsSelected'));//на всех точках удаляем класс
   dots[sliderIndex].classList.add('dotsSelected');// на точке под индексом добавляем класс
}

//переключаем картинки каждые 5сек
// setInterval(() => {
//    sliderIndex++;
//    showSliderItem(sliderIndex);
// }, 5000);


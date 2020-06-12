let leftArrow = document.querySelector(".prev"),
    rightArrow = document.querySelector(".next"),
    dotsContener = document.querySelector(".slider-contener-dots"),
    dots = document.querySelectorAll('.dots'),
    sliderImg = document.querySelector('.slider-img'),
    sliderIndex = 1;
    sliderArr = [];
sliderArr.push('https://avatars.mds.yandex.net/get-pdb/1895087/0089c01d-ca15-4988-be55-0431946f7a91/s1200?webp=false')
sliderArr.push('https://chance2.ru/photo/img/egipetskii-mau-koshka-foto-i-tsena-14.jpg')
sliderArr.push('https://www.my-sfinks.ru/photo/img/leopardovyi-sfinks-foto-36.jpg')
sliderArr.push('https://i2.zoo-bazar.com/imax/215896cf2fa50ad05bf4d9e09363a270.jpg')
sliderImg.src = sliderArr[sliderIndex];

leftArrow.addEventListener('click', ()=>nextSlider(-1));
rightArrow.addEventListener('click', ()=>nextSlider(1));
dotsContener.addEventListener('click', (event)=>{
   for (let i = 0; i < dots.length; i++) {
      if(event.target.classList.contains('dots') && event.target == dots[i]){
         currentSlider(i);
      }
      
   }
})


function nextSlider(n) {  
   showSliderItem(sliderIndex += n);   
}
function currentSlider(n) {
   showSliderItem(sliderIndex = n);
}
function showSliderItem(n) {
   if (sliderIndex > sliderArr.length-1) {
      sliderIndex = 0;
   } else if (sliderIndex < 0){
      sliderIndex = sliderArr.length-1;
   }
   sliderImg.src = sliderArr[sliderIndex];

   dots.forEach((elem)=>elem.classList.remove('dotsSelected'));
   dots[sliderIndex].classList.add('dotsSelected');
}


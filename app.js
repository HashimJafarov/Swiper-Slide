const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const swiper = document.querySelector(".swiper");
const swiperSlides = document.querySelectorAll(".swiper_slide");
const slideWidth = swiperSlides[0].offsetWidth;
let active = 0;
const moveSlider = (active) => {
  console.log(active);
  const position = -active * 880;
  console.log(position);
  swiperSlides[active].style.transform = `translateX(${position}px)`;
};
nextBtn.addEventListener("click", () => {
  active++;
  if (active >= swiperSlides.length) {
    active = 0;
  }
  moveSlider(active);

  //   swiperSlide[active].style.transform = "translateX(-105.5%)";
  //   swiperSlide[active].classList.remove("show");
  //   active++;
  //   if (active > swiperSlide.length - 1) {
  //     active = 0;
  //   }

  //   swiperSlide[active].style.transform = "translateX(-105.5%)";
  //   swiperSlide[active].classList.add("show");
});
prevBtn.addEventListener("click", () => {
  if (active > 0) {
    active--;
    moveSlider(active);
  } else {
    // Wrap around to the last slide when at the first slide
    active = swiperSlides.length - 1;
    moveSlider(active);
  }

  //   swiperSlide[active].classList.remove("show");
  //   active--;
  //   if (active < 0) {
  //     active = swiperSlide.length - 1;
  //   }
  //   swiperSlide[active].classList.add("show");
});

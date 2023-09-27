import createPagination from "./modules/paginate.js";
import autoPlay from "./modules/autoplay.js";
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const swiperSlides = document.querySelectorAll(".swiper_slide");
const pagination = document.querySelector(".pagination");
let active = 0;
autoPlay(swiperSlides, active);
const getPage = (index) => {
  swiperSlides[active]?.classList?.remove("show");
  active = index;
  swiperSlides[active].classList.add("show");
};
createPagination(swiperSlides, pagination, getPage, active);
nextBtn.addEventListener("click", () => {
  swiperSlides[active].classList.remove("show");
  active++;
  if (active > swiperSlides.length - 1) {
    active = 0;
  }
  swiperSlides[active].classList.add("show");
});
prevBtn.addEventListener("click", () => {
  swiperSlides[active]?.classList?.remove("show");
  active--;
  if (active < 0) {
    active = swiperSlides.length - 1;
  }
  swiperSlides[active].classList.add("show");
});

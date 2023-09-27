const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const swiperSlides = document.querySelectorAll(".swiper_slide");
const pagination = document.querySelector(".pagination");
let active = 0;

const createPagination = () => {
  [...swiperSlides].map((slider, index) => {
    const page = index + 1;
    pagination.innerHTML += `<li onclick=getPage(${index})>${page}</li>`;
  });
};
createPagination();
const getPage = (page) => {
  swiperSlides[active].classList.remove("show");
  active = page;
  swiperSlides[active].classList.add("show");
};
nextBtn.addEventListener("click", () => {
  swiperSlides[active].classList.remove("show");
  active++;
  if (active > swiperSlides.length - 1) {
    active = 0;
  }
  swiperSlides[active].classList.add("show");
});
prevBtn.addEventListener("click", () => {
  swiperSlides[active].classList.remove("show");
  active--;
  if (active < 0) {
    active = swiperSlides.length - 1;
  }
  swiperSlides[active].classList.add("show");
});

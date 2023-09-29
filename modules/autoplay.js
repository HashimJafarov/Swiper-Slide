const autoPlay = (swiperSlides, active) => {
  setInterval(() => {
    document
      .querySelectorAll(".pagination li")
      [active].classList.remove("active");
    swiperSlides[active].classList.remove("show");
    active++;
    if (active > swiperSlides.length - 1) {
      active = 0;
    }
    swiperSlides[active].classList.add("show");
    document.querySelectorAll(".pagination li")[active].classList.add("active");
  }, 4000);
};
export default autoPlay;

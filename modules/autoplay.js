const autoPlay = (swiperSlides, active) => {
  setInterval(() => {
    swiperSlides[active].classList.remove("show");
    active++;
    if (active > swiperSlides.length - 1) {
      active = 0;
    }
    swiperSlides[active].classList.add("show");
    console.log(active);
  }, 10000);
};
export default autoPlay;

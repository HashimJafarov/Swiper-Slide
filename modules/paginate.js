const createPagination = (swiperSlides, pagination, getPage) => {
  [...swiperSlides].map((slider, index) => {
    const page = index + 1;
    // pagination.innerHTML += `<li onclick=getPage(${index})>${page}</li>`;
    const liElement = document.createElement("li");
    if (index === 0) liElement.classList.add("active");
    liElement.textContent = page;
    liElement.addEventListener("click", () => {
      document.querySelector(".active")?.classList?.remove("active");
      getPage(index, liElement);

      liElement.classList.add("active");
    });
    pagination.append(liElement);
  });
};

export default createPagination;

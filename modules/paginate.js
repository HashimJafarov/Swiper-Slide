const createPagination = (swiperSlides, pagination, getPage, active) => {
  [...swiperSlides].map((slider, index) => {
    const page = index + 1;
    // pagination.innerHTML += `<li onclick=getPage(${index})>${page}</li>`;
    const liElement = document.createElement("li");
    liElement.textContent = page;
    liElement.addEventListener("click", () => {
      getPage(index, liElement);
    });
    pagination.append(liElement);
  });
};

export default createPagination;

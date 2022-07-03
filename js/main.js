document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header-nav");
  const sliders = document.querySelectorAll(".choice-swiper");
  const links = document.querySelectorAll(".header__link");
  const tabContainer = document.querySelectorAll(".choice__descr");
  const tabLinks = document.querySelectorAll(".choice__descr__btn");
  const tabsContent = document.querySelectorAll(".choice__desc__item");

  if (tabContainer) {
    tabContainer.forEach((container) => {
      container.addEventListener("click", (e) => {
        if (e.target.classList.contains("choice__descr__btn")) {
          const tabPath = e.target.dataset.target;
          const parent = e.target.parentNode.parentNode;
          tabsHandler(tabPath, parent);
        }
      });
    });
  }

  const tabsHandler = (path, parent) => {
      parent.querySelectorAll(".choice__descr__btn").forEach((tabLink) => {
        tabLink.classList.remove("active");
      });

      parent.querySelectorAll(".choice__desc__item").forEach((item) => {
        item.classList.remove("active");
      });

      document.querySelector(`[data-target="${path}"]`).classList.add("active");
      document.querySelector(`[data-path="${path}"]`).classList.add("active");
  };

  links.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      menu.classList.remove("active");
    });
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  sliders.forEach((value) => {
    const choiceSwiperNav = new Swiper(
      value.querySelector(".choice-slider-nav"),
      {
        loop: true,
        freeMode: true,
        slidesPerView: 5,
        loopedSlides: 5,
        direction: "horizontal",
      }
    );

    const choiceSwiper = new Swiper(value.querySelector(".choice-slider"), {
      loop: true,
      slidesPerView: 1,
      loopedSlides: 5,
      clickable: true,
      direction: "horizontal",
      navigation: {
        nextEl: value.querySelector(".swiper-button-next"),
        prevEl: value.querySelector(".swiper-button-prev"),
      },
      thumbs: {
        swiper: choiceSwiperNav,
      },
    });
  });
});

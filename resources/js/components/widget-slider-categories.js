import { tns } from "tiny-slider";

const widgetRedactionalSliderImages = document.querySelectorAll(".widget-slider-categories .slider .slide");

if (widgetRedactionalSliderImages.length > 0) {
  const sliders = document.querySelectorAll(".widget-slider-categories .slider");

  if (sliders.length > 0) {
    sliders.forEach(container => {
      if (container.querySelectorAll(".slide").length > 1) {
        tns({
          container: container,
          items: 1,
          loop: true,
          controls: true,
          controlsContainer: container.parentElement.querySelector(".slider-navigation"),
          nav: false,
          autoplayButtonOutput: false,
          swipeAngle: false,
          mouseDrag: true,
          speed: 600,
          responsive: {
            640: {
              items: 2,
            },
            1024: {
              items: 4,
            },
          },
        });
      }
    });
  }
}

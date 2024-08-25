const swiper = new Swiper(".portfolio__cards-wrap", {
  // configure Swiper to use modules
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    960: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
})

// Установка default громкости
var myPlayer = videojs("video")

myPlayer.src({
  type: "video/youtube",
  src: "https://youtu.be/AJFkU1bC3C0&autoplay=0",
})
myPlayer.ready(function () {
  var howLoudIsIt = myPlayer.volume()
  myPlayer.volume(0.2)
})

// Phone mask
mask("[data-tel-input]")

const phoneInputs = document.querySelectorAll("[data-tel-input]")
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = ""
  })
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = ""
  })
})

const swiper = new Swiper(".portfolio__cards-wrap", {
  // Navigation arrows
  navigation: {
    nextEl: ".portfolio__button--next",
    prevEl: ".portfolio__button--prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 320px
    250: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    420: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    829: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
})

const swiperReviews = new Swiper(".clients-reviews__swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".clients-reviews__button--next",
    prevEl: ".clients-reviews__button--prev",
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

// Add smooth mouse scroll
const scrollBtn = document.querySelector(".footer__go-top-btn")
const benefitsSection = document.getElementById("header__nav")
scrollBtn.onclick = function () {
  benefitsSection.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  })
}

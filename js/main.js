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

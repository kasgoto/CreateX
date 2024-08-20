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

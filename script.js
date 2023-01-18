setInterval(setClock, 1000);

var hours = document.querySelector("div.hour");
var minutes = document.querySelector("div.minute");
var seconds = document.querySelector("div.second");

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(seconds, secondsRatio)
  setRotation(minutes, minutesRatio)
  setRotation(hours, hoursRatio)
}

function setRotation(element, rotationRatio) {

element.style.setProperty('--rotation', rotationRatio * 360)

}

setClock();

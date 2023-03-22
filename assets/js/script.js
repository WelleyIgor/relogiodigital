const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const quadrante1 = document.querySelector(".numero1");
const quadrante2 = document.querySelector(".numero2");
const quadrante3 = document.querySelector(".numero3");
const relogioStyle = document.querySelector(".shadow-relogio");
const body = document.body;

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hour = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  horas.textContent = hour;
  minutos.textContent = min;
  segundos.textContent = sec;
  // tema noturno
  if (dateToday.getHours() >= 18 || dateToday.getHours() < 6) {
    relogioStyle.style.boxShadow = "0px 8px 10px rgba(255, 255, 255, .5)";
    quadrante1.style.background = "#EEEEEE";
    quadrante1.style.color = "black";
    quadrante2.style.background = "#EEEEEE";
    quadrante2.style.color = "black";
    quadrante3.style.background = "#EEEEEE";
    quadrante3.style.color = "black";
    document.body.style.backgroundImage =
      "linear-gradient(to bottom, #15133c, #00092c)";
  }
});

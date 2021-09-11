let countDownDate = new Date("Oct 30, 2021 19:00:00").getTime()

let x = setInterval(() => {
  let now = new Date().getTime()
  let distance = countDownDate - now

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector('.days').innerHTML = `${days} dias`
  document.querySelector('.hours').innerHTML = `${hours} horas`
  document.querySelector('.minutes').innerHTML = `${minutes} minutos`
  document.querySelector('.seconds').innerHTML = `${seconds} segundos`

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".time").innerHTML = "Hora da comemoração!!!";
  }

}, 1000)

let form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
  // e.preventDefault()
})
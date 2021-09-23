<script>
  let days
  let hours
  let minutes
  let seconds
  let distance
  let countDownDate = new Date("Oct 30, 2021 19:00:00").getTime()
  
  setInterval(() => {
    let now = new Date().getTime()
    distance = countDownDate - now

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

  }, 1000)

</script>

<p>
  {#if distance < 0}
    <h3>Hora da comemoração!!!</h3>
  {:else}
    Faltam
    <br />{days} dias, {hours} horas, <br />
    {minutes} minutos e {seconds} segundos
  {/if}
</p>

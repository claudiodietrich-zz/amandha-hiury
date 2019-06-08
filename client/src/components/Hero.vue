<template>
  <section id="hero" class="hero has-text-centered parallax">
    <div class="parallax-curtain">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Amandha e Hiury
          </h1>
          <h2 class="subtitle">
            {{ countdownTimer }}
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import countdown from 'countdown'

countdown.setLabels(' milissegundo| seg| min| h| dia| semana| mês| ano| década| século| milênio', ' milissegundos| seg| min| h| dias| semanas| meses| anos| décadas| séculos| milênios', ' e ', ', ', 'agora')

export default {
  data () {
    return {
      countdownTimer: ''
    }
  },
  created () {
    this.countdownTimer = countdown(new Date('July 20 2019 19:00')).toString()

    setInterval(() => {
      this.countdownTimer = countdown(new Date('July 20 2019 19:00')).toString()
    }, 1000)
  }
}
</script>

<style scoped>
.title {
  font-size: 5rem !important;
  color: white;
}

.subtitle {
  font-size: 1.5rem !important;
  color: white
}

.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/hero/background.jpg');
}

.parallax-curtain{
  height:100vh;
  background:rgba(0, 0, 0, 0.5);
}
</style>

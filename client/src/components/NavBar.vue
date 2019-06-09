<template>
  <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
    <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="#hero" v-smooth-scroll="{ duration: 1000 }">
        Amandha e Hiury
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <a href="#enfim-o-felizes-para-sempre" class="navbar-item" v-smooth-scroll="{ duration: 1000 }">
          Enfim, o "felizes para sempre"!
        </a>

        <a href="#os-noivos" class="navbar-item" v-smooth-scroll="{ duration: 1000 }">
          Os noivos
        </a>

        <a href="#como-tudo-aconteceu" class="navbar-item" v-smooth-scroll="{ duration: 1000 }">
          Como tudo aconteceu
        </a>

        <a href="#aos-padrinhos-e-madrinhas" class="navbar-item" v-smooth-scroll="{ duration: 1000 }">
          Aos Padrinhos e Madrinhas
        </a>

        <a href="#o-grande-dia" class="navbar-item" v-smooth-scroll="{ duration: 1000 }">
          O grande dia!
        </a>

        <a href="#rsvp" class="navbar-item" v-smooth-scroll="{ duration: 1000 }">
          R.S.V.P
        </a>

        <a href="#mensagens" class="navbar-item" v-smooth-scroll="{ duration: 1000 }">
          Mensagens
        </a>

        <a href="#presenteie-os-noivos" class="navbar-item" v-smooth-scroll="{ duration: 1000 }">
          Presenteie os Noivos
        </a>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>
export default {

}

document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target
        const $target = document.getElementById(target)

        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
</script>

<style scoped>
.navbar-brand {
  font-family: 'Sacramento', cursive !important;
  font-weight: 400 !important;
}
</style>

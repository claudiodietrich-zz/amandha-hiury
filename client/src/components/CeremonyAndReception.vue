<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <figure class="image is-96x96 has-image-centered">
            <img src="../assets/ceremony-and-reception/just-married.svg">
          </figure>

          <h1 class="title is-size-1 has-text-centered">
            O grande dia!
          </h1>

          <div class="columns">
            <div class="column" v-for="event in events" v-bind:key="event.name">
              <figure class="image is-96x96 has-image-centered">
                <img v-bind:src="event.img">
              </figure>
              <h1 class="title is-size-1 has-text-centered">
                {{ event.name }}
              </h1>

              <p class="is-size-5">
                {{ event.text }}
              </p>

              <div class="address is-size-5">
                <a v-bind:href="event.addressLink" target="_blank">
                  <figure class="image is-24x24 has-image-centered" style="float:left; margin-right: 10px;">
                    <img src="../assets/ceremony-and-reception/wedding-location.svg">
                  </figure>

                  <p class="">
                    {{ event.address }}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      events: [
        {
          img: require('@/assets/ceremony-and-reception/church.svg'),
          name: 'Cerimônia',
          text: 'Os noivos esperam por você para a cerimônia religiosa, que acontecerá no Paróquia Nossa Senhora do Loreto',
          address: 'Ladeira da Freguesia, 375 - Freguesia (Jacarepaguá), Rio de Janeiro - RJ',
          addressLink: 'https://www.google.com/maps/place/Par%C3%B3quia+e+Santu%C3%A1rio+Nossa+Senhora+de+Loreto/@-22.9399015,-43.3468963,17z/data=!3m1!4b1!4m5!3m4!1s0x9bd836bb1d632d:0x595493591fbd74e8!8m2!3d-22.9399065!4d-43.3447076'
        },
        {
          img: require('@/assets/ceremony-and-reception/drinking.svg'),
          name: 'Recepção',
          text: 'Após a cerimônia, os noivos receberão os cumprimentos na Casa de festas Espaço Celebrare',
          address: 'Rua Luiz Beltrão, 714 - Vila Valqueire, Rio de Janeiro - RJ',
          addressLink: 'https://www.google.com/maps/place/Espaco+Celebrare/@-22.8890802,-43.3626744,15z/data=!4m5!3m4!1s0x0:0x693004d5a0647080!8m2!3d-22.8890802!4d-43.3626744'
        }
      ]
    }
  }
}
</script>

<style>
.address {
  margin-top: 1em !important;
}
</style>
